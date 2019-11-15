/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.bean;

import java.util.Arrays;
import java.util.List;
import java.util.Locale;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

/**
 *
 * @author simo
 */
@ControllerAdvice
public class LanguageAdvice {
    
    private static final List<Locale> languages = Arrays.asList(
            new Locale("en", "US"),
            new Locale("it", "IT")
    );

    public static List<Locale> getLanguages() {
        return languages;

    }

    @ModelAttribute
    public void languageForm(Model model) {
        model.addAttribute("languageForm", new LanguageForm());
    }

    @Data
    @RequiredArgsConstructor
    public static class LanguageForm {

        private final List<Locale> languages = LanguageAdvice.languages;
        private Locale language = LocaleContextHolder.getLocale();
    }
    
}
