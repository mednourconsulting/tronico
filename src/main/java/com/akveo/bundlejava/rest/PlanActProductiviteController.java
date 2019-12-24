package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActProductivite;
import com.akveo.bundlejava.repository.PlanActProductiviteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.lang.management.PlatformLoggingMXBean;
import java.util.List;
@RestController
@RequestMapping("/planActProductivite")
@CrossOrigin("*")
public class PlanActProductiviteController {
    @Autowired
    private PlanActProductiviteRepository planActProductiviteRepository;
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}")
    public ResponseEntity<List<PlanActProductivite>> getAll(@PathVariable("atelier") String atelier) {
        return ResponseEntity.ok(planActProductiviteRepository.findByAtelier(atelier));
    }
    @GetMapping("/getAll/{atelier}/{year}/{month}")
    public ResponseEntity<List<PlanActProductivite>> get(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year , @PathVariable("month") Long month) {
        return ResponseEntity.ok(planActProductiviteRepository.findByAtelierAndYearAndMonth(atelier,year,month));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActProductivite> createSpleetEcartOF(@RequestBody PlanActProductivite planActProductivite ) {
        return ResponseEntity.ok(planActProductiviteRepository.save(planActProductivite));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/createAll")
    public ResponseEntity<List<PlanActProductivite>> createAll(@RequestBody List<PlanActProductivite>  planActProductivite) {
        return ResponseEntity.ok(planActProductiviteRepository.saveAll(planActProductivite));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActProductivite> updateSpleetEcartOF(@RequestBody PlanActProductivite planActProductivite) {
        return ResponseEntity.ok(planActProductiviteRepository.save(planActProductivite));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
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
