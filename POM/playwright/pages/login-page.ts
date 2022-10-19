import type { Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async login(username: string, password: string){
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('#fa fa-2x fa-sign-in').click();
    }

    async visit(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
}