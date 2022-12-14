const puppeteer = require('puppeteer');
const moment = require('moment');

(async () => {
  console.log("init");
  // 1. Launch browser
  const browser = await puppeteer.launch({
    headless: false, // default true to hide the running process
    slowMo: 10, // slow down by 5ms
  });
  const page = await browser.newPage();

  // 2. Connect on nomade
  console.log('Connecting on chronoshit...');
  const path = 'https://chronotime-vdp.apps.paris.fr/chronotime/login/login.html';
  const rand = Math.random() * (420000 - 2200) + 2200;
  const msToMin = moment.duration(rand.toFixed(0)).minutes();

  await page.goto(path);
  await page.type('#user_login', 'you_email_address');
  await page.type('#user_pass', 'your_password');

  page.evaluate((msToMin) => {
    const title = document.querySelector('.rightPanel h1');
    if (title) title.innerText = `Le pointage nique sa mère dans ${msToMin}min.`;

    const element = document.querySelector('.leftPanel div:first-child').querySelector('div');
    if (element) element.innerText = "Chronoshit ";
    return element && element.innerText;
  }, msToMin);

  // #wp-submit // id pour les tests
  await setTimeout(() => {
    page.click('#wp-badger');
    setTimeout(() => browser.close(), 4200);
  }, rand.toFixed(0));
})();
