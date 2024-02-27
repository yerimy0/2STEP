import showCart from "./showcart.js";
import noDataText from "./nodata.js";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length > 0) {
  showCart(cart);
} else {
  document.querySelector("form").style.display = "none";
  noDataText();
}
