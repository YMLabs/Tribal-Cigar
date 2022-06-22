// load preloader
const preloader = document.querySelector(".preloader");
window.onload = function () {
  setTimeout(function () {
    preloader.style.opacity = "0";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1750);
  }, 1750);
};

// load images
const html = document.documentElement,
  canvas = document.getElementById("canvas-container"),
  context = canvas.getContext("2d"),
  frameCount = 1247,
  currentFrame = (e) => `./assets/images/experiment/tribal-cigar(${e.toString()}).jpg`,
  preloadImages = () => {
    for (let e = 1; e < frameCount; e++) {
      const t = new Image();
      (t.src = currentFrame(e)), (t.loading = "lazy");
    }
  },
  img = new Image();
(img.src = currentFrame(1)),
  (canvas.width = 1158),
  (canvas.height = 770),
  (img.onload = function () {
    context.drawImage(img, 0, 0);
  });
const updateImage = (e) => {
  (img.src = currentFrame(e)), context.drawImage(img, 0, 0);
};
window.addEventListener("scroll", () => {
  const e = html.scrollTop / (html.scrollHeight - window.innerHeight),
    t = Math.min(1340, Math.ceil(1341 * e));
  requestAnimationFrame(() => updateImage(t + 1));
  console.log(t);
}),
  preloadImages();
