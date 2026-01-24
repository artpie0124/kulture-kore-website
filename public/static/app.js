// Kulture Kore - LUXURY & GLAMOROUS Interactive JavaScript

// ===== PARTICLES.JS INITIALIZATION =====
// Particles background effect
function initParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.id = 'particles-js';
  document.body.prepend(particlesContainer);

  // Create particles manually
  for (let i = 0; i < 50; i++) {
    createParticle();
  }
}

function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.cssText = `
    position: fixed;
    width: ${Math.random() * 4 + 1}px;
    height: ${Math.random() * 4 + 1}px;
    background: radial-gradient(circle, rgba(181, 128, 255, ${Math.random() * 0.8 + 0.2}), transparent);
    border-radius: 50%;
    left: ${Math.random() * 100}vw;
    top: ${Math.random() * 100}vh;
    pointer-events: none;
    z-index: 0;
    animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
    filter: blur(${Math.random() * 2}px);
  `;
  document.getElementById('particles-js').appendChild(particle);
}

// ===== CURSOR TRAIL EFFECT - REMOVED =====
// Cursor trail effect removed due to performance issues

// ===== MOBILE NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && navToggle) {
      const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Initialize particles
  initParticles();
});

// ===== NAVBAR SCROLL EFFECT WITH GLOW =====
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// ===== ENHANCED SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Trigger counter animation if element has data-count attribute
      if (entry.target.hasAttribute('data-count')) {
        animateCounter(entry.target);
      }
    }
  });
}, observerOptions);

// Observe all elements with scroll-animate class
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.scroll-animate');
  animateElements.forEach(el => observer.observe(el));
});

// ===== ENHANCED COUNTER ANIMATION WITH GLOW =====
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2500;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (target === 500 ? '%' : '+');
      clearInterval(timer);
      
      // Add pulse effect when complete
      element.style.animation = 'pulse 2s ease-in-out infinite';
    } else {
      element.textContent = Math.floor(current) + (target === 500 ? '%' : '+');
    }
  }, 16);
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// ===== ENHANCED CONTACT FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state with glow effect
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending... / 전송 중...';
      submitButton.style.boxShadow = '0 0 30px rgba(181, 128, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.6)';
      
      // Get form data
      const formData = new FormData(contactForm);
      
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success with glowing animation
          if (formStatus) {
            formStatus.innerHTML = `
              <div style="padding: 1.5rem; 
                          background: rgba(57, 255, 20, 0.2); 
                          color: #39FF14; 
                          border-radius: 12px; 
                          border: 2px solid rgba(57, 255, 20, 0.4);
                          box-shadow: 0 0 30px rgba(57, 255, 20, 0.4);
                          animation: pulse 2s ease-in-out infinite;">
                ✓ Message sent successfully! We'll get back to you soon. / 메시지가 성공적으로 전송되었습니다!
              </div>
            `;
          }
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Error with glow effect
        if (formStatus) {
          formStatus.innerHTML = `
            <div style="padding: 1.5rem; 
                        background: rgba(255, 107, 203, 0.2); 
                        color: #FF6BCB; 
                        border-radius: 12px; 
                        border: 2px solid rgba(255, 107, 203, 0.4);
                        box-shadow: 0 0 30px rgba(255, 107, 203, 0.4);">
              ✗ Failed to send message. Please try again or email us directly. / 메시지 전송 실패. 다시 시도하거나 이메일로 연락주세요.
            </div>
          `;
        }
      } finally {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        submitButton.style.boxShadow = '';
        
        // Clear status message after 5 seconds
        setTimeout(() => {
          if (formStatus) {
            formStatus.innerHTML = '';
          }
        }, 5000);
      }
    });
  }
});

