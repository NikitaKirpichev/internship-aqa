import { test, expect } from "@playwright/test";

import CommonFunctions from "../../common.page";
import { LoginPage } from "../login.page";
import Env from "../../utils/environment";
import * as data from "../../data/login.mock.json";

const log4js = require('log4js');
log4js.configure('log4js.conf.json')
let logger = log4js.getLogger("playwright");

test.describe("Login test", function () {
  let login: LoginPage;
  let common: CommonFunctions;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.test);
    login = new LoginPage(page);
    common = new CommonFunctions(page);
  });

  test("Test login success", async ({ page }) => {
    logger.info("Load page");
    expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
    logger.info("Enter username");
    await login.enterUserName(data.username);
    logger.info("Enter password");
    await login.enterUserPassword(data.password);
    logger.info("Click login button");
    await login.clickLoginBtn();

    const flashMessage = await common.flashMessage();
    logger.info("Expect succses message");
    expect(await flashMessage?.textContent()).toContain("You logged into a secure area!");
  });

  test("Test login failed (wrong password)", async ({ page }) => {
    logger.info("Load page");
    expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
    logger.info("Enter username");
    await login.enterUserName(data.username);
    logger.info("Enter wrong password");
    await login.enterUserPassword(data.passwordWrong);
    logger.info("Click login button");
    await login.clickLoginBtn();

    const flashMessage = await common.flashMessage();
    logger.info("Expect failed message");
    expect(await flashMessage?.textContent()).toContain("Your password is invalid!");
  });
});
