package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.WeekMonth;
import com.akveo.bundlejava.repository.WeekMonthRepository;
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
public class WeekMonthController {
    @Autowired
    private WeekMonthRepository weekMonthRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<WeekMonth>> getAll(){
        return ResponseEntity.ok(weekMonthRepository.findAll());
    }
}
