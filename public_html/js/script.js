function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
}

document.addEventListener("click", function (event) {
  var menu = document.getElementById("menu");
  var button = document.querySelector(".menu-btn");
  if (!menu.contains(event.target) && !button.contains(event.target)) {
    menu.classList.remove("active");
  }
});

var links = document.querySelectorAll("#menu a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.remove("active");
  });
});

function moveLeft() {
  var container = document.getElementById("toplist");
  container.scrollBy({ left: -200, behavior: "smooth" });
}

function moveRight() {
  var container = document.getElementById("toplist");
  container.scrollBy({ left: 200, behavior: "smooth" });
}

const grid = document.getElementById("toplist");
let isDragging = false;
let startPosition;
let startScroll;

grid.addEventListener("mousedown", function (e) {
  isDragging = true;
  startPosition = e.pageX;
  startScroll = grid.scrollLeft;
});

document.addEventListener("mouseup", function () {
  isDragging = false;
});

document.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  let move = e.pageX - startPosition;
  grid.scrollLeft = startPosition - move;
});
