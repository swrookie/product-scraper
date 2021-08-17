import scrapy


class GmarketSpider(scrapy.Spider):
    name = 'gmarket'
    allowed_domains = ['gmarket.co.kr']
    start_urls = ['http://gmarket.co.kr/']

    def parse(self, response):
        pass
