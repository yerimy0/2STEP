import { PRODUCT_DATA } from "../../../mainpages/data/data.js";

// 상품 상세 페이지를 로드하는 함수
loadProductDetailPage();

function loadProductDetailPage() {
  const productId = new URLSearchParams(window.location.search).get(
    "productId"
  );

  const selectedProduct = PRODUCT_DATA.find(
    (product) => product.id === Number(productId)
  );

  productShow(selectedProduct);
}

function productShow(product) {
  const productContainer = document.querySelector(".product-container");

  const div = document.createElement("div");
  div.classList.add("product-show");

  const discountPrice = Math.floor(
    product.currentPrice * (1 - product.discount / 100)
  );

  div.innerHTML = `
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

  productContainer.appendChild(div);
}
