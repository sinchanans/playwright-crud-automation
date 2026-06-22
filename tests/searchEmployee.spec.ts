import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Search Employee', async ({ page }) => {

  await login(page);

  await page.click('span:has-text("PIM")');

  await page.fill(
    'input[placeholder="Type for hints..."]',
    'John'
  );

  await page.click('button:has-text("Search")');

  await expect(
    page.locator('.oxd-table')
  ).toBeVisible();

});