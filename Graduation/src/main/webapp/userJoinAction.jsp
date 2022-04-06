<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="user.userDTO" %>
<%@page import="user.userDAO" %>
<%@page import="java.io.PrintWriter" %>
<%
	request.setCharacterEncoding("UTF-8");
	String userID = null;
	String userPassWord = null;
	String userPassWord2 = null;
	String firstName = null;
	String Name = null;
	
	
	if(request.getParameter("userID") != null){
   		userID = (String) request.getParameter("userID");
   	}
   	if(request.getParameter("userPassWord")  != null){
   		userPassWord = (String) request.getParameter("userPassWord");
   	}
   	if(request.getParameter("userPassWord2") != null){
   		userPassWord2 = (String) request.getParameter("userPassWord2");
   	}
   	if(request.getParameter("firstName") != null){
   		firstName = (String) request.getParameter("firstName");
   	}
   	if(request.getParameter("Name") != null){
   		Name = (String) request.getParameter("Name");
   	}
   	
   	if(userID == "" || userPassWord == "" || userPassWord2 == "" || firstName == "" || Name == "" ){
   		PrintWriter script = response.getWriter();
   		script.println("<script>");
   		script.println("alert(' 입력이 안된 사항이 있습니다.');");
   		script.println("history.back()");
   		script.println("</script>");
   		script.close();
   		return;
   	}
   	

   	userDAO UserDAO = new userDAO();
   	int result = UserDAO.join(firstName, Name, userID, userPassWord, userPassWord2);
   	if (result == 1 ){
   		PrintWriter script = response.getWriter();
   		script.println("<script>");
   		script.println("alert(' 회원가입에 성공했습니다.');");
   		script.println("location.href='login.html'");
   		script.println("</script>");
   		script.close();
   		return;
   	}
%>
