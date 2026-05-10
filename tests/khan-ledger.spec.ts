import { expect, type Page, test } from "@playwright/test";

async function expectNoHorizontalOverflow(page: Page) {
  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
  );
  expect(hasOverflow).toBe(false);
}

test.describe("Khan Ledger public pages", () => {
  test("home page renders the RK+ landing page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/RK\+\s*Holdings/);
    await expect(
      page.getByRole("heading", {
        name: /Capital for\s+the long arc\./
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: /Send Opportunity/i }).first()).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test("journal entry opens from the Entries stack", async ({ page }) => {
    await page.goto("/#entries");
    await page.locator("a.stack-card-link").filter({ hasText: "Why RK+" }).click();
    await expect(page).toHaveURL(/\/entries\/why-rk-exists/);
    await expect(page.getByRole("heading", { level: 1, name: "Why RK+ Exists" })).toBeVisible();
    await expect(page.getByText(/Masud Khan/, { exact: false })).toBeVisible();
    await expectNoHorizontalOverflow(page);
  });

  test("contact page prepares an email with submitted details", async ({ page }) => {
    await page.goto("/contact");
    await expect(
      page.getByRole("heading", { name: "Share an opportunity with a clear record." })
    ).toBeVisible();

    await page.getByLabel("Name").fill("Test Sender");
    await page.getByLabel("Email").fill("sender@example.com");
    await page.getByLabel("Founder / startup").check();
    await page
      .getByLabel("Message")
      .fill("Testing the Khan Ledger contact flow.");

    const href = await page.getByRole("link", { name: /Open email directly/ }).getAttribute("href");

    expect(href).toContain("mailto:repath500@gmail.com");
    expect(href).toContain("Test%20Sender");
    expect(href).toContain("sender%40example.com");
    expect(href).toContain("Founder%20%2F%20startup");
    expect(href).toContain("Testing%20the%20Khan%20Ledger%20contact%20flow.");
    await expectNoHorizontalOverflow(page);
  });
});
