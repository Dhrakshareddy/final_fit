package com.training.entity;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name="progress")
public class Progress implements Serializable{

	private static final long serialVersionUID = 1L;

	@Column(name="progress_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long progressId;
	
	
	
	@Column(name="username")
	private String username;
	
	@Column(name="progress_date")
	private Date progressDate;
	
	@Column(name="calculate_progress")
	private Double calculateProgress;
}
