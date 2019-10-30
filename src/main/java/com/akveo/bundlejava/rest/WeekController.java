package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.Week;
import com.akveo.bundlejava.repository.SpleetEcartOFRepository;
import com.akveo.bundlejava.repository.WeekRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
@Controller
@RequestMapping("/Week")
@CrossOrigin("*")
public class WeekController {
    @Autowired
    private WeekRepository weekRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<Week>> getAll(){
        return ResponseEntity.ok(weekRepository.findAll());
    }
}
