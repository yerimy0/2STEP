document.querySelector(".login-btn").addEventListener("click", function(event) {
    event.preventDefault();
    login(); 
});

document.querySelector(".signup-btn").addEventListener("click", function(event) {
    event.preventDefault();
    signup(); 
});

document.querySelector(".adminlogin-link").addEventListener("click", function(event) {
    event.preventDefault();
    adminLogin(); 
});

function login() {
    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;

    // 이메일 또는 비밀번호가 입력되지 않은 경우
    if (email === '' || password === '') {
        alert('이메일 또는 비밀번호를 입력해 주세요');
        return;
    }     
    // 유효하지 않은 이메일 형식인 경우
    else if (!isValidEmail(email)) {
        alert('유효하지 않은 이메일 형식입니다');
        return;
    } else {
        // 예시로 고정된 계정 정보를 사용하여 로그인
        if (email === 'example@example.com' && password === 'password') {
            window.location.href = 'success_page.html'; // 메인 페이지로 url 변경
        } else {
            alert('이메일 또는 비밀번호를 확인해 주세요');
        }
    }
}

function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function signup() {
    window.location.href = 'URL';
}

function adminLogin() {
    window.location.href = 'URL';
}