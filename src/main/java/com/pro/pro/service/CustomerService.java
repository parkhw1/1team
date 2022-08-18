package com.pro.pro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pro.pro.model.Customer;
import com.pro.pro.repository.CustomerReporitory;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerReporitory customerRepository;
	
	@Transactional
	public Integer 회원가입(Customer customer) {
		try {
			customerRepository.save(customer);
			return 1;
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println("UserService:회원가입(): "+e.getMessage());
		}
		return -1;
	}
}
