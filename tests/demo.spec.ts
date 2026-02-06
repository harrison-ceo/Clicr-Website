
import { test, expect } from '@playwright/test';

test.describe('CLICR Interactive Demo', () => {

    test('Demo Landing Page loads correctly', async ({ page }) => {
        await page.goto('/demo');

        // Title check
        await expect(page.locator('h1')).toContainText('Next Version Demo');

        // Start button
        const startBtn = page.getByRole('link', { name: 'Start Demo' });
        await expect(startBtn).toBeVisible();
        await startBtn.click();

        // Should nav to Occupancy
        await expect(page).toHaveURL(/\/demo\/occupancy/);
    });

    test('Occupancy screen is interactive', async ({ page }) => {
        await page.goto('/demo/occupancy');

        // Check initial state (default 42 in store)
        const display = page.locator('.text-\\[120px\\]');
        await expect(display).toHaveText('42');

        // Test Increment
        await page.locator('button').nth(1).click(); // Plus button
        await expect(display).toHaveText('43');

        // Test Decrement
        await page.locator('button').nth(0).click(); // Minus button
        await expect(display).toHaveText('42');
    });

    test('ID Scan screen simulates outcomes', async ({ page }) => {
        await page.goto('/demo/id-scan');

        // Initial state
        await expect(page.getByText('Ready to Scan')).toBeVisible();

        // Simulate Accept
        await page.getByRole('button', { name: 'Accept' }).click();
        await expect(page.getByText('ACCEPTED')).toBeVisible({ timeout: 2000 });

        // Simulate Deny
        await page.getByRole('button', { name: 'Deny' }).click();
        await expect(page.getByText('DENIED')).toBeVisible({ timeout: 2000 });
    });

    test('Insights screen updates from store', async ({ page }) => {
        // Go to occupancy first to modify state
        await page.goto('/demo/occupancy');
        await page.locator('button').nth(1).click(); // +1 (Occupancy 43)

        // Go to Insights
        await page.goto('/demo/insights');

        // Check Metric
        await expect(page.getByText('Live Occupancy').findParent('div')).toContainText('43');

        // Check Chart rendering (canvas or divs)
        await expect(page.getByText('Age Distribution')).toBeVisible();

        // Check Event Log
        await expect(page.getByText('ENTRY')).toBeVisible();
    });

});
