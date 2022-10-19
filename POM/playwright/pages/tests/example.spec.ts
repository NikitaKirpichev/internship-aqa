import { test, expect } from '@playwright/test';
import { LoginPage } from '../login-page';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.visit();
  await new LoginPage(page).login('username', 'pass');
  
});
