import { PRODUCT_DATA } from "../../../mainpages/data/data.js";

productListShow("ACTIVE");

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

  PRODUCT_DATA.forEach((product) => {
    const li = document.createElement("li");

    if (product.category === category) {
      const discountPrice = Math.floor(
        product.currentPrice * (1 - product.discount / 100)
      );

      li.innerHTML = `
          <img src="${product.image}" alt="신발 예시" />
          <div class="product-information">
            <p class='product-name'>${product.name}</p>
            <p class='product-category'>${product.category}</p>
            <p class='product-price'>${
              product.currentPrice.toLocaleString() + " won"
            }</p>
            <div>
              <span class='product-discount'>${product.discount + "%"}</span>
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
