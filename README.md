# ⚡ Akshay Sharma — Developer Portfolio & Systems Showcase

> **High-end personal developer portfolio for Akshay Sharma**, 2nd-Year Computer Science & Engineering undergraduate at **ITM Skills University** (B.Tech CSE 2024 – 2028).

---

## 🌟 Visual & Technical Highlights

- **Dark-First Design System:** Near-black background (`#08090d`, `#111218`) with subtle electric cyan/indigo light beams and glows.
- **Micro-Interactions & Animations:** Staggered text reveals, canvas particle mesh, magnetic button hover, and custom trailing cursor (desktop only; disabled on touch/`prefers-reduced-motion`).
- **Interactive Developer Terminal:** Live simulated shell (`$ bash`) supporting commands: `help`, `whoami`, `skills`, `projects`, `education`, `learning`, `contact`, `sudo hire-akshay`, and `clear`.
- **Command Palette (`⌘K` / `Ctrl+K`):** Spotlight-style shortcut palette to jump to sections, copy email, toggle interface audio FX, or view resume.
- **Single Config / Data File:** All editable details live in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts). No hunting through complex JSX.
- **Interactive Project Deep-Dives:** Modals showcasing architecture notes, test case harnesses, problem statements, and live demos for:
  1. **AgroDirect** — Farm Machinery & Agricultural Marketplace (HTML/CSS/JS)
  2. **CodePulse** — Online C++ Code Evaluation Platform & Sandbox Harness
  3. **QueueSync** — Call Center Queue Simulator (C++, Circular & Min-Heap Queues)
  4. **SentinelGuard** — Financial Fraud & Anomaly Detector (Python, Statistical Z-Score, Matplotlib)
  5. **SonicVibe** — Modern React Web Audio Player & 64-Band Canvas Visualizer
  6. **ITM Campus Resource Hub** — University Notes & Collaborative Archive
- **Live ATS Resume Viewer & Downloader:** Direct in-browser modal with printable view, plaintext copy, and PDF download.
- **Interactive GitHub Matrix:** Simulated 52-week contribution graph with streak statistics and pinned repositories.
- **Web Audio API Feedback:** Subtle, pleasant audio clicks with quick mute toggle.

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ How to Customize Your Portfolio

All your data is centrally managed in **`src/data/portfolioData.ts`**. You do **not** need to modify components to update your information:

### 1. Update Personal & University Info
Open `src/data/portfolioData.ts` and modify `personalInfo`:
```typescript
export const personalInfo = {
  name: "Akshay Sharma",
  title: "Computer Science Engineering Student & Developer",
  university: "ITM Skills University",
  degree: "B.Tech in Computer Science & Engineering",
  year: "2nd Year (Completed Year 1)",
  email: "your.email@example.com",
  // ...
};
```

### 2. Add or Edit Projects
In `projectsData`, add or edit items with your repository and demo URLs:
```typescript
{
  id: "my-new-project",
  title: "My Project Name",
  tagline: "Short one-sentence summary",
  category: "Systems & C++", // or "Web Development", "Python & Data"
  techStack: ["C++", "React", "PostgreSQL"],
  githubUrl: "https://github.com/akshaysharma-dev/my-repo",
  liveDemoUrl: "https://my-demo.vercel.app",
  // ...
}
```

### 3. Add Your Resume PDF
Place your updated resume file in the `public/` directory named `resume.pdf` (e.g. `public/resume.pdf`). The Download buttons and preview modal will immediately link to it!

---

## 🌐 1-Click Deployment

### Deploying to Vercel
1. Push this repository to your GitHub account (`@akshaysharma-dev`).
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"** — your live site will be ready in under 30 seconds!

### Deploying to Netlify
1. Go to [Netlify](https://netlify.com) and click **"Add new site"** > **"Import an existing project"**.
2. Select your GitHub repository.
3. Build command: `npm run build` | Publish directory: `dist`.
4. Click **"Deploy site"**.

---

## 📂 Project Structure

```
portfolio/
├── index.html                   # HTML entry point with fonts & OpenGraph meta tags
├── package.json                 # Dependencies and build scripts
├── vite.config.ts               # Vite configuration with Tailwind CSS plugin
├── public/
│   └── favicon.svg              # Glowing "AS" monogram favicon
└── src/
    ├── App.tsx                  # Main application container
    ├── index.css                # Global Tailwind CSS and glassmorphic styles
    ├── types/
    │   └── index.ts             # TypeScript definitions
    ├── data/
    │   └── portfolioData.ts     # ⭐️ Central data configuration file
    ├── utils/
    │   ├── cn.ts                # Tailwind class merger
    │   ├── sounds.ts            # Web Audio API synthesizer
    │   └── confetti.ts          # Particle celebration helper
    └── components/
        ├── BackgroundEffects.tsx # Canvas star/grid mesh & ambient light beams
        ├── CustomCursor.tsx     # Smooth trailing glow cursor
        ├── ScrollProgress.tsx   # Top reading progress line
        ├── CommandPalette.tsx   # ⌘K Shortcut search modal
        ├── Navbar.tsx           # Glassmorphic sticky navigation
        ├── Hero.tsx             # Main hero with status badge & CTAs
        ├── About.tsx            # ITM Skills University timeline & stats
        ├── Skills.tsx           # Grouped technical skill cards
        ├── Projects.tsx         # Showcase with interactive cards
        ├── ProjectModal.tsx     # Deep-dive architecture modal
        ├── CurrentlyBuilding.tsx# Interactive terminal CLI ($ bash)
        ├── Education.tsx        # ITM Skills University B.Tech timeline
        ├── Experience.tsx       # Hackathons & activities
        ├── Achievements.tsx     # Milestones & certifications
        ├── GitHubSection.tsx    # 52-Week heatmap & pinned repos
        ├── ResumeSection.tsx    # Large resume download CTA
        ├── ResumeModal.tsx      # In-browser ATS resume viewer
        ├── Contact.tsx          # Contact form with celebration feedback
        ├── Footer.tsx           # Footer with live IST clock
        ├── Icons.tsx            # Clean SVG icons
        └── NotFound.tsx         # 404 page
```

---

## 📜 License
Created for **Akshay Sharma** (ITM Skills University). Free for personal use and portfolio customization.
