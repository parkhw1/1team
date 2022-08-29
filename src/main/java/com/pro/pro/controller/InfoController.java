package com.pro.pro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InfoController {
	
	@GetMapping("/info/personalInfo")
	public String personalInfo() {
		return "info/personalInfo";
	}
	@GetMapping("/info/provision")
	public String provision() {
		return "info/provision";
	}
}