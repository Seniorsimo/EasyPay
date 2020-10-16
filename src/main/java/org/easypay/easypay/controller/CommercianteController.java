//package org.easypay.easypay.controller;
//
//import io.swagger.annotations.*;
//import java.util.List;
//import javax.validation.Valid;
//import javax.validation.constraints.NotBlank;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.RequiredArgsConstructor;
//import org.easypay.easypay.dao.entity.Commerciante;
//import org.easypay.easypay.dao.exception.NotFoundException;
//import org.easypay.easypay.dao.repository.CommercianteRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/commercianti")
//@Api(value = "Merchant", description = "Merchant listing")
//public class CommercianteController implements ErrorHandlingController, SelfHandlingController {
//
//    @Autowired
//    private CommercianteRepository commercianteRepository;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Retrieve all merchant")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully retrieved merchant's list")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the merchant's list is forbidden")
//    })
//    public ResponseEntity<List<Commerciante>> getAll() {
//        return ResponseEntity.ok(commercianteRepository.findAll());
//    }
//
//    @PostMapping(value = "",
//            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
//            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Create a merchant")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully created merchant")
//        ,
//        @ApiResponse(code = 400, message = "Request was incorrect")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to create merchant")
//    })
//    public ResponseEntity<Commerciante> create(@Valid @RequestBody CommercianteCreate commerciante) {
//        return ResponseEntity.ok(commercianteRepository.save(Commerciante.builder()
//                .username(commerciante.getUsername())
//                .pin(passwordEncoder.encode(commerciante.getPin()))
//                .ragSoc(commerciante.getRagSoc())
//                .pIva(commerciante.getPIva())
//                .build()));
//    }
//
//    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Retrieve merchant by id")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully retrieved merchant")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to view the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the merchant is forbidden")
//    })
//    public ResponseEntity<Commerciante> getById(@PathVariable("id") String id) {
//        return ResponseEntity.ok(commercianteRepository.findById(getUserId(id))
//                .orElseThrow(() -> new NotFoundException(Commerciante.class, "id", id)));
//    }
//
//    @PostMapping(value = "/{id}",
//            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
//            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Edit merchant by id")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully edited merchant")
//        ,
//        @ApiResponse(code = 400, message = "Request was incorrect")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to edit the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the merchant is forbidden")
//    })
//    public ResponseEntity<Commerciante> edit(
//            @PathVariable("id") String id,
//            @Valid @RequestBody CommercianteEdit commerciante
//    ) {
//        return ResponseEntity.ok(commercianteRepository.findById(getUserId(id))
//                .map(u -> {
//                    u.setRagSoc(commerciante.getRagSoc());
//                    u.setPIva(commerciante.getPIva());
//                    commercianteRepository.save(u);
//                    return u;
//                })
//                .orElseThrow(() -> new NotFoundException(Commerciante.class, "id", id)));
//    }
//
//    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    @ApiOperation(value = "Delete merchant by id")
//    @ApiResponses(value = {
//        @ApiResponse(code = 200, message = "Successfully deleted merchant")
//        ,
//        @ApiResponse(code = 401, message = "You are not authorized to delete the resource")
//        ,
//        @ApiResponse(code = 403, message = "Accessing the merchant is forbidden")
//    })
//    public ResponseEntity<Commerciante> deleteById(@PathVariable("id") String id) {
//        return ResponseEntity.ok(commercianteRepository.findById(getUserId(id))
//                .map(u -> {
//                    commercianteRepository.delete(u);
//                    return u;
//                })
//                .orElseThrow(() -> new NotFoundException(Commerciante.class, "id", id)));
//    }
//
//    @Data
//    @AllArgsConstructor
//    @RequiredArgsConstructor
//    public static class CommercianteCreate extends CommercianteEdit {
//
//        @NotBlank
//        @ApiModelProperty(
//                position = 1,
//                required = true,
//                value = "The login credential"
//        )
//        private String username;
//
//        @NotBlank
//        @ApiModelProperty(
//                position = 2,
//                required = true,
//                value = "The login secret"
//        )
//        private String pin;
//
//    }
//
//    @Data
//    @AllArgsConstructor
//    @RequiredArgsConstructor
//    public static class CommercianteEdit {
//
//        @NotBlank
//        @ApiModelProperty(
//                position = 10,
//                required = true,
//                value = "Business name"
//        )
//        private String ragSoc;
//        @NotBlank
//        @ApiModelProperty(
//                position = 11,
//                required = true,
//                value = "VAT number"
//        )
//        private String pIva;
//    }
//}
