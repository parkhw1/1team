<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../layout/header.jsp"%>

<div class="container">
	<form method="post">
		<div >
			<label for="id">아이디</label><br>
			<input type="text"  placeholder="Enter id" id="id">
		</div>
		<div >
			<label for="password">비밀번호</label> <br>
			<input type="password" placeholder="Enter password" id="password">
		</div>
		<div >
			<label for="password">비밀번호확인</label> <br>
			<input type="password" placeholder="Check password" id="password2">
		</div>
		<div >
			<label for="name">이름</label> <br>
			<input type="text"	placeholder="Enter name" id="name">
		</div>
		<div >
			<label for="email">이메일</label> <br>
			<input type="text" placeholder="Enter email" id="email"> @
			<input type="text" id="email2">
			<select name="sel" id="sel" onchange="change()">
				<option>선택하세요</option>
				<option>naver.com</option>
				<option>daum.net</option>
				<option>gamil.com</option>
				<option>yahoo.co.kr</option>
				<option>bing.com</option>
			</select>
		</div>
		<div>
			<label for="address">주소</label> <br>
			<input type="text" placeholder="Enter address" id="address">
		</div>
		 <br>
		<div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">
          소비자
        </label>
      </div>
     
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">
          관리자
        </label>
      </div>
      <br>
		<input type="button" id="btnsave" class="btn btn-dark" value="회원가입">
	</form>
	</div>
<%@ include file="../layout/footer.jsp"%>