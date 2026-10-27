# Abrar Jaman Gazi — Personal Developer Portfolio Website

A personal portfolio website for **Abrar Jaman Gazi**, Computer Science and Engineering student at **United International University (UIU)**, Dhaka, Bangladesh. Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design & Aesthetic Highlights

- **Aesthetic Direction**: Minimal, developer-centric design inspired by modern engineering portfolios. Deep charcoal background (`#0B0F17`), off-white typography, electric blue (`#38BDF8`), and violet (`#8B5CF6`) accents.
- **Theme**: Dark mode by default with an instantaneous, hydration-safe **Light / Dark Mode Toggle**.
- **Responsive Layout**: Designed for mobile phones, tablets, laptops, and desktop screens with semantic HTML and accessible ARIA attributes.
- **Micro-Interactions**: Smooth section scrolling, active navigation indicator, interactive category filter tabs, and responsive mobile drawer navigation.

---

## 📂 Key Sections & Structure

1. **Sticky Navigation Bar**: Smooth scrolling links to `Home`, `About`, `Skills`, `Projects`, `Education`, and `Contact`, with theme toggle and mobile navigation drawer.
2. **Hero Section**:
   - Small introductory label: `"CSE Student | Software Developer | AI/ML Enthusiast"`
   - Main heading: `"Hi, I'm Abrar Jaman Gazi."`
   - Supporting headline: `"Building thoughtful software and exploring intelligent systems."`
   - Primary CTA: *"Explore My Projects"* (smooth scrolls to `#projects`)
   - Secondary CTA: *"Download CV"* (downloads `/cv.pdf`)
   - Direct social links with icons for GitHub, LinkedIn, and Email.
   - Styled Portrait Crop with fallback monogram and status indicators.
   - Animated scroll indicator.
3. **About Me**:
   - Authentic narrative highlighting undergraduate study at United International University (UIU).
   - Core interests: Full-stack web development, practical software engineering, machine learning & deep learning, data mining, and continuous technical growth.
   - Compact highlights for university, completed FYDP II, and merit/project show recognitions.
4. **Skills & Technologies**:
   - Filterable categories: **Programming** (Python, JavaScript), **Frontend** (React, HTML5, CSS3, Tailwind CSS), **Backend** (Node.js, Express.js), **Frameworks & Tools** (Next.js, Git, GitHub), **Databases** (MongoDB, MySQL), and **AI & Data** (Machine Learning, Deep Learning, Data Mining).
   - Visual distinction between practical software development and AI/data research.
   - Zero arbitrary percentage bars or misleading proficiency metrics.
5. **Featured Projects**:
   - **CampusCollab**: Student collaboration & freelancing ecosystem (MERN stack).
   - **FitLog**: Workout tracking and exercise discovery platform (Next.js & TypeScript).
   - **Context-Wise Multimodal Meme Analysis — Veracity Intent Classification with Faithful Explanation**: Academic research capstone (FYDP II).
   - **Disaster Assistance and Support Hub**: Real-time SOS broadcasting and relief coordination platform.
   - **Hand Gesture Controlled Smart Wheelchair**: Assistive Arduino prototype with gesture steering and telemetry.
6. **FYDP II Capstone Spotlight**:
   - Distinctive spotlight container detailing the problem, multimodal vision-language approach, dual-objective veracity & intent classification, and faithful explainability rationales.
7. **Education & Achievements**:
   - **United International University (UIU)**: B.Sc. in Computer Science and Engineering.
   - **CSE Project Show Summer 2024**: Second Runner-Up award among 80+ projects.
   - **Merit Scholarship**: Institutional academic recognition.
8. **Contact Section**:
   - Heading: *"Have an opportunity or an interesting project in mind?"*
   - Direct email: `abrarjamangazi.study@gmail.com` with one-click clipboard copy.
   - Functional contact form (`name`, `email`, `subject`, `message`) with client validation and API route (`/api/contact`).
   - Professional footer with back-to-top control and copyright year.

---

## 🖼️ Replacing Profile Photo & CV

- **Profile Photo**: Drop your profile image named `profile.jpg` into the `public/` folder (`public/profile.jpg`). The `AvatarFrame` component will automatically display your real photograph with the custom crop and border styling.
- **Curriculum Vitae**: Replace `public/cv.pdf` with your updated resume PDF anytime.

---

## ⚙️ Environment Variables (Optional)

To enable live email forwarding directly to `abrarjamangazi.study@gmail.com` from the contact form, create a `.env.local` file:

```env
RESEND_API_KEY=re_your_api_key_here
```
*(If omitted, the contact form validates and logs submissions cleanly while informing visitors of direct email options).*
