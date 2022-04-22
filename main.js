/*Nav-mobile*/
const btnMenu = document.querySelector(".main-header .btn-menu");
const menu = document.querySelector(".main-header");
const navLinks = document.querySelectorAll(".main-nav .link");
const navDropLinks = document.querySelectorAll(".main-nav .link.dropdown");

btnMenu.addEventListener("click", menuOpen);
function menuOpen() {
  menu.classList.toggle("active");
}
//--下拉式選單
navDropLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.classList.contains("open")) {
      //關閉本身下拉選單
      link.classList.remove("open");
    } else {
      //關閉已開啟下拉選單
      navDropLinks.forEach((link) => {
        link.classList.remove("open");
      });
      //開啟本身下拉選單
      link.classList.add("open");
    }
  });
});
