const HEADER = document.querySelector(".header");
const HEADER_BRAND = document.querySelector(".navbar-brand");

const FILTER_SHOWCASE = document.querySelectorAll(".showcase-filter-item");

const ACTIVE_CLASS = "active";

window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    HEADER.style.background = "#000";
    HEADER_BRAND.style.width = "80px";
  } else {
    HEADER.style.background = "unset";
    HEADER_BRAND.style.width = "120px";
  }
};

FILTER_SHOWCASE.forEach((item) => {
  item.onclick = () => {
    document
      .querySelector(".showcase-filter-item.active")
      .classList.remove(ACTIVE_CLASS);
    item.classList.add(ACTIVE_CLASS);
  };
});
