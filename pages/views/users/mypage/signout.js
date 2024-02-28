// // import * as Api from "./api.js";

// // 탈퇴하기 함수
// async function deleteAccount() {
//     // 여기에 API 호출 및 사용자 계정 삭제 로직을 추가해야 합니다.
//     // 이는 실제 서버와의 통신을 가정하고 구현되어야 합니다.
//     // 예를 들어, fetch API를 사용하여 서버에 DELETE 요청을 보낼 수 있습니다.
//     // 서버로 보내는 요청은 해당 서버의 API 엔드포인트와 맞추어져야 합니다.
//     // 아래는 가상의 코드로 API와의 통신을 시뮬레이션한 예시입니다.
  
//     try {
//       // 가상의 DELETE 요청 보내기
//       const response = await fetch('https://api.example.com/deleteAccount', {
//         method: 'DELETE',
//         headers: {
//           'Authorization': 'Bearer ' + localStorage.getItem('accessToken') // 예시: 인증 토큰을 헤더에 추가
//         }
//       });
  
//       if (response.ok) {
//         // 계정 삭제가 성공적으로 처리된 경우, 로컬 스토리지에서 사용자 정보 및 토큰 삭제 등 클라이언트 측에서의 추가 작업 수행 가능
//         localStorage.removeItem('accessToken');
//         // 삭제 후 다시 로그인 화면 등으로 이동하도록 리다이렉트 등의 작업 수행 가능
//         window.location.href = '/login'; // 예시: 로그인 페이지로 리다이렉트
//       } else {
//         // 서버에서 에러 응답이 왔을 경우 적절한 에러 처리
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }
//     } catch (error) {
//       // 에러 처리
//       console.error('Error deleting account:', error);
//       alert('계정 삭제 중 오류가 발생했습니다.');
//     }
//   }
  
//   // 폼 제출 함수
//   const submitFrom = async (e) => {
//     e.preventDefault();
  
//     const acceptMsg = document.getElementById("signout_accept").value;
  
//     if (acceptMsg === "탈퇴") {
//       // 탈퇴하기 버튼을 눌렀을 때 한 번 더 확인하는 절차 추가
//       if (
//         confirm(
//           "정말 탈퇴하시겠습니까?\n탈퇴시 모든 정보는 복구가 불가능합니다.\n한 번 탈퇴하면 되돌릴 수 없습니다."
//         )
//       ) {
//         await deleteAccount(); // deleteAccount 함수 호출
//       }
//     } else {
//       // "탈퇴"를 입력하지 않은 경우에 대한 처리
//       alert("탈퇴를 원하시면 '탈퇴'를 입력해주세요.");
//     }
//   };
  