package com.training.entity;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Table(name="workout")
public class Workout implements Serializable{

	
	private static final long serialVersionUID = 1L;

	@Column(name="workout_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long workoutId;
	
	@Column(name="workout_date")
	private Date workoutDate;
	
	@Column(name="duration")
	private String duration;
	
	
	@Column(name="sets_Completed")
	private Long setsCompleted;
	
	@Column(name="username")
	private String username;
	
	

}