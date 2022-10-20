import { Page } from "@playwright/test";

export default class CommonFunctions{
  private page: Page;
  constructor(page: Page){
    this.page = page;
  }

  flashMessage = async () => await this.page.waitForSelector("div[id='flash']");
}