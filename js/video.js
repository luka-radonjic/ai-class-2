// Pause/play control for the home page background video (WCAG 2.2.2).
const video = document.querySelector(".hero__video");
const toggle = document.querySelector(".hero__toggle");

if (video && toggle) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateLabel = () => {
    toggle.textContent = video.paused ? "Play background video" : "Pause background video";
  };

  if (reduceMotion.matches) {
    video.pause();
  } else {
    toggle.hidden = false;
  }

  toggle.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener("play", updateLabel);
  video.addEventListener("pause", updateLabel);
  updateLabel();
}
