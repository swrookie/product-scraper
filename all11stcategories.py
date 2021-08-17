from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from bs4 import BeautifulSoup
import requests

import selenium

URL = "https://www.11st.co.kr/main"

def run():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument("--single-process")
    chrome_options.add_argument("--disable-dev-shm-usage")
    driver = webdriver.Chrome(executable_path="../shoppingcrawler/chromedriver", options=chrome_options)
    driver.get(url=URL)
    print(driver.current_url)

    category_button = driver.find_element_by_xpath(xpath="//*[@id='gnb']/div[2]/div[1]/div/div[5]/button")
    ActionChains(driver).click(category_button).perform()
    driver.find_element_by_xpath(xpath="//*[@id='gnbCategory']/div/div[1]/div[1]")

    html = driver.page_source

    soup = BeautifulSoup(html, "html-parser")
    print(soup.text)

    driver.close()

if __name__ == "__main__":
    run()