import remove from "./removebutton.js";
import showTotalPrice from "./showtotalprice.js";

function showCart(cart) {
  const productContainer = document.querySelector(".product-container");
  let count = 1;
  let totalPrice = 0;
  let totalDiscount = 0;

  cart.forEach((product, index) => {
    const div = document.createElement("div");
    div.className = "product-list";
    const uniqueId = `${product.id}_${product.selectedColor}_${product.selectedSize}_${index}`;

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
          <button data-id='${uniqueId}' class='list-remove'>삭제</button> 
      `;

    productContainer.appendChild(div);

    totalPrice += product.price;
    totalDiscount += (product.price * product.discountRate) / 100;
  });

  remove(cart);

  showTotalPrice(totalPrice, totalDiscount);
}

export default showCart;
