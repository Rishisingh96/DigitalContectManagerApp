package com.rishi.scm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.rishi.scm.entity.User;
import com.rishi.scm.helpers.Message;
import com.rishi.scm.helpers.MessageType;
import com.rishi.scm.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;


    //verify email

    @GetMapping("/verify-email")
    public String verifyEmail(
            @RequestParam("token") String token,  HttpSession session ){


               User user =  userRepository.findByEmailToken(token).orElse(null);

               if(user != null){
                //user fetch hua hai :: process karna hai

                if(user.getEmailToken().equals(token)){
                    user.setEmailVerified(true);
                    user.setEnabled(true);
                    userRepository.save(user);
                    session.setAttribute("message", Message.builder()
                    .content("Email is Verified , Now you account is enabled")
                    .type(MessageType.green)
                    .build());
                    return "successPage";
                }
                return "errorPage";
                
               }
            // return "errorPage";
            session.setAttribute("message", Message.builder()
            .content("Something went wrong email not verified.")
            .type(MessageType.red)
            .build());
        return "errorPage";
    }
    
}
