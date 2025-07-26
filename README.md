## Demo: https://jakuzzibubbles.github.io/portfolio-white/

## Deployment with GitHub Pages

### 1️⃣ Install `gh-pages`
First, install the `gh-pages` package as a dev dependency:

```sh
npm install gh-pages --save-dev
```

### 2️⃣ Add Deployment Scripts
Update `package.json` with the following scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://your-github-username.github.io/repository-name"
```

### 3️⃣ Configure Vite
Modify `vite.config.js` to set the correct base path:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/repository-name/",
  plugins: [react()],
});
```

### 4️⃣ Build & Deploy
Run the following commands:

```sh
npm run build
npm run deploy
```

### 5️⃣ Enable GitHub Pages
- Go to your repository on GitHub.
- Navigate to **Settings > Pages**.
- Set the branch to `gh-pages` (if not already set).

### 6️⃣ Access Your Website
Your site will be live at:

```
https://your-github-username.github.io/repository-name
```

## 📌 Notes
- Make sure your repository is public.
- Commit and push your changes before deploying.
