/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Sample controller
 * @author simo
 */
@Controller
public class DemoController {
    
    @GetMapping("/")
    public ModelAndView home(){
        return new ModelAndView("demo");
    }
    
}
