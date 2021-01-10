let navMain = document.querySelector('.main-nav');
let headerToggle = document.querySelector('.page-header__toggle');
let headerNav = document.querySelector('.page-header__logo-wrapper');

navMain.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function() {
  if (headerNav.classList.contains('page-header__logo-wrapper--nav-closed')) {
    navMain.classList.remove('main-nav--closed');
    headerNav.classList.remove('page-header__logo-wrapper--nav-closed');
    navMain.classList.add('main-nav--opened');
    headerNav.classList.add('page-header__logo-wrapper--nav-opened');
  } else {
    navMain.classList.add('main-nav--closed');
    headerNav.classList.add('page-header__logo-wrapper--nav-closed');
    navMain.classList.remove('main-nav--opened');
    headerNav.classList.remove('page-header__logo-wrapper--nav-opened');
  }
});
