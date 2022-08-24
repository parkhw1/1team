let index = {
	init: function() {
		$("#btn-save").on("click", () => {	
			this.save();
			this.joinCheck();
		});
		$("#btn-login").on("click", () => {
			this.loginCheck();
		});
		$("#btn-check").on("click", () => {
			this.idCheck();
		});
	},

	save: function() {
		if($("#userid").val() != ""
		&&$("#reid").val() != ""
		&&$("#password").val() != ""
		&&$("#password2").val() != ""
		&&$("#name").val() != ""
		&&$("#email").val() != ""
		&&$("#email2").val() != ""
		&&$("#addr1").val() != ""
		&&$("#addr2").val() != ""
		&&$("#addr3").val() != ""
		&&$("#sel2").val() != ""
		&&$("#answer").val() != ""){
			
			this.add();
			
		}
	},

	add: function(){
		const radioval = document.getElementsByName('gridRadios');
		var adminchkval;
		radioval.forEach((node) => {
			if (node.checked) {
				adminchkval= node.value;
			}
		})

		let data = {
			userid: $("#userid").val(),
			password: $("#password").val(),
			name: $("#name").val(),
			email: $("#email").val() + "@" + $("#email2").val(),
			address: $("#addr1").val()+$("#addr2").val()+$("#addr3").val(),
			qestion:$("#sel2").val(),
			answer:$("#answer").val(),
			roles: adminchkval
		};

		$.ajax({
			type: "POST",
			url: "/auth/joinProc",
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).done(function(resp) {
			alert("회원가입이 완료되었습니다.");
			location.href = "/auth/loginForm";
		});
	},
	


	loginCheck: function() {
		var id = $("#username").val();
		
		var password = $("#password").val();
		if (id == "") {
			alert("아이디/비밀번호를 입력해주세요.");
			$("#username").focus();
			return false;
		}
		else if (password == "") {
			alert("아이디/비밀번호를 입력해주세요.");
			$("#password").focus();
			return false;
		}

		return true;
	},
	
	idCheck: function(){
		
	    let data = {
			userid: $("#userid").val()
		};
		$.ajax({
			type: "POST",
			async: false,
			url: "/auth/idCheckProc",
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			success : function(data){
				if(data){
					$("#id_check").text("이미 사용중인 아이디입니다");
					$("#id_check").css("color", "red");
					$("#id_check").css("font-weight", "900");
				}else{
					$("#id_check").text("사용가능한 아이디입니다");
					$("#id_check").css("color", "#6A82FB");
					$("#id_check").css("font-weight", "900");
					$("#reid").val($("#userid").val());
				}
			},
			error:function(){
				alert('에러입니다')
			}
		});
	},



	

	joinCheck: function(){
		var password = $("#password").val();
		var password2 = $("#password2").val();
		
		if ($("#userid").val() == "") {
			alert("아이디를 입력하세요.");
			$("#userid").focus();
			return false;
		}
		if($("#userid").val().length<5) {
			alert("아이디는 5글자 이상으로 입력해주세");
			$("#userid").focus();
			return false;
		}		
		if($("#reid").val()==""){
			alert("아이디 중복 체크를 하지 않았습니다.");
			$("#userid").focus();
			return false;
		}
		if(password == "") {
			alert("비밀번호를 입력하세요.");
			$("#password").focus();
			return false;
		}
		if(password2 == "") {
			alert("비밀번호확인을 입력하세요.");
			$("#password2").focus();
			return false;
		}
		if(password!=password2){
			alert("비밀번호를 일치하지 않습니다. 확인해주세요.")
			$("#password2").focus();
			return false;
		}
		if($("#name").val() == "") {
			alert("이름을 입력하세요.");
			$("#name").focus();
			return false;
		}
		if($("#email").val() == "") {
			alert("이메일아이디를 입력하세요.");
			$("#email").focus();
			return false;
		}
		if($("#email2").val() == "") {
			alert("이메일 형식으로 입력하세요.");
			$("#email2").focus();
			return false;
		}
		if($("#addr1").val() == "") {
			alert("주소를 입력하세요.");
			$("#addr3").focus();
			return false;
		}
		if($("#addr2").val() == "") {
			alert("주소를 입력하세요.");
			$("#addr3").focus();
			return false;
		}
		if($("#addr3").val() == "") {
			alert("상세주소를 확인하세요.");
			$("#addr3").focus();
			return false;
		}
		
		if($("#answer").val() == "") {
			alert("계정찾기용 질문/답변을 확인하세요.");
			$("#answer").focus();
			return false;
		}
		
		return true;
	}





}

index.init();







function change() {
	let sel = document.getElementById("sel");
	let email2 = document.getElementById("email2");
	email2.value = sel.options[sel.selectedIndex].value;
	
	if(sel.selectedIndex==6){
		$("#email2").focus();
	}
}


function findAccount(){
	
	var url="findAccount";
	window.open(url,"blank_1","toolbar=no, menubar=no, scrollbars=yes,resizable=no," +
			"width=700, height=400");

}






function execPostCode() {
         new daum.Postcode({
             oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
 
                // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 도로명 조합형 주소 변수
 
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
                // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                if(fullRoadAddr !== ''){
                    fullRoadAddr += extraRoadAddr;
                }
 
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                console.log(data.zonecode);
                console.log(fullRoadAddr);
                
                
                $("[name=addr1]").val(data.zonecode);
                $("[name=addr2]").val(fullRoadAddr);
                
                /* document.getElementById('signUpUserPostNo').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('signUpUserCompanyAddress').value = fullRoadAddr;
                document.getElementById('signUpUserCompanyAddressDetail').value = data.jibunAddress; */
            }
         }).open();
     }
