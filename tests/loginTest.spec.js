import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Test 1 Login', async ({ page }) => {
  const login = new LoginPage(page)
  await login.goToLoginPage()
  await login.login('Admin', 'admin123')
  await page.waitForTimeout(3000);
});





