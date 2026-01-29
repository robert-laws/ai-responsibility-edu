# AI Responsibility Education

An interactive website teaching undergraduate students how to use AI responsibly.

## Vision

A colorful, engaging educational platform with interactive modules that help students understand AI ethics, academic integrity, and privacy considerations when using AI tools.

## Target Users

- Undergraduate students
- No assumed technical background
- Familiar with AI tools like ChatGPT but may lack understanding of responsible use

## Core Features

### 1. Learning Module
Interactive lessons (2-3 per topic):

**AI Ethics & Bias** (3 lessons)
1. What is AI Bias? - How AI systems can reflect and amplify societal biases
2. Fairness in AI - Different definitions of fairness and why they matter
3. Your Role - How to identify and question biased AI outputs

**Academic Integrity** (2 lessons)
1. AI as a Tool, Not an Author - Understanding appropriate use in academic work
2. Citation & Transparency - How to properly disclose and cite AI assistance

**Privacy & Security** (2 lessons)
1. What You Share Matters - Understanding data collection in AI tools
2. Protecting Yourself - Practical steps for safe AI usage

### 2. Quiz/Assessment Module
- Knowledge checks after each topic
- Progress tracking (saved locally in browser via localStorage)
- Immediate feedback on answers
- Summary of results

### 3. Learn More Module
Curated resources organized by topic, with space for expansion.

**Starter Resources** (to research and include):
- MIT AI Ethics course materials
- Stanford HAI (Human-Centered AI) resources
- AI Now Institute reports
- ACM Code of Ethics
- University AI usage policies (examples)
- UNESCO AI Ethics recommendation

**Structure**:
- Organized by topic (Ethics, Academic Integrity, Privacy)
- Each resource has: title, source, brief description, link
- "Suggest a Resource" placeholder for future additions

## Tech Stack

- **Framework**: React (with Vite)
- **Styling**: TBD (consider Tailwind CSS for rapid prototyping)
- **Routing**: React Router
- **State/Storage**: localStorage for progress persistence
- **Deployment**: GitHub Pages (static site)

## Design Direction

- **Color Palette**: Earth tones (warm browns, olive greens, terracotta, sand, muted orange)
  - Primary: Terracotta/burnt orange for CTAs and highlights
  - Secondary: Olive green for accents
  - Background: Warm sand/cream tones
  - Text: Dark brown/charcoal
- Engaging and approachable feel
- Mobile-responsive
- Accessible (WCAG guidelines)
- **Branding**: None currently - leave placeholders for:
  - Logo (header)
  - Institution name
  - Footer attribution

## Constraints

- No backend (GitHub Pages static hosting only)
- Progress tracking via localStorage (no user accounts)
- Must work offline after initial load (nice-to-have)

## Project Structure (Planned)

```
src/
  components/       # Reusable UI components
  pages/            # Main page components
    Home.jsx
    Learning.jsx
    Quiz.jsx
    LearnMore.jsx
  data/             # Content data (lessons, quiz questions, resources)
  hooks/            # Custom React hooks (useProgress, etc.)
  styles/           # Global styles
  App.jsx
  main.jsx
```

## Placeholders to Fill Later

- [ ] Logo image (header)
- [ ] Institution/course name
- [ ] Footer attribution text
- [ ] Additional Learn More resources
- [ ] Custom quiz questions (if desired)