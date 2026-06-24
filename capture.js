const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'docs', 'screenshots', '2026-06-24_15-44');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pagesToCapture = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'services', url: 'http://localhost:3000/services' },
  { name: 'work', url: 'http://localhost:3000/work' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'contact', url: 'http://localhost:3000/contact' },
];

async function captureScreenshots() {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a standard desktop size
  await page.setViewport({ width: 1440, height: 900 });

  for (const item of pagesToCapture) {
    console.log(`Capturing ${item.name} at ${item.url}...`);
    try {
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Wait a little extra for Framer Motion animations to settle
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Scroll to bottom to trigger any scroll reveals
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight - window.innerHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 50);
        });
      });
      
      // Scroll back to top
      await page.evaluate(() => window.scrollTo(0, 0));
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const filePath = path.join(outDir, `${item.name}.png`);
      await page.screenshot({ path: filePath, fullPage: true });
      console.log(`Saved ${filePath}`);
    } catch (err) {
      console.error(`Failed to capture ${item.name}:`, err);
    }
  }

  await browser.close();
  console.log('Done!');
}

captureScreenshots();
