package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PcdWeek;
import com.akveo.bundlejava.repository.PcdWeekRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/pcdWeek")
@CrossOrigin("*")
public class PcdWeekController {
    @Autowired
    private PcdWeekRepository pcdWeekRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<PcdWeek>> getAll() {
        return ResponseEntity.ok(pcdWeekRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PcdWeek> createSpleetEcartOF(@RequestBody PcdWeek pcdWeek) {
        return ResponseEntity.ok(pcdWeekRepository.save(pcdWeek));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PcdWeek> updateSpleetEcartOF(@RequestBody PcdWeek pcdWeek) {
        return ResponseEntity.ok(pcdWeekRepository.save(pcdWeek));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PcdWeek> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        PcdWeek pcdWeekLoaded = pcdWeekRepository.findById(id).get();
        if (pcdWeekLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        pcdWeekRepository.deleteById(id);
        return ResponseEntity.ok(pcdWeekLoaded);
    }
}
