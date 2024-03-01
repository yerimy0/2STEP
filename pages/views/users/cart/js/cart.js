import showCart from "./showcart.js";
import noDataText from "./nodata.js";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length > 0) {
  showCart(cart);
  document.querySelector(".order-button").addEventListener("click", () => {
    const totalPrice = document
      .querySelector(".total-payment .payment-price")
      .innerHTML.split("원")[0];

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    location.href = "/views/users/order/pay/pay.html";
  });
} else {
  document.querySelector("form").style.display = "none";
  noDataText();
}
