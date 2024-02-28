import { PRODUCT_DATA } from "../../../mainpages/data/data.js";

const category = new URLSearchParams(window.location.search).get("category");

productListShow(category);

function productListShow(category) {
  productCategory(category);
  productDivide(category);
}

function productCategory(category) {
  const categoryText = document.querySelector(".category");
  const title = document.createElement("p");
  title.classList.add("title-class");
  title.innerHTML = `${category}`;
  categoryText.appendChild(title);
}

function productDivide(category) {
  const productList = document.querySelector(".product ul");

  PRODUCT_DATA.data.forEach((product) => {
    const li = document.createElement("li");

    if (product.category === category || product.state === category) {
      const discountPrice = Math.floor(
        product.price * (1 - product.discountRate / 100)
      );

      li.innerHTML = `
      <a href='../details/details.html?productId=${product.id}'><img src="${
        product.imageUrl
      }" alt="신발 예시" /></a>
          <div class="product-information">
            <p class='product-name'>${product.name}</p>
            <p class='product-category'>${product.category}</p>
            <p class='product-price'>${
              product.price.toLocaleString() + " won"
            }</p>
            <div>
              <span class='product-discount'>${
                product.discountRate + "%"
              }</span>
              <span class='product-discountPrice'>${
                discountPrice.toLocaleString() + " won"
              }</span>
            </div>
          </div>
        `;

      productList.appendChild(li);
    }
  });
}
