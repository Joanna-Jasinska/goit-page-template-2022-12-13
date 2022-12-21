(() => {
  const mobileMenu = document.querySelector('.js-menu-mobile');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeBtnMenu = document.querySelector('.mobile-menu__list-element');
  const closeBtnMenuOne = document.querySelector('.mobile-menu__list-element-mod1');
  const closeBtnMenuTwo = document.querySelector('.mobile-menu__list-element-mod2');
  const closeBtnMenuThree = document.querySelector('.mobile-menu__list-element-mod3');
  const closeBtnMenuFour = document.querySelector('.mobile-menu__list-element-mod4');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeBtnMenu.addEventListener('click', toggleMenu);
  closeBtnMenuOne.addEventListener('click', toggleMenu);
  closeBtnMenuTwo.addEventListener('click', toggleMenu);
  closeBtnMenuThree.addEventListener('click', toggleMenu);
  closeBtnMenuFour.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  //   bodyScrollLock.enableBodyScroll(document.body);
  // });
})();
