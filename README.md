# Kulture Kore - Art Holding Company Website

![Kulture Kore](https://img.shields.io/badge/Kulture%20Kore-Art%20Holding%20Company-6C5CE7?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Tech-Hono%20%2B%20Cloudflare-orange?style=for-the-badge)

## 📖 Project Overview

**Kulture Kore Corp.** (㈜컬쳐코어) is an Art Holding Company that manages five unique brands across the creative industry. This website showcases our vision, brands, and provides a platform for potential clients and partners to connect with us.

### 🎯 Vision & Mission
- **English**: "We change the world, artistically."
- **Korean**: "세상을 바꾸는 일을 예술적으로 합니다."

---

## 🌐 URLs

### Development (Current)
- **Local Development**: https://3000-iytopsw4gom3fndor4eye-82b888ba.sandbox.novita.ai

### Production (To be deployed)
- **Cloudflare Pages**: [Will be available after deployment]
- **Official Website**: https://www.kulturekore.com

---

## ✨ Features

### Currently Completed Features
- ✅ **Responsive Design** - Mobile-first approach with hamburger menu
- ✅ **Home Page** - Hero section, About, Stats counter animation, Brand previews, CTA
- ✅ **Brands Page** - Detailed information about all 5 brands with external links
- ✅ **Contact Page** - Contact form (Formspree integration), Google Maps, business hours
- ✅ **Scroll Animations** - Smooth fade-in and slide-in effects
- ✅ **Bilingual Support** - English (primary) and Korean (secondary) throughout
- ✅ **Modern Design System** - Custom color palette with purple gradient theme
- ✅ **Interactive Elements** - Hover effects, parallax scrolling, counter animations

### Functional Entry URIs
1. **Home Page**: `/` - Main landing page with hero, about, stats, and brand previews
2. **Brands Page**: `/brands` - Detailed showcase of all 5 brands
3. **Contact Page**: `/contact` - Contact form and information
4. **API Endpoint**: `/api/contact` (POST) - Contact form submission handler

---

## 🏢 Company Information

- **Company Name**: ㈜컬쳐코어 (Kulture Kore Corp.)
- **Type**: Art Holding Company
- **Founded**: 2022
- **CEO**: Jeon Sang-jin (전상진, Born 1997)
- **Address**: 서울시 마포구 홍익로 6길 14
- **Email**: Official@kulturekore.com
- **Phone**: 070-7585-6123

---

## 🎨 Five Brands

### 1. Artpie (아트파이) - CREATE
**Role**: 기획사 / Planning Agency  
**Description**: Performance, event, and educational program planning (Cash Cow)  
**Link**: https://artpieent.com/

### 2. Utopia X (유토피아X) - CONNECT
**Role**: 에이전시 / Agency  
**Description**: Artist management for dancers, musicians, and MCs  
**Link**: https://www.instagram.com/utopiax.official/

### 3. Trendy Motion (트렌디모션) - COMMUNITY
**Role**: 커뮤니티 / Community  
**Description**: Dance community with ~100 members  
**Link**: https://www.instagram.com/trendy_mo.o/

### 4. AP Studio (에이피 스튜디오) - SPACE
**Role**: 공간 / Space  
**Description**: 3 practice rooms + office space  
**Link**: https://naver.me/GctrVAP7

### 5. Walif (와리프) - STAGE
**Role**: 극장 / Theater  
**Description**: 30-seat intimate theater in Gwanak-gu  
**Link**: https://www.spacecloud.kr/space/73075

---

## 📊 Key Statistics

- **500%** - Revenue Growth (2022-2025)
- **200+** - Partner Artists
- **100+** - Annual Events/Performances
- **5** - Active Brands

---

## 🎨 Design System

### Color Palette
```css
Primary: #6C5CE7 (Electric Purple)
Secondary: #1A1A2E (Deep Black)
Accent: #A29BFE (Light Purple)
Background: #FFFFFF
Text: #2D3436
```

### Typography
- **English**: Inter (Google Fonts)
- **Korean**: Noto Sans KR (Google Fonts)

### Icons
- Font Awesome 6.4.0

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Hono (Lightweight web framework)
- **Runtime**: Cloudflare Workers/Pages
- **Styling**: Custom CSS with responsive design
- **Fonts**: Google Fonts (Inter, Noto Sans KR)
- **Icons**: Font Awesome 6.4.0
- **Animations**: CSS3 animations + Intersection Observer API

### Backend
- **API**: Hono routes on Cloudflare Workers
- **Form Handling**: Formspree integration (contact form)

### Development Tools
- **Build Tool**: Vite
- **Package Manager**: npm
- **Process Manager**: PM2 (for development)
- **Deployment**: Wrangler (Cloudflare CLI)

### Data Architecture
- **Storage**: Static site (no database required)
- **External Services**: 
  - Formspree for contact form submissions
  - Google Maps for location display

---

## 🚀 Deployment Status

### Current Environment
- **Platform**: Cloudflare Pages (Ready for deployment)
- **Status**: ✅ Development server active
- **Build Status**: ✅ Successful build
- **Last Updated**: 2026-01-23

### Deployment Configuration
- **Build Command**: `npm run build`
- **Build Output**: `dist/`
- **Node Version**: 18.x or higher
- **Production Branch**: `main`

---

## 📋 Features Not Yet Implemented

1. **Formspree Configuration** - Need to replace `YOUR_FORM_ID` with actual Formspree form ID
2. **SEO Optimization** - Add structured data, sitemap.xml, robots.txt
3. **Analytics Integration** - Google Analytics or similar
4. **Performance Optimization** - Image optimization, lazy loading
5. **Admin Panel** - For content management (if needed in future)
6. **Blog/News Section** - For updates and announcements (optional)
7. **Multi-language Switcher** - Dynamic language toggle (currently bilingual display)

---

## 🔜 Recommended Next Steps

### Immediate Actions
1. ✅ **Deploy to Cloudflare Pages** - Push to production
2. 📧 **Configure Formspree** - Set up contact form endpoint
3. 🔍 **SEO Setup** - Add meta tags, sitemap, robots.txt
4. 📱 **Mobile Testing** - Thorough testing on various devices

### Short-term Improvements
1. 📊 **Analytics** - Add Google Analytics or Cloudflare Analytics
2. 🖼️ **Images** - Add brand logos and company images
3. 🎥 **Media** - Add demo videos or portfolio images
4. 📝 **Content** - Add more detailed case studies

### Long-term Goals
1. 🌐 **Internationalization** - Full multi-language support
2. 📱 **Mobile App** - Consider native app development
3. 🎫 **Booking System** - Integrate online booking for venues
4. 💳 **Payment Integration** - For services and venue rentals

---

## 👥 Target Audience

### Primary
- **International Clients** - Global market expansion
- **Corporate & Institutional Clients** - Event and performance planning

### Secondary
- **Collaboration Partners** - Other creative agencies and artists
- **Investors** - Business development opportunities
- **Artists** - Seeking management and representation

---

## 📞 Contact & Support

For inquiries about the website or services:
- **Email**: Official@kulturekore.com
- **Phone**: 070-7585-6123
- **Instagram**: [@utopiax.official](https://www.instagram.com/utopiax.official/)

---

## 📄 License & Copyright

© 2022-2026 Kulture Kore Corp. All rights reserved.

**CEO**: Jeon Sang-jin  
**Business Registration**: [Number to be added]

---

## 🎉 Credits

**Developed with**:
- Hono Framework
- Cloudflare Workers/Pages
- Vite Build Tool
- Font Awesome Icons
- Google Fonts

**Design Philosophy**: Simple, modern, premium, and creative - reflecting the artistic nature of Kulture Kore.

---

*Last Updated: 2026-01-23*  
*Version: 1.0.0*
