<p align="center">
  <strong>Agent SkillForge</strong>
</p>

# Agent SkillForge

A polished, production-oriented collection of **50 reusable AI agent skills** for GitHub repositories, code agents, product planning, architecture review, QA, DevOps, documentation, security, and open-source maintenance.

This repository uses a simple convention:

```txt
skills/<category>/<skill-name>/SKILL.md
```

Each `SKILL.md` contains:

- `name`
- `description`
- `category`
- `version`
- activation guidance
- workflow
- guardrails
- output contract

## Why this repo exists

Most agent skill collections are useful, but many skills are too generic. This repository focuses on skills that are:

- specific enough to activate correctly
- useful in real engineering workflows
- safe for production-oriented decisions
- easy to maintain in GitHub
- ready to extend for your own organization

## Skill Categories

| Category | Purpose |
|---|---|
| `strategy` | planning, pressure testing, handoff, skill authoring |
| `product` | requirements, PRDs, scope slicing, roadmap, acceptance criteria |
| `engineering` | architecture, APIs, data model, refactor, legacy systems |
| `quality` | code review, quality gates, testing, bugs, regression |
| `security` | threat review, auth, privacy, secrets, dependencies |
| `operations` | incidents, observability, production readiness, backups |
| `devops` | Docker, Dokploy, Traefik, CI/CD, environment validation |
| `docs` | README, docs architecture, ADRs, changelog, releases |
| `design` | design systems and UX friction analysis |
| `ai` | prompt and agent workflow optimization |
| `research` | structured research synthesis |
| `open-source` | maintainer kit and repository governance |

## Quick Start

Clone the repository:

```bash
git clone https://github.com/leadtunic/Skillforge.git
cd Skillforge
```

Validate all skills:

```bash
npm run validate
```

Regenerate the catalog:

```bash
npm run catalog
```

## Repository Structure

```txt
Skillforge/
  skills/
    strategy/
    product/
    engineering/
    quality/
    security/
    operations/
    devops/
    docs/
    design/
    ai/
    research/
    open-source/

  catalog/
    skills.json
    skills.md

  docs/
    usage.md
    authoring-guide.md
    naming-conventions.md
    release-process.md

  scripts/
    validate-skills.mjs
    generate-catalog.mjs

  .github/
    workflows/
    ISSUE_TEMPLATE/
    pull_request_template.md
```

## Suggested Usage

Use a skill when the task matches its description. For example:

```txt
Use the strategy-pressure-test skill to challenge this implementation plan before we start coding.
```

```txt
Use the quality-gatekeeper skill to review whether this PR is ready to merge.
```

```txt
Use the dokploy-launchpad skill to prepare this app for deployment on Dokploy.
```

## Recommended First Skills

For most software projects, start with:

1. `strategy-pressure-test`
2. `requirements-crystallizer`
3. `architecture-lens`
4. `pull-request-sentinel`
5. `quality-gatekeeper`
6. `test-strategy-designer`
7. `security-threat-reviewer`
8. `production-readiness-check`
9. `dokploy-launchpad`
10. `readme-polisher`

## Contributing

Contributions are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) and [`docs/authoring-guide.md`](docs/authoring-guide.md) before adding new skills.

## Maintainer

Built and maintained by [Giovani Ricetto](https://github.com/leadtunic).

Portfolio: [benedash.com](https://benedash.com)

## License

MIT License. See [`LICENSE`](LICENSE).
