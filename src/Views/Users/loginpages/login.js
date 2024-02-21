function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // 이메일 또는 비밀번호가 입력되지 않은 경우
    if (email === '' || password === '') {
        alert('이메일 또는 비밀번호를 입력해 주세요');
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
    //회원가입 페이지로 이동하는 로직 추가할 수 있습니다.
    alert('회원가입 페이지로 이동합니다.');
}

function adminlogin() {
    //관리자 로그인 페이지로 이동하는 로직 추가할 수 있습니다.
    alert('관리 페이지로 이동합니다.');
}