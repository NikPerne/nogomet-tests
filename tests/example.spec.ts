import { test, expect } from '@playwright/test';

test.beforeAll('login', async ({ page }) => {
  await page.goto('https://nogomet.onrender.com/');
  await page.goto('https://nogomet.onrender.com/login');
  await page.getByPlaceholder('Enter e-mail address').click();
  await page.getByPlaceholder('Enter e-mail address').fill('nik.perne@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('Oklop123');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.locator('a').filter({ hasText: 'Add Event' }).click({
    button: 'right'
  });
});

test.afterAll('logout', async ({ page }) => {
  await page.getByRole('button', { name: ' Nik Perne' }).click();
  await page.getByText('Logout').click();
  await page.getByRole('heading', { name: 'Sign in' }).click({button: 'right'});
});