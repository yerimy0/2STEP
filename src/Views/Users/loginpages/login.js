function isValidEmail(email) {
    // 이메일 정규식 패턴
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // 이메일 또는 비밀번호가 입력되지 않은 경우
    if (email === '' || password === '') {
        alert('이메일 또는 비밀번호를 입력해 주세요');
    } 
    // 유효하지 않은 이메일 형식인 경우
    else if (!isValidEmail(email)) {
        alert('유효하지 않은 이메일 형식입니다');
    }
    else {
        // 예시로 고정된 계정 정보를 사용하여 로그인
        if (email === 'example@example.com' && password === 'password') {
            window.location.href = 'success_page.html'; // 메인 페이지로 url 변경
        } else {
            alert('이메일 또는 비밀번호를 확인해 주세요');
        }
    }
}

/* else {
    // 이 부분에서 서버로 로그인 요청을 보내고, 서버에서는 로그인 정보를 확인하여 JWT 토큰을 반환하는 과정이 있어야 함.
    // 예시로 고정된 계정 정보를 사용하여 로그인
    if (email === 'example@example.com' && password === 'password') {
        // 서버로부터 받은 JWT 토큰
        var token = '여기에_서버로부터_받은_JWT_토큰을_저장';

        // localStorage에 JWT 토큰 저장
        localStorage.setItem('jwtToken', token);

        // 메인 페이지로 url 변경
        window.location.href = 'success_page.html';
    } else {
        alert('이메일 또는 비밀번호를 확인해 주세요');
    }   
    위 코드에서 localStorage.setItem('jwtToken', token); 부분은 
    로그인 성공 후 서버에서 받은 JWT 토큰을 localStorage에 저장하는 부분입니다. 
    이렇게 저장된 토큰은 다른 페이지에서도 사용할 수 있습니다.
    로그인 성공 후, 다른 페이지에서 JWT 토큰을 사용하려면 
    해당 페이지의 JavaScript에서 localStorage에서 토큰을 가져오면 됩니다.
    
    // 다른 페이지에서 로컬 스토리지에서 토큰 가져오기
    var token = localStorage.getItem('jwtToken');

    // 토큰을 사용하여 다른 작업 수행

    */


function signup() {
    //회원가입 페이지로 이동하는 로직 추가할 수 있습니다.
    alert('회원가입 페이지로 이동합니다.');
}

function adminlogin() {
    //관리자 로그인 페이지로 이동하는 로직 추가할 수 있습니다.
    alert('관리 페이지로 이동합니다.');
}
