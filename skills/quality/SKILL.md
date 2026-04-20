---
name: quality
description: Comprehensive quality assurance and API construction toolkit. Includes production audits, smoke testing, and knowledge-based API design with a minimalist philosophy.
---

# Quality & API Expert 💎

This skill ensures the codebase meets professional production standards while maintaining a lean, high-performance architecture.

## 1. Production Audit (Codebase Integrity)
Perform autonomous scans during development or before PRs to ensure:
- **Architecture**: No circular dependencies or "god classes". Strict separation of concerns and modular design.
- **Security**: Parametrized queries only. No hardcoded secrets. Proper Input Validation.
- **Performance**: No N+1 queries. Effective use of database indexes. Async-first operations.
- **Minimalism**: DO NOT install new dependencies unless strictly necessary for core functionality.

## 2. Knowledge-First API Design
Construct APIs based on existing project context and documentation:
- **Context Search**: Always research the existing folder structure and controllers before proposing new endpoints.
- **Standardization**: All new controllers MUST be documented and follow established REST/GraphQL conventions.
- **AI-Friendly**: Design APIs with consistent error contracts and structured JSON responses that other agents can easily consume.

## 3. Smoke Testing
Verify core functional flows:
- **Behavior-Driven**: Test the *user's goal* (e.g., "Can a user checkout?"), not the internal implementation.
- **Test Factories**: Use mock helpers for all test data to keep tests DRY.
- **Smoke Check**: Implement quick smoke tests for critical paths (Login, Dashboard, Core Transactions).

## 4. Minimalist Protocol
- **Dependency Audit**: Before `npm install`, check if any already installed package covers the need.
- **Clean Registry**: Keep dependencies tidy. Remove unused packages immediately.
- **Code Hygiene**: One export per file. No blank lines in functions. Verb-first function naming.

**Golden Rule**: Quality is not an afterthought; it is built-in. If it's not tested or documented, it's not finished.
