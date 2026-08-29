# Portfolio

An interactive, motion-forward personal developer portfolio built with React + Vite, GSAP/ScrollTrigger, Framer Motion, and Lenis smooth-scroll.

All site content (name, bio, projects, skills, socials) lives in one place: [src/data/content.js](src/data/content.js). Edit that file to make it yours — no other files need to change.

## Local development

```bash
npm install
npm run dev
```

Open the printed `localhost` URL. Also available:

```bash
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Deployment (Vercel — free)

This is a static site, so hosting is free and mostly automatic once wired up.

1. **Push to GitHub**
   - Create a new *empty* repository on [github.com](https://github.com/new) — don't add a README/.gitignore/license, this project already has them.
   - In this project folder:
     ```bash
     git add -A
     git commit -m "Initial commit"
     git remote add origin <your-repo-url>
     git branch -M main
     git push -u origin main
     ```

2. **Connect Vercel**
   - Go to [vercel.com](https://vercel.com) → **Sign up** → **Continue with GitHub**.
   - Click **Add New… → Project**, then pick this repo from the list.
   - Vercel auto-detects the Vite preset (build command `npm run build`, output directory `dist`) — no config file needed.
   - Click **Deploy**. After ~1 minute you'll get a live URL like `your-project.vercel.app`.

3. **From then on**
   - Every `git push` to `main` automatically triggers a new deployment — no manual re-upload, ever.
   - A custom domain can be added later under the project's **Settings → Domains** in Vercel. The free `.vercel.app` URL works fine on its own if you don't want to buy one.
