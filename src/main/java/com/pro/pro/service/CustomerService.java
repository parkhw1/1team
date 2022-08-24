package com.pro.pro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pro.pro.model.Customer;
import com.pro.pro.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	@Transactional
	public void 회원가입(Customer customer) {
		String rawPassword = customer.getPassword();
		String encPassword = encoder.encode(rawPassword);
		customer.setPassword(encPassword);
		customerRepository.save(customer);
	}
	
	@Transactional
	public boolean 중복체크(Customer customer) {
		System.out.println(customerRepository.existsByUserid("parkhw"));
		return customerRepository.existsByUserid(customer.getUserid());
	}
}