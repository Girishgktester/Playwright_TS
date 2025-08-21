import { test, expect } from '@playwright/test';

test.describe('launch browser', () => {

    test('Login to Orange HRM website', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


        await page.locator('input[name="username"]').fill("Admin");
        await page.locator('input[name="password"]').fill("admin123");
        await page.waitForTimeout(10);
        await page.waitForSelector('button[type="submit"]');
        await page.locator('button[type="submit"]').click();

        await expect(page).toHaveTitle("OrangeHRM");
    });


    test('test', async ({ page }) => {
        await page.goto('https://letcode.in/');
        await page.getByRole('link', { name: 'letcode' }).click();
        await page.getByRole('link', { name: 'Work-Space' }).click();
        await page.getByRole('link', { name: 'Edit' }).click();
        await page.getByRole('textbox', { name: 'Enter first & last name' }).click();
        await page.getByRole('textbox', { name: 'Enter first & last name' }).fill('Test');
        await page.getByRole('textbox', { name: 'Enter first & last name' }).press('Tab');
        await page.locator('#join').fill('yes');
        await page.locator('#join').press('Tab');
        await page.locator('#getMe').fill('ok');
        await page.locator('#getMe').press('Tab');
        await page.locator('#clearMe').fill('Girish');
        await page.locator('#clearMe').press('Tab');
        await page.locator('#dontwrite').press('Tab');
    });

});
