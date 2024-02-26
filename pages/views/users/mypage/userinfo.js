// 이메일 및 비밀번호 확인 폼 표시 함수
function showEmailPasswordForm() {
  document.querySelector(".main-content").innerHTML = `
    <div class="page-title">개인정보수정</div>
    <div class="separator"></div>
    <div class="subtitle">비밀번호 재확인</div>
    <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 확인해주세요.</p>
    <div class="separator"></div>
    <div class="email-password-form">
      <label for="email">이메일 :</label>
      <input type="email" class="email" ><br>
      <label for="password">비밀번호 :</label>
      <input type="password" class="password" ><br>
      <button class="check-button" onclick="validateEmailPassword()">확인</button>
    </div>
  `;
}

// 이메일 및 비밀번호 확인 함수
function validateEmailPassword() {
  let email = document.querySelector(".email").value;
  let password = document.querySelector(".password").value;
  // 이메일 및 비밀번호 확인 로직을 추가
  // 임시로 빈 값이 아닌지만 확인하는 예시를 제공합니다.
  if (email === "example@example.com" && password === "password") {
    // 이메일 및 비밀번호가 유효한 경우 개인정보 수정 폼을 표시합니다.
      showProfileUpdateForm();
  } else {
      alert("이메일과 비밀번호를 확인해 주세요");
  }
}

// 개인정보 수정 폼 표시 함수
function showProfileUpdateForm() {
  document.querySelector(".main-content").innerHTML = `
    <div class="page-title">개인정보수정</div>
    <div class="separator"></div>
    <div class="profile-form">
      <label for="email">이메일 :</label>
      <input type="email" class="email" placeholder="이메일">
      <label for="new-password">새 비밀번호 :</label>
      <input type="password" class="new-password" placeholder="새 비밀번호" ><br>
      <label for="confirm-password">새 비밀번호 확인 :</label>
      <input type="password" class="confirm-password" placeholder="새 비밀번호 확인"><br>
      <label for="name">이름 :</label>
      <input type="text" class="lastname" placeholder="성">
      <input type="text" class="firstname" placeholder="이름">
      <div class="address-wrap">
        <label for="address">주소 :</label>
        <div class="zipcode-container">
          <input type="text" class="postalCode" maxlength="5" placeholder="우편번호" readonly>
          <button type="button">우편번호찾기</button>
        </div>
        <input type="text" class="street" placeholder="주소" readonly>
        <input type="text" class="detailedAddress" placeholder="상세주소">
      </div>
    </div>
    <div class="separator"></div>
    <div class="button-container">
      <button class="button">탈퇴하기</button>
      <button class="button">회원정보수정</button>
    </div>
  `;
}