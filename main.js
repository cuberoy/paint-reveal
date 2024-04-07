const replayButton = document.querySelector(".replay-animation");
const resetButton = document.querySelector(".reset-animation");
const maskedImage = document.querySelector(".color-image");

replayButton.addEventListener("click", () => {
  maskedImage.classList.remove("mask-animation");
  setTimeout(() => maskedImage.classList.add("mask-animation"), 100);
});

resetButton.addEventListener("click", () => {
    maskedImage.classList.remove("mask-animation");
  });
