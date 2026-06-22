import { Page } from '@playwright/test';

export async function login(page: Page) {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    { waitUntil: 'networkidle' }
  );

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  await page.locator('button[type="submit"]').click();

  await page.waitForURL('**/dashboard/**');
}