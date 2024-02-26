// 이메일 및 비밀번호 확인 폼 표시 함수
function showEmailPasswordForm() {
  document.querySelector(".main-content").innerHTML = `
    <div class="page-title">개인정보수정</div>
    <div class="separator"></div>
    <div class="email-password-form">
      <label for="email">이메일 :</label>
      <input type="email" class="email" ><br>
      <label for="password">비밀번호 :</label>
      <input type="password" class="password" ><br>
      <button class="button" onclick="validateEmailPassword()">확인</button>
    </div>
  `;
}

// 이메일 및 비밀번호 확인 함수
function validateEmailPassword() {
  var email = document.querySelector(".email").value;
  var password = document.querySelector(".password").value;
  // 여기에 이메일 및 비밀번호 확인 로직을 추가하세요.
  // 예를 들어, 단순히 빈 값이 아닌지 확인하거나 서버에 요청하여 확인하는 등의 로직을 사용할 수 있습니다.
  // 임시로 빈 값이 아닌지만 확인하는 예시를 제공합니다.
  if (email !== "" && password !== "") {
      // 이메일 및 비밀번호가 유효한 경우 개인정보 수정 폼을 표시합니다.
      showProfileUpdateForm();
  } else {
      alert("이메일과 비밀번호를 모두 입력해주세요.");
  }
}

// 개인정보 수정 폼 표시 함수
function showProfileUpdateForm() {
  document.querySelector(".main-content").innerHTML = `
    <div class="page-title">개인정보수정</div>
    <div class="separator"></div>
    <div class="profile-form">
      <label for="new-password">새 비밀번호 :</label>
      <input type="password" class="new-password" ><br>
      <label for="confirm-password">새 비밀번호 확인 :</label>
      <input type="password" class="confirm-password" ><br>
      <label for="name">이름 :</label>
      <input type="text" class="name" ><br>
      <label for="address">주소 :</label>
      <input type="text" class="address" ><br>
    </div>
    <div class="separator"></div>
    <div class="button-container">
      <button class="button">탈퇴하기</button>
      <button class="button">회원정보수정</button>
    </div>
  `;
}