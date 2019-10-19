package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ParetoOtdW;
import com.akveo.bundlejava.repository.ParetoOtdWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/paretoOtdW")
@CrossOrigin("*")
public class ParetoOtdWController {


    @Autowired
    private ParetoOtdWRepository paretoOtdWRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ParetoOtdW>> getAll() {
        return ResponseEntity.ok(paretoOtdWRepository.findAll());
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ParetoOtdW> createSpleetEcartOF(@RequestBody ParetoOtdW paretoOtdW) {
        return ResponseEntity.ok(paretoOtdWRepository.save(paretoOtdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ParetoOtdW> updateSpleetEcartOF(@RequestBody ParetoOtdW paretoOtdW) {
        return ResponseEntity.ok(paretoOtdWRepository.save(paretoOtdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ParetoOtdW> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        ParetoOtdW paretoOtdWLoaded = paretoOtdWRepository.findById(id).get();
        if (paretoOtdWLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        paretoOtdWRepository.deleteById(id);
        return ResponseEntity.ok(paretoOtdWLoaded);
    }
}
