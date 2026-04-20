# Guide: Publishing Synax to NPM

Since you already have an NPM account, follow these steps to make `synax` available to everyone. Once published, anyone can run your CLI using `npx synax@latest`.

## 1. Prepare for Launch

Ensure your `package.json` is correctly set up.
- **Name**: `synax` (Confirmed available)
- **Version**: `1.0.0` (Standard starting point)
- **Bin**: `{"synax": "./dist/index.js"}` (Ensure this points to the built entry point)

## 2. Authentication

Open your terminal and login to the NPM registry:

```bash
npm login
```
*This will open a browser window to authenticate your session.*

## 3. Build & Publish

Before publishing, always ensure you have a fresh build of the source code:

```bash
# Build the project
npm run build

# Publish to the global registry
npm publish
```

## 4. Verification

Wait about 60 seconds, then try running your command from **any other directory** on your machine (or ask a friend!):

```bash
npx synax@latest init
```

## 5. Future Updates

When you make changes and want to push a new version:
1. Update the version in `package.json` (e.g., `1.0.1`).
2. Run `npm run build`.
3. Run `npm publish`.

---

> [!TIP]
> **NPX Caching**: Users might sometimes get a cached version. Encouraging the use of `npx synax@latest` ensures they always get your newest features and skills!
