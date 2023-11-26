
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});
/* ====== LOGIN NAS PÁGINAS =====*/
function loginAtivo (){
  var loginefetuado = document.getElementById('login_efetuado')
  loginefetuado.style.background = 'var(--color-bgdefault)'
  loginefetuado.style.border = '2px'
  loginefetuado.style.borderRadius = '5px'     
  loginefetuado.style.fontSize = '15px';
  loginefetuado.style.display = 'flex';
  loginefetuado.style.alignItems = 'center';
    
  if(localStorage.getItem("loginativo") == null){

  }else{

    loginefetuado.innerHTML += `<p> Usuário:
    ${localStorage.getItem("loginativo")}</p>`
    
  }
  
}
loginAtivo()
/* ====== ACESSIBILIDADE=========*/

/* ==================== fontSize ================== */
let fontSize = 100
let increaseDecrease= 10
let text = document.getElementsByClassName('text')
function aumentarLetra() {
    fontSize = fontSize + increaseDecrease;
        document.body.style.fontSize = fontSize + '%';
}
function diminuirLetra() {
    fontSize = fontSize - increaseDecrease;
        document.body.style.fontSize = fontSize + '%';
        document.getElementsByTagName(div).fontSize = fontSize + '%';
        document.getElementsByTagName(h2).fontSize = fontSize + '%';
        document.getElementsByTagName(p).fontSize = fontSize + '%';
        document.getElementsByTagName(a).fontSize = fontSize + '%';
        document.getElementsByTagName(h4).fontSize = fontSize + '%';
        document.getElementsByTagName(h3).fontSize = fontSize + '%';
}
/* ==================== END fontSize ================== */
/* ==================== MODO DARK ======================*/
var icon = document.getElementById('icon');
icon.onclick = function(){
  document.body.classList.toggle("escuro");
  if(document.body.classList.contains("escuro")){
    icon.src = "../assets/img/icons/sun.webp"
  }
  else{
    icon.src = "../assets/img/icons/lua.png"
  }
}

/* ================== END MODO DARK ====================*/