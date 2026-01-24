import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const HomePage = () => (
  <>
    <Navigation />
    
    {/* Hero Section */}
    <section class="hero" id="hero">
      <div class="hero-content">
        <div class="animate-fadeIn">
          <img 
            src="/static/logo-hero.png" 
            alt="KULTURE KORE" 
            class="hero-logo" 
            style="max-width: 800px; width: 90%; height: auto; margin: 0 auto; display: block;"
          />
        </div>
        <div class="animate-fadeIn delay-200">
          <p style="font-size: clamp(1.2rem, 3vw, 1.8rem); margin-bottom: 0.5rem; font-weight: 600;">
            We change the world, artistically.
          </p>
          <p class="kr" style="font-size: clamp(1rem, 2.5vw, 1.5rem); opacity: 0.9; font-weight: 500;">
            세상을 바꾸는 일을 예술적으로 합니다.
          </p>
        </div>
        <div class="animate-fadeIn delay-400" style="margin-top: 3rem;">
          <a href="/contact" class="btn btn-primary" style="font-size: 1.1rem; padding: 1.2rem 2.5rem;">
            CONTACT US
          </a>
        </div>
        <div class="animate-pulse delay-600" style="margin-top: 5rem;">
          <i class="fas fa-chevron-down" style="font-size: 2rem; opacity: 0.7;"></i>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section class="section-lg bg-light" id="about">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="scroll-animate" style="margin-bottom: 0.5rem;">
            WHO WE ARE
          </h2>
          <h3 class="kr scroll-animate delay-100" style="font-size: clamp(1.4rem, 2.8vw, 2.1rem); margin-bottom: 2rem; opacity: 0.85;">
            우리는
          </h3>
          <p class="scroll-animate delay-200" style="font-size: 1.2rem; color: var(--text-light); max-width: 800px; margin: 1rem auto;">
            Kulture Kore is an Art Holding Company that creates and manages five unique brands 
            across performance, agency, community, space, and stage sectors.
          </p>
          <p class="kr scroll-animate delay-300" style="font-size: 1.1rem; color: var(--text-light); max-width: 800px; margin: 1rem auto;">
            컬쳐코어는 공연, 에이전시, 커뮤니티, 공간, 극장 분야에서 5개의 독특한 브랜드를 
            창조하고 관리하는 아트 홀딩 컴퍼니입니다.
          </p>
        </div>

        {/* Stats */}
        <div class="stats-grid">
          <div class="stat-item scroll-animate delay-100">
            <span class="stat-number" data-count="500">0</span>
            <span class="stat-label">Revenue Growth</span>
            <p class="kr" style="font-size: 0.9rem; color: var(--text-light); margin-top: 0.5rem;">
              매출 성장률 (2022-2025)
            </p>
          </div>
          <div class="stat-item scroll-animate delay-200">
            <span class="stat-number" data-count="5">0</span>
            <span class="stat-label">Active Brands</span>
            <p class="kr" style="font-size: 0.9rem; color: var(--text-light); margin-top: 0.5rem;">
              운영 브랜드
            </p>
          </div>
          <div class="stat-item scroll-animate delay-300">
            <span class="stat-number" data-count="100">0</span>
            <span class="stat-label">Minimum Annual Events</span>
            <p class="kr" style="font-size: 0.9rem; color: var(--text-light); margin-top: 0.5rem;">
              연간 최소 공연/행사
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Brands Preview Section */}
    <section class="section-lg" id="brands-preview">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="scroll-animate" style="margin-bottom: 0.5rem;">
            OUR BRANDS
          </h2>
          <h3 class="kr scroll-animate delay-100" style="font-size: clamp(1.4rem, 2.8vw, 2.1rem); margin-bottom: 1.5rem; opacity: 0.85;">
            우리의 브랜드
          </h3>
          <p class="scroll-animate delay-200" style="font-size: 1.2rem; color: var(--text-light); max-width: 800px; margin: 0.5rem auto;">
            Five unique brands, one unified vision.
          </p>
          <p class="kr scroll-animate delay-300" style="font-size: 1.1rem; color: var(--text-light); max-width: 800px; margin: 0.5rem auto;">
            다섯 가지 브랜드를, 한번에
          </p>
        </div>

        <div class="brands-grid">
          {/* Artpie */}
          <a href="/brands" class="brand-card scroll-animate delay-100">
            <div class="brand-icon">🎭</div>
            <h3 class="brand-name">Artpie</h3>
            <p class="brand-type kr">아트파이 • CREATE</p>
            <p class="brand-desc">
              기획사 - 공연·행사·교육 프로그램 기획
            </p>
            <p class="brand-desc">
              Planning agency for performances, events, and education programs.
            </p>
            <div class="brand-tags">
              <span class="brand-tag">Planning</span>
              <span class="brand-tag">Performance</span>
              <span class="brand-tag">Education</span>
            </div>
          </a>

          {/* Utopia X */}
          <a href="/brands" class="brand-card scroll-animate delay-200">
            <div class="brand-icon">⭐</div>
            <h3 class="brand-name">Utopia X</h3>
            <p class="brand-type kr">유토피아X • CONNECT</p>
            <p class="brand-desc">
              에이전시 - 댄서·뮤지션·MC 등 아티스트 매니지먼트
            </p>
            <p class="brand-desc">
              Artist management for dancers, musicians, and MCs.
            </p>
            <div class="brand-tags">
              <span class="brand-tag">Management</span>
              <span class="brand-tag">Artists</span>
              <span class="brand-tag">Talent</span>
            </div>
          </a>

          {/* Trendy Motion */}
          <a href="/brands" class="brand-card scroll-animate delay-300">
            <div class="brand-icon">💃</div>
            <h3 class="brand-name">Trendy Motion</h3>
            <p class="brand-type kr">트렌디모션 • COMMUNITY</p>
            <p class="brand-desc">
              커뮤니티 - 춤 커뮤니티 (~100명 멤버)
            </p>
            <p class="brand-desc">
              Dance community with approximately 100 members.
            </p>
            <div class="brand-tags">
              <span class="brand-tag">Dance</span>
              <span class="brand-tag">Community</span>
              <span class="brand-tag">Network</span>
            </div>
          </a>

          {/* AP Studio */}
          <a href="/brands" class="brand-card scroll-animate delay-400">
            <div class="brand-icon">🏢</div>
            <h3 class="brand-name">AP Studio</h3>
            <p class="brand-type kr">에이피 스튜디오 • SPACE</p>
            <p class="brand-desc">
              공간 - 연습실 3개 + 사무실
            </p>
            <p class="brand-desc">
              Creative space with 3 practice rooms and office.
            </p>
            <div class="brand-tags">
              <span class="brand-tag">Studio</span>
              <span class="brand-tag">Practice</span>
              <span class="brand-tag">Workspace</span>
            </div>
          </a>

          {/* Walif */}
          <a href="/brands" class="brand-card scroll-animate delay-500">
            <div class="brand-icon">🎪</div>
            <h3 class="brand-name">Walif</h3>
            <p class="brand-type kr">와리프 • STAGE</p>
            <p class="brand-desc">
              극장 - 관악구 30석 소극장
            </p>
            <p class="brand-desc">
              Intimate 30-seat theater in Gwanak-gu.
            </p>
            <div class="brand-tags">
              <span class="brand-tag">Theater</span>
              <span class="brand-tag">Stage</span>
              <span class="brand-tag">Venue</span>
            </div>
          </a>
        </div>

        <div class="text-center mt-5 scroll-animate">
          <a href="/brands" class="btn btn-outline" style="font-size: 1.1rem; padding: 1rem 2rem;">
            Explore All Brands
          </a>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section class="section-lg" style="background: var(--gradient-hero); color: white;">
      <div class="container text-center">
        <h2 class="scroll-animate" style="color: white; font-size: clamp(2rem, 4vw, 3rem);">
          Ready to create something amazing?
        </h2>
        <p class="kr scroll-animate delay-200" style="font-size: clamp(1.5rem, 3vw, 2rem); margin: 1rem 0;">
          함께 만들어갈 준비가 되셨나요?
        </p>
        <p class="scroll-animate delay-300" style="font-size: 1.2rem; opacity: 0.9; margin: 2rem auto; max-width: 700px;">
          Let's collaborate and bring your artistic vision to life. 
          Contact us today to start your journey with Kulture Kore.
        </p>
        <div class="scroll-animate delay-400" style="margin-top: 3rem;">
          <a href="/contact" class="btn btn-primary" style="background: white; color: var(--primary); font-size: 1.1rem; padding: 1.2rem 2.5rem;">
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </>
)
