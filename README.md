# 🏡 Jabama Clone (جاباما)

A responsive, full-stack clone of **Jabama**, the popular Iranian accommodation booking platform.

> 🚧 **Project Status: In Active Development**  
> This project is currently a work in progress. The core UI/UX structure, the responsive search flows, and the localized calendar state are fully operational. I am actively working on rolling out backend integrations and user authentication next.

---

## 📂 Codebase Overview

The structure follows clean, modular Next.js design patterns:

```text
├── app/
│   ├── _home-components/       # Sections making up the homepage
│   │   └── _SearchComponent/   # Search bars, drop-downs, and search context
│   ├── chat/                   # User messaging layout (auth protected)
│   ├── context/                # Global search provider (manages date range, guests, destination)
│   ├── favorite/               # User bookmarked properties
│   ├── profile/                # Identity management and profile settings
│   ├── trips/                  # Active and historical reservations
│   ├── globals.css             # Tailwind configuration & global CSS vars
│   └── page.tsx                # Main home screen dashboard assembly
├── components/
│   ├── Calender/               # Pure custom Jalali engine grid and wrappers
│   ├── Footer/                 # Segmented website footer with social maps
│   └── AuthRequiredScreen.tsx  # Fallback roadblock screen for logged-out users
├── data/                       # Mock data files for development
└── lib/                        # Formatting utilities and shared tailwind hooks
```

---

## ⚙️ Local Development Setup

To run this project locally, make sure you have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) ready.

1. **Clone & enter directory:**

   ```bash
   git clone https://github.com
   cd jabama-clone
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the local dev server:**

   ```bash
   pnpm dev
   ```

4. **Open the browser:**
   Head to [http://localhost:3000](http://localhost:3000) to see it running live.

---

## 🚀 Next Steps (Roadmap)

- [ ] **Implement Search & Filtering Functionality:** Build Backend Search Endpoints & Dynamic Filtering.
- [ ] Integrate user authentication (OTP/SMS or passwordless entry layouts).
- [ ] Connect a real backend database (PostgreSQL/Supabase) to replace local mock property arrays.
- [ ] Embed an interactive map screen for searching listings visually.
- [ ] Build a dedicated dashboard flow enabling hosts to create and modify their property posts.
