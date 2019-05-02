var navMain = document.querySelector(".main-nav");
if (navMain) {
  var menuBtn = document.querySelector(".main-nav__menu-btn");

  navMain.classList.remove('main-nav--nojs');

  menuBtn.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
    } else {
      navMain.classList.add('main-nav--closed');
    }
  });
}
