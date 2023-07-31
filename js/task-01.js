const quantityOfCategories = document.querySelectorAll(".item");
console.log("Quantity of categories: ", quantityOfCategories.length);

quantityOfCategories.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});