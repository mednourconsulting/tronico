package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActOtd;
import com.akveo.bundlejava.repository.PlanActOtdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/PlanActionOtd")
@CrossOrigin("*")
public class PlanActOtdController {
    @Autowired
    private PlanActOtdRepository planActOtdRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<PlanActOtd>> getAll() {
        return ResponseEntity.ok(planActOtdRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActOtd> createSpleetEcartOF(@RequestBody PlanActOtd planActOtd) {
        return ResponseEntity.ok(planActOtdRepository.save(planActOtd));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActOtd> updateSpleetEcartOF(@RequestBody PlanActOtd planActOtd) {
        return ResponseEntity.ok(planActOtdRepository.save(planActOtd));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PlanActOtd> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        PlanActOtd planActOtdLoaded = planActOtdRepository.findById(id).get();
        if (planActOtdLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        planActOtdRepository.deleteById(id);
        return ResponseEntity.ok(planActOtdLoaded);
    }
}
