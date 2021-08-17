import scrapy


class A11stSpider(scrapy.Spider):
    name = '11st'
    allowed_domains = ['11st.co.kr']
    start_urls = ['http://11st.co.kr/']

    def parse(self, response):
        pass
