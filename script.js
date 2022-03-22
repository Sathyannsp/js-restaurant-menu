var menuItems = [
  {
    name: "Food Item 1",
    oneLiner: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    img: "./img/1.jpg",
    desc: "One: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corporis. Tempora corrupti iusto quia aperiam cupiditate. Amet,   placeat nobis. Tenetur incidunt esse ducimus libero. Assumenda cumque    animi maxime soluta velit? Adipisci ullam quis, impedit nam accusamus    blanditiis eveniet beatae provident.",
  },
  {
    name: "Food Item 2",
    oneLiner: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam",
    img: "./img/2.jpg",
    desc: "Two: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corporis. Tempora corrupti iusto quia aperiam cupiditate. Amet,   placeat nobis. Tenetur incidunt esse ducimus libero. Assumenda cumque    animi maxime soluta velit? Adipisci ullam quis, impedit nam accusamus    blanditiis eveniet beatae provident.",
  },
  {
    name: "Food Item 3",
    oneLiner: "Tempora corrupti iusto quia aperiam cupiditate",
    img: "./img/3.jpg",
    desc: "Three: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corporis. Tempora corrupti iusto quia aperiam cupiditate. Amet,   placeat nobis. Tenetur incidunt esse ducimus libero. Assumenda cumque    animi maxime soluta velit? Adipisci ullam quis, impedit nam accusamus    blanditiis eveniet beatae provident.",
  },
  {
    name: "Food Item 4",
    oneLiner: "Tenetur incidunt esse ducimus libero.",
    img: "./img/4.jpg",
    desc: "Four: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corporis. Tempora corrupti iusto quia aperiam cupiditate. Amet,   placeat nobis. Tenetur incidunt esse ducimus libero. Assumenda cumque    animi maxime soluta velit? Adipisci ullam quis, impedit nam accusamus    blanditiis eveniet beatae provident.",
  },
  {
    name: "Food Item 5",
    oneLiner: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    img: "./img/5.jpg",
    desc: "Five: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam corporis. Tempora corrupti iusto quia aperiam cupiditate. Amet,   placeat nobis. Tenetur incidunt esse ducimus libero. Assumenda cumque    animi maxime soluta velit? Adipisci ullam quis, impedit nam accusamus    blanditiis eveniet beatae provident.",
  },
];

var title = document.getElementById("title");
var oneliner = document.getElementById("oneliner");
var img = document.getElementById("img");
var desc = document.getElementById("desc");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var random = document.getElementById("random");
let currentMenu = 0;

const allMenu = () => {
  var menu = menuItems[currentMenu];
  title.textContent = menu.name;
  oneliner.textContent = menu.oneLiner;
  img.src = menu.img;
  desc.textContent = menu.desc;
};

window.addEventListener("DOMContentLoaded", () => {
  allMenu(currentMenu);
});

prev.addEventListener("click", () => {
  currentMenu--;
  if (currentMenu < 0) {
    currentMenu = menuItems.length - 1;
  }
  allMenu(currentMenu);
});

next.addEventListener("click", () => {
  currentMenu++;
  if (currentMenu > menuItems.length - 1) {
    currentMenu = 0;
  }
  allMenu(currentMenu);
});

random.addEventListener("click", () => {
  currentMenu = Math.floor(Math.random() * menuItems.length);
  console.log(currentMenu);
  allMenu(currentMenu);
});
