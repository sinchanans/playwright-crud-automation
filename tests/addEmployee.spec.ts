import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Add Employee', async ({ page }) => {

  await login(page);

  await page.click('span:has-text("PIM")');

  await page.click('button:has-text("Add")');

  await page.fill(
    'input[name="firstName"]',
    'John'
  );

  await page.fill(
    'input[name="lastName"]',
    'Doe'
  );

  await page.click('button:has-text("Save")');

  await expect(
  page.getByRole('heading', { name: 'Add Employee' })
).toBeVisible();
});