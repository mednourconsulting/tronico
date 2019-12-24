package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActPcd;
import com.akveo.bundlejava.repository.PlanActPcdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/planActPcd")
@CrossOrigin("*")
public class PlanActPcdController {
    @Autowired
    private PlanActPcdRepository planActPcdRepository;
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<PlanActPcd>> getAll(@PathVariable("atelier") String atelier , @PathVariable("year") Long year) {
        return ResponseEntity.ok(planActPcdRepository.findByAtelierAndYear(atelier ,  year));
    }
    @GetMapping("/get/{atelier}")
    public ResponseEntity<List<PlanActPcd>> get(@PathVariable("atelier") String atelier) {
        return ResponseEntity.ok(planActPcdRepository.findByAtelier(atelier));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}/{week}")
    public ResponseEntity<List<PlanActPcd>> getAllByWeek(@PathVariable("atelier") String atelier , @PathVariable("year") Long year , @PathVariable("week") Long week) {
        return ResponseEntity.ok(planActPcdRepository.findByAtelierAndYearAndWeek(atelier ,  year , week));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActPcd> createSpleetEcartOF(@RequestBody PlanActPcd planActPcd ) {
        return ResponseEntity.ok(planActPcdRepository.save(planActPcd));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/createAll")
    public ResponseEntity<List<PlanActPcd>> createAll(@RequestBody List<PlanActPcd>  planActPcds) {
        return ResponseEntity.ok(planActPcdRepository.saveAll(planActPcds));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActPcd> updateSpleetEcartOF(@RequestBody PlanActPcd planActPcd) {
        return ResponseEntity.ok(planActPcdRepository.save(planActPcd));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
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
