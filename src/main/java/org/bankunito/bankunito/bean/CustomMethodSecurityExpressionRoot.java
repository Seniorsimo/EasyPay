/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.bankunito.bankunito.bean;

import javax.servlet.http.HttpServletRequest;
import org.springframework.security.access.expression.SecurityExpressionRoot;
import org.springframework.security.access.expression.method.MethodSecurityExpressionOperations;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.util.matcher.IpAddressMatcher;

/**
 *
 * @author simo
 */
public class CustomMethodSecurityExpressionRoot
        extends SecurityExpressionRoot
        implements MethodSecurityExpressionOperations {

    public final HttpServletRequest request;
    private Object filterObject;
    private Object returnObject;
    private Object target;

    /**
     * Copied from SecurityExpressionRoot
     */
    public CustomMethodSecurityExpressionRoot(Authentication a, FilterInvocation fi) {
        super(a);
        this.request = fi.getRequest();
    }

    public CustomMethodSecurityExpressionRoot(Authentication authentication) {
        super(authentication);
        this.request = null;
    }

    @Override
    public void setFilterObject(Object filterObject) {
        this.filterObject = filterObject;
    }

    @Override
    public Object getFilterObject() {
        return filterObject;
    }

    @Override
    public void setReturnObject(Object returnObject) {
        this.returnObject = returnObject;
    }

    @Override
    public Object getReturnObject() {
        return returnObject;
    }

    public void setThis(Object target) {
        this.target = target;
    }

    @Override
    public Object getThis() {
        return target;
    }

    private User getUser() {
        return ((User) this.getPrincipal());
    }

    /*
        Custom validation method starts here
     */
    

    /**
     * Copied from SecurityExpressionRoot
     */
    public boolean hasIpAddress(String ipAddress) {
        if (request != null) {
            return (new IpAddressMatcher(ipAddress).matches(request));
        }
        return true;
    }

}
