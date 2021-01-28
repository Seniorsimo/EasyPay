/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author simo
 */
@Controller
@RequestMapping("/map")
public class MapController implements ErrorHandlingController, SelfHandlingController {

    @GetMapping("")
    public ModelAndView loadMap() {

        return new ModelAndView("map");
    }

}
