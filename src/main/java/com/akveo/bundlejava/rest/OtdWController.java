package com.akveo.bundlejava.rest;




import com.akveo.bundlejava.model.OtdW;
import com.akveo.bundlejava.repository.OtdWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/otdWeek")
@CrossOrigin("*")
public class OtdWController {

    @Autowired
    private OtdWRepository otdWRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<OtdW>> getAll(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year) {
        return ResponseEntity.ok(otdWRepository.findByAtelierAndYear(atelier,year));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<OtdW> createSpleetEcartOF(@RequestBody OtdW otdW) {
        return ResponseEntity.ok(otdWRepository.save(otdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<OtdW> updateSpleetEcartOF(@RequestBody OtdW otdW) {
        return ResponseEntity.ok(otdWRepository.save(otdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<OtdW> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        OtdW otdWLoaded = otdWRepository.findById(id).get();
        if (otdWLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        otdWRepository.deleteById(id);
        return ResponseEntity.ok(otdWLoaded);
    }
}
