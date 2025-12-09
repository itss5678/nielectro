```js
// Mobile menu toggle
const mobileMenu = document.createElement('div');
mobileMenu.innerHTML = `
  <div id="mobileMenu" class="mobile-menu">
    <div class="mobile-header">
      <h2>NI Appliances UK</h2>
      <span id="closeMenu">×</span>
    </div>
    <a href="#">Home</a>
    <a href="#">Shop All</a>
    <a href="#">Fridges</a>
    <a href="#">Washing Machines</a>
    <a href="#">TVs</a>
    <a href="#">Contact</a>
  </div>
`;
document.body.appendChild(mobileMenu);

// Dark mode toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.innerHTML = 'Dark Mode';
darkModeBtn.id = 'darkModeBtn';
document.body.appendChild(darkModeBtn);

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const menuBtn = document.createElement('div');
  menuBtn.innerHTML = 'Menu';
  menuBtn.className = 'menu-btn';
  document.querySelector('header .container').appendChild(menuBtn);

  menuBtn.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('active');
  });

  document.getElementById('closeMenu').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('active');
  });

  // Dark mode
  const darkBtn = document.getElementById('darkModeBtn');
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });

  // Add to Cart Animation
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('Add to Cart')) {
      btn.addEventListener('click', function() {
        this.textContent = 'Added!';
        this.style.background = '#28a745';
        setTimeout(() => {
          this.textContent = 'Add to Cart';
          this.style.background = '#FF6B35';
        }, 1500);

        // Flying cart animation
        const cartIcon = document.querySelector('.cart-icon') || createCartIcon();
        const rect = this.getBoundingClientRect();
        const fly = document.createElement('div');
        fly.className = 'fly-to-cart';
        fly.style.left = rect.left + 'px';
        fly.style.top = rect.top + 'px';
        document.body.appendChild(fly);
        setTimeout(() => fly.remove(), 1000);
      });
    }
  });

  // Simple carousel (auto slide every 4 sec)
  const images = ['https://i.imgur.com/5Z0Zr8H.png', 'https://i.imgur.com/KE2QJ0l.png', 'https://i.imgur.com/8p9k0pJ.png'];
  let current = 0;
  setInterval(() => {
    current = (current + 1) % images.length;
    document.querySelector('.hero img').src = images[current];
  }, 4000);
});

// Create floating cart icon
function createCartIcon() {
  const cart = document.createElement('div');
  cart.className = 'cart-icon';
  cart.innerHTML = 'Shopping Bag (0)';
  document.body.appendChild(cart);
  return cart;
}