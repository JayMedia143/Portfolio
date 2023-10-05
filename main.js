window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = 1;
  setTimeout(function () {
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000);
  }, 15000);
});
