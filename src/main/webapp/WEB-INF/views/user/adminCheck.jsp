<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../layout/header.jsp"%>

<div id="adchkCon">
	<form action="joinForm.jsp">
	<button type="submit" id="check-btn" name="admin-btn" class="btn btn-primary btn-lg" value="ADMIN" onclick = "location.href ='joinForm'">관리자 회원가입</button>
	<button type="submit" id="check-btn" name="customer-btn" class="btn btn-secondary btn-lg" value="USER" onclick = "location.href ='joinForm'">소비자 회원가입</button>
	</form>
</div>
<%@ include file="../layout/footer.jsp"%>