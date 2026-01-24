export const Navigation = () => (
  <nav class="nav" id="navbar">
    <div class="nav-content">
      <a href="/" class="nav-logo-link">
        <img src="/static/logo-nav.png" alt="KULTURE KORE" class="nav-logo-img" />
      </a>
      
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="nav-menu" id="nav-menu">
        <li><a href="/" class="nav-link">HOME</a></li>
        <li><a href="/brands" class="nav-link">BRANDS</a></li>
        <li><a href="/contact" class="nav-link">CONTACT</a></li>
      </ul>
    </div>
  </nav>
)
