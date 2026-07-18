# Bryan Romero — Portfolio

Clean single-page portfolio built with **Next.js 14** (static export). Sections: Hero, Experience
(accordion), About, Selected Works (with images/video + links), Contact (Calendly).

## Run locally (to polish)

```bash
npm install
npm run dev        # http://localhost:3000  (hot reload)
```

## Edit content

Everything is in **`data/content.ts`** — profile, companies, experience, projects, about,
education, certifications, capabilities. Edit there; the page updates live.

Images live in `public/images` and `public/projects`. The résumé PDF is
`public/Bryan_Romero_Chinchilla_CV.pdf`.

---

## Publish to GitHub Pages (quick guide)

This site is a **user site** → it will live at **https://bryancio506.github.io/** (root path, so
no base-path config needed).

### One-time setup

1. **Push this project to the `bryancio506/bryancio506.github.io` repo, `main` branch.**
   ```bash
   cd portfolio-v2
   git init
   git add -A
   git commit -m "New portfolio (Next.js)"
   git branch -M main
   git remote add origin https://github.com/bryancio506/bryancio506.github.io.git
   git push -u origin main --force      # --force only if replacing the old site
   ```
   > The old Next.js 13 site is in a different folder and is not touched. If the remote already
   > has the old site, `--force` overwrites it — make sure you're OK replacing it.

2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source → “GitHub Actions.”**
   (Not “Deploy from a branch.” The included workflow builds and deploys for you.)

That's it. The workflow at `.github/workflows/deploy.yml` runs on every push to `main`: it builds
the static site (`npm run build` → `out/`) and deploys it to Pages. First deploy takes ~1–2 min;
watch it under the repo's **Actions** tab.

### After setup — publishing changes

Just push to `main`:

```bash
git add -A && git commit -m "polish" && git push
```

The site rebuilds and redeploys automatically.

### Manual alternative (no Actions)

```bash
npm run build
touch out/.nojekyll          # so GitHub doesn't strip the _next folder
# then serve / commit the contents of ./out to your Pages branch
```

---

## Notes

- **Custom domain?** Add a `CNAME` file in `public/` with your domain and set it in Settings → Pages.
- **Project repo instead of a user site** (e.g. `github.com/bryancio506/portfolio`): build with
  `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build` so asset paths resolve under the subpath.
- Calendly and the résumé PDF are wired up in `data/content.ts` (`calendly`, `cv`).
