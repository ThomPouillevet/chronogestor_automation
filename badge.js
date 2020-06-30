const puppeteer = require('puppeteer');

(async () => {
  // 1. Launch browser
  const browser = await puppeteer.launch({
    headless: false, // default true to hide the running process
    // slowMo: 10, // slow down by 5ms
  });
  const page = await browser.newPage();

  // 2. Connect on nomade
  console.log('Connecting on nomade...');
  const nomadeUrl =
    'https://nomades.apps.paris.fr/dana-na/auth/url_2/welcome.cgi';
  await page.goto(nomadeUrl);
  await page.type('#username', 'you_email_address');
  await page.type('#password', 'your_password');
  await page.click('#btnSubmit_6');
  await page.waitForNavigation();
  console.log('Connected !');

  // 3. Go to Chronogestor and let you perform task
  const chronogestorUrl =
    'http://nomades.apps.paris.fr/monintraparis/jsp/site/plugins/myapps/,DanaInfo=monintraparis.mdp,SSL+DoOpenMyApp.jsp?myapp_id=53&plugin_name=myapps-database';
  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });
  await page.goto(chronogestorUrl, { waitUntil: 'networkidle0' });
  const checkInAndOutUrl =
  'https://nomades.apps.paris.fr/modintrachronotique/planning/,DanaInfo=g09-chronov4.apps.paris.fr,SSL+tops?load=OK';
  await page.goto(checkInAndOutUrl, { waitUntil: 'networkidle0' });
})();
