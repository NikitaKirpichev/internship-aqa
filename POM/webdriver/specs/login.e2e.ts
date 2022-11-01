import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import * as data from "../data/login.mock.json";
const log4js = require('log4js');
log4js.configure('log4js.conf.json')
let logger = log4js.getLogger("webdriver");
describe('Login test', () => {
    it('login with valid credentials', async () => {
        logger.info("login with valid credentials");
        logger.info("Open page");
        await LoginPage.open();
        logger.info("Input username and password");
        await LoginPage.login(data.username, data.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        logger.info("Expect succses message");
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');

    });

    it('login with wrong password', async () => {
        logger.info("login with wrong password");
        logger.info("Open page");
        await LoginPage.open();
        logger.info("Input username and wrong password");
        await LoginPage.login(data.username, data.passwordWrong);
        await expect(SecurePage.flashAlert).toBeExisting();
        logger.info("Some info");
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });
});