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
        <input type="checkbox" class="select-all-checkbox" onclick="toggleSelectAll()">
        <label for="select-all">전체선택</label>
          <!-- 여기에 상품 선택 항목들이 들어감 -->
      </div>
      <div class="horizontal-line"></div>
      
      <!-- 상품 목록 부분 -->
      <div class="product-list">
          <div class="order-item" data-product-id="1">
              <div class="image-group">
                  <input type="checkbox" class="product-checkbox">
                  <img src="product1.jpg" alt="Product 1">
              </div>
              <div class="details-group">
                  <h3>NOCTA x 나이키 핫 스탭 에어 테라</h3>
                  <p>139,000원</p>
                  <p class="delivery-status">배송준비중</p>
              </div>
              <div class="order-button-group">
                  <button class="adjust-quantity" onclick="adjustQuantity('decrement', 1)">-</button>
                  <input type="number" class="quantity-input" value="1" min="1">
                  <button class="adjust-quantity" onclick="adjustQuantity('increment', 1)">+</button>
                  <button class="delete-button" onclick="deleteProduct(1)">삭제</button>
              </div>
          </div>
          <!-- 추가 상품들 -->
      </div>

      <!-- 구매자 정보 부분 -->
      <div class="section-title">구매자 정보</div>
      <div class="separator"></div>
      <div class="buyer-info">
          <p>주문자 : 엘리스</p>
          <p>연락처 : 010-1111-1111</p>
          <p>이메일 : elice@gmail.com</p>
      </div>
      
      <!-- 배송지 정보 부분 -->
      <div class="section-title">배송지 정보</div>
      <div class="separator"></div>
      <div class="shipping-info">
          <p>수령인 : 엘리스</p>
          <p>연락처 : 010-1243-1234</p>
          <p>배송지 : 서울시 성동구 성수낙낙</p>
      </div>

      <!-- 금액 정보 부분 -->
      <div class="section-title">결제 정보</div>
      <div class="separator"></div>
      <div class="pay-info">
          <p>총 주문금액 : 100,000원</p>
      </div>
      
      <!-- 수정 요청 버튼 -->
      <button type="submit" class="edit-button">수정 요청</button>
  </form>
  `;
}

// 상품 수량을 조절하는 함수
function adjustQuantity(action, productId) {
  const quantityInput = document.querySelector(`.order-item[data-product-id="${productId}"] .quantity-input`);
  let currentQuantity = parseInt(quantityInput.value);
  if (action === 'increment') {
      currentQuantity++;
  } else if (action === 'decrement' && currentQuantity > 1) {
      currentQuantity--;
  }
  quantityInput.value = currentQuantity;
}

// 상품 삭제하는 함수
function deleteProduct(productId) {
  const productItem = document.querySelector(`.order-item[data-product-id="${productId}"]`);
  productItem.remove();
}

// 전체 선택 및 해제 함수
function toggleSelectAll() {
  const checkboxes = document.querySelectorAll('.product-checkbox');
  const selectAllCheckbox = document.querySelector('.select-all-checkbox');
  checkboxes.forEach(checkbox => {
      checkbox.checked = selectAllCheckbox.checked;
  });
}
