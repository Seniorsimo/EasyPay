/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import java.io.IOException;
import java.time.LocalDate;
import java.time.Month;
import java.util.Arrays;
import java.util.logging.Logger;
import javax.annotation.PostConstruct;
import org.easypay.easypay.auth.JWTAuthenticationService;
import org.easypay.easypay.dao.entity.Atm;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.dao.entity.Commerciante;
import org.easypay.easypay.dao.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.format.FormatterRegistry;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

/**
 *
 * @author simo
 */
@Configuration
//@EnableSwagger2
@EnableJpaAuditing
@EnableJpaRepositories
@SpringBootApplication
@EntityScan(basePackages = "org.easypay.easypay.dao.entity")
@ComponentScan(basePackages = "org.easypay.easypay")
public class Application extends WebMvcConfigurerAdapter {

    private static Logger LOG = Logger.getLogger(Application.class.getName());
    private static ApplicationContext applicationContext;

    public static void main(String[] args) {
        applicationContext = SpringApplication.run(Application.class, args);

//        for (String beanName : applicationContext.getBeanDefinitionNames()) {
//            System.out.println(beanName);
//            LOG.info(beanName);
//        }
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/css/**").addResourceLocations("/css/");
        registry.addResourceHandler("/images/**").addResourceLocations("/img/");
        registry.addResourceHandler("/img/**").addResourceLocations("/img/");
        registry.addResourceHandler("/js/**").addResourceLocations("/js/");

        registry.addResourceHandler("/online/**/*")
                .addResourceLocations("/online/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        return requestedResource.exists() && requestedResource.isReadable() ? requestedResource : new ClassPathResource("/online/index.html");
                    }
                });

        registry.addResourceHandler("/atm/**/*")
                .addResourceLocations("/atm/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        return requestedResource.exists() && requestedResource.isReadable() ? requestedResource : new ClassPathResource("/atm/index.html");
                    }
                });
    }

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Override
    public void addFormatters(FormatterRegistry registry) {
        registry.addConverter(new SelfConverter());
    }

    @Bean
    public InternalResourceViewResolver getInternalResourceViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setViewClass(JstlView.class);
        resolver.setPrefix("/WEB-INF/jsp/");
        resolver.setSuffix(".jsp");
        return resolver;
    }

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("EasyPay REST API")
                        .description("General api to interact with EasyPay service")
                        .version("v1.0")
                        .license(new License().name("Apache 2.0").url("http://www.apache.org/licenses/LICENSE-2.0")))
                .components(new Components()
                        .addSecuritySchemes("Authorization", new SecurityScheme()
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .name("Authorization")))
                .security(Arrays.asList(
                        new SecurityRequirement().addList("Authorization")));
        /*.externalDocs(new ExternalDocumentation()
                        .description("SpringShop Wiki Documentation")
                        .url("https://springshop.wiki.github.org/docs"))*/
    }

    public static class SelfConverter implements Converter<String, Long> {

        @Override
        public Long convert(String s) {
            if ("self".equalsIgnoreCase(s)) {
                JWTAuthenticationService.MyUser u = (JWTAuthenticationService.MyUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
                return u != null ? u.getId() : null;
            }
            return null;
        }

    }

    @Component
    public static class Initializer {

        @Autowired
        private AtmRepository atmRepository;
        @Autowired
        private ClientRepository clientRepository;
//        @Autowired
//        private CommercianteRepository commercianteRepository;
        @Autowired
        private ContoRepository contoRepository;
        @Autowired
        private MovimentoRepository movimentoRepository;
        @Autowired
        private PagamentoRepository pagamentoRepository;
        @Autowired
        private RicaricaRepository ricaricaRepository;
        @Autowired
        private CredenzialiRepository credenzialiRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @PostConstruct
        public void init() {
            if (!credenzialiRepository.findById("user1@gmail.com").isPresent()) {
                clientRepository.save(Cliente.builder()
                        .username("user1@gmail.com")
                        .password(passwordEncoder.encode("password"))
                        .nome("Paolo")
                        .cognome("Pioppo")
                        .cf("ASDFGHJKLPOIUYTRE")
                        .birthDate(LocalDate.of(1983, Month.NOVEMBER, 23))
                        .address("Via Rossi")
                        .phone("+390123456789")
                        .build());
            }
            if (!credenzialiRepository.findById("user2@gmail.com").isPresent()) {
                clientRepository.save(Cliente.builder()
                        .username("user2@gmail.com")
                        .password(passwordEncoder.encode("password"))
                        .nome("Anna")
                        .cognome("Dico")
                        .cf("SNHFAIHCFIUHFCUHACUHND")
                        .birthDate(LocalDate.of(1993, Month.NOVEMBER, 23))
                        .address("Viale dei fiori")
                        .phone("+390123456789")
                        .build());
            }
            if (!credenzialiRepository.findById("user3@gmail.com").isPresent()) {
                clientRepository.save(Commerciante.builder()
                        .username("user3@gmail.com")
                        .password(passwordEncoder.encode("password"))
                        .nome("Ababua")
                        .cognome("Bau")
                        .cf("SNHFAIHCFIUHFHSYDCUHND")
                        .birthDate(LocalDate.of(1989, Month.NOVEMBER, 23))
                        .address("Strada grande")
                        .ragSoc("Pizzeria Mare Blu")
                        .phone("+390123456789")
                        .pIva("SHKVIYNGARCNIYHCFAIHIANHAI")
                        .build());
            }
            if (!credenzialiRepository.findById("user4@gmail.com").isPresent()) {
                clientRepository.save(Commerciante.builder()
                        .username("user4@gmail.com")
                        .password(passwordEncoder.encode("password"))
                        .nome("Ciro")
                        .cognome("Blu")
                        .cf("SNHFDLKKLIUHFCUHACUHND")
                        .birthDate(LocalDate.of(2001, Month.NOVEMBER, 23))
                        .address("Corso Napoleone")
                        .phone("+390123456789")
                        .ragSoc("Osteria Bella Napoli")
                        .pIva("SHKVIYNGAHABFKHKFYAHIYYNHAI")
                        .build());
            }
            if (atmRepository.findAll().isEmpty()) {
                atmRepository.save(Atm.builder().build());
            }

        }

    }

}
