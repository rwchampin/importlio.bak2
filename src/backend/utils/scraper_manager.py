import random
import time
import requests
from bs4 import BeautifulSoup
from .url_manager import UrlManager

um = UrlManager()

class ScraperManager:
    def __init__(self, urls, headers=None, proxies=None):
        self.urls = urls
        self.headers = headers or {}
        self.proxies = proxies or {}

    def fetch_page(self, url):
        # get a browser and get browser type
        
        # get browser driver
        
        # get browser driver from browser manager
        
        # get proxies based on browser type
        
        # get user agent based on browser type
        
        # get referer based on browser type
        
        #get headers based on browser type
        
        response = requests.get(url, headers=self.headers, proxies=self.proxies)
        if response.status_code == 200:
            return response.content
        return None

    def random_delay(self, min_delay=1, max_delay=5):
        delay = random.uniform(min_delay, max_delay)
        time.sleep(delay)

    def scrape(self):
        self.random_delay()
        html = self.fetch_page()
        if html:
            soup = BeautifulSoup(html, 'lxml')
             
            # Implement parsing logic using Beautiful Soup
            title = self.get_product_title(soup)
            
            if not title:
                return None
            
            images = self.get_product_images(soup)
            availability = self.get_product_availability(soup)
            reviews = self.get_product_reviews(soup)
            ratings = self.get_product_ratings(soup)
            price = self.get_product_price(soup)
            variants = self.get_product_variants(soup)

            data = {
                'title': title,
                'images': images,
                'availability': availability,
                'reviews': reviews,
                'ratings': ratings,
                'price': price,
                'variants': variants
            }

            return data

        return None

    def get_product_title(self, soup):
        try:
            # Implement logic to extract the product title from the parsed HTML
            title_str = soup.find("span", attrs={"id":'productTitle'}).string
            return title_str.strip()
        except AttributeError:
            return None
        

    def get_product_images(self, soup):
        # Implement logic to extract the product images from the parsed HTML
        return None

    def get_product_availability(self, soup):
        # Implement logic to extract the product availability from the parsed HTML
        return None

    def get_product_reviews(self, soup):
        # Implement logic to extract the product reviews from the parsed HTML
        return None

    def get_product_ratings(self, soup):
        try:
            rating = soup.find("i", attrs={'class':'a-icon a-icon-star a-star-4-5'}).string.strip()
        except AttributeError:
            try:
                rating = soup.find("span", attrs={'class':'a-icon-alt'}).string.strip()
            except:
                rating = ""	
        return rating


    def get_product_variants(self, soup):
        # Implement logic to extract the product variants from the parsed HTML
        return None

    def get_product_price(soup):
        try:
            price = soup.find("span", attrs={'id':'priceblock_ourprice'}).string.strip()

        except AttributeError:
            price = ""	

        return price

# Function to extract Product Rating

# Function to extract Number of User Reviews
    def get_review_count(soup):
        try:
            review_count = soup.find("span", attrs={'id':'acrCustomerReviewText'}).string.strip()
            
        except AttributeError:
            review_count = ""	

        return review_count

    # Function to extract Availability Status
    def get_availability(soup):
        try:
            available = soup.find("div", attrs={'id':'availability'})
            available = available.find("span").string.strip()

        except AttributeError:
            available = ""	

        return available	

if __name__ == '__main__':

	# Headers for request
	HEADERS = ({'User-Agent':
	            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36',
	            'Accept-Language': 'en-US, en;q=0.5'})

	# The webpage URL
	URL = "https://www.amazon.com/Sony-PlayStation-Pro-1TB-Console-4/dp/B07K14XKZH/"

	# HTTP Request
	webpage = requests.get(URL, headers=HEADERS)

	# Soup Object containing all data
	soup = BeautifulSoup(webpage.content, "lxml")

	# Function calls to display all necessary product information
	print("Product Title =", get_title(soup))
	print("Product Price =", get_price(soup))
	print("Product Rating =", get_rating(soup))
	print("Number of Product Reviews =", get_review_count(soup))
	print("Availability =", get_availability(soup))
	print()
	print()

