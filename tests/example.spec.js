import { test, expect } from '@playwright/experimental-ct-react';
import App from '../src/App';

test('basic test', async ({ mount, page }) => {
    const component = await mount(<App />);

    const countSpan = await component.getByTestId('count');

    await component.getByRole('button', { name: 'Increment' }).click();
    await component.getByRole('button', { name: 'Increment' }).click();

    await expect(component).toContainText('Learn React');

    await expect(countSpan).toHaveText('2');

    await page.screenshot({path: `screenshots/ss-${page.viewportSize().width}.png`});

    await expect(page).toHaveScreenshot();

});