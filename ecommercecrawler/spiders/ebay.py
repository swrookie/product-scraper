import scrapy


class EbaySpider(scrapy.Spider):
    name = 'ebay'
    allowed_domains = ['ebay.com']
    start_urls = ['http://ebay.aution.co.kr/']

    def parse(self, response):
        pass
