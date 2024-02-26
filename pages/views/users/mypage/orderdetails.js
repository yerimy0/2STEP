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
      <div class="image-group">
        <img src="product1.jpg" alt="Product 1">
      </div>
      <div class="details-group">
        <h3>NOCTA x 나이키 핫 스탭 에어 테라</h3>
        <p>139,000원</p>
        <p class="delivery-status">배송준비중</p>
      </div>
      <div class="button-group">
        <button class="order-button">주문 취소</button>
        <button class="order-button">주문 수정</button>
      </div>
    </div>
  `;
}
