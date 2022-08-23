package com.pro.pro.controller.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pro.pro.dto.ResponseDto;
import com.pro.pro.model.Customer;
import com.pro.pro.service.CustomerService;

@RestController
public class CustomerApiController {
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/auth/joinProc")
	public ResponseDto<Integer> save(@RequestBody Customer customer) {
		System.out.println("CustomerApiController 호출됨");
		
		customerService.회원가입(customer);
		return new ResponseDto<Integer>(HttpStatus.OK.value(),1);
	}
	
	
}
