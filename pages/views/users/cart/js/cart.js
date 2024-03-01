import showCart from "./showcart.js";
import noDataText from "./nodata.js";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length > 0) {
  showCart(cart);
  const token = localStorage.getItem("token");
  document.querySelector(".order-button").addEventListener("click", () => {
    if (!token) {
      alert("비회원 주문은 준비중입니다.");
      location.href = "/views/users/loginpages/login.html";
      return;
    }

    const totalPrice = document
      .querySelector(".total-payment .payment-price")
      .innerHTML.split("원")[0];

    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    location.href = "/views/users/order/pay/pay.html";
  });
} else {
  document.querySelector("form").style.display = "none";
  document.querySelector(".order-button").style.display = "none";
  noDataText();
}
