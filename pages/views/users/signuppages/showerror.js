function signup(e) {
  e.preventDefault();
  // 이메일 유효성 검사
  let email = document.getElementById("email").value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError("이메일을 올바른 형식으로 입력하세요.");
    return;
  }

  // 비밀번호 확인
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    showError("비밀번호가 일치하지 않습니다.");
    return;
  }

  // 모든 필수 입력 값 확인
  let lastName = document.getElementById("last-name").value;
  let firstName = document.getElementById("first-name").value;
  let postalCode = document.getElementsByName("postalCode")[0].value;
  let street = document.getElementsByName("street")[0].value;
  let detailedAddress = document.getElementsByName("detailedAddress")[0].value;

  if (
    lastName === "" ||
    firstName === "" ||
    postalCode === "" ||
    street === "" ||
    detailedAddress === ""
  ) {
    showError("모든 항목을 입력하세요.");
    return;
  }

  // 오류 메시지가 없으면 가입 성공
  alert("회원가입을 축하드립니다! 2STEP과 한걸음 더 나아가요.");

  // 오류 메시지 숨기기
  hideError();
}

function showError(message) {
  let errorMessages = document.getElementById("error-messages");
  errorMessages.innerHTML =
    "<p>" + message + "</p><hr><button onclick='hideError()'>확인</button>";
  errorMessages.style.display = "block"; // 화면에 표시
}

function hideError() {
  let errorMessages = document.getElementById("error-messages");
  errorMessages.style.display = "none"; // 화면에서 숨기기
}
