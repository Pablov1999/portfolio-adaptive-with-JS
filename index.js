import i18Obj from './js/translate.js';
const body = document.querySelector('.body');
const btnBurger = document.querySelector('.burger-menu');
const menuBurger = document.querySelector('.header__nav');
const listBurger = document.querySelector('.nav-header__list');
const listItemBurger = document.querySelectorAll('.nav-header__item > a[href^="#"]');
const overlay = document.querySelector('.header__nav');
const langItem = document.querySelectorAll('.header__lang-item');
const btnAll = document.querySelectorAll('.button-theme');
const section = document.querySelectorAll('.section');
const sectionHeader = document.querySelectorAll('.tittle');
const header = document.querySelector('.header');
const btnTheme = document.querySelector('.header__change-theme');
let lange = 'en';
let theme = 'dark';
/*translation*/
const getTranslate = (lang) => {
    const transAtr = document.querySelectorAll('[data-i18]');
    const transInp = document.querySelectorAll('.contacts-input');
    transAtr.forEach(el => {
      let valueData = el.dataset.i18;
      el.textContent = `${lang[valueData]}`;
    });
    transInp.forEach(elem => {
      let valueData = elem.dataset.i18;
      elem.placeholder = `${lang[valueData]}`;
    })
  };
  
  const changeTranslate = (e) => {
    if (e.target.classList.contains('header__lang-item')) {
      langItem.forEach(el => el.classList.remove('header__lang_active'));
      e.target.classList.add('header__lang_active');
      getTranslate(i18Obj[e.target.dataset.i18]);
    }
    lange = e.target.dataset.i18;
    setLocalStorage();
  };
  langItem.forEach(el => el.addEventListener('click', changeTranslate));
/*burger menu*/
btnBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('nav__header_active');
    listBurger.classList.toggle('header__nav_active');
    body.classList.toggle('body__body_active');
    btnBurger.classList.toggle('active');
});
listItemBurger.forEach(el => {
    el.addEventListener('click', () => {
        menuBurger.classList.remove('nav__header_active');
        listBurger.classList.remove('header__nav_active');
        body.classList.remove('body__body_active');
        btnBurger.classList.remove('active');
    });
});
overlay.addEventListener('click', e => {
    if (!e.target.closest('.nav-header__list')) {
        menuBurger.classList.remove('nav__header_active');
        listBurger.classList.remove('header__nav_active');
        body.classList.remove('body__body_active');
        btnBurger.classList.remove('active');
    }
});

//cashing
function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  for (let i = 1; i <= 6; i++) {
    for (let k = 0; k < seasons.length; k++) {
      const img = new Image();
      img.src = `assets/img/${seasons[k]}/${i}.jpg`;
    }
  }
}
preloadImages();
/*how do i change pictures(huge code)*/

const changeToWinter = document.querySelector('.changeToWinter');
const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const fourth = document.querySelector('.fourth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');

changeToWinter.addEventListener('click', () => {
    first.src = "./assets/img/winter/1.jpg",
        second.src = "./assets/img/winter/2.jpg",
        third.src = "./assets/img/winter/3.jpg",
        fourth.src = "./assets/img/winter/4.jpg",
        fifth.src = "./assets/img/winter/5.jpg",
        sixth.src = "./assets/img/winter/6.jpg"
});

const changeToSpring = document.querySelector('.changeToSpring');

changeToSpring.addEventListener('click', () => {
    first.src = "./assets/img/spring/1.jpg",
        second.src = "./assets/img/spring/2.jpg",
        third.src = "./assets/img/spring/3.jpg",
        fourth.src = "./assets/img/spring/4.jpg",
        fifth.src = "./assets/img/spring/5.jpg",
        sixth.src = "./assets/img/spring/6.jpg"
});

const changeToSummer = document.querySelector('.changeToSummer');

changeToSummer.addEventListener('click', () => {
    first.src = "./assets/img/summer/1.jpg",
        second.src = "./assets/img/summer/2.jpg",
        third.src = "./assets/img/summer/3.jpg",
        fourth.src = "./assets/img/summer/4.jpg",
        fifth.src = "./assets/img/summer/5.jpg",
        sixth.src = "./assets/img/summer/6.jpg"
});

const changeToAutumn = document.querySelector('.changeToAutumn');

changeToAutumn.addEventListener('click', () => {
    first.src = "./assets/img/autumn/1.jpg",
        second.src = "./assets/img/autumn/2.jpg",
        third.src = "./assets/img/autumn/3.jpg",
        fourth.src = "./assets/img/autumn/4.jpg",
        fifth.src = "./assets/img/autumn/5.jpg",
        sixth.src = "./assets/img/autumn/6.jpg"
});


/*how do i make active buttons?*/
const btn = document.querySelector('.portfolio-forniture__seasons');

btn.addEventListener('click', makeButtonActive);

function makeButtonActive(e) {
  if (e.target.classList.contains('portfolio-forniture__season')) {
    for (const btn of document.querySelectorAll('.portfolio-forniture__season')) {
      btn.classList.remove('season-content_active');
    }
    event.target.classList.toggle('season-content_active');
  }
}

 /*advanced button effects*/

 btnAll.forEach(el => el.addEventListener('click', function (e) {
  const x = e.pageX
  const y = e.pageY
  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeftconst
  const xInside = x - buttonLeft
  const yInside = y - buttonTop
  const circle = document.createElement('span')
  circle.classList.add('circle')
  circle.style.top = yInside + 'px'
  circle.style.left = xInside + 'px'
  this.appendChild(circle)
  setTimeout(() => circle.remove(), 500)
}))

/*theme*/
const changeTheme = () => {
  section.forEach((el, idx) => {
    if (idx !== 0 && idx !== section.length - 1) {
      el.classList.toggle('light-theme');
    }
  });
  sectionHeader.forEach((el, idx) => {
    if (idx !== sectionHeader.length - 1) {
      el.classList.toggle('light-theme__header');
    }
  });
  header.classList.toggle('header__light-theme');
  btnTheme.classList.toggle('change__theme_active');
  if (btnTheme.classList.contains('change__theme_active')) {
    theme = 'light';
    setLocalStorageTheme();
  } else {
    theme = 'dark';
    setLocalStorageTheme();
  }
};
btnTheme.addEventListener('click', changeTheme);