// ===== PARALLAX EFFECT WITH 3D TRANSFORM =====
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent) {
      const translateY = scrolled * 0.4;
      const rotateX = scrolled * 0.02;
      heroContent.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg)`;
      heroContent.style.opacity = 1 - (scrolled / 600);
    }
  }
});

// ===== 3D TILT EFFECT FOR BRAND CARDS =====
document.addEventListener('DOMContentLoaded', function() {
  const brandCards = document.querySelectorAll('.brand-card');
  
  brandCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `
        translateY(-20px) 
        scale(1.05) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        perspective(1000px)
      `;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
    });
  });
});

// ===== FLOATING ELEMENTS ANIMATION =====
document.addEventListener('DOMContentLoaded', function() {
  const floatingElements = document.querySelectorAll('.brand-icon, .stat-item');
  
  floatingElements.forEach((element, index) => {
    element.style.animation = `float ${4 + (index % 3)}s ease-in-out infinite`;
    element.style.animationDelay = `${index * 0.2}s`;
  });
});

// ===== GLOWING TEXT EFFECT ON HOVER =====
document.addEventListener('DOMContentLoaded', function() {
  const glowElements = document.querySelectorAll('h1, h2, .brand-name, .nav-logo');
  
  glowElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.filter = 'drop-shadow(0 0 20px rgba(181, 128, 255, 0.8)) drop-shadow(0 0 40px rgba(0, 217, 255, 0.6))';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.filter = '';
    });
  });
});

// ===== RIPPLE EFFECT ON BUTTON CLICK =====
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent);
        border-radius: 50%;
        pointer-events: none;
        animation: ripple 0.8s ease-out;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 800);
    });
  });
});

// ===== TYPING EFFECT FOR HERO TEXT (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// ===== ROTATING GRADIENT BACKGROUNDS =====
document.addEventListener('DOMContentLoaded', function() {
  const gradientElements = document.querySelectorAll('.stat-item, .card');
  
  gradientElements.forEach((element, index) => {
    element.style.setProperty('--rotation', `${index * 45}deg`);
    
    element.addEventListener('mouseenter', function() {
      this.style.background = `
        linear-gradient(
          ${Math.random() * 360}deg,
          rgba(108, 92, 231, 0.3),
          rgba(181, 128, 255, 0.3),
          rgba(0, 217, 255, 0.2)
        )
      `;
    });
  });
});

// ===== STAR FIELD EFFECT WITH MOUSE INTERACTION =====
const stars = [];

function createStarField() {
  const starField = document.createElement('div');
  starField.id = 'star-field';
  starField.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  `;
  
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 2 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    star.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: white;
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      opacity: ${Math.random() * 0.5 + 0.3};
      animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite;
      transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    `;
    
    // Store star data for interaction
    stars.push({
      element: star,
      originalX: x,
      originalY: y,
      currentX: x,
      currentY: y
    });
    
    starField.appendChild(star);
  }
  
  document.body.appendChild(starField);
  
  // Add mouse/touch interaction
  let mouseX = 0;
  let mouseY = 0;
  
  function updateStars() {
    stars.forEach(star => {
      const dx = star.currentX - mouseX;
      const dy = star.currentY - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const interactionRadius = 150;
      
      if (distance < interactionRadius) {
        // Push stars away from cursor
        const force = (interactionRadius - distance) / interactionRadius;
        const angle = Math.atan2(dy, dx);
        const pushDistance = force * 50;
        
        const newX = star.originalX + Math.cos(angle) * pushDistance;
        const newY = star.originalY + Math.sin(angle) * pushDistance;
        
        star.element.style.transform = `translate(${newX - star.originalX}px, ${newY - star.originalY}px)`;
        star.element.style.opacity = 0.3;
      } else {
        // Return to original position
        star.element.style.transform = 'translate(0, 0)';
        star.element.style.opacity = '';
      }
    });
    
    requestAnimationFrame(updateStars);
  }
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  document.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  });
  
  updateStars();
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', createStarField);

// ===== RANDOM COLOR SHIFTS =====
setInterval(() => {
  const randomElements = document.querySelectorAll('.brand-tag');
  randomElements.forEach(element => {
    if (Math.random() > 0.7) {
      element.style.boxShadow = `0 0 ${Math.random() * 30 + 20}px rgba(${Math.random() * 255}, ${Math.random() * 255}, 255, 0.6)`;
    }
  });
}, 3000);

// ===== CONSOLE EASTER EGG WITH STYLE =====
console.log('%c🎨 KULTURE KORE 🎨', 
  'font-size: 40px; font-weight: 900; background: linear-gradient(135deg, #6C5CE7 0%, #A29BFE 50%, #FF6BCB 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 30px; text-shadow: 0 0 30px rgba(108, 92, 231, 0.8);'
);
console.log('%c✨ LUXURY & GLAMOROUS EDITION ✨', 
  'font-size: 20px; color: #B580FF; font-style: italic; text-shadow: 0 0 20px rgba(181, 128, 255, 0.8);'
);
console.log('%cWe change the world, artistically.', 
  'font-size: 16px; color: #00D9FF; font-style: italic; text-shadow: 0 0 15px rgba(0, 217, 255, 0.8);'
);
console.log('%c세상을 바꾸는 일을 예술적으로 합니다.', 
  'font-size: 16px; color: #39FF14; font-style: italic; text-shadow: 0 0 15px rgba(57, 255, 20, 0.8);'
);
console.log('%c🌟 Interested in joining our team? Email us at Official@kulturekore.com', 
  'font-size: 14px; color: #FFD700; text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);'
);

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(function() {
    // Scroll-based animations here
  });
});

// ===== CUSTOM CURSOR (Advanced) =====
document.addEventListener('DOMContentLoaded', function() {
  if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      width: 40px;
      height: 40px;
      border: 2px solid rgba(181, 128, 255, 0.8);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      transition: transform 0.2s ease;
      box-shadow: 0 0 20px rgba(181, 128, 255, 0.6);
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = (e.clientX - 20) + 'px';
      cursor.style.top = (e.clientY - 20) + 'px';
    });
    
    // Enlarge cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .btn');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'rgba(0, 217, 255, 0.8)';
      });
      element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'rgba(181, 128, 255, 0.8)';
      });
    });
  }
});
