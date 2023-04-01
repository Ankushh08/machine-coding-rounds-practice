const modalButton = document.getElementById("modal-button");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");

modalButton.addEventListener("click", () => {
  modal.classList.remove("hide");
  modalButton.classList.add("hide");
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hide");
  modalButton.classList.remove("hide");
});
