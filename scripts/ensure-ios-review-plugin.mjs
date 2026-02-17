import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const configPath = path.join(root, 'ios', 'App', 'App', 'capacitor.config.json');

const REVIEW_PLUGIN_CLASS = 'ReviewPlugin';

async function main() {
  let raw;
  try {
    raw = await fs.readFile(configPath, 'utf8');
  } catch (e) {
    console.error(`[ensure-ios-review-plugin] Could not read: ${configPath}`);
    throw e;
  }

  let json;
  try {
    json = JSON.parse(raw);
  } catch (e) {
    console.error('[ensure-ios-review-plugin] capacitor.config.json is not valid JSON');
    throw e;
  }

  const list = Array.isArray(json.packageClassList) ? json.packageClassList : [];
  if (!list.includes(REVIEW_PLUGIN_CLASS)) {
    list.push(REVIEW_PLUGIN_CLASS);
    json.packageClassList = list;
    await fs.writeFile(configPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    console.log(`[ensure-ios-review-plugin] Added ${REVIEW_PLUGIN_CLASS} to packageClassList`);
  } else {
    console.log(`[ensure-ios-review-plugin] ${REVIEW_PLUGIN_CLASS} already present`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
