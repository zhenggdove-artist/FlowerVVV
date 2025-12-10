<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `VITE_GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key  
   - You can also provide it at runtime via `window.GEMINI_API_KEY = '...'` before loading the bundle or append `?apiKey=...` to the URL (stored to `localStorage` after first use).
3. Run the app:
   `npm run dev`

## Build for GitHub Pages

Source lives in `docs/src`. Run `npm run bundle` from `docs/` to:
1) build to `docs/dist/` via Vite with relative asset paths, then  
2) copy the built assets + `index.html` into `docs/` for Pages hosting.

Commit `docs/index.html` and `docs/assets/**` to deploy. `docs/dist/` stays ignored.

GitHub Pages 設定建議：
- 如果 Source 設為 `main` + `/docs`，直接部署即可。
- 如果 Source 設為 `main`（根目錄），我們在根目錄放了 `index.html` 會自動導向 `docs/index.html`。
