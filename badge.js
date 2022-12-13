const puppeteer = require('puppeteer');

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
  const nomadeUrl = 'https://chronotime-vdp.apps.paris.fr/chronotime/login/login.html';
  await page.goto(nomadeUrl);
  await page.type('#user_login', '');
  await page.type('#user_pass', '');

  page.evaluate(() => {
    const title = document.querySelector('.rightPanel h1');
    if (title) title.innerText = "Le pointage nique sa mère";

    const element = document.querySelector('.leftPanel div:first-child').querySelector('div');
    if (element) element.innerText = "Chronoshit";
    return element && element.innerText;
  });

  // await setTimeout(() => page.click('#wp-badger'), 2200);
  await setTimeout(() => page.click('#wp-submit'), 2200);

  await setTimeout(() => browser.close(), 9000);
})();
