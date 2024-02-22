//우편번호검색 기능
const btn = document.querySelector('#btn');
btn.addEventListener("click", () => {
  new daum.Postcode({
      oncomplete: function(data) {
        console.log(data);
        let fullAddr = '';
        let extraAddr = '';

        if(data.userSelectedType === "R") {
          fullAddr = data.roadAddress;
        } else {
          fullAddr = data.jibunAddress;
        }

        if(data.userSelectedType == "R") {
          if(data.bname !== '') {
            extraAddr += data.bname;
          }
          if(data.buildingName !== '') {
            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }

          fullAddr += (extraAddr !== '' ? '(' + extraAddr +')' : '');
        }

        document.form1.addr1.value = fullAddr;
        document.form1.zipcode.value = data.zonecode;
        document.form1.addr2.focus();
      }
  }).open();
});

