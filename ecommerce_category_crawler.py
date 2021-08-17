from IPython.display import display
import json
import pandas as pd
import requests
import time

NAVERSHOPPING_CATEGORY_URL = "https://search.shopping.naver.com/api/category/"
KAKAOSHOPPING_CATEGORY_URL = "https://shoppinghow.kakao.com/v1.0/category.json"
AUCTION_CATEGORY_URL = "http://script.auction.co.kr/common/headercategoryinfo.js"
ELEVENSTREET_CATEGORY_URL = "https://www.11st.co.kr/main"
HEADERS = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36"


def search_category(categories: dict = None, apiaccess: bool = False):
    new_categories = []

    for category in categories:
        if category["catLvl"] == 1:
            print("deleting unnecessary keys")
            del category["catImg1"], category["catImg2"], category["catImg3"]

        if category["isLeaf"] is False:
            print("inner categories exists")
            if "categories" in category.keys():
                print("searching through pre-existing categories")
                search_category(category["categories"])
            else:
                print("searching through api categories")
                query = "".join(["?catId=", category["catId"]])
                req = requests.get(url="".join([NAVERSHOPPING_CATEGORY_URL, query]))
                time.sleep(5)
                inner_category = req.json()
                search_category(categories=inner_category, apiaccess=True)
        else:
            if apiaccess is True:
                new_categories.append(category)
            else:
                print("Leaf from no api access")
                print(category)

    return new_categories


def search_category2(category: dict):
    print("current cateogry is ", category)
    if category["isLeaf"]:
        return category
    else:
        new_categories = []
        if "categories" not in category:  # key exists
            query = "".join(["?catId=", category["catId"]])
            req = requests.get(url="".join([NAVERSHOPPING_CATEGORY_URL, query]))
            time.sleep(5)
            inner_categories = req.json()
        else:
            inner_categories = category["categories"]

        for inner_category in inner_categories:
            new_categories.append(search_category2(inner_category))
        category["categories"] = new_categories

        return category


def crawl_navershoppingcategory():
    headers = {"user-agent": HEADERS}
    req = requests.get(url=NAVERSHOPPING_CATEGORY_URL, headers=headers)
    categories = req.json()
    new_categories = []
    for category in categories:
        if category["catLvl"] == 1:
            del category["catImg1"], category["catImg2"], category["catImg3"]

        if category["isLeaf"] is False:
            new_categories.append(search_category2(category))

    with open("navershoppingcategory.json", "w", encoding="UTF-8") as file:
        file.write(json.dumps(new_categories, indent=4, ensure_ascii=False))


def crawl_kakaoshoppingcategory():
    headers = {"user-agent": HEADERS}
    req = requests.get(url=KAKAOSHOPPING_CATEGORY_URL, headers=headers)
    categories = req.json()
    print("start searching")
    start = time.time()

    with open("kakaoshoppingcategory.json", "w", encoding="UTF-8") as file:
        file.write(json.dumps(categories, indent=4, ensure_ascii=False))
    print("finish searching")
    finish = time.time()
    print("Took: ", (finish - start))


def run():
    print("start searching")
    start = time.time()
    crawl_navershoppingcategory()
    print("finish searching")
    finish = time.time()
    print("Took: ", (finish - start))


if __name__ == "__main__":
    run()
