//메인페이지에서 구현해야할 로그아웃 기능

function logout() {
    // localStorage에서 JWT 토큰 삭제
    localStorage.removeItem('jwtToken');

    // 로그아웃 후 로그인 페이지로 이동 또는 다른 작업 수행
    window.location.href = 'login_page.html'; // 로그인 페이지로 이동
}

document.getElementById('logoutButton').addEventListener('click', logout);
