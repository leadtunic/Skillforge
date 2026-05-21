# Security Policy

## Reporting Security Issues

Do not open public issues for sensitive security findings.

If you find a security problem in this repository, report it privately to the maintainers.

## Scope

This repository contains prompt/skill documentation and validation scripts. Security concerns may include:

- leaked secrets in examples
- unsafe operational instructions
- misleading security guidance
- command examples that may cause data loss
- instructions that bypass authorization or privacy boundaries

## Security Principles

Skills in this repository should:

- avoid asking users to expose credentials
- prefer safe diagnostic commands
- mark destructive commands clearly
- avoid instructions that weaken authentication or authorization
- respect privacy and data minimization
