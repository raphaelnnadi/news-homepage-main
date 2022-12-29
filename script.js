'use strict';

const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.flex');

navToggle.addEventListener('click', function () {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    console.log(visibility);
  } else if (visibility === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    console.log(visibility);
  }
});
