function showTotalPrice(totalPrice, totalDiscount) {
  const query = [".total-price", ".total-discount", ".total-payment"];

  query.forEach((el) => {
    const priceEl = document.querySelector(el);
    const span = document.createElement("span");
    span.className = "payment-price";

    if (el === ".total-price") {
      span.innerHTML = `${totalPrice}원`;
    }
    if (el === ".total-discount") {
      span.innerHTML = `${totalDiscount}원`;
    }
    if (el === ".total-payment") {
      span.innerHTML = `${totalPrice - totalDiscount}원`;
    }

    priceEl.appendChild(span);
  });
}

export default showTotalPrice;
