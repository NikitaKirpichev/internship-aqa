const BasePage = require('./base.page');

const USERNAME_INPUT = { id: 'username' }
const PASSWORD_INPUT = { id: 'password' }
const SUBMIT_BUTTON = { css: 'button' }
const SUCCESS_MESSAGE = { css: '.flash.success' }
const FAILURE_MESSAGE = { css: '.flash.error' }

class LoginPage extends BasePage {
    constructor(driver){
        super(driver);
    }

    async load(){
        await this.visit('http://the-internet.herokuapp.com/login');
    }

    async auth(username, password){
        await this.type(USERNAME_INPUT, username);
        await this.type(PASSWORD_INPUT, password);
        await this.click(SUBMIT_BUTTON);
    }

    async successMessage() {
        return this.isDisplayed(SUCCESS_MESSAGE)
    }

    async failureMessage() {
        return this.isDisplayed(FAILURE_MESSAGE)
    }
}

module.exports = LoginPage;