// Select/DeSelect All CheckBox
let checkboxes = document.querySelectorAll("input[type='checkbox']");
let selectAll = document.querySelector(".selectAll");

function checkAll(myCheckBox) {
  if(myCheckBox.checked == true) {
    checkboxes.forEach((ele) => {
      ele.checked = true;
    })
  }
  else {
    checkboxes.forEach((ele) => {
      ele.checked = false;
    })
  }
}

// Header Accordion
let collapse1 = document.querySelector("#collapse1");
let open = document.querySelector(".open");
let marequeeParent = document.querySelector(".marequeeParent");

open.addEventListener("click", () => {
  if (collapse1.classList.contains("show")) {
    marequeeParent.classList.remove("hideShow");
  } else {
    marequeeParent.classList.add("hideShow");
  }
});

// Close Accordion
let closeBtn = document.querySelectorAll(".closeBtn");
let closeCard = document.querySelectorAll(".closeCard");

closeBtn.forEach((e) => {
  e.addEventListener("click", () => {
    closeCard.forEach((ele) => {
      if (ele.classList.contains("show")) {
        ele.classList.remove("show");
      }
    });
  });
});

// Review Section
$(".review-slider").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  items: 3,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1160: {
      items: 3,
    },
  },
});

// SideNav
let overlay = document.querySelector(".overlay");
let body = document.querySelector('body');
function openNav() {
    overlay.classList.toggle("width100");
    body.classList.toggle("overflowHidden");
}