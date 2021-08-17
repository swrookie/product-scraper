from IPython.display import display
import json
import pandas as pd
import requests
import time
import js2py

URL = "http://script.auction.co.kr/common/headercategoryinfo.js"
HEADERS = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"


def run():
    eval_res, tempfile = js2py.run_file("auctionCategory.js")
    js2py.translate_file("auctionCategory.js", "auctionCategory.py")
    print(eval_res)
    print(tempfile)

    # headers = {"user-agent": HEADERS}
    # req = requests.get(url=URL, headers=headers)
    # print(req.text)
    # categories = req.json()
    # print(categories)


if __name__ == "__main__":
    run()
