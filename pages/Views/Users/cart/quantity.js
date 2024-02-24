// 수량 증가 및 감소 효과
let decreaseButtons = document.querySelectorAll(".decrease-quantity");
let increaseButtons = document.querySelectorAll(".increase-quantity");

decreaseButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
      quantity--;
      quantityElement.innerText = quantity;
    }
  });
});

increaseButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    let quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
  });
});