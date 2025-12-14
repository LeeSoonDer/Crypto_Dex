# CryptoDex – Pokédex for Crypto

CryptoDex is a gamified, retro-styled “Pokédex for Crypto” that turns learning about cryptocurrencies into a mini game.

Browse a pixel-art Dex of curated coins, read origin stories and history logs, explore core concepts in a space-terminal Learn mode, and then test yourself in a Quiz simulation. Built with React + Vite, Tailwind CSS, TypeScript and live price data from the CoinGecko API, deployed on Vercel.

- 🎮 **Game-inspired UI** – Retro space terminal / Pokédex interface with pixel cards, stats panels and scanline effects  
- 📚 **Learn Mode** – Core concepts, asset classes and crypto history with expandable modals and timelines  
- 📊 **Dex Mode** – Filterable and sortable crypto “entries” with lore, risk levels, battle-style stats and related assets  
- 🧠 **Quiz Mode** – 10-question simulation with streaks, ranks, TX_STATUS feedback and shareable results  
- ⚙️ **Tech Stack** – React 19 (Vite), TypeScript, Tailwind CSS, Lucide React, CoinGecko API, deployed via Vercel

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19y3G6PpY-ooam9pOc57LxfxVLK4lBILD

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
