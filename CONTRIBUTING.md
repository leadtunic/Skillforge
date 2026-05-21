# Contributing

Thanks for improving Agent SkillForge.

## Contribution Rules

Before opening a pull request:

1. Add or edit only one logical skill per PR when possible.
2. Keep skill names specific and action-oriented.
3. Avoid vague descriptions like "helps with code".
4. Include clear workflow steps and output contract.
5. Run validation before submitting.

```bash
npm run validate
npm run catalog
```

## Skill Quality Checklist

A good skill must have:

- clear activation description
- specific use cases
- required context
- deterministic workflow
- practical guardrails
- stable output contract
- no hidden assumptions

## Naming

Use lowercase kebab-case:

```txt
good: production-readiness-check
bad: ProductionReady
bad: helper
```

## Pull Requests

Use the pull request template and explain:

- why the skill is needed
- which workflow it improves
- how it differs from existing skills
