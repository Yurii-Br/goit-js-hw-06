"use strict"
const categories = document.querySelector("#categories");
const items = categories.querySelectorAll("li.item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li");
  console.log("Category:", title);
  console.log("Elements:", elements.length);
});

// без чата gpt не могу сам решить такие задачи получается очень фигово 
