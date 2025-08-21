import { test, expect } from '@playwright/test';

test.describe('launch browser', () => {

    test('Login to Orange HRM website', async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


        await page.fill('input[name="username"]', "Admin");
        await page.fill('input[name="password"]', "admin123");


        await page.click('button[type="submit"]');
        await expect(page).toHaveTitle("OrangeHRM");
    });

});
