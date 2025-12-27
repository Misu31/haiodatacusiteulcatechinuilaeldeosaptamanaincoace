// JavaScript Document

/*

TemplateMo 597 Neural Glass

https://templatemo.com/tm-597-neural-glass

*/

// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el); 
        });

        // Form submission effect
        /*document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = 'Se trimite...';
            this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            
            setTimeout(() => {
                this.innerHTML = 'Trimis cu succes!';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                
                setTimeout(() => {
                    this.innerHTML = 'Trimite';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                }, 2000);
            }, 1500);
        });*/
        // Combined sendEmail + button animation
function sendEmail(event) {
    event.preventDefault(); // stop form reload

    // BUTTON ANIMATION
    const btn = document.querySelector('.submit-btn');
    btn.innerHTML = 'Se trimite...';
    btn.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';

    setTimeout(() => {
        btn.innerHTML = 'Trimis cu succes!';
        btn.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
    }, 1500);

    setTimeout(() => {
        btn.innerHTML = 'Trimite';
        btn.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
    }, 3500);

    // EMAIL SENDING (mailto)
    var nume = document.getElementById('nume').value;
    var email = document.getElementById('mail').value;
    var subiect = document.getElementById('subiect').value;
    var mesaj = document.getElementById('mesaj').value;

    var emailBody =
        'Nume: ' + nume + '\n' +
        'Email: ' + email + '\n' +
        'Subiect: ' + subiect + '\n\n' +
        'Mesaj:\n' + mesaj;

    var mailtoLink =
        'mailto:sitdorart@gmail.com'
        + '?subject=' + encodeURIComponent(subiect)
        + '&body=' + encodeURIComponent(emailBody);

    // OPEN MAIL APP
    window.location.href = mailtoLink;
}

// Attach handler to form
document.getElementById('contact-form').addEventListener('submit', sendEmail);
/* ================================
   Mouse-based background parallax
   ================================ */

const bg = document.querySelector('.neural-background');
const shapesLayer = document.querySelector('.geometric-shapes');
const linesLayer = document.querySelector('.neural-lines');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

// only desktop / mouse devices
const enableMouseParallax = window.matchMedia('(pointer: fine)').matches;

if (enableMouseParallax && bg && shapesLayer && linesLayer) {

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5);
        mouseY = (e.clientY / window.innerHeight - 0.5);
    });

    function animateMouseParallax() {
        // smooth easing
        currentX += (mouseX - currentX) * 0.06;
        currentY += (mouseY - currentY) * 0.06;

        // background – slow
        bg.style.transform = `translate(${currentX * 18}px, ${currentY * 18}px)`;

        // shapes – medium
        shapesLayer.style.transform = `translate(${currentX * 35}px, ${currentY * 35}px)`;

        // lines – faster
        linesLayer.style.transform = `translate(${currentX * 55}px, ${currentY * 55}px)`;

        requestAnimationFrame(animateMouseParallax);
    }

    animateMouseParallax();
}
/* ================================
   Mouse glow effect
   ================================ */

const glow = document.createElement('div');
glow.className = 'mouse-glow';
document.body.appendChild(glow);

let glowX = 0;
let glowY = 0;
let targetGlowX = 0;
let targetGlowY = 0;

if (enableMouseParallax) {

    document.addEventListener('mousemove', (e) => {
        targetGlowX = e.clientX;
        targetGlowY = e.clientY;
        glow.style.opacity = '2';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    function animateGlow() {
        glowX += (targetGlowX - glowX) * 0.2;
        glowY += (targetGlowY - glowY) * 0.2;

        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

