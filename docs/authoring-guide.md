# Skill Authoring Guide

## Required Frontmatter

Every skill must start with:

```yaml
---
name: my-skill-name
description: A clear sentence describing when and why the skill should be used.
category: engineering
version: 1.0.0
---
```

## Required Sections

Every `SKILL.md` must include:

- `## Purpose`
- `## Use When`
- `## Required Context`
- `## Workflow`
- `## Guardrails`
- `## Output Contract`

## Writing Rules

Descriptions should be specific enough for automatic activation. Avoid generic wording.

Good:

```txt
Review Docker Compose files for networking, volumes, health checks, secrets, and deployability.
```

Weak:

```txt
Helps with Docker.
```

## Output Contracts

Each skill should define the expected response shape. This makes agent output easier to compare, automate, and review.
