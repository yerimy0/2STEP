function showProfileUpdate() {
    document.getElementById("content").innerHTML = `
      <div class="page-title">개인정보수정</div>
      <div class="separator"></div>
      <div class="subtitle">비밀번호 재확인</div>
      <p>회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한 번 확인해주세요.</p>
      <div class="separator"></div>
      <div class="profile-form">
        <label for="email">이메일:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" name="password"><br><br>
        <button class="button">확인</button>
      </div>
    `;
  }