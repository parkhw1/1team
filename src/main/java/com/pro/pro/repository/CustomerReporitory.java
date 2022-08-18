package com.pro.pro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pro.pro.model.Customer;

public interface CustomerReporitory extends JpaRepository<Customer, Integer> {

}
