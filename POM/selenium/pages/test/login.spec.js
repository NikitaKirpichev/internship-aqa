const { Builder } = require('selenium-webdriver')

const loginPage = require('../login.page')

const assert = require('assert');

const data = require('../../data/login.mock.json')

import { allure } from "allure-mocha/runtime";

describe('Login test (Selenium)', function(){
    this.timeout(30000)
    let login;
    let driver;
    this.beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        login = new loginPage(driver);
        await login.load()
    })

    this.afterEach(async function() {
        await driver.quit()
    })

    it('succses login', async function(){
        await login.auth(data.username, data.password);
        assert(await login.successMessage()) 
    })

    it('succses failed (wrong password)', async function(){
        await login.auth(data.username, data.passwordWrong);
        assert(await login.failureMessage())
    })
})
