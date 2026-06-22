import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Update Employee', async ({ page }) => {

  await login(page);

  await page.getByRole('link', { name: 'PIM' }).click();

  await page.waitForLoadState('networkidle');

  // Click Edit button
  await page.getByRole('button')
    .filter({ hasText: /^$/ })
    .nth(4)
    .click();

  // Update Middle Name
  const middleName = page.getByRole('textbox', {
    name: 'Middle Name'
  });

  await middleName.clear();
  await middleName.fill('Ashok R');

  // Wait for loader if present
  try {
    await page.locator('.oxd-form-loader').waitFor({
      state: 'hidden',
      timeout: 10000
    });
  } catch {}

  // Save
  await page.locator('form')
    .filter({ hasText: 'Employee Full NameEmployee' })
    .getByRole('button')
    .click();

  // Verify Success Message
  await expect(
    page.locator('.oxd-toast')
  ).toBeVisible({ timeout: 10000 });

});