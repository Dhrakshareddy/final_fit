package com.training.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Setter
@Getter
@Entity
@Table(name="exercise")
public class Exercise implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name="exercise_id")
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long exerciseId;
	
	@Column(name="exercise_name")
	private String exerciseName;
	
	@Column(name="description")
	private String description;
	
	
	
	@Column(name="number_of_sets")
	private Integer numberOfSets;
	
	@Column(name="equipment_needed")
	private String equipmentNeeded;
	

	@Column(name="username")
	private String username;
	
	
	}
	

