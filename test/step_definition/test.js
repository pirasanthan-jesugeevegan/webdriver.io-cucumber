const { Given } = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');

Given('the user is on home page', () => {
  HomePage.open();
  expect(browser).toHaveTitle(
    'Cryptocurrency Prices, Charts And Market Capitalizations | CoinMarketCap'
  );
});
Given('the user selects {string} rows', async (value) => {
  await HomePage.selectShowRow(value);
  await HomePage.rowCount(value);
});
