const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const liList = [];
const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add('item');
  liList.push(li);
});

 ingredientsList.append(...liList);




