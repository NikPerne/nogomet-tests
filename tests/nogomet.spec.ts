import { test, expect } from '@playwright/test';

test.beforeEach('login', async ({ page }) => {
  await page.goto('https://nogomet.onrender.com/');
  await page.goto('https://nogomet.onrender.com/login');
  await page.getByPlaceholder('Enter e-mail address').click();
  await page.getByPlaceholder('Enter e-mail address').fill('nik.perne@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('Oklop123');
  await page.getByRole('button', { name: ' Login' }).click();
  const textEvent = page.locator('a').filter({ hasText: 'Add Event' })
  await expect(textEvent).toBeVisible();
});

test('odjava_prijava', async ({ page }) => {
  await page.getByRole('link', { name: ' 20. februar,' }).click();
  await page.locator('div').filter({ hasText: /^Nik Perne$/ }).locator('i').nth(1).click();
  await page.getByRole('button', { name: ' Pridem' }).click();
  const text = page.getByText('Nik Perne 5. marec, 2024Pridem');
  await expect(text).toBeVisible();
});

test.afterEach('logout', async ({ page }) => {
  await page.getByRole('button', { name: ' Nik Perne' }).click();
  await page.getByText('Logout').click();
  const textSignIn = page.getByRole('heading', { name: 'Sign in' });
  await expect(textSignIn).toBeVisible();
});