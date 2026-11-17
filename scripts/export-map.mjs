import puppeteer from 'puppeteer';
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPng = resolve(__dirname, '../public/images/apsi-score-map.png');
const outJpg = resolve(__dirname, '../public/images/apsi-score-map.jpg');
const url = process.env.MAP_URL || 'http://localhost:5173/#state-of-play';
const scale = Number(process.env.MAP_SCALE || 3);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1100, deviceScaleFactor: scale });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.waitForSelector('.score-map');

  // Expand map container so labels aren't clipped by overflow scrollports.
  await page.evaluate(() => {
    const map = document.querySelector('.score-map');
    const chart = map?.closest('.chart');
    if (chart) {
      chart.style.overflow = 'visible';
      chart.style.width = '1000px';
      chart.style.maxWidth = 'none';
      chart.style.margin = '0';
      chart.style.padding = '0';
      chart.style.background = 'transparent';
    }
    if (map) {
      map.style.minWidth = '1000px';
      map.style.width = '1000px';
      map.style.margin = '0';
      map.scrollIntoView({ block: 'center', inline: 'center' });
    }
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  });

  await new Promise((r) => setTimeout(r, 400));

  const el = await page.$('.score-map');
  if (!el) throw new Error('Map element not found');

  const png = await el.screenshot({ type: 'png', omitBackground: false });
  writeFileSync(outPng, png);

  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '92', outPng, '--out', outJpg]);
  execFileSync('rm', ['-f', outPng]);
  const info = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', outJpg], { encoding: 'utf8' });
  console.log(outJpg);
  console.log(info.trim());
} finally {
  await browser.close();
}
