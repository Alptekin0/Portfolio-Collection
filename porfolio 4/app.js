// AOS (Animate On Scroll) başlatma
AOS.init({
    duration: 1000,
    once: true
});

// Navbar scroll efekti
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobil menü toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Menüyü aç/kapat
    nav.classList.toggle('nav-active');
    
    // Link animasyonları
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger animasyonu
    burger.classList.toggle('toggle');
});

// Menü linkine tıklandığında mobil menüyü kapat
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Navbar yüksekliğini hesapla
        const navHeight = document.querySelector('.navbar').offsetHeight;
        
        // Hedef elementı bul
        const targetElement = document.querySelector(this.getAttribute('href'));
        
        // Sayfa konumunu ayarla (navbar yüksekliğini hesaba katarak)
        window.scrollTo({
            top: targetElement.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});

// Typing efekti
const typingText = document.querySelector('.typing-text');
const text = "Web Geliştirici & Tasarımcı";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Sayfa yüklendiğinde typing efektini başlat
window.addEventListener('load', () => {
    typingText.textContent = '';
    typeWriter();
});

// Form gönderimi
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
    console.log('Form verileri:', data);
    
    // Form başarılı mesajı
    alert('Mesajınız başarıyla gönderildi!');
    contactForm.reset();
});

// Progress bar animasyonu
const progressBars = document.querySelectorAll('.progress');

// Yetenekler bölümü görünür olduğunda progress bar'ları göster
const skillsSection = document.querySelector('.skills');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            progressBars.forEach(progress => {
                const width = progress.style.width;
                progress.style.width = "0";
                setTimeout(() => {
                    progress.style.width = width;
                }, 300);
            });
        }
    });
}, { threshold: 0.5 });

skillObserver.observe(skillsSection);