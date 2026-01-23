// Kulture Kore - Interactive JavaScript

// Mobile Navigation Toggle
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
});

// Navbar scroll effect
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

// Scroll animations
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

// Counter animation for stats
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-count'));
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (target === 500 ? '%' : '+');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + (target === 500 ? '%' : '+');
    }
  }, 16);
}

// Smooth scroll for anchor links
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

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending... / 전송 중...';
      
      // Get form data
      const formData = new FormData(contactForm);
      
      try {
        // Note: Replace YOUR_FORM_ID with actual Formspree form ID
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Success
          if (formStatus) {
            formStatus.innerHTML = '<div style="padding: 1rem; background: #d4edda; color: #155724; border-radius: 8px; border: 1px solid #c3e6cb;">✓ Message sent successfully! We\'ll get back to you soon. / 메시지가 성공적으로 전송되었습니다!</div>';
          }
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Error
        if (formStatus) {
          formStatus.innerHTML = '<div style="padding: 1rem; background: #f8d7da; color: #721c24; border-radius: 8px; border: 1px solid #f5c6cb;">✗ Failed to send message. Please try again or email us directly. / 메시지 전송 실패. 다시 시도하거나 이메일로 연락주세요.</div>';
        }
      } finally {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
        
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

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    const heroContent = hero.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
      heroContent.style.opacity = 1 - (scrolled / 700);
    }
  }
});

// Add hover effect to brand cards
document.addEventListener('DOMContentLoaded', function() {
  const brandCards = document.querySelectorAll('.brand-card');
  
  brandCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Easter egg: Console message
console.log('%c🎨 KULTURE KORE 🎨', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6C5CE7 0%, #A29BFE 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; padding: 20px;');
console.log('%cWe change the world, artistically.', 'font-size: 14px; color: #6C5CE7; font-style: italic;');
console.log('%c세상을 바꾸는 일을 예술적으로 합니다.', 'font-size: 14px; color: #A29BFE; font-style: italic;');
console.log('%cInterested in joining our team? Email us at Official@kulturekore.com', 'font-size: 12px; color: #2D3436;');
