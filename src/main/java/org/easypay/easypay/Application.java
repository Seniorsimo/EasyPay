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
        private CredenzialiRepository utenteRepository;

        @Autowired
        private PasswordEncoder passwordEncoder;

        @PostConstruct
        public void init() {
            Cliente cliente1 = clientRepository.save(Cliente.builder()
                    .username("user1@gmail.com")
                    .password(passwordEncoder.encode("password"))
                    .nome("Paolo")
                    .cognome("Pioppo")
                    .cf("ASDFGHJKLPOIUYTRE")
                    .birthDate("23/11/1983")
                    .address("Via Rossi")
                    .phone("+390123456789")
                    .build());
            Cliente cliente2 = clientRepository.save(Cliente.builder()
                    .username("user2@gmail.com")
                    .password(passwordEncoder.encode("password"))
                    .nome("Anna")
                    .cognome("Dico")
                    .cf("SNHFAIHCFIUHFCUHACUHND")
                    .birthDate("23/11/1993")
                    .address("Viale dei fiori")
                    .phone("+390123456789")
                    .build());
            Commerciante comm1 = clientRepository.save(Commerciante.builder()
                    .username("user3@gmail.com")
                    .password(passwordEncoder.encode("password"))
                    .nome("Ababua")
                    .cognome("Bau")
                    .cf("SNHFAIHCFIUHFHSYDCUHND")
                    .birthDate("23/11/1989")
                    .address("Strada grande")
                    .ragSoc("Pizzeria Mare Blu")
                    .phone("+390123456789")
                    .pIva("SHKVIYNGARCNIYHCFAIHIANHAI")
                    .build());
            Commerciante comm2 = clientRepository.save(Commerciante.builder()
                    .username("user4@gmail.com")
                    .password(passwordEncoder.encode("password"))
                    .nome("Ciro")
                    .cognome("Blu")
                    .cf("SNHFDLKKLIUHFCUHACUHND")
                    .birthDate("23/11/2001")
                    .address("Corso Napoleone")
                    .phone("+390123456789")
                    .ragSoc("Osteria Bella Napoli")
                    .pIva("SHKVIYNGAHABFKHKFYAHIYYNHAI")
                    .build());
            Atm atm1 = atmRepository.save(Atm.builder().build());
//
//            System.out.println(atm1);
//
//            ricaricaRepository.save(Ricarica.builder()
//                    .atm(atm1)
//                    .destinatario(cliente1.getConto())
//                    .valore(100)
//                    .build());
//            ricaricaRepository.save(Ricarica.builder()
//                    .atm(atm1)
//                    .destinatario(comm1.getConto())
//                    .valore(200)
//                    .build());
//
//            LOG.warning("PrePagamento");
//            LOG.warning("Cliente 1");
//            List<Movimento> movimenti = clientRepository.getOne(1L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//            LOG.warning("Cliente 2");
//            movimenti = clientRepository.getOne(3L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//
//            Pagamento p = new Pagamento(cliente1.getConto(), cliente2.getConto(), 10);
//
//            LOG.warning("Pagamento creato");
//            LOG.warning("Cliente 1");
//            movimenti = clientRepository.getOne(1L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//            LOG.warning("Cliente 2");
//            movimenti = clientRepository.getOne(3L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//
//            contoRepository.save(cliente1.getConto());
//
//            LOG.warning("Conto cliente 1 salvato");
//            LOG.warning("Cliente 1");
//            movimenti = clientRepository.getOne(1L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//            LOG.warning("Cliente 2");
//            movimenti = clientRepository.getOne(3L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//
//            contoRepository.save(cliente2.getConto());
//
//            LOG.warning("Conto cliente 2 salvato");
//            LOG.warning("Cliente 1");
//            movimenti = clientRepository.getOne(1L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));
//            LOG.warning("Cliente 2");
//            movimenti = clientRepository.getOne(3L).getConto().getMovimenti();
//            movimenti.forEach(m -> LOG.warning(m.toString()));

//            LOG.warning("Conto1: " + ((Object) cliente1.getConto()).toString());
//            cliente1.getConto().getMovimenti().forEach(m -> LOG.warning("Movimento: " + ((Object) m).toString()));
//            LOG.warning("Conto2: " + ((Object) cliente2.getConto()).toString());
//            cliente2.getConto().getMovimenti().forEach(m -> LOG.warning("Movimento: " + ((Object) m).toString()));
//            LOG.warning("Movimento: " + ((Object) p).toString());
//            LOG.warning("From: " + ((Object) p.getFrom()).toString());
//            LOG.warning("To: " + ((Object) p.getTo()).toString());
//            p.setFrom(cliente1.getConto());
//            p.setTo(cliente2.getConto());
//            contoRepository.save(cliente1.getConto());
//            contoRepository.save(cliente2.getConto());
//            pagamentoRepository.save(p);
//            pagamentoRepository.save(Pagamento.builder()
//                    .from(cliente1.getConto())
//                    .to(cliente2.getConto())
//                    .value(10)
//                    .build());
//            pagamentoRepository.save(Pagamento.builder()
//                    .from(cliente1.getConto())
//                    .to(comm1.getConto())
//                    .value(20)
//                    .build());
//            pagamentoRepository.save(Pagamento.builder()
//                    .from(cliente2.getConto())
//                    .to(comm1.getConto())
//                    .value(5)
//                    .build());
//            pagamentoRepository.save(Pagamento.builder()
//                    .from(cliente1.getConto())
//                    .to(comm2.getConto())
//                    .value(14)
//                    .build());
//            pagamentoRepository.save(Pagamento.builder()
//                    .from(comm1.getConto())
//                    .to(comm2.getConto())
//                    .value(8)
//                    .build());
        }

    }

}
