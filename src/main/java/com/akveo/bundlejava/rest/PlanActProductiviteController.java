package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActProductivite;
import com.akveo.bundlejava.repository.PlanActProductiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/PlanActProductivite")
@CrossOrigin("*")
public class PlanActProductiviteController {
    @Autowired
    private PlanActProductiviteRepository planActProductiviteRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<PlanActProductivite>> getAll() {
        return ResponseEntity.ok(planActProductiviteRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActProductivite> createSpleetEcartOF(@RequestBody PlanActProductivite planActProductivite ) {
        return ResponseEntity.ok(planActProductiviteRepository.save(planActProductivite));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActProductivite> updateSpleetEcartOF(@RequestBody PlanActProductivite planActProductivite) {
        return ResponseEntity.ok(planActProductiviteRepository.save(planActProductivite));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PlanActProductivite> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        PlanActProductivite planActProductiviteLoaded = planActProductiviteRepository.findById(id).get();
        if (planActProductiviteLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        planActProductiviteRepository.deleteById(id);
        return ResponseEntity.ok(planActProductiviteLoaded);
    }
}
