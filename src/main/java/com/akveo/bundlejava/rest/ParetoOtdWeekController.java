package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ParetoOtdWeek;
import com.akveo.bundlejava.repository.ParetoOtdWeekRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/paretoOtdWeek")
@CrossOrigin("*")
public class ParetoOtdWeekController {
    @Autowired
    private ParetoOtdWeekRepository paretoOtdWeekRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ParetoOtdWeek>> getAll() {
        return ResponseEntity.ok(paretoOtdWeekRepository.findAll());
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ParetoOtdWeek> createSpleetEcartOF(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekRepository.save(paretoOtdWeek));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ParetoOtdWeek> updateSpleetEcartOF(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekRepository.save(paretoOtdWeek));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ParetoOtdWeek> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        ParetoOtdWeek paretoOtdWeekLoaded = paretoOtdWeekRepository.findById(id).get();
        if (paretoOtdWeekLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        paretoOtdWeekRepository.deleteById(id);
        return ResponseEntity.ok(paretoOtdWeekLoaded);
    }
}
