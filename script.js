// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize floating actions
    initFloatingActions();
    
    // Initialize particles
    initParticles();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
});

// Phone number for all calls
const PHONE_NUMBER = '+905462558064';
const WHATSAPP_NUMBER = '905462558064';

// Call function
function makeCall() {
    window.location.href = `tel:${PHONE_NUMBER}`;
}

// WhatsApp function
function sendWhatsAppMessage(message = 'Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.') {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
}

// Initialize floating actions
function initFloatingActions() {
    // Mobile call button
    document.getElementById('mobile-call-btn').addEventListener('click', makeCall);
    
    // Mobile WhatsApp button
    document.getElementById('mobile-whatsapp-btn').addEventListener('click', () => {
        sendWhatsAppMessage('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
    });
    
    // Desktop WhatsApp button
    document.getElementById('desktop-whatsapp-btn').addEventListener('click', () => {
        sendWhatsAppMessage('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
    });
    
    // Banner call button
    document.getElementById('banner-call-btn').addEventListener('click', makeCall);
    
    // Hero buttons
    document.getElementById('hero-call-btn').addEventListener('click', makeCall);
    document.getElementById('hero-whatsapp-btn').addEventListener('click', () => {
        sendWhatsAppMessage('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
    });
    
    // Handle desktop floating button visibility
    const desktopWhatsApp = document.getElementById('desktop-whatsapp');
    
    function toggleDesktopWhatsApp() {
        if (window.pageYOffset > 300 && window.innerWidth >= 768) {
            desktopWhatsApp.style.display = 'block';
        } else {
            desktopWhatsApp.style.display = 'none';
        }
    }
    
    window.addEventListener('scroll', toggleDesktopWhatsApp);
    window.addEventListener('resize', toggleDesktopWhatsApp);
}

// Initialize particles
function initParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    
    // Create 20 particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (3 + Math.random() * 4) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize contact form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Create WhatsApp message
        let whatsappMessage = `Merhaba Gökhan Bey,\n\n`;
        whatsappMessage += `Ad: ${name}\n`;
        whatsappMessage += `Telefon: ${phone}\n`;
        whatsappMessage += `Hizmet: ${getServiceName(service)}\n`;
        if (message) {
            whatsappMessage += `Mesaj: ${message}\n`;
        }
        whatsappMessage += `\nTaksi hizmeti almak istiyorum.`;
        
        // Send via WhatsApp
        sendWhatsAppMessage(whatsappMessage);
    });
}

// Get service name in Turkish
function getServiceName(serviceValue) {
    const services = {
        'airport': 'Havalimanı Transfer',
        'city': 'Şehir İçi Ulaşım',
        'vip': 'VIP Transfer',
        'other': 'Diğer'
    };
    return services[serviceValue] || serviceValue;
}

// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in-up elements
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
    
    // Observe cards and other elements
    const animatedElements = document.querySelectorAll('.feature-card, .about-card, .service-card, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    // Add smooth scrolling to all links with href starting with #
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 60; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add loading animation
window.addEventListener('load', function() {
    // Add loaded class to body for any entrance animations
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroElements = document.querySelectorAll('#hero .fade-in-up');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Handle resize events
window.addEventListener('resize', function() {
    // Adjust background attachment for mobile
    const heroSection = document.querySelector('.hero-section');
    if (window.innerWidth <= 768) {
        heroSection.style.backgroundAttachment = 'scroll';
    } else {
        heroSection.style.backgroundAttachment = 'fixed';
    }
});

// Add hover effects for buttons
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.btn, .floating-btn, .service-btn, .emergency-btn, .footer-btn')) {
        e.target.style.transform = 'translateY(-2px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.btn, .floating-btn, .service-btn, .emergency-btn, .footer-btn')) {
        e.target.style.transform = 'translateY(0)';
    }
});

// Add bounce effect to icons on hover
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.btn i, .floating-btn i')) {
        e.target.style.animation = 'bounce 0.6s ease-in-out';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.btn i, .floating-btn i')) {
        e.target.style.animation = '';
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttled scroll handler
const handleScroll = throttle(function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax effect for hero background
    const hero = document.querySelector('.hero-section');
    if (hero && window.innerWidth > 768) {
        hero.style.transform = `translateY(${rate}px)`;
    }
}, 16);

window.addEventListener('scroll', handleScroll);

// Add error handling for WhatsApp and phone calls
function handleError(action, error) {
    console.error(`Error in ${action}:`, error);
    // You could add a toast notification here
    alert(`Üzgünüz, ${action} başlatılırken bir hata oluştu. Lütfen manuel olarak arayın: ${PHONE_NUMBER}`);
}

// Enhanced WhatsApp function with error handling
function sendWhatsAppMessageSafe(message) {
    try {
        sendWhatsAppMessage(message);
    } catch (error) {
        handleError('WhatsApp mesaj gönderme', error);
    }
}

// Enhanced call function with error handling
function makeCallSafe() {
    try {
        makeCall();
    } catch (error) {
        handleError('telefon araması', error);
        // Fallback: copy number to clipboard
        if (navigator.clipboard) {
            navigator.clipboard.writeText(PHONE_NUMBER).then(() => {
                alert(`Telefon numarası panoya kopyalandı: ${PHONE_NUMBER}`);
            });
        }
    }
}