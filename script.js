// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
var hero = document.getElementById('phHero');
var layers = Array.prototype.slice.call(document.querySelectorAll('.parallax-layer'));

var target = { x: 0, y: 0 };
var current = { x: 0, y: 0 };
var rafId = null;

function onMouseMove(e) {
  var rect = hero.getBoundingClientRect();
  var cx = rect.left + rect.width / 2;
  var cy = rect.top + rect.height / 2;
  target.x = e.clientX - cx;
  target.y = e.clientY - cy;
}

function onMouseLeave() {
  target.x = 0;
  target.y = 0;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function animate() {
  current.x = lerp(current.x, target.x, 0.08);
  current.y = lerp(current.y, target.y, 0.08);

  layers.forEach(function (layer) {
    var depth = parseFloat(layer.getAttribute('data-depth')) || 0;
    var moveX = -current.x * depth;
    var moveY = -current.y * depth;
    layer.style.transform = 'translate3d(' + moveX.toFixed(2) + 'px,' + moveY.toFixed(2) + 'px,0)';
  });

  rafId = requestAnimationFrame(animate);
}

hero.addEventListener('mousemove', onMouseMove);
hero.addEventListener('mouseleave', onMouseLeave);

animate();
// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
