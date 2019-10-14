package com.akveo.bundlejava.rest;


import com.akveo.bundlejava.model.SpleetEcartOF;
import com.akveo.bundlejava.repository.SpleetEcartOFRepository;
import com.akveo.bundlejava.service.SpleetEcartOFService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/spleetEcartOF")
@CrossOrigin("*")
public class SpleetEcartOFController {
    @Autowired
    private SpleetEcartOFRepository spleetEcartOFRepository;
    @Autowired
    private SpleetEcartOFService spleetEcartOFService;

    // get All records
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<SpleetEcartOF>> getAll(){
        return ResponseEntity.ok(spleetEcartOFRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<SpleetEcartOF> createSpleetEcartOF(@RequestBody SpleetEcartOF spleetEcartOF){
       return ResponseEntity.ok(spleetEcartOFRepository.save(spleetEcartOF));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<SpleetEcartOF> updateSpleetEcartOF(@PathVariable("id")Long id,@RequestBody SpleetEcartOF spleetEcartOF){
        return ResponseEntity.ok(spleetEcartOFService.updateSpleetEcartOF(id,spleetEcartOF));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<SpleetEcartOF> deleteSpleetEcartOF(@PathVariable("id") Long id){
        return ResponseEntity.ok(spleetEcartOFService.deleteById(id));
    }

}
