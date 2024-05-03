package com.example.javaa.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class HelloController {
    
    @GetMapping("/me")
    public String getMethodName() {
        return new String("Hello !!");
    }
    
}
