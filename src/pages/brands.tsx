import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const BrandsPage = () => (
  <>
    <Navigation />
    
    {/* Hero Section */}
    <section class="hero" style="min-height: 60vh;">
      <div class="hero-content">
        <div class="animate-fadeIn">
          <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; margin-bottom: 1rem;">
            OUR BRANDS
          </h1>
        </div>
        <div class="animate-fadeIn delay-200">
          <p class="kr" style="font-size: clamp(1.2rem, 3vw, 1.8rem); margin-bottom: 0.5rem; font-weight: 600;">
            우리의 브랜드
          </p>
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
        <div class="brand-detail-card scroll-animate" style="margin-bottom: 4rem;">
          <div class="brand-detail-content">
            <div class="brand-detail-header">
              <div class="brand-icon" style="font-size: 4rem;">🎭</div>
              <div>
                <h2 class="brand-name" style="font-size: 2.5rem; margin-bottom: 0.5rem;">Artpie</h2>
                <p class="brand-type kr" style="font-size: 1.2rem; color: var(--text-light);">
                  아트파이 • 기획사 • CREATE
                </p>
              </div>
            </div>
            
            <div class="brand-detail-body">
              <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
                <strong>Artpie</strong> is our flagship brand and cash cow, specializing in planning and producing 
                exceptional performances, events, and educational programs. We transform creative visions 
                into memorable experiences that resonate with audiences.
              </p>
              <p class="kr" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 2rem;">
                아트파이는 우리의 대표 브랜드이자 캐시카우로, 뛰어난 공연, 행사, 교육 프로그램을 
                기획하고 제작합니다. 창의적인 비전을 청중들에게 감동을 주는 기억에 남을 경험으로 
                변화시킵니다.
              </p>
              
              <div class="brand-features">
                <h3 style="margin-bottom: 1rem;">Key Services:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Performance Planning & Production
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Corporate & Private Event Management
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Educational Programs & Workshops
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Artist Development & Collaboration
                  </li>
                </ul>
              </div>
              
              <div class="brand-tags" style="margin-top: 2rem;">
                <span class="brand-tag">Planning</span>
                <span class="brand-tag">Performance</span>
                <span class="brand-tag">Education</span>
                <span class="brand-tag">Events</span>
                <span class="brand-tag">Production</span>
              </div>
              
              <div style="margin-top: 2rem;">
                <a href="https://artpieent.com/" target="_blank" rel="noopener" class="btn btn-primary">
                  Visit Artpie Website <i class="fas fa-external-link-alt" style="margin-left: 0.5rem;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Utopia X */}
        <div class="brand-detail-card scroll-animate" style="margin-bottom: 4rem;">
          <div class="brand-detail-content">
            <div class="brand-detail-header">
              <div class="brand-icon" style="font-size: 4rem;">⭐</div>
              <div>
                <h2 class="brand-name" style="font-size: 2.5rem; margin-bottom: 0.5rem;">Utopia X</h2>
                <p class="brand-type kr" style="font-size: 1.2rem; color: var(--text-light);">
                  유토피아X • 에이전시 • CONNECT
                </p>
              </div>
            </div>
            
            <div class="brand-detail-body">
              <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
                <strong>Utopia X</strong> is our artist management agency that connects talented performers 
                with opportunities. We represent dancers, musicians, MCs, and various artists, helping them 
                build successful careers while maintaining their artistic integrity.
              </p>
              <p class="kr" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 2rem;">
                유토피아X는 재능 있는 퍼포머들을 기회와 연결하는 아티스트 매니지먼트 에이전시입니다. 
                댄서, 뮤지션, MC 등 다양한 아티스트를 대표하며, 예술적 진정성을 유지하면서 
                성공적인 경력을 쌓을 수 있도록 돕습니다.
              </p>
              
              <div class="brand-features">
                <h3 style="margin-bottom: 1rem;">Key Services:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Artist Management & Representation
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Booking & Scheduling Services
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Career Development & Strategy
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Brand Partnerships & Collaborations
                  </li>
                </ul>
              </div>
              
              <div class="brand-tags" style="margin-top: 2rem;">
                <span class="brand-tag">Management</span>
                <span class="brand-tag">Artists</span>
                <span class="brand-tag">Dancers</span>
                <span class="brand-tag">Musicians</span>
                <span class="brand-tag">Talent</span>
              </div>
              
              <div style="margin-top: 2rem;">
                <a href="https://www.instagram.com/utopiax.official/" target="_blank" rel="noopener" class="btn btn-primary">
                  Visit Utopia X Instagram <i class="fab fa-instagram" style="margin-left: 0.5rem;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trendy Motion */}
        <div class="brand-detail-card scroll-animate" style="margin-bottom: 4rem;">
          <div class="brand-detail-content">
            <div class="brand-detail-header">
              <div class="brand-icon" style="font-size: 4rem;">💃</div>
              <div>
                <h2 class="brand-name" style="font-size: 2.5rem; margin-bottom: 0.5rem;">Trendy Motion</h2>
                <p class="brand-type kr" style="font-size: 1.2rem; color: var(--text-light);">
                  트렌디모션 • 커뮤니티 • COMMUNITY
                </p>
              </div>
            </div>
            
            <div class="brand-detail-body">
              <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
                <strong>Trendy Motion</strong> is a vibrant dance community bringing together approximately 
                100 passionate dancers. We create a supportive environment for dancers to learn, grow, and 
                collaborate, fostering creativity and artistic expression.
              </p>
              <p class="kr" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 2rem;">
                트렌디모션은 약 100명의 열정적인 댄서들을 하나로 모으는 활기찬 댄스 커뮤니티입니다. 
                댄서들이 배우고, 성장하고, 협력할 수 있는 지원적인 환경을 만들어 창의성과 
                예술적 표현을 육성합니다.
              </p>
              
              <div class="brand-features">
                <h3 style="margin-bottom: 1rem;">Community Features:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    ~100 Active Dance Members
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Regular Workshops & Practice Sessions
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Collaborative Performance Opportunities
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Networking & Mentorship Programs
                  </li>
                </ul>
              </div>
              
              <div class="brand-tags" style="margin-top: 2rem;">
                <span class="brand-tag">Dance</span>
                <span class="brand-tag">Community</span>
                <span class="brand-tag">Network</span>
                <span class="brand-tag">Collaboration</span>
                <span class="brand-tag">Growth</span>
              </div>
              
              <div style="margin-top: 2rem;">
                <a href="https://www.instagram.com/trendy_mo.o/" target="_blank" rel="noopener" class="btn btn-primary">
                  Visit Trendy Motion Instagram <i class="fab fa-instagram" style="margin-left: 0.5rem;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AP Studio */}
        <div class="brand-detail-card scroll-animate" style="margin-bottom: 4rem;">
          <div class="brand-detail-content">
            <div class="brand-detail-header">
              <div class="brand-icon" style="font-size: 4rem;">🏢</div>
              <div>
                <h2 class="brand-name" style="font-size: 2.5rem; margin-bottom: 0.5rem;">AP Studio</h2>
                <p class="brand-type kr" style="font-size: 1.2rem; color: var(--text-light);">
                  에이피 스튜디오 • 공간 • SPACE
                </p>
              </div>
            </div>
            
            <div class="brand-detail-body">
              <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
                <strong>AP Studio</strong> provides professional creative spaces for artists to practice, 
                rehearse, and create. Our facility includes three fully-equipped practice rooms and a 
                modern office space, all designed to inspire creativity and productivity.
              </p>
              <p class="kr" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 2rem;">
                에이피 스튜디오는 아티스트들이 연습하고, 리허설하고, 창작할 수 있는 전문적인 
                크리에이티브 공간을 제공합니다. 우리 시설은 완벽하게 갖춰진 3개의 연습실과 
                현대적인 사무 공간을 포함하며, 모두 창의성과 생산성을 고취하도록 디자인되었습니다.
              </p>
              
              <div class="brand-features">
                <h3 style="margin-bottom: 1rem;">Facilities:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    3 Professional Practice Rooms
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Modern Office Space
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    High-Quality Audio Systems
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Convenient Location in Mapo-gu
                  </li>
                </ul>
              </div>
              
              <div class="brand-tags" style="margin-top: 2rem;">
                <span class="brand-tag">Studio</span>
                <span class="brand-tag">Practice</span>
                <span class="brand-tag">Workspace</span>
                <span class="brand-tag">Rental</span>
                <span class="brand-tag">Creative</span>
              </div>
              
              <div style="margin-top: 2rem;">
                <a href="https://naver.me/GctrVAP7" target="_blank" rel="noopener" class="btn btn-primary">
                  View Location on Naver Map <i class="fas fa-map-marker-alt" style="margin-left: 0.5rem;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Walif */}
        <div class="brand-detail-card scroll-animate">
          <div class="brand-detail-content">
            <div class="brand-detail-header">
              <div class="brand-icon" style="font-size: 4rem;">🎪</div>
              <div>
                <h2 class="brand-name" style="font-size: 2.5rem; margin-bottom: 0.5rem;">Walif</h2>
                <p class="brand-type kr" style="font-size: 1.2rem; color: var(--text-light);">
                  와리프 • 극장 • STAGE
                </p>
              </div>
            </div>
            
            <div class="brand-detail-body">
              <p style="font-size: 1.2rem; line-height: 1.8; margin-bottom: 1rem;">
                <strong>Walif</strong> is our intimate 30-seat theater located in Gwanak-gu. This cozy venue 
                provides the perfect setting for experimental performances, indie productions, and close-audience 
                experiences that create meaningful connections between performers and viewers.
              </p>
              <p class="kr" style="font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 2rem;">
                와리프는 관악구에 위치한 30석 규모의 아늑한 극장입니다. 이 아담한 공연장은 
                실험적인 공연, 인디 프로덕션, 그리고 공연자와 관객 사이에 의미 있는 연결을 
                만드는 친밀한 관객 경험을 위한 완벽한 장소를 제공합니다.
              </p>
              
              <div class="brand-features">
                <h3 style="margin-bottom: 1rem;">Venue Features:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    30-Seat Intimate Theater
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Professional Stage & Lighting
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Sound System & Technical Support
                  </li>
                  <li style="padding: 0.5rem 0; font-size: 1.1rem;">
                    <i class="fas fa-check-circle" style="color: var(--primary); margin-right: 0.5rem;"></i>
                    Flexible Space for Various Performances
                  </li>
                </ul>
              </div>
              
              <div class="brand-tags" style="margin-top: 2rem;">
                <span class="brand-tag">Theater</span>
                <span class="brand-tag">Stage</span>
                <span class="brand-tag">Venue</span>
                <span class="brand-tag">Performance</span>
                <span class="brand-tag">Intimate</span>
              </div>
              
              <div style="margin-top: 2rem;">
                <a href="https://www.spacecloud.kr/space/73075" target="_blank" rel="noopener" class="btn btn-primary">
                  Book Walif Theater <i class="fas fa-ticket-alt" style="margin-left: 0.5rem;"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* CTA Section */}
    <section class="section-lg" style="background: var(--gradient-hero); color: white;">
      <div class="container text-center">
        <h2 class="scroll-animate" style="color: white; font-size: clamp(2rem, 4vw, 3rem);">
          Interested in partnering with us?
        </h2>
        <p class="kr scroll-animate delay-200" style="font-size: clamp(1.5rem, 3vw, 2rem); margin: 1rem 0;">
          파트너십에 관심이 있으신가요?
        </p>
        <p class="scroll-animate delay-300" style="font-size: 1.2rem; opacity: 0.9; margin: 2rem auto; max-width: 700px;">
          Discover how our brands can collaborate with your vision. 
          Let's create something extraordinary together.
        </p>
        <div class="scroll-animate delay-400" style="margin-top: 3rem;">
          <a href="/contact" class="btn btn-primary" style="background: white; color: var(--primary); font-size: 1.1rem; padding: 1.2rem 2.5rem;">
            Get in Touch
          </a>
        </div>
      </div>
    </section>

    <Footer />
    
    <style>{`
      .brand-detail-card {
        background: white;
        border-radius: 20px;
        padding: 3rem;
        box-shadow: var(--shadow-md);
        border: 2px solid var(--border);
        transition: all 0.3s ease;
      }
      
      .brand-detail-card:hover {
        box-shadow: var(--shadow-xl);
        border-color: var(--primary);
      }
      
      .brand-detail-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 2px solid var(--border);
      }
      
      .brand-detail-body {
        margin-top: 2rem;
      }
      
      .brand-features {
        background: rgba(108, 92, 231, 0.05);
        padding: 2rem;
        border-radius: 12px;
        margin-top: 2rem;
      }
      
      @media (max-width: 768px) {
        .brand-detail-card {
          padding: 2rem 1.5rem;
        }
        
        .brand-detail-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
      }
    `}</style>
  </>
)
