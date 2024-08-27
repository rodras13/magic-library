// @ts-check
import { test, expect } from '@playwright/test';

const LOCALHOST_URL = "http://localhost:5173/"

test('App shows random Magic Card, title and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  // 1️⃣ Que efectivamente hay un título y una imagen
  const text = await page.getByRole('heading')
  const image = await page.getByRole('img')

  // 2️⃣ Que se cumple con la accesibilidad, recuperando el title y el alt de la imagen
  const title = await text.textContent();
  const altImage = await image.getAttribute('alt')

  await expect(title?.length).toBeGreaterThan(0)
  await expect(altImage?.length).toBeGreaterThan(0)
});
