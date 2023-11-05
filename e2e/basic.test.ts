import { test } from "@playwright/test";

test("basic", async ({ page }) => {
  test.setTimeout(0);

  const errors: Error[] = []
  page.addListener("pageerror", (e) => {
    errors.push(e);
  });

  for (let i = 0; i < 1000; i++) {
    console.log("i =", i);
    await page.goto("/", { waitUntil: "networkidle" });
    if (errors.length > 0) {
      throw errors[0];
    }
    await sleep(500);
  }
});

function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}
