const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright-core");

function slug(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const [
    url,
    courseId,
    moduleKey,
    topicCode,
    outputDir,
    executablePath
  ] = process.argv.slice(2);

  if (!url || !courseId || !moduleKey || !topicCode || !outputDir || !executablePath) {
    throw new Error(
      "Uso: node capture_topic_modal.cjs <url> <courseId> <moduleKey> <topicCode> <outputDir> <browserPath>"
    );
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath,
    headless: true
  });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 1600 },
    deviceScaleFactor: 1
  });

  try {
    await page.goto(url, { waitUntil: "networkidle" });

    const courseButton = page.locator(`button[data-course-id="${courseId}"]`);
    await courseButton.waitFor({ state: "visible" });
    await courseButton.click();

    const moduleSelector = `details[data-module-key="${moduleKey}"]`;
    const moduleLocator = page.locator(moduleSelector);
    await moduleLocator.waitFor({ state: "visible" });
    await moduleLocator.evaluate((node) => {
      node.open = true;
    });

    const topicId = `topic-${slug(courseId)}-${slug(moduleKey)}-${slug(topicCode)}`;
    const topicLocator = page.locator(`#${topicId}`);
    await topicLocator.waitFor({ state: "visible" });
    await topicLocator.scrollIntoViewIfNeeded();
    await wait(200);

    const topicImageButton = page.locator(
      `.topic-image-button[data-topic-ref="${topicId}"]`
    );
    await topicImageButton.waitFor({ state: "visible" });
    await topicImageButton.click();

    const modal = page.locator("#imageModal .image-modal-content");
    await modal.waitFor({ state: "visible" });
    await wait(250);

    const status = page.locator("#imageModalStatus");
    const statusText = await status.innerText();
    const match = statusText.match(/(\d+)\s*\/\s*(\d+)/);
    const total = match ? Number(match[2]) : 1;

    const shots = [];

    for (let index = 0; index < total; index += 1) {
      const filePath = path.join(
        outputDir,
        `${slug(courseId)}_${slug(topicCode)}_${String(index + 1).padStart(2, "0")}.png`
      );
      await modal.screenshot({ path: filePath });
      shots.push(filePath);

      if (index < total - 1) {
        await page.locator("#imageModalNext").click();
        await wait(250);
      }
    }

    process.stdout.write(`${JSON.stringify({ total, shots }, null, 2)}\n`);
  } finally {
    await page.close();
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
