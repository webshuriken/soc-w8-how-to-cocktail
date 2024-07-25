import { test, expect } from '@playwright/test';

/**
 * This is a single page site, so we can use the same page for all tests.
 * Each decribe block will test a certain aspect of the user interaction with the page.
 * 
 * repetitive tasks:
 * - load the home page (used for all tests)
 * 
 * describe block 1: test basic visual elements
 * - [X] test that the page has a title "How to cocktails"
 * - [X] test that the page has a h1 heading "How to cocktails"
 * - [X] test that the page has a footer with the text "All rights reserved 2022-24"
 * 
 * describe block 2: test search functionality
 * - [ ] test that the search input is present
 * - [ ] test that the search input is empty
 * - [ ] test that the search input can be filled with text "mojito"
 * - [ ] test that the search button is present
 * - [ ] test that the search button can be clicked
 * - [ ] test that the search results are displayed
 *   - [ ] test that the search results contain the text "Mojito"
 *   - [ ] test that the search results contain the text "Ingredients"
 *   - [ ] test that the search results contain the text "Light rum"
 *   - [ ] test that the search results contain the text "Lime"
 *   - [ ] test that the search results contain the text "Sugar"
 *   - [ ] test that the search results contain the text "Mint"
 *   - [ ] test that the search results contain the text "Soda water"
 *   - [ ] test that the search results contain the text "Instructions"
 *   - [ ] test that the search results contain the text "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish with a mint sprig."
 * - [ ] test that the search input is empty
 * 
 * describe block 3: test random cocktail functionality
 * - [ ] test that the random cocktail button is present
 * - [ ] test that the random cocktail button can be clicked
 * - [ ] test that the random cocktail results are displayed
 *   - [ ] test that the random cocktail results contain the text "Homemade Kahlua"
 *   - [ ] test that the random cocktail results contain the text "Ingredients"
 *   - [ ] test that the random cocktail results contain the text "Instant coffee"
 *   - [ ] test that the random cocktail results contain the text "Sugar"
 *   - [ ] test that the random cocktail results contain the text "Vanilla extract"
 *   - [ ] test that the random cocktail results contain the text "Vodka"
 *   - [ ] test that the random cocktail results contain the text "Instructions"
 *   - [ ] test that the random cocktail results contain the text "Dissolve coffee and sugar in boiling water. Add vanilla and vodka. Store in a sealed container for 2 weeks."
 */


test.describe('test basic visual elements', () => {
  test.beforeEach(async ({ page }) => {
    page.goto('http://localhost:3000/');
  });

  test('test that the page has a title "How to cocktails"', async ({ page }) => {
    await expect.soft(page).toHaveTitle(/How to cocktails/);
  });

  test('test that the page has a h1 heading "How to cocktails"', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'HOW TO COCKTAILS', level: 1 })).toBeVisible();
  });

  test('test that the page has a footer with the text "All rights reserved 2022-24"', async ({ page }) => {
    await expect.soft(page.getByText('All rights reserved 2022-24')).toBeVisible();
  });
});
