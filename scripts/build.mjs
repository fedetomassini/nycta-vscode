import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const sourceDir = path.join(root, "themes", "source");
const scopes = JSON.parse(fs.readFileSync(path.join(sourceDir, "scopes.json"), "utf8"));
const scopeNames = new Set(scopes.map((rule) => rule.name));
if (scopeNames.size !== scopes.length) throw new Error("duplicate rule name in scopes.json");

const variants = fs.readdirSync(sourceDir).filter((entry) => entry.endsWith(".json") && entry !== "scopes.json");

if (!variants.length) throw new Error("no theme variants found in themes/source");

for (const variant of variants) {
  const values = JSON.parse(fs.readFileSync(path.join(sourceDir, variant), "utf8"));
  if (!Object.keys(values.colors).length) throw new Error(`${variant}: colors is empty`);

  const tokenColors = scopes.map((rule) => {
    const settings = values.tokenSettings[rule.name];
    if (!settings) throw new Error(`${variant}: missing tokenSettings["${rule.name}"]`);
    return { name: rule.name, scope: rule.scope, settings };
  });

  const unusedSettings = Object.keys(values.tokenSettings).filter((name) => !scopeNames.has(name));
  if (unusedSettings.length) throw new Error(`${variant}: tokenSettings without a matching scope: ${unusedSettings.join(", ")}`);

  const theme = {
    $schema: values.$schema,
    name: values.name,
    type: values.type,
    semanticHighlighting: values.semanticHighlighting,
    colors: values.colors,
    tokenColors,
    semanticTokenColors: values.semantic,
  };

  const output = path.join(root, "themes", `${path.basename(variant, ".json")}-color-theme.json`);
  fs.writeFileSync(output, JSON.stringify(theme, null, 2) + "\n");
  console.log(`${path.basename(output)}: ${Object.keys(theme.colors).length} colors, ${tokenColors.length} token rules, ${Object.keys(theme.semanticTokenColors).length} semantic tokens`);
}
