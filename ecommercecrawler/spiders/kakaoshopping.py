import scrapy


class KakaoshoppingSpider(scrapy.Spider):
    name = 'kakaoshopping'
    allowed_domains = ['shoppinghow.kakao.com']
    start_urls = ['http://shoppinghow.kakao.com/']

    def parse(self, response):
        pass
