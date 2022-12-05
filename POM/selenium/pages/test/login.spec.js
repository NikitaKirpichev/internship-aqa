const { Builder } = require('selenium-webdriver')

const loginPage = require('../login.page')

const assert = require('assert');

const data = require('../../data/login.mock.json')

const log4js = require('log4js');
log4js.configure('log4js.conf.json')
let logger = log4js.getLogger("selenium-webdriver");

describe('Login test (Selenium)', function(){
    this.timeout(30000)
    let login;
    let driver;
    this.beforeEach(async function() {
        logger.info("Build chrome driver");
        driver = await new Builder().forBrowser('chrome').build();
        login = new loginPage(driver);
        await login.load()
    })

    this.afterEach(async function() {
        await driver.quit()
    })

    it('succses login', async function(){
        logger.info("Open page and input username and password");
        await login.auth(data.username, data.password);
        logger.info("Wait for succses message");
        assert(await login.successMessage()) 
    })

    it('succses failed (wrong password)', async function(){
        logger.info("Open page and input username and wrong password");
        await login.auth(data.username, data.passwordWrong);
        logger.info("Wait for failure message");
        assert(await login.failureMessage())
    })
})
