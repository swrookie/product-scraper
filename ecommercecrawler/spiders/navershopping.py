import json

import numpy as np
import pandas as pd
import scrapy
from IPython.display import display
from ecommercecrawler.items import EcommercecrawlerItem
from scrapy.crawler import CrawlerProcess

categories = []

"""
Spider that crawls through Naver Shopping
"""


class NavershoppingSpider(scrapy.Spider):
    name = "navershopping"
    allowed_domains = ["naver.com"]
    start_urls = ["https://shopping.naver.com/"]

    def __init__(self, tags: list = None):
        self.__search_url = "https://search.shopping.naver.com/search/all"
        self.__tags = tags

    def parse(self, response):
        for tag in self.__tags:
            formdata = {"query": tag}

            yield scrapy.FormRequest(url=self.__search_url, method="GET", formdata=formdata, callback=self.parse_search)

    def parse_search(self, response):
        text = response.css("script[id='__NEXT_DATA__']::text").extract()
        data = json.loads(text[0])
        products = data["props"]["pageProps"]["initialState"]["products"]["list"]
        product = products[0]["item"]
        print(product)
        item = EcommercecrawlerItem()
        name = product["productTitle"] if "productTitle" in product else np.NaN
        price = product["price"] if "price" in product else np.NaN
        image = product["imageUrl"] if "imageUrl" in product else np.NaN
        link = product["adcrUrl"] if "adcrUrl" in product else np.NaN
        category1Name = product["category1Name"] if "category1Name" in product else np.NaN
        category2Name = product["category2Name"] if "category2Name" in product else np.NaN
        category3Name = product["category3Name"] if "category3Name" in product else np.NaN
        category4Name = product["category4Name"] if "category4Name" in product else np.NaN
        item["name"] = name
        item["price"] = price
        item["image"] = image
        item["link"] = link
        item["category1Name"] = category1Name
        item["category2Name"] = category2Name
        item["category3Name"] = category3Name
        item["category4Name"] = category4Name

        yield item
