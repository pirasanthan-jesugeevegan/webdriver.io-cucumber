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
    await this.showRowsDropDown.click();
    await browser.$(`//*[text()=${value}]`).click();
  }

  async rowCount(value) {
    const count = await this.tableRows.length;
    await browser.pause(600);
    expect(count).toHaveText(value);
  }

  open() {
    super.open('https://coinmarketcap.com/');
  }
}

module.exports = new HomePage();
