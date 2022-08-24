<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>아이디 중복 확인</title>
<script type="text/javascript" src="member.js"></script>
<% 
String userid = (String)request.getAttribute("userid");
pageContext.setAttribute("userid", userid);%>
</head>
<body>
	<form action="idCheck.do" method="get" name="frm">
		아이디<input type="text" name="userid" value=${userid }>
		<input type="submit" value="중복 확인"><br>
		<c:if test="${result==1 }">
			<script type="text/javascript">
				opener.document.frm.userid.value="";
			</script>
			${userid }는 이미 사용중인 아이디 입니다.
		</c:if>
		<c:if test="${result ==-1}">
			${userid }는 사용 가능한 아이디입니다.
			<input type="button" value="사용" class="cancel" onclick="idok('${userid}')">
		</c:if>
	</form>
	
 <script type="text/javascript" src="/js/customer.js"></script>
</body>
</html>