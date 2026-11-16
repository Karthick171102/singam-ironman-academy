import { chromium } from "playwright-core";
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const out = "C:/Users/saika/AppData/Local/Temp/opencode/sia-shots";
for (const [name, lang, theme, width, height] of [["sec-about-dark","en","dark",1440,1000],["sec-prog-light","en","light",1440,1000],["sec-why-dark","en","dark",1440,1000],["sec-contact-light","en","light",1440,1000]]) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.addInitScript(({lang,theme}) => { localStorage.setItem("sia-lang",lang); localStorage.setItem("sia-theme",theme); }, {lang,theme});
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const sel = name.includes("about") ? "#about" : name.includes("prog") ? "#programmes" : name.includes("why") ? "#why" : "#contact";
  await page.locator(sel).scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  await page.locator(sel).screenshot({ path: `${out}/${name}.png` });
  await ctx.close();
}
await browser.close();
console.log("done");
