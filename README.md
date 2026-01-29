# Kulture Kore - Official Website

![Kulture Kore](https://img.shields.io/badge/Status-Production-success)
![Version](https://img.shields.io/badge/Version-2.9-blue)
![Framework](https://img.shields.io/badge/Framework-Hono-orange)

**사람을 모으는 힘이 세상을 바꾸는 힘입니다**  
*The power to bring people together is the power to change the world.*

---

## 🌟 About Kulture Kore

Kulture Kore is an Art Holding Company that creates and manages five unique brands across performance, agency, community, space, and stage sectors.

컬쳐코어는 공연, 에이전시, 커뮤니티, 공간, 극장 분야에서 5개의 독특한 브랜드를 창조하고 관리하는 아트 홀딩 컴퍼니입니다.

---

## 🎨 Our Brands

### 1. **Artpie** (아트파이)
- **Type**: Planning / 기획사
- **Focus**: Performance planning, event management, arts education
- **Services**: 공연 기획 및 제작, 기업 및 개인 행사 대행, 예술 교육 프로그램

### 2. **Utopia X** (유토피아X)
- **Type**: Agency / 에이전시
- **Focus**: Artist management, talent booking
- **Services**: 아티스트 매니지먼트, 부킹 서비스, 커리어 개발

### 3. **Trendy Motion** (트렌디모션)
- **Type**: Community / 커뮤니티
- **Focus**: Dance community, networking
- **Members**: 100+ active dance members

### 4. **AP Studio** (에이피 스튜디오)
- **Type**: Space / 공간
- **Focus**: Practice rooms, workspace
- **Facilities**: 3 professional practice rooms, modern office space

### 5. **Walif** (와리프)
- **Type**: Theater & Stage / 극장
- **Focus**: Performance venue, events
- **Features**: Intimate theater, professional stage & lighting

---

## 🚀 Tech Stack

- **Framework**: [Hono](https://hono.dev/) - Lightweight web framework
- **Runtime**: Cloudflare Workers
- **Deployment**: Cloudflare Pages
- **Frontend**: HTML5, TailwindCSS, Vanilla JavaScript
- **Backend**: TypeScript, Hono
- **Build Tool**: Vite
- **Version Control**: Git

---

## 📦 Project Structure

```
webapp/
├── src/
│   ├── index.tsx           # Main application entry
│   ├── components/         # React-like components
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   └── pages/              # Page components
│       ├── home.tsx
│       ├── brands.tsx
│       └── contact.tsx
├── public/
│   └── static/             # Static assets
│       ├── style.css       # Main stylesheet
│       ├── app.js          # Frontend JavaScript
│       ├── *.png           # Brand logos and images
│       └── logo-*.png      # Company logos
├── dist/                   # Build output
├── wrangler.jsonc          # Cloudflare configuration
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/kulture-kore.git
cd kulture-kore

# Install dependencies
npm install

# Start development server
npm run dev

# Or use sandbox mode
npm run dev:sandbox
```

### Available Scripts

```bash
npm run dev          # Start Vite dev server
npm run dev:sandbox  # Start Wrangler dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run deploy       # Deploy to Cloudflare Pages
```

---

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare**
   ```bash
   npm run deploy:prod
   ```

3. **Environment Variables**
   - No environment variables required for basic deployment
   - Add any secrets via Cloudflare dashboard if needed

---

## 📊 Features

### ✨ Design System
- **Luxury & Glamorous**: Purple gradient theme with neon accents
- **Responsive**: Mobile-first design, perfect on all devices
- **Interactive**: Smooth animations, hover effects, custom cursor
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

### 🎯 Pages
1. **Home**: Hero section, WHO WE ARE, OUR BRANDS showcase
2. **Brands**: Detailed information about all 5 brands
3. **Contact**: Contact form, location map, social links

### 🌟 Special Features
- Interactive star background with mouse/touch interaction
- Custom white star cursor with purple outline
- Smooth scroll animations
- 3D card hover effects
- Gradient text effects
- Mobile hamburger menu

---

## 📞 Contact Information

- **Email**: official@kulturekore.com
- **Phone**: +82 70-7585-6123 / +82 10-5843-1809
- **Address**: 14, Hongik-ro 6-gil, Mapo-gu, Seoul, Korea
- **Website**: https://kulture-kore.pages.dev

### Social Media
- **Instagram**: [@utopiax.official](https://www.instagram.com/utopiax.official/)
- **YouTube**: [@kulturekore](https://www.youtube.com/@kulturekore)

---

## 👥 Company Information

**컬쳐코어 Kulture Kore**

- **대표**: 전상진, 김성광
- **CEO**: Jeon Sang-jin, Kim Sung-kwang
- **등록번호**: 000-00-00000
- **사업자등록**: 2023-서울마포-0566

---

## 📈 Statistics

- **Revenue Growth**: 500% (2022-2025)
- **Active Brands**: 5
- **Annual Events**: 100+ minimum
- **Community Members**: 100+ dancers

---

## 📄 License

© 2022-2026 Kulture Kore Corp. All rights reserved.

---

## 🙏 Acknowledgments

Built with modern web technologies and deployed on Cloudflare's global edge network for optimal performance worldwide.

---

## 📝 Changelog

### v2.9 (2026-01-29)
- Perfect brand cards layout with centered bottom row
- Improved mobile responsiveness

### v2.8 (2026-01-29)
- Redesigned footer with 3-column layout
- Fixed mobile Contact page alignment

### v2.7 (2026-01-29)
- Updated footer motto to people-focused message
- Disabled brand card clicks
- Improved mobile UX across all pages

### v2.6 (2026-01-28)
- CONTACT page final adjustments
- Added YouTube social links

### v2.5 (2026-01-28)
- Major CONTACT page enhancements
- Custom star cursor implementation

---

**Made with ❤️ by Kulture Kore**
