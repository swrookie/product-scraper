import pandas as pd
from IPython.display import display
from scrapy.crawler import CrawlerProcess

from ecommercecrawler.spiders.kakaoshopping import KakaoshoppingSpider
from ecommercecrawler.spiders.navershopping import NavershoppingSpider

if __name__ == "__main__":
    data = {"messagetype": ["pp", "a", "pm"], "tags": ["신발", "코트", "셔츠"]}
    df = pd.DataFrame(data=data)
    display(df)
    tags_list = df["tags"].tolist()
    process = CrawlerProcess(settings={"FEED_URI": "navershopping_product_match.csv", "FEED_FORMAT": "csv"})
    process.crawl(NavershoppingSpider, tags_list)
    process.start()
