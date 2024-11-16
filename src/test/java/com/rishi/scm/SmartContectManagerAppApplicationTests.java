package com.rishi.scm;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.rishi.scm.services.EmailService;

@SpringBootTest
class SmartContectManagerAppApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	private EmailService service;

	@Test
	void sendEmailTest(){
		service.sendEmail(
			"rishicoding9838@gmail.com",
			"Just managing the email",
			"this is dcm project working"
		
		);
	}
}
