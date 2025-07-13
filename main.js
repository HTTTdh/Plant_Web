const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    navMenu.classList.toggle('left-[0]')
    hamburger.classList.toggle('ri-close-large-line')
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('left-[0]')
        hamburger.classList.remove('ri-close-large-line')
    });
});

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidePreview: 1,
        },
        768: {
            slidePreview: 2,
        },
        1024: {
            slidePreview: 3,
        }
    }

});
  
const scrollUp = () => { 
    const scrollUpBtn = document.getElementById('scroll-up');
    if (this.scrollY >= 250) {
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
    } else {
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
    }
}
window.addEventListener('scroll', scrollUp);

const scrollHeader = () => { 
    const header = document.getElementById('navbar');
    if (this.scrollY >= 50) {
        header.classList.add('border-b',"border-yellow-500");
    } else {
        header.classList.remove('border-b',"border-yellow-500");
    }
    window.addEventListener('scroll', scrollHeader);
}
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 250,
    delay: 300,
    reset: true,
})

sr.reveal('.home__data, .about__top, .popular__top, .review__swiper, .footer__icon, .footer__content, .copy__right');
sr.reveal('.home__image', { delay: 500, scale:0.5 });
sr.reveal('.service__card, .popular__card', { interval: 100 });
sr.reveal('.about__leaf', { delay: 2000, origin: 'right' });
sr.reveal('.about_item_1-img, .about_item_2-content', { origin: "left" });
sr.reveal('.about_item_2-img, .about_item_1-content', { origin: "right" });

sr.reveal('.review_leaf, .footer__floral', { delay: 2000, origin: 'left' });

const activeLink = () => { 
    const secsions = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = 'home';
    secsions.forEach(section => {
        const sectionTop = section.offsetTop;
        if (this.scrollY >= sectionTop-60) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
        }
    );
}

window.add("scroll", activeLink);

