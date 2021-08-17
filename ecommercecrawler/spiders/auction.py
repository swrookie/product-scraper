import scrapy


class AuctionSpider(scrapy.Spider):
    name = 'auction'
    allowed_domains = ['auction.co.kr']
    start_urls = ['http://auction.co.kr/']

    def parse(self, response):
        pass
