const { Given, When, Then } = require('@cucumber/cucumber');

Given('I open the site {string}', async (url) => {
  await browser.url(url);
});
Given('the user clicks on {string}', async (selector) => {
  const elem = await $(selector);
  await elem.click();
});
