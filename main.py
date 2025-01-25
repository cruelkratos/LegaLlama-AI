from dotenv import load_dotenv
from mira_sdk import MiraClient, Flow , CompoundFlow, ComposioConfig
from scraper import get_reddit_comments
import requests
import os
import PyPDF2
import praw

def legal_analysis_for_file(query, pdf_filepath):
    try:
        # Open and read the PDF file
        with open(pdf_filepath, 'rb') as file:
            reader = PyPDF2.PdfReader(file)  # Use 'file' instead of pdf_filepath directly
            text = ''
            for page_num in range(len(reader.pages)):
                page = reader.pages[page_num]
                text += page.extract_text()

    except FileNotFoundError:
        raise FileNotFoundError(f"The file at {pdf_filepath} was not found.")
    except Exception as e:
        raise Exception(f"Error occurred while reading the PDF file: {e}")

    try:
        # Load environment variables for API key
        load_dotenv()

        # Check if API key is set
        api_key = os.getenv("MIRA_API_KEY")
        if not api_key:
            raise ValueError("API_KEY is not set in the environment variables.")
        
        # Initialize MiraClient
        client = MiraClient(config={"API_KEY": api_key})

        # Create the flow from the YAML file
        flow = CompoundFlow(source="flows\\pdf_flow.yaml")

        # Prepare input data for the flow
        input_data = {"input1": query, "input2": text}
        
        # Call the Mira API to get the result
        result = client.flow.test(flow, input_data)
        llm_response = result['flow_a']
        return llm_response

    except ValueError as e:
        return "Error in MIRA API, Retry"
    except Exception as e:
        return "Error in MIRA API, Retry"

def legal_analysis_for_query(query):
    try:
        # Load environment variables
        load_dotenv()
        api_key = os.getenv("MIRA_API_KEY")
        if not api_key:
            raise ValueError("API_KEY is not set in the environment variables.")
        
        # Initialize MiraClient
        client = MiraClient(config={"API_KEY": api_key})

        # Load the flow
        flow = CompoundFlow(source="flows\\query_flow.yaml")

        # Prepare input data
        input_data = {"input1": query, "input2": get_reddit_comments(query)}  # Assume get_reddit_comments() is defined elsewhere

        # Call the Mira API
        result = client.flow.test(flow, input_data)

        # Extract results from the flow
        llm_response = result['flow_a']
        reddit_comments = result['flow_b']

        return llm_response, reddit_comments

    except ValueError as e:
        return "Error in MIRA API, Retry", "Error in MIRA API, Retry" 
    except Exception as e:
        return "Error in MIRA API, Retry", "Error in MIRA API, Retry" 
    
def get_title_and_desc(query):
    try:
        load_dotenv()
        client = MiraClient(config={"API_KEY": os.getenv("MIRA_API_KEY")})

        flow = CompoundFlow(source="flows\post_flow.yaml")

        version = "0.0.1"
        input_data = {"input1": query}

        result = client.flow.test(flow, input_data)

        title = result['flow_a']
        desc = result['flow_b']

        return title, desc

    except ValueError as e:
        return "Error in MIRA API, Retry", "Error in MIRA API, Retry" 
    except Exception as e:
        return "Error in MIRA API, Retry", "Error in MIRA API, Retry" 

def reddit_post(query):
    load_dotenv()
    CLIENT_ID = os.getenv("CLIENT_ID")
    SECRET_ID = os.getenv("SECRET_KEY")
    auth = requests.auth.HTTPBasicAuth(CLIENT_ID, SECRET_ID)
    USERNAME = os.getenv("R_USERNAME")
    PASSWORD = os.getenv("R_PASSWORD")
    SUBREDDIT = "test"

    title, desc = get_title_and_desc(query)

    if title == "Error in MIRA API, Retry":
        return "Error in MIRA API, Retry"

    reddit = praw.Reddit(
        client_id = CLIENT_ID,
        client_secret = SECRET_ID,
        user_agent = 'test-api',
        username = USERNAME,
        password = PASSWORD
    )

    subreddit = reddit.subreddit(SUBREDDIT)
    submission = subreddit.submit(title=title, selftext=desc)

    return submission.url