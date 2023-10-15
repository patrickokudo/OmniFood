const mainText = "Eat as much as you like";
// const h1 = document.querySelector(".heading-primary");
// h1.style.cursor = "pointer";
// h1.textContent = mainText;
// h1.style.backgroundColor = "#456fdd";
// h1.style.padding = "5rem";

// h1.addEventListener("click", function () {
//   h1.textContent = mainText;
//   h1.style.backgroundColor = "#456fdd";
//   h1.style.padding = "5rem";
// });
//SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION IN SAFARI
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // SCROLL TO OTHER LINKS
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // CLOSE MOBILE NAVIGATION
    if (link.classList.contains("main-nav-link"));
    headerEl.classList.toggle("nav-open");
  });
});
// SROLL BACK TO TOP OPTIONS FOR LOGOS ESPECIALLY

// STICKY NAVIGATION TO DISPLAY AS SOON AS THE HERO SECTION BECOMES NOT VISIBLE
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add(".sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.add(".sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js