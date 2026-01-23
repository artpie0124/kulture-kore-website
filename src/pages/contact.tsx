import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const ContactPage = () => (
  <>
    <Navigation />
    
    {/* Hero Section */}
    <section class="hero" style="min-height: 60vh;">
      <div class="hero-content">
        <div class="animate-fadeIn">
          <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; margin-bottom: 1rem;">
            CONTACT US
          </h1>
        </div>
        <div class="animate-fadeIn delay-200">
          <p class="kr" style="font-size: clamp(1.2rem, 3vw, 1.8rem); margin-bottom: 0.5rem; font-weight: 600;">
            문의하기
          </p>
          <p style="font-size: clamp(1rem, 2.5vw, 1.3rem); opacity: 0.9; max-width: 700px; margin: 1rem auto;">
            Ready to start your creative journey? Get in touch with us today.
          </p>
          <p class="kr" style="font-size: clamp(0.9rem, 2vw, 1.1rem); opacity: 0.8; max-width: 700px; margin: 0.5rem auto;">
            창의적인 여정을 시작할 준비가 되셨나요? 오늘 연락주세요.
          </p>
        </div>
      </div>
    </section>

    {/* Contact Form & Info Section */}
    <section class="section-lg bg-light">
      <div class="container-wide">
        <div class="contact-grid">
          
          {/* Contact Form */}
          <div class="contact-form-container scroll-animate">
            <h2 style="margin-bottom: 1rem;">Send us a message</h2>
            <p class="kr" style="color: var(--text-light); margin-bottom: 2rem;">
              메시지를 보내주세요
            </p>
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form" id="contact-form">
              <div class="form-group">
                <label class="form-label" for="name">
                  Name / 이름 <span style="color: var(--primary);">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  class="form-input" 
                  placeholder="Your name"
                  required 
                />
              </div>
              
              <div class="form-group">
                <label class="form-label" for="email">
                  Email / 이메일 <span style="color: var(--primary);">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  class="form-input" 
                  placeholder="your@email.com"
                  required 
                />
              </div>
              
              <div class="form-group">
                <label class="form-label" for="company">
                  Company / Organization / 회사/단체
                </label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  class="form-input" 
                  placeholder="Your company or organization"
                />
              </div>
              
              <div class="form-group">
                <label class="form-label" for="inquiry-type">
                  Inquiry Type / 문의 유형 <span style="color: var(--primary);">*</span>
                </label>
                <select id="inquiry-type" name="inquiry-type" class="form-select" required>
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
                <label class="form-label" for="message">
                  Message / 메시지 <span style="color: var(--primary);">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  class="form-textarea" 
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 1.2rem;">
                Send Message / 메시지 보내기
              </button>
              
              <div id="form-status" style="margin-top: 1rem; text-align: center;"></div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div class="contact-info-container scroll-animate delay-200">
            <h2 style="margin-bottom: 2rem;">Get in touch</h2>
            
            <div class="contact-info-item">
              <div class="contact-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Email</h3>
                <a href="mailto:Official@kulturekore.com" style="color: var(--text); text-decoration: none;">
                  Official@kulturekore.com
                </a>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Phone</h3>
                <a href="tel:070-7585-6123" style="color: var(--text); text-decoration: none;">
                  070-7585-6123
                </a>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Address / 주소</h3>
                <p style="margin: 0; color: var(--text-light);">
                  서울시 마포구 홍익로 6길 14<br/>
                  14, Hongik-ro 6-gil, Mapo-gu, Seoul, South Korea
                </p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <div class="contact-icon">
                <i class="fas fa-globe"></i>
              </div>
              <div>
                <h3 style="font-size: 1.1rem; margin-bottom: 0.3rem;">Website</h3>
                <a href="https://www.kulturekore.com" target="_blank" rel="noopener" style="color: var(--primary); text-decoration: none;">
                  www.kulturekore.com
                </a>
              </div>
            </div>
            
            <div style="margin-top: 3rem;">
              <h3 style="margin-bottom: 1rem;">Follow Us / 팔로우</h3>
              <div class="social-links" style="display: flex; gap: 1rem;">
                <a href="https://www.instagram.com/utopiax.official/" target="_blank" rel="noopener" class="social-link" style="width: 50px; height: 50px; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; background: rgba(108, 92, 231, 0.1); border-radius: 50%; color: var(--primary); transition: all 0.3s ease;">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="mailto:Official@kulturekore.com" class="social-link" style="width: 50px; height: 50px; font-size: 1.5rem; display: flex; align-items: center; justify-content: center; background: rgba(108, 92, 231, 0.1); border-radius: 50%; color: var(--primary); transition: all 0.3s ease;">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
            
            {/* Google Map */}
            <div style="margin-top: 3rem;">
              <h3 style="margin-bottom: 1rem;">Find Us / 오시는 길</h3>
              <div class="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.5234807876844!2d126.92243231531454!3d37.55237597980061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98de4f3b0e29%3A0x7f8b0f8b0f8b0f8b!2s14%20Hongik-ro%206-gil%2C%20Mapo-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1234567890123!5m2!1sen!2skr"
                  width="100%" 
                  height="300" 
                  style="border:0; border-radius: 12px;" 
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

    {/* Business Hours Section */}
    <section class="section" style="background: white;">
      <div class="container text-center">
        <h2 class="scroll-animate" style="margin-bottom: 2rem;">
          Business Hours / 운영 시간
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 800px; margin: 0 auto;">
          <div class="scroll-animate delay-100">
            <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Office / 사무실</h3>
            <p style="color: var(--text-light);">
              Monday - Friday / 월-금<br/>
              10:00 AM - 6:00 PM
            </p>
          </div>
          <div class="scroll-animate delay-200">
            <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Studio / 스튜디오</h3>
            <p style="color: var(--text-light);">
              Monday - Sunday / 월-일<br/>
              By Appointment / 예약제
            </p>
          </div>
          <div class="scroll-animate delay-300">
            <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Theater / 극장</h3>
            <p style="color: var(--text-light);">
              Performance Schedule / 공연 일정<br/>
              Check Website / 웹사이트 참조
            </p>
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
      
      .contact-form-container,
      .contact-info-container {
        background: white;
        padding: 3rem;
        border-radius: 20px;
        box-shadow: var(--shadow-md);
        border: 2px solid var(--border);
      }
      
      .contact-form-container:hover,
      .contact-info-container:hover {
        box-shadow: var(--shadow-lg);
        border-color: var(--primary);
      }
      
      .map-container {
        overflow: hidden;
        border-radius: 12px;
        box-shadow: var(--shadow-sm);
      }
      
      @media (max-width: 968px) {
        .contact-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        .contact-form-container,
        .contact-info-container {
          padding: 2rem;
        }
      }
    `}</style>
  </>
)
