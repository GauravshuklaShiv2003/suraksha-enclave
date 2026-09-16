# Suraksha Enclave microsite

React + Vite + Tailwind CSS + Framer Motion + use-sound.

## Run it

1. Install Node.js 18+ (nodejs.org).
2. In this folder run:
   npm install
   npm run dev
3. Open the link it prints (usually http://localhost:5173).

To publish: `npm run build` creates a `dist` folder you can upload to Vercel, Netlify or any host.

## Add your assets

- `public/hover.mp3`  short, soft tick (under 100 ms)
- `public/slide.mp3`  soft whoosh (300–600 ms)
- `public/images/...` see public/images/README.txt

## Where to edit things

- All text, numbers, contacts: `src/data/content.js`
- Colours and fonts: `tailwind.config.js`
- Animation speed/feel: `src/lib/motion.js`
- Sound volume: `src/hooks/useUISound.jsx`

## Notes

- Browsers block sound until the visitor clicks or taps once, so hover ticks start after the first interaction. There is a mute button in the nav.
- Animations respect the visitor's "reduce motion" system setting.
