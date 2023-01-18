const BasePage = require('./base.page');

class HomePage extends BasePage {
  get showRowsDropDown() {
    return $(
      'div.sc-aef7b723-0.dDQUel.table-control-area > div.sc-aef7b723-0.jPLKhd.table-control-page-sizer > div'
    );
  }
  get tableRows() {
    return $$('table > tbody > tr');
  }
  async selectShowRow(value) {
    if (value === '20' || value === '50' || value === '100') {
      await this.showRowsDropDown.click();
      await browser.$(`//*[text()=${value}]`).click();
    } else {
      throw new Error('Invalid value, Please select from [20,50,100]');
    }
  }

  async rowCount(value) {
    if (value === '20' || value === '50' || value === '100') {
      const count = await this.tableRows.length;
      await browser.pause(600);
      expect(count).toHaveText(value);
    } else {
      throw new Error('Invalid value, Please select from [20,50,100]');
    }
  }

  open() {
    super.open('https://coinmarketcap.com/');
  }
}

module.exports = new HomePage();
