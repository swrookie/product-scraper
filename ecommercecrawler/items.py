# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy

"""
Item information to be crawled
"""


class EcommercecrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    name = scrapy.Field()
    price = scrapy.Field()
    image = scrapy.Field()
    link = scrapy.Field()
    category1Name = scrapy.Field()
    category2Name = scrapy.Field()
    category3Name = scrapy.Field()
    category4Name = scrapy.Field()
