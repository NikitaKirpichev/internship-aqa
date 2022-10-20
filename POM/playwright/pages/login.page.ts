import type { Page, Locator } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly getUserNameTextField: Locator;
    readonly getPasswordTextField: Locator;
    readonly getLoginBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.getUserNameTextField = page.locator("input[name='username']");
        this.getPasswordTextField = page.locator("input[name='password']");
        this.getLoginBtn = page.locator("button[type='submit']");
    }

    elemUserNameTextField = async () => await this.getUserNameTextField;

    elemPasswordTextField = async () => await this.getPasswordTextField;

    elemLoginBtn = async () => await this.getLoginBtn;

    public async enterUserName(name: string){
        const elem = await this.elemUserNameTextField();
        if (elem != null) await elem.fill(name);
        else throw new Error("No element")
    }

    public async enterUserPassword(password: string){
        const elem = await this.elemPasswordTextField();
        if (elem != null) await elem.fill(password);
        else throw new Error("No element")
    }

    public async clickLoginBtn() {
        const elem = await this.elemLoginBtn();
        if (elem != null) await elem.click();
        else throw new Error("No element")
    }

    public async login(username: string, password: string){
        await this.enterUserName(username);
        await this.enterUserPassword(username);
        await this.clickLoginBtn();
        
    }

}


