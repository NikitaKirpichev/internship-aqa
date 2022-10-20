import { test, expect } from "@playwright/test";

import CommonFunctions from "../../common.page";
import { LoginPage } from "../login.page";
import Env from "../../utils/environment";
import * as data from "../../data/login.mock.json";

test.describe("Login test", function () {
  let login: LoginPage;
  let common: CommonFunctions;

  test.beforeEach(async ({ page }) => {
    await page.goto(Env.test);
    login = new LoginPage(page);
    common = new CommonFunctions(page);
  });

  test("Test login success", async ({ page }) => {
    expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
    await login.enterUserName(data.username);
    await login.enterUserPassword(data.password);
    await login.clickLoginBtn();

    const flashMessage = await common.flashMessage();
    expect(await flashMessage?.textContent()).toContain("You logged into a secure area!");
  });

  test("Test login failed (wrong password)", async ({ page }) => {
    expect(page.url()).toBe("https://the-internet.herokuapp.com/login");
    await login.enterUserName(data.username);
    await login.enterUserPassword(data.passwordWrong);
    await login.clickLoginBtn();

    const flashMessage = await common.flashMessage();
    expect(await flashMessage?.textContent()).toContain("Your password is invalid!");
  });
});
