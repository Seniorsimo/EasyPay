/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.controller;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.bankunito.bankunito.dao.model.User;
import org.bankunito.bankunito.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author simo
 */
@Controller
public class LoginController {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @ModelAttribute
    public LoginForm getLoginForm(){
        return new LoginForm();
    }
    
    @GetMapping("/login")
    public ModelAndView getLoginPage(@ModelAttribute LoginForm loginForm){
        return new ModelAndView("login", "loginForm", loginForm);
    }
    
    @GetMapping("/register")
    public ModelAndView getRegistrationPage(@ModelAttribute LoginForm loginForm){
        return new ModelAndView("register", "loginForm", loginForm);
    }
    
    @PostMapping("/register")
    public ModelAndView register(@Valid @ModelAttribute LoginForm loginForm){
        //add user here
        String encodedPass = passwordEncoder.encode(loginForm.password);
        User user = new User();
        user.setUsername(loginForm.username);
        user.setPassword(encodedPass);
        userRepository.save(user);
        return new ModelAndView("redirect:/login", "loginForm", loginForm);
    }
    
    // Temporary home
    @GetMapping("/")
    public ModelAndView home(){
        return new ModelAndView("login");
    }
    
    @Data
    @AllArgsConstructor
    @RequiredArgsConstructor
    public static class LoginForm{
        @NotBlank
        private String username;
        @NotBlank
        private String password;
    }
    
}
