import { PRODUCT_DATA, TILTE_TEXT } from "../data/data.js";

let sectionID = 1;
for (let i = 0; i < PRODUCT_DATA.data.length; i += 4) {
  const titleTextData = TILTE_TEXT[sectionID - 1];
  const productData = PRODUCT_DATA.data.slice(i, i + 4);

  CreateList(productData, sectionID);
  CreateTitle(titleTextData, sectionID);

  sectionID += 1;
}

function CreateList(products, id) {
  const productList = document.querySelector(
    `#productBanner${id} .popular-product ul`
  );

  products.forEach((product) => {
    const li = document.createElement("li");

    const discountPrice = Math.floor(
      product.price * (1 - product.discountRate / 100)
    );

    li.innerHTML = `
      <div class="put-product">
        <a href="http://localhost:8080/views/users/product/details/details.html?productId=${Number(
          product.id
        )}">
          <img src="${product.imageUrl}" alt="신발 예시" />
          <button class="button">담기</button>
        </a>
      </div>
      <div class="put-product-information">
        <p class='product-name'>${product.name}</p>
        <p class='product-category'>${product.category}</p>
        <p class='product-price'>${product.price.toLocaleString() + " won"}</p>
        <div>
          <span class='product-discount'>${product.discountRate + "%"}</span>
          <span class='product-discountPrice'>${
            discountPrice.toLocaleString() + " won"
          }</span>
        </div>
      </div>
    `;

    productList.appendChild(li);
  });
}

//Title Text

function CreateTitle(titleData, id) {
  const popularText = document.querySelector(
    `#productBanner${id} .popular-text`
  );

  const title = document.createElement("p");
  const subTitle = document.createElement("p");

  title.classList.add("title-class");
  subTitle.classList.add("subtitle-class");

  title.innerHTML = `${titleData.title}`;
  subTitle.innerHTML = `${titleData.subTitle}`;

  popularText.appendChild(title);
  popularText.appendChild(subTitle);
}
