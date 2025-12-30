import { expect, test } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });
  test("about page has no visual regressions", async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });
  test.describe("About Description", () => {
    test.describe("アバター画像", () => {
      test("アバター画像が表示されている", async ({ page }) => {
        // プロフィール画像が表示されていることを確認
        const avatarDiv = page.locator('div[style*="profile.jpg"]');
        await expect(avatarDiv).toBeVisible();
      });
    });

    test.describe("名前", () => {
      test("日本語・英語の名前が表示されている", async ({ page }) => {
        // 丸山拓己・Takumi Maruyamaが表示されていることを確認
        await expect(page.getByText("丸山拓己")).toBeVisible();
        await expect(page.getByText("Takumi Maruyama")).toBeVisible();
      });
    });

    test.describe("SNSアイコン", () => {
      test("GitHub・X(Twitter)のリンクが表示されている", async ({ page }) => {
        // GitHubリンク
        const githubLink = page.locator(
          'a[href="https://github.com/marutaku"]',
        );
        await expect(githubLink).toBeVisible();
        // X(Twitter)リンク
        const xLink = page.locator(
          'a[href="https://twitter.com/Takumi_Maru0131"]',
        );
        await expect(xLink).toBeVisible();
      });
    });

    test.describe("肩書き", () => {
      test("肩書きが表示されている", async ({ page }) => {
        // Software Engineer, NLP Researcherが表示されていることを確認
        await expect(
          page.getByText("Software Engineer, NLP Researcher"),
        ).toBeVisible();
      });
    });

    test.describe("各セクションの見出し", () => {
      test("職歴・過去の活動・作ったものの見出しが表示されている", async ({
        page,
      }) => {
        await expect(page.getByRole("heading", { name: "職歴" })).toBeVisible();
        await expect(
          page.getByRole("heading", { name: "過去の活動" }),
        ).toBeVisible();
        await expect(
          page.getByRole("heading", { name: "作ったもの" }),
        ).toBeVisible();
      });
    });

    test.describe("各セクションのリスト", () => {
      test("職歴が1件以上表示されている", async ({ page }) => {
        // 職歴の見出しの次に職歴リストが続く想定
        const workItems = await page
          .locator('h2:text("職歴")')
          .locator("..")
          .locator("div.my-4")
          .count();
        expect(workItems).toBeGreaterThan(0);
      });

      test("過去の活動が1件以上表示されている", async ({ page }) => {
        const activityItems = await page
          .locator('h2:text("過去の活動")')
          .locator("..")
          .locator("div.my-4")
          .count();
        expect(activityItems).toBeGreaterThan(0);
      });

      test("作ったものが1件以上表示されている", async ({ page }) => {
        const workItems = await page
          .locator('h2:text("作ったもの")')
          .locator("..")
          .locator("div.my-4")
          .count();
        expect(workItems).toBeGreaterThan(0);
      });
    });
  });
});
