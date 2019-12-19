package com.akveo.bundlejava.rest;


import com.akveo.bundlejava.model.SpleetEcartOF;
import com.akveo.bundlejava.repository.SpleetEcartOFRepository;
import com.akveo.bundlejava.service.SpleetEcartService;
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
    // get All records
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<SpleetEcartOF>> getAll(){
        return ResponseEntity.ok(spleetEcartOFRepository.findAll());
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<SpleetEcartOF> createSpleetEcartOF(@RequestBody SpleetEcartOF spleetEcartOF){
        return ResponseEntity.ok(spleetEcartOFRepository.save(spleetEcartOF));
    }


    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<SpleetEcartOF> updateSpleetEcartOF(@RequestBody SpleetEcartOF spleetEcartOF){
        return ResponseEntity.ok(spleetEcartOFRepository.save(spleetEcartOF));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<SpleetEcartOF> deleteSpleetEcartOF(@PathVariable("id") Long id){
        SpleetEcartOF spleetEcartOF=spleetEcartOFRepository.findById(id).get();
        if (spleetEcartOF==null){
            return (ResponseEntity<SpleetEcartOF>) ResponseEntity.notFound();
        }
        spleetEcartOFRepository.deleteById(id);
        return ResponseEntity.ok(spleetEcartOF);
    }

}