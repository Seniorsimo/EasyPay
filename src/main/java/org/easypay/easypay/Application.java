/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay;

import com.google.common.collect.Lists;
import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import javax.annotation.PostConstruct;
import org.apache.log4j.Logger;
import org.easypay.easypay.auth.JWTAuthenticationService;
import org.easypay.easypay.dao.entity.Cliente;
import org.easypay.easypay.dao.entity.Commerciante;
import org.easypay.easypay.dao.entity.Conto;
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
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 *
 * @author simo
 */
@Configuration
@EnableSwagger2
@EnableJpaAuditing
@EnableJpaRepositories
@SpringBootApplication
@EntityScan(basePackages = "org.easypay.easypay.dao.entity")
@ComponentScan(basePackages = "org.easypay.easypay")
public class Application extends WebMvcConfigurerAdapter {

    private static Logger LOG = Logger.getLogger(Application.class);
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
//

    @Bean
    public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage("org.easypay.easypay.controller"))
                .paths(PathSelectors.ant("/api/**"))
                .build()
                .apiInfo(new ApiInfo(
                        "EasyPay REST API",
                        "General api to interact with EasyPay service",
                        "1.0",
                        "Terms of Service",
                        new Contact("EasyPay Team", "https://easypay-unito.herokuapp.com/", ""),
                        "Apache 2.0", // Apache 2.0
                        "http://www.apache.org/licenses/LICENSE-2.0", // http://www.apache.org/licenses/LICENSE-2.0
                        Collections.emptyList()
                ))
                .securitySchemes(Lists.newArrayList(apiKey()))
                .securityContexts(Arrays.asList(securityContext()));
    }

    private ApiKey apiKey() {
        return new ApiKey("Bearer", "Authorization", "header");
    }

    private SecurityContext securityContext() {
        return SecurityContext.builder().securityReferences(defaultAuth())
                .forPaths(PathSelectors.any()).build();
    }

    private List<SecurityReference> defaultAuth() {
        AuthorizationScope authorizationScope = new AuthorizationScope(
                "global", "accessEverything");
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1];
        authorizationScopes[0] = authorizationScope;
        return Arrays.asList(new SecurityReference("Bearer",
                authorizationScopes));
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
        @Autowired
        private CommercianteRepository commercianteRepository;
        @Autowired
        private ContoRepository contoRepository;
        @Autowired
        private MovimentoRepository movimentoRepository;
        @Autowired
        private PagamentoRepository pagamentoRepository;
        @Autowired
        private RicaricaRepository ricaricaRepository;
        @Autowired
        private UtenteRepository utenteRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @PostConstruct
        public void init() {
            Cliente cliente1 = clientRepository.save(Cliente.builder()
                    .username("user1")
                    .pin(passwordEncoder.encode("password"))
                    .nome("Paolo")
                    .cognome("Pioppo")
                    .cf("ASDFGHJKLPOIUYTRE")
                    .build());
            Cliente cliente2 = clientRepository.save(Cliente.builder()
                    .username("user2")
                    .pin(passwordEncoder.encode("password"))
                    .nome("Anna")
                    .cognome("Dico")
                    .cf("SNHFAIHCFIUHFCUHACUHND")
                    .build());
            Commerciante comm1 = commercianteRepository.save(Commerciante.builder()
                    .username("user3")
                    .pin(passwordEncoder.encode("password"))
                    .ragSoc("Pizzeria Mare Blu")
                    .pIva("SHKVIYNGARCNIYHCFAIHIANHAI")
                    .build());
            Commerciante comm2 = commercianteRepository.save(Commerciante.builder()
                    .username("user4")
                    .pin(passwordEncoder.encode("password"))
                    .ragSoc("Osteria Bella Napoli")
                    .pIva("SHKVIYNGAHABFKHKFYAHIYYNHAI")
                    .build());
            Conto contoCliente1 = contoRepository.save(Conto.builder()
                    .utente(cliente1)
                    .budget(20)
                    .saldo(100)
                    .build());
        }

    }

}
