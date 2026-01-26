import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ContactPage = () => (
  <>
    <Navigation />
    
    {/* Hero Section */}
    <section class="hero" style="min-height: 50vh;">
      <div class="hero-content">
        <div class="animate-fadeIn">
          <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; margin-bottom: 1rem;">
            CONTACT US
          </h1>
        </div>
        <div class="animate-fadeIn delay-200">
          <p style="font-size: clamp(1rem, 2.5vw, 1.3rem); opacity: 0.9; max-width: 700px; margin: 1rem auto;">
            Ready to start your creative journey? Get in touch with us today.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Form & Info Section */}
    <section class="section-lg bg-light">
      <div class="container-wide">
        <div class="contact-grid">
          
          {/* Contact Form */}
          <div class="contact-form-container-enhanced scroll-animate">
            <h2 style="margin-bottom: 2rem; color: var(--secondary);">Send us a message</h2>
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form" id="contact-form">
              <div class="form-group">
                <label class="form-label-dark" for="name">
                  Name / 이름 <span style="color: var(--primary);">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="form-input-dark" 
                  placeholder="Your name"
                  required 
                />
              </div>
              
              <div class="form-group">
                <label class="form-label-dark" for="email">
                  Email / 이메일 <span style="color: var(--primary);">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="form-input-dark" 
                  placeholder="your@email.com"
                  required 
                />
              </div>
              
              <div class="form-group">
                <label class="form-label-dark" for="company">
                  Company / Organization / 회사/단체
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  class="form-input-dark" 
                  placeholder="Your company or organization"
                />
              </div>
              
              <div class="form-group">
                <label class="form-label-dark" for="inquiry-type">
                  Inquiry Type / 문의 유형 <span style="color: var(--primary);">*</span>
                </label>
                <select id="inquiry-type" name="inquiry-type" class="form-select-dark" required>
                  <option value="">Select an option / 선택하세요</option>
                  <option value="performance">Performance / Event Planning / 공연/행사 기획</option>
                  <option value="artist">Artist Management / 아티스트 매니지먼트</option>
                  <option value="space">Space Rental / 공간 대관</option>
                  <option value="partnership">Partnership / Collaboration / 파트너십/협업</option>
                  <option value="investment">Investment Inquiry / 투자 문의</option>
                  <option value="other">Other / 기타</option>
                </select>
              </div>
              
              <div class="form-group">
                <label class="form-label-dark" for="message">
                  Message / 메시지 <span style="color: var(--primary);">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  class="form-textarea-dark" 
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn-contact-enhanced">
                Send Message / 메시지 보내기
              </button>
              
              <div id="form-status" style="margin-top: 1rem; text-align: center;"></div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div class="contact-info-container-enhanced scroll-animate delay-200">
            <h2 style="margin-bottom: 2rem; color: var(--secondary);">Get in touch</h2>
            
            <div class="contact-info-card">
              <div class="contact-icon-enhanced">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem; color: var(--secondary);">Email</h3>
                <a href="mailto:Official@kulturekore.com" style="color: var(--primary); text-decoration: none; font-weight: 600;">
                  Official@kulturekore.com
                </a>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="contact-icon-enhanced">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem; color: var(--secondary);">Phone</h3>
                <p style="margin: 0; color: rgba(45, 52, 54, 0.8);">
                  <a href="tel:+82-70-7585-6123" style="color: rgba(45, 52, 54, 0.8); text-decoration: none;">
                    +82 70-7585-6123
                  </a>
                  {' / '}
                  <a href="tel:+82-10-5843-1809" style="color: rgba(45, 52, 54, 0.8); text-decoration: none;">
                    +82 10-5843-1809
                  </a>
                </p>
              </div>
            </div>
            
            <div class="contact-info-card">
              <div class="contact-icon-enhanced">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem; color: var(--secondary);">Address / 주소</h3>
                <p style="margin: 0; color: rgba(45, 52, 54, 0.7); line-height: 1.6;">
                  서울시 마포구 홍익로 6길 14<br/>
                  14, Hongik-ro 6-gil, Mapo-gu, Seoul, South Korea
                </p>
              </div>
            </div>
            
            <div style="margin-top: 3rem;">
              <h3 style="margin-bottom: 1rem; color: var(--secondary);">Follow Us / 팔로우</h3>
              <div class="social-links" style="display: flex; gap: 1rem;">
                <a href="https://www.instagram.com/utopiax.official/" target="_blank" rel="noopener" class="social-link-enhanced">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@kulturekore" target="_blank" rel="noopener" class="social-link-enhanced">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            {/* Google Map */}
            <div style="margin-top: 3rem;">
              <h3 style="margin-bottom: 1rem; color: var(--secondary);">Find Us / 오시는 길</h3>
              <div class="map-container-enhanced">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5234807876844!2d126.92243231531454!3d37.55237597980061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98de4f3b0e29%3A0x7f8b0f8b0f8b0f8b!2s14%20Hongik-ro%206-gil%2C%20Mapo-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr"
                  width="100%" 
                  height="300" 
                  style="border:0; border-radius: 16px;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <Footer />
    
    <style>{`
      .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: start;
      }
      
      @media (max-width: 968px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 100%;
          padding: 0 1rem;
        }
        
        .container-wide {
          padding: 0 1rem;
          max-width: 100%;
        }
      }
    `}</style>
  </>
)
