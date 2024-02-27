window.addEventListener("DOMContentLoaded", (event) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productContainer = document.querySelector(".product-container");
  let count = 1;

  cart.forEach((product) => {
    const div = document.createElement("div");
    div.className = "product-list";

    div.innerHTML = `
          <img class='product-img' src= "${product.imageUrl}" alt= "${
      product.name
    }">
          <div class='product-information'>
            <p class='product-name'>${product.name}</p>
            <p class='product-option'>${product.selectedColor} / ${
      product.selectedSize
    }</p>
          </div>
          <div class='product-count'>
                <button class="decrease">-</button>
                <span class="count">${count}</span>
                <button class="increase">+</button>
          </div>
          <p class='product-price'>${product.price.toLocaleString()}won</p>
          <button class='list-remove'>삭제</button> 
      `;

    productContainer.appendChild(div);

    document
      .querySelector(".list-remove")
      .addEventListener("click", function () {
        const removeId = product.id;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        console.log(typeof removeId);
        const newCart = cart.filter((x) => {
          console.log(typeof x.id);
          return Number(x.id) !== removeId;
        });

        localStorage.setItem("cart", JSON.stringify(newCart));
      });
  });
});
