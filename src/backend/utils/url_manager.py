import re
from urllib.parse import urlparse, urlunparse, parse_qs
import jsonify
import cleanurl
import robotexclusionrulesparser

class UrlManager:
    def __init__(self, urls=None):
        self.urls = urls or []
        self.clean_urls()

    def clean_urls(self):
        for url in self.urls:
            self.clean_url(url)
            
     
    def clean_url(self, url):
        cleaned_url = cleanurl.cleanurl(url)
        import pdb; pdb.set_trace()
        return cleaned_url
           
    def get_title_from_url(self, url):
        try:
            parsed_url = urlparse(url)
            title = parsed_url.path.split('/')[-1]
            return title
        except:
            return None

    def is_url_allowed(url):
        rp = robotexclusionrulesparser.RobotFileParser()
        rp.set_url('https://www.amazon.com/robots.txt')
        rp.read()

        return rp.can_fetch('*', url)
