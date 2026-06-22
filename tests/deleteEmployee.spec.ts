import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Delete Employee', async ({ page }) => {

  await login(page);

  await page.getByRole('link', { name: 'PIM' }).click();

  await page.waitForLoadState('networkidle');

  // Select first employee
  await page.locator(
    '.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
  ).first().click();

  // Click Delete button
  await page.getByRole('button')
    .filter({ hasText: /^$/ })
    .nth(5)
    .click();

  // Confirm Delete
  await page.getByRole('button', {
    name: /Yes, Delete/i
  }).click();

  // Verify Success Message
  await expect(
    page.locator('.oxd-toast')
  ).toBeVisible();

});