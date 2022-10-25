import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import * as data from "../data/login.mock.json";

describe('Login test', () => {

    const testStep = allure.createStep("initial", () => {});
    it('login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(data.username, data.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('login with wrong password', async () => {
        await LoginPage.open();
        await LoginPage.login(data.username, data.passwordWrong);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your password is invalid!');
    });
});