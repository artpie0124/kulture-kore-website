import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const BrandsPage = () => (
  <>
    <Navigation />
    
    {/* Hero Section */}
    <section class="hero" style="min-height: 50vh;">
      <div class="hero-content">
        <div class="animate-fadeIn">
          <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; margin-bottom: 1rem;">
            OUR BRANDS
          </h1>
        </div>
        <div class="animate-fadeIn delay-200">
          <p style="font-size: clamp(1rem, 2.5vw, 1.3rem); opacity: 0.9; max-width: 700px; margin: 1rem auto;">
            Five unique brands united by creativity and innovation. 
            Discover how each brand contributes to our artistic ecosystem.
          </p>
        </div>
      </div>
    </section>

    {/* Brands Detail Section */}
    <section class="section-lg bg-light">
      <div class="container-wide">
        
        {/* Artpie */}
        <div class="brand-detail-card-compact scroll-animate">
          <div class="brand-compact-header">
            <img src="/static/brand-artpie.png" alt="Artpie" class="brand-compact-logo" />
            <div>
              <h2 class="brand-compact-name">Artpie</h2>
              <p class="brand-compact-type kr">아트파이 • 기획사 • PLANNING</p>
            </div>
          </div>
          
          <div class="brand-compact-body">
            <div class="brand-compact-services-dual">
              <div class="services-column">
                <h4>Key Services:</h4>
                <ul>
                  <li>Performance Planning & Production</li>
                  <li>Corporate & Private Event Management</li>
                  <li>Arts educational Programs & Workshops</li>
                  <li>Event equipment, goods rental service</li>
                </ul>
              </div>
              <div class="services-column kr">
                <h4>주요 서비스:</h4>
                <ul>
                  <li>공연 기획 및 제작</li>
                  <li>기업 및 개인 행사 대행</li>
                  <li>예술 교육 프로그램 및 워크샵</li>
                  <li>행사 장비, 물품 렌탈 서비스</li>
                </ul>
              </div>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Planning</span>
              <span class="tag-compact">Performance</span>
              <span class="tag-compact">Education</span>
              <span class="tag-compact">Events</span>
              <span class="tag-compact">Production</span>
              <span class="tag-compact">Rental service</span>
            </div>
            
            <a href="https://artpieent.com/" target="_blank" rel="noopener" class="btn-compact-enhanced">
              VISIT <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Utopia X */}
        <div class="brand-detail-card-compact scroll-animate">
          <div class="brand-compact-header">
            <img src="/static/brand-utopiax.png" alt="Utopia X" class="brand-compact-logo" />
            <div>
              <h2 class="brand-compact-name">Utopia X</h2>
              <p class="brand-compact-type kr">유토피아X • 에이전시 • AGENCY</p>
            </div>
          </div>
          
          <div class="brand-compact-body">
            <div class="brand-compact-services-dual">
              <div class="services-column">
                <h4>Key Services:</h4>
                <ul>
                  <li>Artist Management & Representation</li>
                  <li>Booking & Scheduling Services</li>
                  <li>Career Development & Strategy</li>
                  <li>Brand Partnerships & Collaborations</li>
                </ul>
              </div>
              <div class="services-column kr">
                <h4>주요 서비스:</h4>
                <ul>
                  <li>아티스트 매니지먼트 및 대표</li>
                  <li>부킹 및 스케줄링 서비스</li>
                  <li>커리어 개발 및 전략</li>
                  <li>브랜드 파트너십 및 협업</li>
                </ul>
              </div>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Management</span>
              <span class="tag-compact">Artists</span>
              <span class="tag-compact">Dancers</span>
              <span class="tag-compact">Talent</span>
              <span class="tag-compact">etc.</span>
            </div>
            
            <a href="https://www.instagram.com/utopiax.official/" target="_blank" rel="noopener" class="btn-compact-enhanced">
              VISIT <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Trendy Motion */}
        <div class="brand-detail-card-compact scroll-animate">
          <div class="brand-compact-header">
            <img src="/static/brand-trendy.png" alt="Trendy Motion" class="brand-compact-logo" />
            <div>
              <h2 class="brand-compact-name">Trendy Motion</h2>
              <p class="brand-compact-type kr">트렌디모션 • 커뮤니티 • COMMUNITY</p>
            </div>
          </div>
          
          <div class="brand-compact-body">
            <div class="brand-compact-services-dual">
              <div class="services-column">
                <h4>Community Features:</h4>
                <ul>
                  <li>More than 100 active dance members</li>
                  <li>Regular Workshops & Practice Sessions</li>
                  <li>Networking & Mentorship Programs</li>
                </ul>
              </div>
              <div class="services-column kr">
                <h4>커뮤니티 특징:</h4>
                <ul>
                  <li>100명 이상의 활동적인 댄스 멤버</li>
                  <li>정기 워크샵 및 연습 세션</li>
                  <li>네트워킹 및 멘토링 프로그램</li>
                </ul>
              </div>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Dance</span>
              <span class="tag-compact">Community</span>
              <span class="tag-compact">Network</span>
              <span class="tag-compact">Collaboration</span>
              <span class="tag-compact">Experience</span>
            </div>
            
            <a href="https://www.instagram.com/trendy_mo.o/" target="_blank" rel="noopener" class="btn-compact-enhanced">
              VISIT <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* AP Studio */}
        <div class="brand-detail-card-compact scroll-animate">
          <div class="brand-compact-header">
            <img src="/static/apstudio-new.png" alt="AP Studio" class="brand-compact-logo" />
            <div>
              <h2 class="brand-compact-name">AP Studio</h2>
              <p class="brand-compact-type kr">에이피 스튜디오 • 공간 • SPACE</p>
            </div>
          </div>
          
          <div class="brand-compact-body">
            <div class="brand-compact-services-dual">
              <div class="services-column">
                <h4>Facilities:</h4>
                <ul>
                  <li>3 Professional Practice Rooms</li>
                  <li>Modern Office Space</li>
                  <li>Convenient Location in Mapo-gu</li>
                </ul>
              </div>
              <div class="services-column kr">
                <h4>시설:</h4>
                <ul>
                  <li>3개의 전문 연습실</li>
                  <li>현대적인 오피스 공간</li>
                  <li>마포구의 편리한 위치</li>
                </ul>
              </div>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Studio</span>
              <span class="tag-compact">Practice</span>
              <span class="tag-compact">Workspace</span>
            </div>
            
            <a href="https://naver.me/GctrVAP7" target="_blank" rel="noopener" class="btn-compact-enhanced">
              VISIT <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        {/* Walif */}
        <div class="brand-detail-card-compact scroll-animate">
          <div class="brand-compact-header">
            <img src="/static/walif-new.png" alt="Walif" class="brand-compact-logo" />
            <div>
              <h2 class="brand-compact-name">Walif</h2>
              <p class="brand-compact-type kr">와리프 • 극장 • STAGE</p>
            </div>
          </div>
          
          <div class="brand-compact-body">
            <div class="brand-compact-services-dual">
              <div class="services-column">
                <h4>Venue Features:</h4>
                <ul>
                  <li>Intimate Theater</li>
                  <li>Stage & Lighting</li>
                  <li>System & Technical Support</li>
                  <li>Flexible Space for Various Performances</li>
                </ul>
              </div>
              <div class="services-column kr">
                <h4>공연장 특징:</h4>
                <ul>
                  <li>아늑한 극장</li>
                  <li>무대 및 조명</li>
                  <li>시스템 및 기술 지원</li>
                  <li>다양한 공연을 위한 유연한 공간</li>
                </ul>
              </div>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Theater</span>
              <span class="tag-compact">Stage</span>
              <span class="tag-compact">Venue</span>
              <span class="tag-compact">Performance</span>
            </div>
            
            <a href="https://www.spacecloud.kr/space/73075" target="_blank" rel="noopener" class="btn-compact-enhanced">
              VISIT <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </>
)
