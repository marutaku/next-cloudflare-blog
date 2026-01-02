import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("homepage has no visual regressions", async ({ page }) => {
    await expect(page).toHaveScreenshot({
      timeout: 10000,
    });
  });

  test("トップページのタイトルが表示されている", async ({ page }) => {
    // サイト名やキャッチコピーなど、トップページの主要なタイトルが表示されていることを確認
    await expect(page).toHaveTitle(/クソザコエンジニア奮闘記/);
  });

  test("記事一覧が1件以上表示されている", async ({ page }) => {
    // 記事カード（記事詳細ページへのリンク）が1件以上表示されていることを確認
    const articleCards = await page.locator('a[href^="/articles/"]').count();
    expect(articleCards).toBeGreaterThan(0);
  });

  test("グローバルナビゲーションが表示されている", async ({ page }) => {
    // ヘッダーやナビゲーションバーが表示されていることを確認
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("フッターが表示されている", async ({ page }) => {
    // フッターが表示されていることを確認
    await expect(page.getByRole("contentinfo")).toBeVisible();
  });
});
