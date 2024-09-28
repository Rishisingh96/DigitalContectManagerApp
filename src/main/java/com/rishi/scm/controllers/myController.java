package com.rishi.scm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.rishi.scm.entity.User;
import com.rishi.scm.forms.UserForm;
import com.rishi.scm.helpers.Message;
import com.rishi.scm.helpers.MessageType;
import com.rishi.scm.services.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;

@Controller
public class myController {

    @Autowired
    UserService userService;

    @GetMapping("/")
    public String index() {
        return "redirect:/home";
    }

    @RequestMapping("/home")
    public String home(Model model) {
        System.out.println("Home page handler");
        // model.addAttribute("name", "Rishi singh");
        // model.addAttribute("Portpholio_Website",
        // "https://rishisingh96.github.io/Personal-Port-Folio/");
        // model.addAttribute("phone", "7800017055");
        // model.addAttribute("Github_Repository", "https://github.com/Rishisingh96");
        return "home";
    }

    // about
    @RequestMapping("/about")
    public String aboutpage(Model model) {
        model.addAttribute("isLogin", true);
        System.out.println(" About page is login ");
        return "about";
    }

    // services
    @GetMapping("/services")
    public String servicespage() {
        System.out.println("Service page open");
        return "services";
    }

    // http://127.0.0.1:8081/contacts
    @GetMapping("/contact")
    public String contact() {
        System.out.println("Contact page open");
        return "contact";
    }

    //this is login controller
    @GetMapping("/login")
    public String login() {
        System.out.println("Login page open");
        return "login";
    }

    // form Sending one data from backend to frontend
    // @RequestMapping("/register")
    // public String register(Model model) {
    // System.out.println("Register page open");
    // UserForm userForm = new UserForm();
    // userForm.setName("suman singh");
    // model.addAttribute("userForm", userForm);
    // return "register";
    // }

    // this is registration controller
    @RequestMapping("/register")
    public String register(Model model) {
        System.out.println("Register page open");
        // default data bhi daal sakte hai
        // userForm.setName("Rishi singh")
        // UserForm.setAbout("This is about:Write something about")
        UserForm userForm = new UserForm();
        // userForm.setName("suman singh");
        model.addAttribute("userForm", userForm);
        return "register";
    }

    // @RequestMapping(value = "/do-register", method = RequestMethod.POST)
    // public String processRegister(@ModelAttribute UserForm userForm) {
    // System.out.println("Processing registration");
    // // fetch from data
    // // UserForm
    // System.out.println(userForm);
    // // validate from data
    // // save to database
    // // message = "Registration Successful"
    // // return message
    // return "redirect:/register";
    // }

    @RequestMapping(value = "/do-register", method = RequestMethod.POST)
    public String processRegister(@Valid @ModelAttribute UserForm userForm, BindingResult rBindingResult,
            HttpSession session) {
        System.out.println("Processing registration");
        // fetch from data
        // UserForm
        System.out.println(userForm);
        // validate from data
        if (rBindingResult.hasErrors()) {
            return "register";
        }
        // save to database
        User user = new User();
        user.setName(userForm.getName());
        user.setEmail(userForm.getEmail());
        user.setPassword(userForm.getPassword());
        user.setAbout(userForm.getAbout());
        user.setPhoneNumber(userForm.getPhoneNumber());
        user.setProfilePic("src/main/resources/static/images/Rishi.png");
        User saveUser = userService.saveUser(user);

        System.out.println("User Save Success" + saveUser);
        // message = "Registration Successful"

        // session.setAttribute("message", "Registration Successful");
        // add the message
        Message message = Message.builder().content("Registration Successful").type(MessageType.green).build();
        session.setAttribute("message", message);
        // return message
        return "redirect:/register";
    }

}

// userservice
// UserForm -> user
// User user = User.builder()
// .name(userForm.getName())
// .email(userForm.getEmail())
// .password(userForm.getPassword())
// .about(userForm.getAbout())
// .password(userForm.getPhoneNumber())
// .profilePic(
// "src/main/resources/static/images/Rishi.png")
// .build();