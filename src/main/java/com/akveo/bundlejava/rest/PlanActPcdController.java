package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActPcd;
import com.akveo.bundlejava.repository.PlanActPcdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/PlanActPcRepository")
@CrossOrigin("*")
public class PlanActPcdController {
    @Autowired
    private PlanActPcdRepository planActPcdRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<PlanActPcd>> getAll() {
        return ResponseEntity.ok(planActPcdRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActPcd> createSpleetEcartOF(@RequestBody PlanActPcd planActPcd ) {
        return ResponseEntity.ok(planActPcdRepository.save(planActPcd));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActPcd> updateSpleetEcartOF(@RequestBody PlanActPcd planActPcd) {
        return ResponseEntity.ok(planActPcdRepository.save(planActPcd));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PlanActPcd> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        PlanActPcd planActPcdLoaded = planActPcdRepository.findById(id).get();
        if (planActPcdLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        planActPcdRepository.deleteById(id);
        return ResponseEntity.ok(planActPcdLoaded);
    }
}
