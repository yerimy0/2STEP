function isValidEmail(email) {
    // 이메일 정규식 패턴
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // 이메일 또는 비밀번호가 입력되지 않은 경우
    if (email === '' || password === '') {
        alert('이메일 또는 비밀번호를 입력해 주세요');
    }     
    // 유효하지 않은 이메일 형식인 경우
    else if (!isValidEmail(email)) {
        alert('유효하지 않은 이메일 형식입니다');
    } else {
        // 예시로 고정된 계정 정보를 사용하여 로그인
        if (email === 'example@example.com' && password === 'password') {
            window.location.href = 'success_page.html'; // 메인 페이지로 url 변경
        } else {
            alert('이메일 또는 비밀번호를 확인해 주세요');
        }
    }
}

function signup() {
    // 회원가입 페이지로 이동
    window.location.href = '회원가입 페이지 URL';
}

function adminlogin() {
    // 관리자 로그인 페이지로 이동
    window.location.href = '관리자 로그인 페이지 URL';
}
