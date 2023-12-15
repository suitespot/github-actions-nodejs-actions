import fs from "fs";
import path from "path";

const { run } = await import(path.resolve(process.env["GITHUB_WORKSPACE"], process.env["ACTION_REL_PATH"], "main.js"));

/**
 * @type {Record<string, string>}
 */
const outputs = await run(process.argv.slice(2));
for (const key in outputs) {
  fs.appendFileSync(process.env["GITHUB_OUTPUT"], `${key}=${outputs[key]}\n`);
}
