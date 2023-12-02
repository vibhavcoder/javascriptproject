"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const btnclose = document.querySelector(".close-modal");

const btnopenmodal = document.querySelectorAll(".show-modal");

console.log(btnopenmodal);

const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnopenmodal.length; i++) {
  btnopenmodal[i].addEventListener("click", openmodal);
}

btnclose.addEventListener("click", closemodal);

overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closemodal();
    }
  }
});
