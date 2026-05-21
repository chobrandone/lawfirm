# LEGAL POWER FIRM — React Website

Full-stack website built with **React + Vite** (frontend) and **Node.js + Express** (backend contact form API).

---

## Project Structure

```
legal-power-firm-react/
├── client/          React + Vite frontend
│   ├── src/
│   │   ├── components/   Navbar, Footer, WhatsApp, Reveal, etc.
│   │   ├── pages/        Home, About, Services, Team, FAQ, Contact
│   │   ├── data/         config.js, services.js, faqs.js, team.js
│   │   ├── hooks/        useReveal.js (scroll animations + counters)
│   │   └── styles/       main.css
│   └── vite.config.js
└── server/          Node.js Express API
    ├── index.js     Contact form → Nodemailer
    └── .env.example
```

---

## Quick Start (Local Development)

### 1 — Install dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 2 — Configure the backend

```bash
cd server
cp .env.example .env
# Edit .env with your SMTP credentials (Gmail App Password recommended)
```

### 3 — Run both servers

```bash
# Terminal 1 — Frontend (http://localhost:3000)
cd client && npm run dev

# Terminal 2 — Backend (http://localhost:5000)
cd server && npm run dev
```

---

## Deploy to GitHub Pages (Free Live Link)

### Step 1 — Update the repo name in vite.config.js

```js
// client/vite.config.js
base: '/YOUR-REPO-NAME',   // must match your GitHub repository name
```

### Step 2 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — LEGAL POWER FIRM website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Set Source to **GitHub Actions**

### Step 4 — Wait ~2 minutes

GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and deploys on every push to `main`.

Your live link will be:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## Deploy the Node.js Backend (for live contact form)

The contact form needs the Node.js server running somewhere. Free options:

| Platform | Free tier | Setup |
|---|---|---|
| **Railway** | Yes | Connect GitHub repo, set env vars |
| **Render** | Yes | Connect GitHub repo, set env vars |
| **Fly.io** | Yes | `flyctl deploy` from server/ folder |

Once deployed, add your backend URL as a GitHub Actions secret:
- GitHub repo → **Settings** → **Secrets** → New secret
- Name: `VITE_API_URL`
- Value: `https://your-backend.railway.app` (no trailing slash)

---

## Customise Firm Details

Edit `client/src/data/config.js`:

```js
export const FIRM = {
  email:    'info@legalpowerfirm.cm',
  phone:    '+237 653 332 269',
  whatsapp: '237653332269',
  address:  'Yaoundé, Cameroon',
  // ...social links
};
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, Vite 5 |
| Styling | Custom CSS (Playfair Display + Raleway) |
| HTTP Client | Axios |
| Backend | Node.js, Express 4 |
| Email | Nodemailer |
| CI/CD | GitHub Actions |
| Hosting | GitHub Pages (frontend) |
