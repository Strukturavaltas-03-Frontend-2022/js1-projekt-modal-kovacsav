const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content").focus();
const btn = document.querySelector(".button__open");
const btnOk = document.querySelector(".button__ok");
const btnCancel = document.querySelector(".button__cancel");
const span = document.querySelector(".close__button");

// Open modal
btn.addEventListener("click", () => {
  modal.classList.remove("hide");
  modal.classList.add("appear");
  modal.style.display = "";
});

// Close modal with buttons
span.addEventListener("click", () => {
  modal.classList.remove("appear");
  modal.classList.add("hide");
});

btnOk.addEventListener("click", () => {
  modal.classList.remove("appear");
  modal.classList.add("hide");
});

btnCancel.addEventListener("click", () => {
  modal.classList.remove("appear");
  modal.classList.add("hide");
});

// Close modal with mouse click outside the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*
window.addEventListener("click", () => {
  if (Event.target == modal) {
    modal.classList.remove("appear");
    modal.classList.add("hide");
  }
});
*/
