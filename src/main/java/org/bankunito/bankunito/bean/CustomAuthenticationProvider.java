/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.bean;

import java.io.IOException;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.log4j.Logger;
import org.bankunito.bankunito.dao.model.User;
import org.bankunito.bankunito.dao.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;
import org.springframework.stereotype.Component;

/**
 *
 * @author simo
 */
@Component
public class CustomAuthenticationProvider implements UserDetailsService {

    public final Logger LOG = Logger.getLogger(this.getClass().getName());

    @Autowired
    private UserRepository userRepository;

    private final AuthenticationSuccessHandler ash = new SimpleUrlAuthenticationSuccessHandler() {

        @Override
        public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

            // track logged user
            if (authentication.getPrincipal() instanceof User) {
                User principal = (User) authentication.getPrincipal();
                principal.setLastLogin(new Date());
            }

            super.onAuthenticationSuccess(request, response, authentication);
        }

    };

    private final LogoutSuccessHandler lsh = new SimpleUrlLogoutSuccessHandler() {

        @Override
        public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

            //super.onLogoutSuccess(request, response, authentication); //To change body of generated methods, choose Tools | Templates.
            getRedirectStrategy().sendRedirect(request, response, "/login?logout");
        }

    };

    public AuthenticationSuccessHandler getAsh() {
        return ash;
    }

    public LogoutSuccessHandler getLsh() {
        return lsh;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        User user;
        if((user = userRepository.findById(username.trim().toLowerCase()).orElse(null)) != null){
            
            Set<GrantedAuthority> authorities = new HashSet<>();
            
            org.springframework.security.core.userdetails.User myUser = new org.springframework.security.core.userdetails.User(
                    user.getUsername(), 
                    user.getPassword(), 
                    true, //enabled,
                    true, //accountNonExpired
                    true, //credentialsNonExpired
                    true, //accountNonLocked,
                    authorities
            );
            return myUser;
        }
            throw new UsernameNotFoundException(username);
       
    }

}
