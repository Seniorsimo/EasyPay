//package org.easypay.easypay.controller;
//
//import io.swagger.annotations.Api;
//import io.swagger.annotations.ApiOperation;
//import io.swagger.annotations.ApiResponse;
//import io.swagger.annotations.ApiResponses;
//import org.apache.log4j.Logger;
//import org.easypay.easypay.dao.entity.Credenziali;
//import org.easypay.easypay.dao.exception.NotFoundException;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.easypay.easypay.dao.repository.CredenzialiRepository;
//
//@RestController
//@RequestMapping("/api/utenti")
//@Api(value = "Utenti", description = "User listing")
//public class UtenteController implements ErrorHandlingController {
//
//    private static final Logger LOG = Logger.getLogger(UtenteController.class);
//
//    @Autowired
//    private CredenzialiRepository utenteRepository;
//
//    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Retrieve all users")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully retrieved list")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the user's list is forbidden")
//    })
//    public ResponseEntity getAll() {
//        return ResponseEntity.ok(utenteRepository.findAll());
//    }
//
//    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Retrieve user by ID")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully retrieved user")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the user is forbidden")
//        ,
//        @ApiResponse(code = 404, message = "The user you have requested is not found")
//    })
//    public ResponseEntity getById(@PathVariable("id") long id) {
//        return ResponseEntity.ok(utenteRepository.findById(id)
//                .orElseThrow(() -> new NotFoundException(Credenziali.class, "id", id)));
//    }
//
//    @GetMapping(value = "/self", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Retrieve self user info")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully retrieved user")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the user is forbidden")
//        ,
//        @ApiResponse(code = 404, message = "The user you have requested is not found")
//    })
//    public ResponseEntity getSelf() {
//        User u = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        return ResponseEntity.ok(utenteRepository.findByUsername(u.getUsername())
//                .orElseThrow(() -> new NotFoundException(Credenziali.class, "username", u.getUsername())));
//    }
//
//}
