import { chromium } from "playwright-core";

const outDir = "C:/Users/saika/AppData/Local/Temp/opencode/sia-shots";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});

const combos = [
  { name: "en-dark", lang: "en", theme: "dark", width: 1440, height: 1000 },
  { name: "en-light", lang: "en", theme: "light", width: 1440, height: 1000 },
  { name: "ta-dark", lang: "ta", theme: "dark", width: 1440, height: 1000 },
  { name: "ta-light", lang: "ta", theme: "light", width: 1440, height: 1000 },
  { name: "ta-light-mobile", lang: "ta", theme: "light", width: 390, height: 844 },
  { name: "en-dark-mobile", lang: "en", theme: "dark", width: 390, height: 844 },
];

const errors = [];
for (const combo of combos) {
  const context = await browser.newContext({
    viewport: { width: combo.width, height: combo.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`${combo.name}: ${m.text()}`);
  });
  page.on("pageerror", (e) => errors.push(`${combo.name}: ${e.message}`));
  await page.addInitScript(
    ({ lang, theme }) => {
      localStorage.setItem("sia-lang", lang);
      localStorage.setItem("sia-theme", theme);
    },
    { lang: combo.lang, theme: combo.theme },
  );
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.evaluate(() => {
    document
      .querySelectorAll(".transition-\\[opacity\\,transform\\]")
      .forEach(() => {});
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(900);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: `${outDir}/${combo.name}.png`,
    fullPage: true,
  });
  await context.close();
}

await browser.close();
console.log(JSON.stringify({ errors }, null, 2));
