// 마이페이지 첫 화면을 주문 내역으로 고정
document.addEventListener("DOMContentLoaded", function() {
  showOrderHistory(); 
});

// 주문 내역 표시 함수
function showOrderHistory() {
    document.querySelector(".main-content").innerHTML = `
      <div class="page-title">주문내역</div>
      <div class="separator"></div>
      <div class="order-item">
        <img src="product1.jpg" alt="Product 1">
        <div class="order-item-details">
          <h3>상품명: 상품 1</h3>
          <p>가격: $20</p>
          <p>배송상태: 배송중</p>
          <button class="button">주문 취소</button>
          <button class="button">주문 정보 수정</button>
        </div>
      </div>
      <div class="order-item">
        <img src="product2.jpg" alt="Product 2">
        <div class="order-item-details">
          <h3>상품명: 상품 2</h3>
          <p>가격: $30</p>
          <p>배송상태: 배송완료</p>
          <button class="button">주문 취소</button>
          <button class="button">주문 정보 수정</button>
        </div>
      </div>
    `;
}