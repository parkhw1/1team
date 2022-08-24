let index = {
	init: function() {
		$("#btn-save").on("click", () => {
			this.save();
			this.joinCheck();
		});
		$("#btn-login").on("click", () => {
			this.loginCheck();
		});
	},

	save: function() {
		let data = {
			userid: $("#userid").val(),
			password: $("#password").val(),
			name: $("#name").val(),
			email: $("#email").val() + "@" + $("#email2").val(),
			address: $("#address").val(),
			roles: $(".form-check-input").val()
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
		}).fail(function(error) {
			alert(JSON.stringify(error));
		});
	},
	
	loginCheck: function() {
		var id = $("#username").val();
		var password = $("#password").val();
		if (id == "") {
			alert("아이디를 입력해주세요.");
			$("#username").focus();
			return false;
		}
		else if(password ==""){
			alert("비밀번호를 입력해주세요.");
			$("#password").focus();
			return false;
		}
	
		return true;
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
		if($("#address").val() == "") {
			alert("주소를 입력하세요.");
			$("#address").focus();
			return false;
		}
		if($("#reid").val()==""){
			alert("아이디 중복 체크를 하지 않았습니다.");
			$("#userid").focus();
			return false;
		}
			if(password!=password2){
			alert("비밀번호를 일치하지 않습니다. 확인해주세요.")
			$("#password2").focus();
			return false;
		}
		return true;
	}

	



}

index.init();





function idCheck(){
	if($("#userid").val() == ""){
		alert("아이디를 입력하세요.");
		$("#userid").focus();
		return;
	}
	var url="idcheck"
	window.open(url,"blank_1","toolbar=no, menubar=no, scrollbars=yes,resizable=no," +
			"width=450, height=200");
}


function change() {
	let sel = document.getElementById("sel");
	let email2 = document.getElementById("email2");
	email2.value = sel.options[sel.selectedIndex].value;
}