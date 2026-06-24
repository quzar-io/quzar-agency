const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'docs', 'screenshots', 'hero-responsive');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const viewports = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 }
];

async function capture() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'load' });
    
    // give time for animations to run
    await new Promise(r => setTimeout(r, 2000));
    
    await page.screenshot({ 
      path: path.join(outDir, `hero-${vp.name}.png`),
      fullPage: false // we just want hero
    });
    console.log(`Captured ${vp.name}`);
  }

  await browser.close();
}

capture().catch(console.error);
