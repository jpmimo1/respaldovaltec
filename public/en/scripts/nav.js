const navButtonSearch = document.getElementById("button-search");
const searchBar = document.getElementById("search-bar");
let listener = () => {
  searchBar.classList.toggle("nav__search-bar--show");
};
navButtonSearch.addEventListener("click", listener);
