package com.pro.pro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name="customer")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Customer {
	@Id //primary key
	@Column(nullable=false, length = 30, unique= true)
	private String id;
	
	@Column(nullable=false, length=100)
	private String password;
	
	@Column(nullable=false, length = 30)
	private String name;
	
	@Column(nullable=false, length = 50)
	private String email;
	
	@Column(nullable=false, length = 100)
	private String address;

	@ColumnDefault("'USER'")
	@Column(nullable=false, length = 20)
	private String roles;
}
