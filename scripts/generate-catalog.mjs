import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const catalogDir = path.join(root, "catalog");
fs.mkdirSync(catalogDir, { recursive: true });

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    if (entry.isFile() && entry.name === "SKILL.md") files.push(full);
  }
  return files;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split("\n")) {
    const index = line.indexOf(":");
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    data[key] = value;
  }
  return data;
}

const items = walk(skillsDir).map((file) => {
  const content = fs.readFileSync(file, "utf8");
  const fm = parseFrontmatter(content);
  return {
    name: fm.name,
    description: fm.description,
    category: fm.category,
    version: fm.version,
    path: path.relative(root, file).replaceAll("\\", "/")
  };
}).sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

fs.writeFileSync(path.join(catalogDir, "skills.json"), JSON.stringify(items, null, 2));

const markdown = [
  "# Skills Catalog",
  "",
  `Total skills: ${items.length}`,
  "",
  "| Skill | Category | Description |",
  "|---|---|---|",
  ...items.map((item) => `| [\`${item.name}\`](../${item.path}) | ${item.category} | ${item.description} |`)
].join("\n");

fs.writeFileSync(path.join(catalogDir, "skills.md"), markdown + "\n");

console.log(`Generated catalog with ${items.length} skills.`);
