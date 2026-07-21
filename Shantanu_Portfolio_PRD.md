# Product Requirement Document (PRD)
## Shantanu Sapkal — Developer Portfolio Website

| | |
|---|---|
| **Author** | Shantanu Sapkal |
| **Document Type** | Product Requirement Document |
| **Version** | 1.0 |
| **Date** | July 19, 2026 |
| **Status** | Draft |

---

## 1. Overview

### 1.1 Purpose
This document defines the requirements for Shantanu Sapkal's personal developer portfolio website. The site's primary purpose is to showcase Shantanu's skills, projects, and experience as a Full Stack (MERN) Developer to recruiters, hiring managers, and collaborators, and to drive inbound contact for Software Engineering / Full Stack Internship opportunities.

### 1.2 Background
Shantanu is an Information Technology undergraduate (PCET's Nutan Maharashtra Institute of Engineering and Technology, Pune) with hands-on experience in the MERN stack, a strong DSA/Java foundation, and a completed MERN Stack Developer internship at Codec Technologies Pvt. Ltd. The portfolio should reflect this technical identity: clean, modern, and code-inspired.

### 1.3 Goals & Objectives
- Present a credible, professional first impression to recruiters within seconds of landing on the page.
- Clearly communicate skills, projects, and experience without requiring a resume download.
- Drive contact/conversion via a visible, low-friction contact form and direct links (email, phone, LinkedIn, GitHub).
- Be fully responsive and fast-loading across devices.
- Be easy to update as new projects, certifications, and experience are added.

### 1.4 Target Audience
- Recruiters and hiring managers screening candidates for SDE/Full Stack Intern roles.
- Engineering managers/technical interviewers doing a pre-interview background check.
- Fellow developers and collaborators (via GitHub/LinkedIn referral).

### 1.5 Success Metrics
- Contact form submissions / email click-throughs.
- Average session duration and scroll depth to the Projects/Experience sections.
- GitHub and LinkedIn click-through rate from the site.
- Positive recruiter feedback / interview conversion rate attributable to the portfolio link.

---

## 2. Design Direction

Design direction is based on the provided reference screenshots (a dark, code-themed single-page portfolio).

### 2.1 Visual Theme
- **Theme:** Dark mode only, developer/code-inspired aesthetic.
- **Background:** Near-black (`#0A0E12` – `#0D1117` range) with a very subtle radial teal glow behind key sections (About stat cards, Skills cards, Contact form) for depth.
- **Primary accent:** Teal / cyan (`#2DD4BF`–`#22D3C7` range) — used for the logo, active nav link, section eyebrows, primary buttons, links, tags/badges, and icon backgrounts.
- **Secondary accent:** Deeper teal/green (`#0F766E` range) for decorative floating dots.
- **Surface color:** Charcoal cards (`#111827`–`#151B23` range) with 1px low-opacity teal/gray borders and soft rounded corners (`~12–16px` radius).
- **Text colors:** Off-white (`#F5F7FA`) for headings, muted gray (`#94A3B8`) for body copy, teal for links/labels.

### 2.2 Typography
- **Headings:** Bold, modern sans-serif (e.g., Inter, Sora, or Space Grotesk) — large, high-contrast white headings (e.g., "Shantanu Sapkal", "About Me", "Featured Projects").
- **Body:** Clean sans-serif, regular weight, muted gray, generous line-height for readability.
- **Monospace accents:** Used deliberately for brand/code-flavored elements — the logo `<SS />`, section "eyebrow" labels (e.g., `Hello, I'm`, `What I know`, `Where I've worked`), and the `Scroll ↓` cue — echoing a developer/IDE feel.

### 2.3 Layout & Components
- **Navbar:** Fixed top bar — logo (`<SS />`) left, center nav links (Home / About / Skills / Projects / Experience / Contact), teal pill-shaped "Let's Talk" CTA button on the right. Active section is highlighted in teal.
- **Hero (Home):** Two-column layout — left: eyebrow text, name, role, short bio, two CTA buttons ("View My Work" solid teal, "Get In Touch" outlined), and social icon row (LinkedIn, GitHub, Email); right: circular profile photo with a soft teal ring/glow and floating accent dots. "Scroll ↓" cue at the bottom center.
- **About:** Two-column layout — left: narrative bio paragraphs with key terms highlighted in teal/bold; right: an "Education" card with degree, institute, location, dates, and a membership badge. Below: stat cards (CGPA, Graduation Year).
- **Skills & Certifications:** Icon-led category cards in a grid (Programming Languages, Frontend, Backend, Core CS, Tools) with pill-shaped skill tags. A separate "Certifications" grid below with title + issuer per card.
- **Projects:** Card-based layout per project — icon, title, GitHub/live-link icon buttons, description, tech-stack pill tags, and a bulleted list of key contributions. "More projects coming soon…" placeholder for future entries.
- **Experience:** Vertical timeline card — role title (with icon), company, dates, an approval/credential badge, and bulleted responsibilities/achievements.
- **Contact:** Two-column layout — left: stacked contact cards (Email, Phone, LinkedIn, GitHub), each clickable with an external-link icon; right: a contact form (Name, Email, Message, "Send Message" CTA).
- **Footer:** Logo, copyright line, and repeated social icons.

### 2.4 Iconography
Minimal line icons throughout (mail, phone, briefcase, graduation cap, wrench, code brackets, database, GitHub, LinkedIn, external-link arrow) to reinforce the technical, clean aesthetic.

---

## 3. Site Structure & Content Requirements

Single-page application with smooth-scroll anchor navigation: **Home → About → Skills → Projects → Experience → Contact**.

### 3.1 Home / Hero Section
| Field | Content |
|---|---|
| Eyebrow | "Hello, I'm" |
| Name | Shantanu Sapkal |
| Role | Full Stack Developer |
| Bio | Passionate about building scalable applications with the MERN stack. Strong foundation in Java, DSA, and clean code principles. |
| Primary CTA | "View My Work" → scrolls to Projects |
| Secondary CTA | "Get In Touch" → scrolls to Contact |
| Social links | LinkedIn, GitHub, Email |
| Visual | Profile photo in circular frame |

### 3.2 About Section
- **Bio paragraphs (from resume):**
  - Motivated Information Technology undergraduate with strong fundamentals in **Java** and **Data Structures & Algorithms**.
  - Hands-on experience in full-stack development using the **MERN stack**; passionate about building scalable applications, writing clean backend logic, and continuously improving problem-solving skills.
  - Currently seeking a Software Engineering / Full Stack Intern role to contribute to real-world projects and grow as a developer.
- **Education card:**
  - Bachelor of Engineering in Information Technology
  - PCET's Nutan Maharashtra Institute of Engineering and Technology
  - Pune, India | Aug 2023 – May 2027
  - Badge: ISTE Member (2025–2027)
- **Stat cards:** CGPA 8.81, Graduation Year 2027

### 3.3 Skills & Certifications Section
**Skill categories:**
| Category | Skills |
|---|---|
| Programming Languages | Java, JavaScript |
| Frontend | React.js, HTML, CSS |
| Backend | Node.js, Express.js, MongoDB |
| Core CS | Data Structures & Algorithms, Object-Oriented Programming |
| Tools | Git, GitHub, VS Code |

*(Note: resume also lists SQL and DBMS/Computer Networks under Core CS — recommend adding these to the site for completeness.)*

**Certifications:**
| Certification | Issuer |
|---|---|
| Data Structures and Algorithms using Java | Apna College |
| Full Stack Web Development | Apna College |
| Learn JavaScript | IBM SkillsBuild |
| Artificial Intelligence Fundamentals | IBM SkillsBuild |
| AWS Solutions Architecture Job Simulation | Amazon Web Services |
| Software Engineering Job Simulation | Accenture Nordics |

*(Note: screenshots show only 4 certification cards; resume lists 6. Site should be updated to include all 6, plus the ISTE membership if not already shown elsewhere.)*

### 3.4 Projects Section
**Project 1 — Bodhi AI** *(new — not yet on site; resume shows this replaces/supersedes the "MERN Stack Todo Application" shown in screenshots)*
- Live: bodhi-ai-eight.vercel.app | Mar 2026
- Tech: React.js, Vite, Node.js, Express.js, MongoDB, JavaScript, JWT, OpenAI API, Sarvam AI
- Full-stack AI-powered conversational platform (MERN).
- JWT authentication with Access Token (frontend) + HttpOnly Refresh Tokens, bcrypt hashing, protected routes.
- Secured APIs with authorization middleware, Express Validator, rate limiting, and error handling.
- Integrated OpenAI API for real-time conversations and Sarvam Speech-to-Text API for voice interactions; secure audio uploads via Multer.
- RESTful APIs (Express.js, MongoDB, MVC architecture) for auth and chat-thread management.
- Responsive React UI: chat history, Markdown rendering, syntax highlighting, Context API, Axios.
- Deployed: frontend on Vercel, backend on Render, with secure CORS/env config.

**Project 2 — NivasZone**
- Live: nivaszone.onrender.com | Dec 2025
- Tech: Node.js, Express.js, MongoDB, EJS, Mapbox API, Cloudinary, Passport.js, HTML, CSS, JavaScript
- Full-stack Airbnb-style property listing/booking application.
- Session-based auth via Passport.js with OTP email verification (Brevo).
- Mapbox API integration for interactive, location-based listings.
- Booking, payment, review, and profile modules.
- RESTful APIs (MVC architecture) for users, listings, bookings, reviews, payments.
- Cloudinary + Multer for image uploads.
- Authorization middleware, server-side validation, centralized error handling, flash messages.
- Deployed on Render with a responsive EJS UI.

**Project 3 — MERN Stack Todo Application** *(currently live on site — retain or archive)*
- Full-stack Todo management app with JWT auth, RESTful APIs, responsive UI.
- Tech: MongoDB, Express.js, React.js, Node.js, JWT.

*Each project card should retain: icon, title, GitHub icon-link, live-demo icon-link, short description, tech-stack pill tags, and bulleted highlights.*

### 3.5 Experience Section
**MERN Stack Developer Intern** — Codec Technologies Pvt. Ltd. (AICTE & ICAC Approved)
Dec 2025 – Jan 2026
- Developed responsive full-stack web applications using the MERN stack following industry best practices.
- Built RESTful APIs with Node.js, Express.js, and MongoDB; integrated with React.js frontend.
- Implemented CRUD operations, authentication, routing, and database integration.
- Collaborated with mentors through code reviews, technical sessions, and project-based development.

### 3.6 Contact Section
| Field | Value |
|---|---|
| Heading | "Let's Work Together" |
| Subtext | "I'm currently looking for internship opportunities. Feel free to reach out!" |
| Email | shantanusapkal07@gmail.com |
| Phone | +91-8080554708 |
| LinkedIn | linkedin.com/in/shantanusapkal |
| GitHub | github.com/shantanu-07l *(resume shows this handle; screenshots display github.com/shantanusapkal — reconcile to the correct/current handle)* |
| LeetCode | leetcode.com/u/Shantanu00713 *(present in resume but missing from current site — recommend adding as a contact/social link)* |
| Form fields | Name, Email, Message + "Send Message" button |

### 3.7 Footer
- Logo (`<SS />`), copyright line ("© 2026 Shantanu Sapkal"), repeated social icons (LinkedIn, GitHub, Email).

---

## 4. Functional Requirements

| ID | Requirement |
|---|---|
| FR-1 | Fixed navbar with smooth-scroll links to all six sections; active-section highlighting on scroll. |
| FR-2 | Hero CTAs must scroll to their respective sections ("View My Work" → Projects, "Get In Touch" → Contact). |
| FR-3 | "Let's Talk" navbar button scrolls to or opens the Contact section. |
| FR-4 | Contact form must validate required fields (Name, Email format, Message) client-side before submission. |
| FR-5 | Contact form submissions should be delivered via email (e.g., EmailJS, Formspree, or a custom Node/Express endpoint) — no backend database required unless message history is desired. |
| FR-6 | All external links (GitHub, LinkedIn, live project demos, LeetCode) open in a new tab. |
| FR-7 | Skill tags, certification cards, and project cards should be data-driven (array/JSON-based) so new entries can be added without touching layout code. |
| FR-8 | "Scroll ↓" indicator on Home should animate subtly and disappear/fade once the user scrolls. |

## 5. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Responsiveness | Fully responsive across mobile, tablet, and desktop breakpoints; two-column sections (About, Contact) stack vertically on mobile. |
| Performance | Lighthouse performance score ≥ 90; hero image and any illustrations optimized/lazy-loaded. |
| Accessibility | WCAG AA color contrast (verify teal-on-dark and gray-on-dark text meet contrast minimums); semantic HTML; keyboard-navigable nav and form. |
| SEO | Descriptive `<title>`, meta description, Open Graph tags (name, role, profile image) for link-sharing previews. |
| Browser support | Latest two versions of Chrome, Firefox, Safari, Edge. |
| Hosting | Static/JAMstack hosting recommended (Vercel or Netlify), consistent with existing project deployments. |
| Maintainability | Content (skills, projects, certifications, experience) should live in a single config/data file for easy updates. |

## 6. Recommended Tech Stack

Given Shantanu's existing MERN proficiency and current site structure:
- **Framework:** React.js (Vite) — matches Bodhi AI project stack.
- **Styling:** Tailwind CSS (utility classes align well with the card-heavy, dark-theme design system described above).
- **Animations:** Framer Motion (for scroll reveals, hover states, floating accent dots) or CSS transitions for a lighter footprint.
- **Form handling:** EmailJS or Formspree for a no-backend contact form; alternatively a lightweight Express endpoint if a backend is desired to demonstrate full-stack skill.
- **Deployment:** Vercel.

## 7. Open Questions / Gaps to Resolve
1. **GitHub handle mismatch:** resume lists `github.com/shantanu-07l`; screenshots show `github.com/shantanusapkal`. Confirm the correct/current handle before launch.
2. **Project list is outdated:** current site shows only the Todo App; resume includes two newer, more substantial projects (Bodhi AI, NivasZone) that should be added — likely the strongest portfolio pieces.
3. **Certifications list is incomplete on-site:** 4 of 6 resume certifications are shown; add "Full Stack Web Development" (Apna College) and "Learn JavaScript" (IBM SkillsBuild).
4. **LeetCode profile** is on the resume but absent from the site — decide whether to surface it (useful for demonstrating DSA strength).
5. **Skills gaps:** SQL and DBMS/Computer Networks appear on the resume's Core CS list but not on the site — confirm whether to add.
6. Decide whether "MERN Stack Todo Application" should be kept, replaced, or moved to an archived/"other projects" section now that two stronger projects exist.

## 8. Milestones (Suggested)
| Phase | Scope |
|---|---|
| Phase 1 | Content update — sync Projects, Skills, and Certifications sections with current resume data. |
| Phase 2 | Resolve open questions (handles, missing links) and finalize copy. |
| Phase 3 | Visual polish pass — confirm theme tokens (colors, spacing, type scale) against this document. |
| Phase 4 | QA — responsiveness, accessibility, form functionality, cross-browser check. |
| Phase 5 | Deploy and share link with target recruiters/network. |
