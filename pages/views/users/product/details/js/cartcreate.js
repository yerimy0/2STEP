function cartCreate(el, product) {
  const cartButton = el.querySelector(".cart-button");
  cartButton.addEventListener("click", function () {
    const selectedColor = el.querySelector(".select:first-child select").value;
    const selectedSize = el.querySelector(".select:last-child select").value;

    if (selectedColor === "Color" || selectedSize === "Size") {
      return;
    }

    const cartItem = {
      ...product,
      selectedColor,
      selectedSize,
    };

    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    cart.push(cartItem);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("장바구니에 상품이 추가되었습니다.");
  });
}

export default cartCreate;
