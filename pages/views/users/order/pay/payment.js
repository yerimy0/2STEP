// 결제 수단 선택
document.addEventListener("DOMContentLoaded", function() {
    const creditCardCheckbox = document.querySelector('.credit-card');
    const paymentAmount = document.querySelector('.payment-amount');
    const totalPrice = document.querySelector('.total-price');
    const paymentButton = document.querySelector('.payment button[type="submit"]');
    
    // 카드 선택 시 결제 금액을 총 상품 금액으로 설정
    creditCardCheckbox.addEventListener("change", function() {
      if (creditCardCheckbox.checked) {
        paymentAmount.textContent = totalPrice.textContent;
      } else {
        paymentAmount.textContent = "0원"; // 카드 선택 해제 시 결제 금액 초기화
      }
    });

    paymentButton.addEventListener("click", function() {
      if (!creditCardCheckbox.checked) {
        alert("결제 수단을 선택해주세요.");
        return false; // 폼 전송 막기
      }
      // 여기에 실제 결제 처리하는 코드를 작성하시면 됩니다.
    });
  });

  // 총 결제 금액
const productPrices = [100000, 200000, 300000]; // 상품 가격을 원하는 대로 수정해주세요

// 총 상품 금액 계산 함수
function calculateTotalPrice() {
  const totalPriceElement = document.querySelector('.total-price'); // 총 상품 금액을 표시할 요소
  let totalPrice = 0;

  // 각 상품 가격을 더하여 총 상품 금액 계산
  for (let i = 0; i < productPrices.length; i++) {
    totalPrice += productPrices[i];
  }

  totalPriceElement.textContent = totalPrice.toLocaleString() + '원'; // 총 상품 금액을 표시
}

// 페이지 로드 시 총 상품 금액 계산
window.addEventListener('load', calculateTotalPrice);