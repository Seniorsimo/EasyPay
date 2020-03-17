package org.easypay.easypay.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Gestisce i redirect dell' applicazione angular per farla funzionare
 * correttamente, per permettere la gestione del routing internamente
 */
@Controller
@RequestMapping(value = "/atm")
public class AtmOnlineController {

    @GetMapping(value = {"/", ""})
    public String redirectHome() {
        // Forward to home page so that angular routing is preserved.
        return "forward:/atm/index.html";
    }

    @GetMapping(value = "/**/{[path:[^\\.]*}")
    public String redirect() {
        // Forward to home page so that angular routing is preserved.
        return "forward:/atm/index.html";
    }
}
