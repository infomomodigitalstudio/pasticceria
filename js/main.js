document.addEventListener('DOMContentLoaded', () => {
  // Header Scroll Effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Abilita lo scorrimento orizzontale con la rotellina del mouse (scroll verticale -> scroll orizzontale)
  const sliders = document.querySelectorAll('.categories-slider, .product-slider');
  sliders.forEach(slider => {
    slider.addEventListener('wheel', (evt) => {
      // Se l'utente sta scorrendo in verticale, converti in orizzontale
      if (evt.deltaY !== 0) {
        evt.preventDefault();
        slider.scrollLeft += evt.deltaY;
      }
    });
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('active');
      
      if (isOpen) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        header.classList.remove('menu-open');
        menuBtn.textContent = 'Menu';
      } else {
        mobileMenu.classList.add('active');
        document.body.classList.add('menu-open');
        header.classList.add('menu-open');
        menuBtn.textContent = 'Chiudi';
      }
    });
  }

  // Intersection Observer for Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length > 0) {
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }
});
