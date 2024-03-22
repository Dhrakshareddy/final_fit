package com.paymentservice.bean;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class PaymentBean {

	private Long paymentId;

	private Double paymentAmount;
	private String membershipType;

	private String paymentMode;

	private String paymentDate;

	private String username;

	private Long userId;

}
