import { test, expect } from '@playwright/test';

test('OrangeHRM Login', async ({ page }) => {

  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  await page.waitForTimeout(3000);

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  await page.waitForURL('**/dashboard/**');
  await expect(page).toHaveURL(/dashboard/);

});