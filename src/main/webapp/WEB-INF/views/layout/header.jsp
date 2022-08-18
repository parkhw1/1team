<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
	<sec:authorize access="isAuthenticated()">
		<sec:authentication property="principal" val="principal"/>
	</sec:authorize>
	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="path" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>냥반댁 댕댕이</title>
<link rel="stylesheet" href="${path}/resources/css/header.css">
<link rel="stylesheet" href="${path}/resources/css/footer.css">
<link rel="stylesheet" href="${path}/resources/css/adminCheck.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<style>
#container3 {
	margin:0 auto;
	width: 1500px;
	height: 200px;
	background-color: orange;
}


</style>
</head>
<body>

	<div id="hdcontainer">
		<header>
			<a href="/"><img src="${path}/resources/img/로고3.png" alt="냥반댁 댕댕이 로고" class="logo"></a>
			<input type="text" id="search" placeholder=" 무엇이든지 검색해라냥 🐾">
			<input type="button" id="searchbtn" value="🔍">
			<nav>
				<c:when test="${empty principal }">
				<ul id="topMenu">
					<li><a href="#">로그인</a></li>
					<li><a href="/auth/adminCheck">회원가입</a></li>
					<li><a href="#">장바구니</a></li>
					<li><a href="#">고객센터</a></li>
				</ul>
				</c:when>
				<c:otherwise>
					<ul id="topMenu">
						<li><a href="#">마이페이지</a><li>
						<li><a href="#">장바구니</a></li>
						<li><a href="#">고객센터</a></li>
					</ul>
				</c:otherwise>
			</nav>
		</header>
	</div>
	<div id="hdcontainer2">

		<ul id="topMenu2">
			<li><a href="#">사료/간식</a></li>
			<li><a href="#">화장실/위생</a></li>
			<li><a href="#">장난감</a></li>
			<li><a href="#">미용/목욕</a></li>
			<li><a href="#">하우스</a></li>
			<li><a href="#">기타</a></li>
		</ul>

	</div>