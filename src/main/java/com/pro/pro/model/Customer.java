package com.pro.pro.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@SequenceGenerator(
		name = "USER_SEQ_GENERATOR" ,
		sequenceName = "USER_SEQ" ,
		initialValue = 1 ,
		allocationSize = 1
	)


@Table(name="customer")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Customer {
	
	@Id //primary key
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="USER_SEQ_GENERATOR")
	private int id;
	
	@Column(nullable=false, length = 30, unique=true)
	private String userid;
	
	@Column(nullable=false, length=100)
	private String password;
	
	@Column(nullable=false, length = 30)
	private String name;
	
	@Column(nullable=false, length = 50)
	private String email;
	
	@Column(nullable=false, length = 300)
	private String address;

	@Column(nullable=false, length = 50)
	private String qestion;
	
	@Column(nullable=false, length = 30)
	private String answer;
	
//	@ColumnDefault("'USER'")
	@Column(nullable=false, length = 20)
	private String roles;
}
