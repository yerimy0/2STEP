// 장바구니로 돌아가기 버튼
function goBackToCart() {
    window.location.href = "장바구니 페이지 URL";
    console.log("장바구니로 돌아갑니다.");
  }

// 결제
document.addEventListener("DOMContentLoaded", function() {
  const paymentButton = document.querySelector('.payment button[type="submit"]');
  paymentButton.addEventListener("click", function() {
    // 여기에 결제 처리하는 기능을 넣으시면 됩니다.
    console.log("결제가 진행됩니다.");

    // 결제 완료 후 complete 창으로 넘어가는 함수 호출
    redirectToCompletePage();
  });
});

function redirectToCompletePage() {
  // complete 창으로 페이지 이동
  window.location.href = "complete.html";
}