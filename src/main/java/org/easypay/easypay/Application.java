/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.easypay.easypay;

import java.io.IOException;
import javax.annotation.PostConstruct;
import org.apache.log4j.Logger;
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
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
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

        registry.addResourceHandler("/easypay-online/**/*")
                .addResourceLocations("/easypay-online/")
                .resourceChain(true)
                .addResolver(new PathResourceResolver() {
                    @Override
                    protected Resource getResource(String resourcePath, Resource location) throws IOException {
                        Resource requestedResource = location.createRelative(resourcePath);
                        return requestedResource.exists() && requestedResource.isReadable() ? requestedResource : new ClassPathResource("/easypay-online/index.html");
                    }
                });
    }

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    @Bean
    public InternalResourceViewResolver getInternalResourceViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setViewClass(JstlView.class);
        resolver.setPrefix("/WEB-INF/jsp/");
        resolver.setSuffix(".jsp");
        return resolver;
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

        @PostConstruct
        public void init() {
            Cliente cliente1 = clientRepository.save(Cliente.builder()
                    .username("user1")
                    .pin("password")
                    .nome("Paolo")
                    .cognome("Pioppo")
                    .cf("ASDFGHJKLPOIUYTRE")
                    .build());
            Cliente cliente2 = clientRepository.save(Cliente.builder()
                    .username("user2")
                    .pin("password")
                    .nome("Anna")
                    .cognome("Dico")
                    .cf("SNHFAIHCFIUHFCUHACUHND")
                    .build());
            Commerciante comm1 = commercianteRepository.save(Commerciante.builder()
                    .username("user3")
                    .pin("password")
                    .ragSoc("Pizzeria Mare Blu")
                    .pIva("SHKVIYNGARCNIYHCFAIHIANHAI")
                    .build());
            Commerciante comm2 = commercianteRepository.save(Commerciante.builder()
                    .username("user4")
                    .pin("password")
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
