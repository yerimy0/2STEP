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
        <a href="http://localhost:8080/views/users/product/details/details.html?productId=${
          product._id
        }">
          <img src=${product.imgUrl} alt="신발 예시" />
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

export default CreateList;