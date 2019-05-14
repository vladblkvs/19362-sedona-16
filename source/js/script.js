var navMain = document.querySelector(".main-nav");
if (navMain) {
  var menuBtn = navMain.querySelector(".main-nav__menu-btn");
  var promptClosed = navMain.querySelector(".main-nav__a11y-menu-btn:first-child");
  var promptOpened = navMain.querySelector(".main-nav__a11y-menu-btn:nth-child(2)");

  navMain.classList.remove("main-nav--nojs");
  menuBtn.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      promptClosed.classList.remove("main-nav__a11y-menu-btn--show");
      promptOpened.classList.add("main-nav__a11y-menu-btn--show");
    } else {
      navMain.classList.add("main-nav--closed");
      promptClosed.classList.add("main-nav__a11y-menu-btn--show");
      promptOpened.classList.remove("main-nav__a11y-menu-btn--show");
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

var locationBlock = document.querySelector(".location");
if (locationBlock) {
  locationBlock.classList.remove("location--nojs");

  function initMap() {
    var map = new google.maps.Map(document.querySelector(".location__google-maps"), {
      zoom: 7,
      center: {
        lat: 34.9397395,
        lng: -111.7609896
      }
    });

    var image = {
      url: "/img/icon-map-marker.svg",
      scaledSize: new google.maps.Size(27, 27)
    }

    var beachMarker = new google.maps.Marker({
      position: {
        lat: 34.8097395,
        lng: -111.7609896
      },
      map: map,
      icon: image
    });
  }

  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwikDmtcCJ77yB9lKK91KehqoPH4L_O4Y&callback=initMap";
  script.defer = true;

  document.head.appendChild(script);
}
