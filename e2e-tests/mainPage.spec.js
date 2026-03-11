const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {

  beforeEach(async ({ page }) => {
    await page.goto('http://localhost:8080/')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be navigated to', async ({ page }) => {
    await page.getByText('ivysaur').click()
    await expect(page.getByRole('link', { name: 'Previous' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Next' })).toBeVisible()
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
    await expect(page.getByText('overgrow')).toBeVisible()
  })
})