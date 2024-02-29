async function signup(e) {
    e.preventDefault(); // 기본 이벤트 중지

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
const address = {street, detailedAddress, postalCode };

if (email === "" || password === "" || confirmPassword === "" || lastName === "" || firstName === "" || postalCode === "" || street === "" || detailedAddress === "") {
showError("모든 항목을 입력하세요.");
return;
}


// 서버에 데이터 전송
try {
    const data = {email, password, lastName, firstName, address};
    const response = await fetch("http://kdt-sw-8-team02.elicecoding.com/api/v1/auth/sign-up", {
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({...data})
    });
console.log(data);
console.log(response);

    if (response.ok) {
        console.log(response);

// .then(response => {
//     console.log(response);
//     if (!response.ok) {
//         throw new Error("네트워크 응답이 실패했습니다.");
//     }
//     return response.json(); // 응답을 JSON으로 파싱
// })
// .then(data => {
//     // 성공적으로 회원가입이 처리된 경우
//     alert(data.message); // 서버에서 받은 메시지를 보여줌
//     // 오류 메시지 숨기기
//     hideError();
// })
//        
} else {throw new Error("네트워크 응답이 실패했습니다.");
}
}catch(error) {
    console.error("Fetch 오류:", error);
    showError("회원가입 중 오류가 발생했습니다.");
    }}

function showError(message) {
    let errorMessages = document.getElementById("error-messages");
    errorMessages.innerHTML = "<p>" + message + "</p><hr><button onclick='hideError()'>확인</button>";
    errorMessages.style.display = "block"; // 화면에 표시
}

function hideError() {
    let errorMessages = document.getElementById("error-messages");
    if (errorMessages) {
        errorMessages.style.display = "none"; // 화면에서 숨기기
    }
}

// 이벤트 리스너 등록
document.querySelector(".signup-form-wrap").addEventListener("submit", signup);