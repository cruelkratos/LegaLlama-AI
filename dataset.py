from dotenv import load_dotenv
from mira_sdk import MiraClient
import os

load_dotenv()
client = MiraClient(config={"API_KEY": os.getenv("MIRA_API_KEY")})

# Create dataset
# client.dataset.create("fuqu/legal", "Optional description")

# Add file to your dataset
# client.dataset.add_source("fuqu/legal", file_path="data/Constitution.pdf")
# client.dataset.add_source("fuqu/legal", file_path="data/Civil.pdf")
# client.dataset.add_source("fuqu/legal", file_path="data/CRPC.pdf")
# client.dataset.add_source("fuqu/legal", file_path="data/IPC.pdf")