/*Nav-mobile*/
const btnMenu = document.querySelector("header.main button.menu");
const menu = document.querySelector("header.main");
const navLinks = document.querySelectorAll(".main-nav .link");
btnMenu.addEventListener("click", menuOpen);
function menuOpen() {
  menu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock-scroll");
}
/*--點擊link後，清除active效果，防止返回時看到*/
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

/*Nav-desktop-紅球跟隨效果*/
const navBar = document.querySelector(".main-nav .links");
const dot = document.querySelector(".dot");
let dotReload = true;
if (dot) {
  navBar.addEventListener("mouseover", () => {
    dot.classList.add("moving");
  });
  navBar.addEventListener("mouseout", () => {
    dot.classList.remove("moving");
  });
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      dot.classList.remove("with-position");
      dot.classList.add("moving");
      dot.style.setProperty("--move", link.offsetLeft - dot.offsetLeft + "px");
    });
  });
}
/*--進頁面後判斷*/
/*---跑一次---*/
if (dotReload) {
  navLinks.forEach((link) => {
    /*---確認有已啟動*/
    if (link.classList.contains("active")) {
      dot.style.setProperty("--move", link.offsetLeft - dot.offsetLeft + "px");
      dot.classList.add("with-position"); //無轉場時間，讓紅點不飄移
      dot.classList.add("moving");
    }
    /*---判斷換頁後滑鼠在不在navbar */
    document.querySelector("body").addEventListener("mousemove", () => {
      if (!menu.matches(":hover")) {
        dot.classList.remove("moving");
        dot.classList.remove("with-position");
      }
    });
  });
  dotReload = false;
}

/*Back to Previous Page 返回上一頁*/
const btnBack = document.querySelectorAll(".leave button.back");
if (btnBack) {
  btnBack.forEach((btn) => {
    btn.addEventListener("click", backToPrevious);
  });
}
function backToPrevious() {
  window.history.back();
}

/*Safari-100VH問題*/
function safariHacks() {
  let windowsVH = window.innerHeight / 100;
  document.querySelector("main").style.setProperty("--vh", windowsVH + "px");
}
window.addEventListener("resize", safariHacks);
safariHacks();
