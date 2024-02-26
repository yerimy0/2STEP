// 로그인 처리 함수
function handleLogin() {
    const email = document.querySelector('.email').value; // 이메일 입력값 가져오기
    const password = document.querySelector('.password').value; // 비밀번호 입력값 가져오기
    
    // 이메일 또는 비밀번호가 입력되지 않은 경우 
    if (email === '' || password === '') {
        alert('이메일 또는 비밀번호를 입력해 주세요');
        return;
    }

    // 유효하지 않은 이메일 형식인 경우
    if (!isValidEmail(email)) {
        alert('유효하지 않은 이메일 형식입니다');
        return;
    }

    // 예시로 고정된 계정 정보를 사용하여 로그인
    if (email === 'example@example.com' && password === 'password') {
        window.location.href = 'success_page.html'; // 메인 페이지로 url 변경
    } else {
        alert('이메일 또는 비밀번호를 확인해 주세요');
    }
}

//이메일 유효성 검사 함수
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 정규식 패턴
    return emailPattern.test(email); // 정규식 패턴과 일치하는지 검사하여 결과 반환
}

// 클릭 이벤트 리스너
document.addEventListener("click", function(event) {
    event.preventDefault();
    const target = event.target;
    
    if (target.classList.contains("login-btn")) {
        handleLogin(); // 로그인 함수 호출
    } else if (target.classList.contains("signup-btn")) {
        window.location.href = "URL"; // 회원가입 페이지로 이동
    } else if (target.classList.contains("adminlogin-link")) {
        window.location.href = "URL"; // 관리자 로그인 페이지로 이동
    }
});