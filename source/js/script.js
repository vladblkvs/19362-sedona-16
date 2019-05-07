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

var feedback = document.querySelector(".feedback");

if (feedback) {
  var form = document.querySelector(".feedback__form");
  var popUp = document.querySelector(".modal");
  var popClose = popUp.querySelector(".modal-close");
  var successPopup = document.querySelector(".modal--success");
  var successClose = successPopup.querySelector(".modal-close");
  var failurePopup = document.querySelector(".modal--failure");
  var failureClose = failurePopup.querySelector(".modal-close");
  var submitBtn = form.querySelector(".feedback__submit-btn");
  var userName = form.querySelector("[name=Name]");
  var userSurname = form.querySelector("[name=Surname]");
  var email = form.querySelector("[name=Email]");
  var tel = form.querySelector("[name=Telephone]");

  var isStorageSupport = true;
  var storage1 = "";
  var storage2 = "";
  var storage3 = "";
  var storage4 = "";
  try {
    storage1 = localStorage.getItem("Name");
    storage2 = localStorage.getItem("Surname");
    storage3 = localStorage.getItem("Email");
    storage4 = localStorage.getItem("Telephone");
  } catch (err) {
    isStorageSupport = false;
  }

  form.addEventListener("submit", function(evt) {
    if (!userName.value || !userSurname.value || !email.value || !tel.value) {
      evt.preventDefault();
      failurePopup.classList.add("modal--show");
    } else {
      if (isStorageSupport) {
        evt.preventDefault();
        localStorage.setItem("Name", userName.value);
        localStorage.setItem("Surname", userSurname.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Telephone", tel.value);
      }
      successPopup.classList.add("modal--show");
    }
  });

  successClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    successPopup.classList.remove("modal--show");
  });

  failureClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    failurePopup.classList.remove("modal--show");
    userName.focus();
  });
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (successPopup.classList.contains("modal--show")) {
      evt.preventDefault();
      successPopup.classList.remove("modal--show");
    }
    if (failurePopup.classList.contains("modal--show")) {
      evt.preventDefault();
      failurePopup.classList.remove("modal--show");
    }
  }
});
