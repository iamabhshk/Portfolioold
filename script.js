var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-6.5rem";
  }
  prevScrollpos = currentScrollPos;
};

document.addEventListener("aos:in", ({ detail }) => {
  console.log("animated in", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
  console.log("animated out", detail);
});
