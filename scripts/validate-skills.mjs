import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");

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
  if (!match) return null;
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

const files = walk(skillsDir);
const errors = [];

if (files.length === 0) {
  errors.push("No SKILL.md files found.");
}

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const fm = parseFrontmatter(content);

  if (!fm) {
    errors.push(`${file}: missing frontmatter`);
    continue;
  }

  for (const field of ["name", "description", "category", "version"]) {
    if (!fm[field]) errors.push(`${file}: missing ${field}`);
  }

  if (fm.name && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fm.name)) {
    errors.push(`${file}: name must be kebab-case`);
  }

  if (fm.description && fm.description.length < 40) {
    errors.push(`${file}: description is too short`);
  }

  for (const heading of ["## Purpose", "## Use When", "## Required Context", "## Workflow", "## Guardrails", "## Output Contract"]) {
    if (!content.includes(heading)) {
      errors.push(`${file}: missing heading ${heading}`);
    }
  }
}

if (errors.length > 0) {
  console.error("Skill validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${files.length} skills successfully.`);
