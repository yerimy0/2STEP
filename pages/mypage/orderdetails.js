// 마이페이지 첫 화면을 주문 내역으로 고정
document.addEventListener("DOMContentLoaded", function () {
  showOrderHistory();
});

const findOrders = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(
      "http://kdt-sw-8-team02.elicecoding.com/api/v1/orders",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      throw new Error("API 에러");
    }
  } catch (e) {
    console.error(e);
  }
};

await findOrders();

document
  .querySelector("#showOrderHistory")
  .addEventListener("click", () => showOrderHistory());

// 주문 내역 표시 함수
function showOrderHistory() {
  document.querySelector(".main-content").innerHTML = `
    <div class="page-title">주문내역</div>
    <div class="separator"></div>
    <div class="order-item">
      <div class="image-group">
        <img src="product1.jpg" alt="Product 1">
      </div>
      <div class="details-group">
        <h3>NOCTA x 나이키 핫 스탭 에어 테라</h3>
        <p>139,000원</p>
        <p class="delivery-status">배송준비중</p>
      </div>
      <div class="button-group">
        <button id = "cancel-order-button" class="order-button">주문 취소</button>
        <button id = "edit-order-button" class="order-button">주문 수정</button>
      </div>
    </div>
  `;

  document
    .querySelector("#cancel-order-button")
    .addEventListener("click", function () {});

  // 주문 수정 버튼에 이벤트 리스너 추가
  document
    .querySelector("#edit-order-button")
    .addEventListener("click", function () {});
}

export default showOrderHistory;
