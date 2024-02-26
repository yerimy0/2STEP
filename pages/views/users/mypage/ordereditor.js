// 주문 수정 버튼 클릭 시 주문 정보 수정 페이지 표시 함수
document.addEventListener("DOMContentLoaded", function() {
    showOrderHistory(); 
    document.querySelectorAll(".order-button")[1].addEventListener("click", showOrderEditPage);
  });
  
  // 주문 정보 수정 페이지 표시 함수
  function showOrderEditPage() {
    document.querySelector(".main-content").innerHTML = `
    <div class="page-title">주문 정보 수정</div>
    <div class="separator"></div>
    <form class="order-edit-form">

        <div class="horizontal-line"></div>
        
        <!-- 상품 선택 부분 -->
        <div class="product-selection">
            <input type="checkbox" id="select-all">
            <label for="select-all">전체선택</label>
            <!-- 여기에 상품 선택 항목들이 들어감 -->
        </div>
        <div class="horizontal-line"></div>
        
        <!-- 상품 목록 부분 -->
        <div class="product-list">
        <div class="order-item">
        <div class="image-group">
          <img src="product1.jpg" alt="Product 1">
        </div>
        <div class="details-group">
          <h3>NOCTA x 나이키 핫 스탭 에어 테라</h3>
          <p>139,000원</p>
          <p class="delivery-status">배송준비중</p>
        </div>
        </div>
        <div class="horizontal-line"></div>
        
        <!-- 구매자 정보 부분 -->
        <div class="section-title">구매자 정보</div>
        <div class="separator"></div>
        <div class="buyer-info">
            <p>주문자: 엘리스</p>
            <p>연락처: 010-1111-1111</p>
            <p>이메일: elice@gmail.com</p>
        </div>
        
        <!-- 배송지 정보 부분 -->
        <div class="section-title">배송지 정보</div>
        <div class="separator"></div>
        <div class="shipping-info">
            <p>수령인: 엘리스</p>
            <p>연락처: 010-1243-1234</p>
            <p>배송지: 서울시 성동구 성수낙낙</p>
        </div>
        

        <!-- 수정 요청 버튼 -->
        <button type="submit" class="order-button">수정 요청</button>
    </form>
    `;
}
