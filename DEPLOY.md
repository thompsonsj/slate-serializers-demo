# Deploying slate-serializers-demo + the user-site hub

## Architecture

| URL | What serves it |
|-----|----------------|
| `https://thompsonsj.github.io/` | **User hub** — `thompsonsj/thompsonsj.github.io` (index of projects + origin `/robots.txt`) |
| `https://thompsonsj.github.io/slate-serializers-demo/` | **This demo** — project Pages from `slate-serializers-demo` (`basePath`) |
| `https://thompsonsj.github.io/payload-crowdin-sync/` | Other project Pages (same pattern) |

Crawlers look for **`/robots.txt` at the host origin**. That file lives on the **hub**, and lists each project’s `sitemap.xml`. Project sites keep their own `basePath` and do not need to own the domain root.

## This repo (project site)

- `next.config.js` → `basePath: '/slate-serializers-demo'`
- `.github/workflows/deploy.yml` → builds `out/` and deploys via GitHub Actions Pages
- Settings → Pages → **Source: GitHub Actions** (unchanged)

No special secrets required for the demo deploy.

## User hub (`user-site/` → `thompsonsj.github.io`)

Source files for the hub live in **`user-site/`** in this repo (convenient to edit alongside the demo). They are published to **`thompsonsj/thompsonsj.github.io`**.

### One-time GitHub setup

1. Repo **`thompsonsj/thompsonsj.github.io`** exists (already created).
2. **Settings → Pages** on that repo: **Deploy from a branch** → **`main`** / **`/`** (or `gh-pages` if you push there instead).
3. Push hub files (from this repo):

```bash
# from slate-serializers-demo
git clone https://github.com/thompsonsj/thompsonsj.github.io.git /tmp/thompsonsj.github.io
cp user-site/index.html user-site/robots.txt user-site/.nojekyll /tmp/thompsonsj.github.io/
cd /tmp/thompsonsj.github.io
git add -A && git commit -m "Add hub index and origin robots.txt" && git push
```

Or use the GitHub UI to upload `user-site/*` to the hub repo’s default branch.

### Keeping the hub updated

When you add another docs site, edit **`user-site/index.html`** (new list item) and **`user-site/robots.txt`** (another `Sitemap:` line), then copy/push to `thompsonsj.github.io` again.

You do **not** need `USER_SITE_DEPLOY_TOKEN` unless you later automate hub sync.
