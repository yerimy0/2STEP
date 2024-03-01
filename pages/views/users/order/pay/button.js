// 장바구니로 돌아가기 버튼
function goBackToCart() {
  window.location.href = "/views/users/cart/cart.html";
}

document
  .querySelector(".back-button")
  .addEventListener("click", () => goBackToCart());

// 결제

const creditCardCheckbox = document.querySelector(".credit-card");
const paymentButton = document.querySelector(".order");

paymentButton.addEventListener("click", function () {
  if (!creditCardCheckbox.checked) {
    alert("결제 수단을 선택해주세요.");
    return false; // 폼 전송 막기
  }
  pay();
});

async function pay() {
  const name = document.querySelector(".buyer-name").value;
  const phone = document.querySelector(".buyer-phone").value;
  const email = document.querySelector(".buyer-email").value;

  const shippingName = document.querySelector(".shipping-name").value;
  const shippingPhone = document.querySelector(".shipping-phone").value;
  const zipCode = Number(document.querySelector(".shipping-zipcode").value);

  const zipAddress = document.querySelector(".shipping-address").value;
  const detailedAddress = document.querySelector(".detailedAddress").value;

  if (
    name === "" ||
    phone === "" ||
    email === "" ||
    shippingName === "" ||
    shippingPhone === "" ||
    zipCode === 0 ||
    zipAddress === "" ||
    detailedAddress === ""
  ) {
    alert("입력을 완료해주세요");
    return;
  }

  const address = zipAddress + "," + detailedAddress;
  const totalPrice = Number(
    document.querySelector(".total-price").innerHTML.split("원")[0]
  );

  const products = [];

  const cart = JSON.parse(localStorage.getItem("cart"));
  for (const product of cart) {
    products.push(product._id);
  }

  const customer = {
    name,
    phone,
    email,
  };
  const delivery = {
    name: shippingName,
    phone: shippingPhone,
    postcode: zipCode,
    address,
  };
  const deliverStatus = false;

  const data = { products, totalPrice, deliverStatus, customer, delivery };
  console.log(data);
  try {
    const response = await fetch(
      "http://kdt-sw-8-team02.elicecoding.com/api/v1/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log(response);
    if (response.ok) {
      localStorage.setItem("cart", []);
      localStorage.removeItem("totalPrice");
      // window.location.href = "/views/users/order/complete/complete.html";
    } else {
      throw new Error("실패");
    }
  } catch (error) {
    alert("주문 실패 했습니다. 다시 시도해주세요");
  }
}
