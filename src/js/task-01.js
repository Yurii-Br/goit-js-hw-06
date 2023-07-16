"use strict"
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children;
  console.log("Category:", title);
  console.log("Elements:", elements.length);
});


