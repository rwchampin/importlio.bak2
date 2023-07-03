import random
import asyncio
import httpx
from playwright.async_api import async_playwright

class BrowserManager:
    def __init__(self):
        self.playwright = None
        self.browsers = []
        self.devices = []

    async def initialize(self):
        self.playwright = await async_playwright().start()
        self.browsers = [self.playwright.chromium, self.playwright.firefox, self.playwright.webkit]
        await asyncio.gather(*[browser.ensure_installed() for browser in self.browsers])
        self.devices = await self.playwright.devices()

    async def install_random_devices(self, num_devices=3):
        random_devices = random.sample(self.devices, num_devices)
        await asyncio.gather(*[self.playwright.devices.ensure_installed(name=device) for device in random_devices])

    async def activate_random_browser_with_device(self):
        random_browser = random.choice(self.browsers)
        browser = await random_browser.launch()
        random_device = random.choice(self.devices)
        context = await browser.new_context(**random_device)
        page = await context.new_page()
        
        # Use the browser, page, and httpx for further operations
        async with httpx.AsyncClient() as client:
            response = await client.get('https://example.com')
            print(response.text)
        
        # Close the page, context, and browser when done
        await page.close()
        await context.close()
        await browser.close()

    async def close(self):
        await self.playwright.stop()

# Usage example
async def main():
    browser_manager = BrowserManager()
    await browser_manager.initialize()
    await browser_manager.install_random_devices()
    await browser_manager.activate_random_browser_with_device()
    await browser_manager.close()

asyncio.run(main())
