from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import time

def get_reddit_comments(query):
    comments = ""

    chrome_options = Options()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")

    service = Service(executable_path="chromedriver.exe")
    driver = webdriver.Chrome(service=service, options=chrome_options)

    query = query.replace(" ", "+")
    link = "https://www.reddit.com/r/LegalAdviceIndia/search/?q=" + query
    driver.get(link)

    try:
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".absolute.inset-0"))
        )
        posts = driver.find_elements(By.CSS_SELECTOR, ".absolute.inset-0")
    except:
        return comments

    for i in range(min(len(posts), 5)):
        WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, ".absolute.inset-0"))
        )
        posts = driver.find_elements(By.CSS_SELECTOR, ".absolute.inset-0")
        posts[i].click()

        try:
            WebDriverWait(driver, 5).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "#-post-rtjson-content p"))
            )
            paragraphs = driver.find_elements(By.CSS_SELECTOR, "#-post-rtjson-content p")
            for paragraph in paragraphs:
                comments += paragraph.text + '\n'
        except:
            pass
        
        driver.back()

    driver.quit()
    return comments