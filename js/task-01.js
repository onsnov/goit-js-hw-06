
// const categories = document.querySelector("#categories").querySelectorAll("li.item");

const categories = document.querySelector("#categories").querySelectorAll("li.item");
 const categoriesItem = categories

 console.log(`Number of categories: ${categoriesItem.length}`);


 categoriesItem.forEach(item => {
        const categoriesName = item.firstElementChild.textContent;
        const categoriesElements = item.lastElementChild.length;
        console.log(`Category: ${categoriesName}`);
        console.log(`Elements: ${categoriesElements}`);
    });

