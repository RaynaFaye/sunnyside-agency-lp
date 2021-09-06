const menuButton = document.querySelector('.header__menu-button');
const menu = document.querySelector('.header__navigation');
const menuLinks = document.querySelectorAll('.header__menu__link');

function openMenu() {
  menuButton.setAttribute('aria-expanded', true);
  menu.classList.add('open');
}

function hideMenu() {
  menuButton.setAttribute('aria-expanded', false);
  menu.classList.remove('open');
}

menuButton.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    hideMenu();
  } else {
    openMenu();
  }
});

window.addEventListener('keyup', function (event) {
  if (event.key === 'Escape' && menu.classList.contains('open')) {
    hideMenu();
  }
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('focusout', function (event) {
    if (event.relatedTarget.classList.contains('header__menu__link')) {
      return;
    }
    hideMenu();
    menuButton.focus();
  });
});
