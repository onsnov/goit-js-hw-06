
const categories = document.querySelector("#categories").querySelectorAll("li.item");
// const categoriesItem = categories

 console.log(`Number of categories: ${categoriesItem.length}`);


 categoriesItem.forEach(item => {
        const categoriesName = item.querySelector("h2").textContent;
        const categoriesElements = item.querySelectorAll("li").length;
        console.log(`Category: ${categoriesName}`);
        console.log(`Elements: ${categoriesElements}`);
    });

