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
            <p class="brand-compact-desc">
              Artpie is an arts planning and production company.
              Through planning, we create someone's special day—whether it's a play, a musical, or a dance performance.
              Through planning, we also create days of growth, where people experience arts education and develop themselves.
              And we design events that become a cherished page in many people's memories.
            </p>
            <p class="brand-compact-desc kr">
              아트파이는 예술기획사 입니다.
              기획을 통해 연극, 뮤지컬, 댄스 공연과 같은 누군가의 특별한 날을 만들고
              기획을 통해 예술을 교육 받아보고 본인을 성장시키는 나날들을 만들어 갑니다.
              또한, 많은 사람들의 추억의 한 페이지가 되는 행사를 기획합니다.
            </p>
            
            <div class="brand-compact-services">
              <h4>Key Services:</h4>
              <ul>
                <li>Performance Planning & Production</li>
                <li>Corporate & Private Event Management</li>
                <li>Arts educational Programs & Workshops</li>
                <li>Event equipment, goods rental service</li>
              </ul>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Planning</span>
              <span class="tag-compact">Performance</span>
              <span class="tag-compact">Education</span>
              <span class="tag-compact">Events</span>
              <span class="tag-compact">Production</span>
              <span class="tag-compact">Rental service</span>
            </div>
            
            <a href="https://artpieent.com/" target="_blank" rel="noopener" class="btn-compact">
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
            <p class="brand-compact-desc">
              Utopia X is an agency specializing in professional artist booking and talent services.
              We help many artists—MCs, actors, musicians, and more—find opportunities to pursue their dreams.
              Above all, we focus on "dance," the art form that can turn any place into a stage with nothing but one's own body.
              Like the unknown variable "X," countless artists are still in the process of discovering what they can become.
              So we work to help them live in a world like Utopia—one where their art can truly shine.
            </p>
            <p class="brand-compact-desc kr">
              유토피아 엑스는 전문적인 아티스트 섭외 및 제공을 펼치는 에이전시입니다. MC, 연기자, 뮤지션 등 많은 예술가들이 꿈을 펼칠 수 있게, 그 중에서도 저희는 오직 자신의 몸만 있으면 어디든 무대로 만드는 '춤'에 집중합니다. 미지수 'X'와 같이 아직은 어떻게 될지 모르는 많은 아티스트들이 유토피아와 같은 세상에서 살 수 있게 저희는 노력합니다.
            </p>
            
            <div class="brand-compact-services">
              <h4>Key Services:</h4>
              <ul>
                <li>Artist Management & Representation</li>
                <li>Booking & Scheduling Services</li>
                <li>Career Development & Strategy</li>
                <li>Brand Partnerships & Collaborations</li>
              </ul>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Management</span>
              <span class="tag-compact">Artists</span>
              <span class="tag-compact">Dancers</span>
              <span class="tag-compact">Talent</span>
              <span class="tag-compact">etc.</span>
            </div>
            
            <a href="https://www.instagram.com/utopiax.official/" target="_blank" rel="noopener" class="btn-compact">
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
            <p class="brand-compact-desc">
              Trendy Motion is a community for people who love dance.
              Even if you're not a professional dancer—or even if you have a different main job—anyone who loves dance is welcome here.
              This isn't a place where you gather just to dance better.
              It's a place where dance leads you to new experiences and new people.
              That's Trendy Motion.
            </p>
            <p class="brand-compact-desc kr">
              트렌디모션은 춤을 사랑하는 사람들을 위한 커뮤니티 입니다.
              전문적인 댄서가 아니더라도, 본업이 따로 있는 이라도
              춤을 사랑하는 모든 사람이 모일 수 있습니다.
              춤을 잘추려고 모이는 곳이 아닙니다.
              춤을 통해 새로운 경험과 새로운 사람을 얻어가는 곳, 트렌디모션입니다.
            </p>
            
            <div class="brand-compact-services">
              <h4>Community Features:</h4>
              <ul>
                <li>More than 100 active dance members</li>
                <li>Regular Workshops & Practice Sessions</li>
                <li>Networking & Mentorship Programs</li>
              </ul>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Dance</span>
              <span class="tag-compact">Community</span>
              <span class="tag-compact">Network</span>
              <span class="tag-compact">Collaboration</span>
              <span class="tag-compact">Experience</span>
            </div>
            
            <a href="https://www.instagram.com/trendy_mo.o/" target="_blank" rel="noopener" class="btn-compact">
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
            <p class="brand-compact-desc">
              AP Studio is an open arts space for everyone—not only for artists.
              If you want, you can dance, sing, or act here.
              A space to express your art, AP Studio.
            </p>
            <p class="brand-compact-desc kr">
              에이피 스튜디오는 아티스트뿐만 아니라 누구나 이용할 수 있는 열린 예술 공간입니다.
              원한다면 춤을 춰도, 노래를 불러도, 연기를 해도 되죠.
              당신의 예술을 펼칠 공간, AP Studio.
            </p>
            
            <div class="brand-compact-services">
              <h4>Facilities:</h4>
              <ul>
                <li>3 Professional Practice Rooms</li>
                <li>Modern Office Space</li>
                <li>Convenient Location in Mapo-gu</li>
              </ul>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Studio</span>
              <span class="tag-compact">Practice</span>
              <span class="tag-compact">Workspace</span>
            </div>
            
            <a href="https://naver.me/GctrVAP7" target="_blank" rel="noopener" class="btn-compact">
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
            <p class="brand-compact-desc">
              Walif is a place where we bring events to life—events born from the simple imagination of "What if…?"
              Like wondering, "Who is the best at doing absolutely nothing in the world?"
              A space that turns your imagination into reality.
              What if? Walif!
            </p>
            <p class="brand-compact-desc kr">
              와리프는 '만약에..'라는 상상에서 나온 모든 이벤트를 만들어 나가는 곳입니다
              세상에서 누가 멍때리기를 가장 잘할까? 와 같은 상상 말이죠
              여러분의 상상을 현실로 만드는 공간. What if? Walif!
            </p>
            
            <div class="brand-compact-services">
              <h4>Venue Features:</h4>
              <ul>
                <li>Intimate Theater</li>
                <li>Stage & Lighting</li>
                <li>System & Technical Support</li>
                <li>Flexible Space for Various Performances</li>
              </ul>
            </div>
            
            <div class="brand-compact-tags">
              <span class="tag-compact">Theater</span>
              <span class="tag-compact">Stage</span>
              <span class="tag-compact">Venue</span>
              <span class="tag-compact">Performance</span>
            </div>
            
            <a href="https://www.spacecloud.kr/space/73075" target="_blank" rel="noopener" class="btn-compact">
              VISIT <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </>
)
