# Deploying to https://thompsonsj.github.io/ (user site)

This app builds with **no `basePath`** and is published to the **user GitHub Pages**
repo [`thompsonsj/thompsonsj.github.io`](https://github.com/thompsonsj/thompsonsj.github.io).

This repo (`slate-serializers-demo`) still uses **project Pages** only to serve
**legacy redirects** from `/slate-serializers-demo/*` → `https://thompsonsj.github.io/*`
(HTML meta refresh + JS; not HTTP 301).

## One-time GitHub setup (you)

### 1. Create the user-site repository

If it does not exist yet:

1. Create a **public** repo named exactly **`thompsonsj.github.io`** under your user.
2. You can leave it empty (no README required). The deploy workflow will push a `gh-pages` branch.

```bash
gh repo create thompsonsj/thompsonsj.github.io --public --description "User GitHub Pages site (slate-serializers docs)"
```

### 2. Enable Pages on `thompsonsj.github.io`

1. Open **Settings → Pages** on `thompsonsj.github.io`.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **`gh-pages`** / folder **`/`** (root).
4. Save. The first successful deploy from this repo creates `gh-pages`.

### 3. Add a deploy token secret on *this* repo

The workflow pushes to another repository, so the default `GITHUB_TOKEN` is not enough.

1. Create a token that can write to `thompsonsj.github.io`:
   - **Fine-grained PAT**: Resource owner `thompsonsj` → only repo `thompsonsj.github.io` →
     Permissions: **Contents: Read and write**, **Metadata: Read**.
   - Or a classic PAT with the **`repo`** scope (broader).
2. In **`slate-serializers-demo` → Settings → Secrets and variables → Actions**,
   add secret name: **`USER_SITE_DEPLOY_TOKEN`**  
   value: the token.

### 4. Keep project Pages enabled on this repo

1. **`slate-serializers-demo` → Settings → Pages**
2. Source: **GitHub Actions** (unchanged).
3. This continues to publish the **redirect stub** artifact under
   `https://thompsonsj.github.io/slate-serializers-demo/`.

### 5. Merge / run deploy

After the secret and user repo exist, merge to `main` or run
**Actions → Deploy Next.js site to Pages → Run workflow**.

Verify:

- New site: https://thompsonsj.github.io/
- Origin robots: https://thompsonsj.github.io/robots.txt
- Legacy redirect: https://thompsonsj.github.io/slate-serializers-demo/ → should jump to `/`

## Local commands

```bash
npm run build
node scripts/generate-legacy-redirects.mjs   # writes out-legacy-redirects/
```
