package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActOtd;
import com.akveo.bundlejava.repository.PlanActOtdRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/planActOtd")
@CrossOrigin("*")
public class PlanActOtdController {
    @Autowired
    private PlanActOtdRepository planActOtdRepository;
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<PlanActOtd>> getAll(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year) {
        return ResponseEntity.ok(planActOtdRepository.findByAtelierAndYearOrderByWeek(atelier , year));
    }
    @GetMapping("/get/{atelier}")
    public ResponseEntity<List<PlanActOtd>> getAll(@PathVariable("atelier") String atelier) {
        return ResponseEntity.ok(planActOtdRepository.findByAtelierOrderByWeek(atelier));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}/{week}")
    public ResponseEntity<List<PlanActOtd>> getByWeekByAtelierByYear(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year ,@PathVariable("week") Long week ) {
        return ResponseEntity.ok(planActOtdRepository.findByAtelierAndYearAndWeek(atelier , year , week));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActOtd> createSpleetEcartOF(@RequestBody PlanActOtd planActOtd) {
        return ResponseEntity.ok(planActOtdRepository.save(planActOtd));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/createAll")
    public ResponseEntity<List<PlanActOtd>> createAll(@RequestBody List<PlanActOtd> planActOtds) {
        System.out.println(planActOtds);
        return ResponseEntity.ok(planActOtdRepository.saveAll(planActOtds));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActOtd> updateSpleetEcartOF(@RequestBody PlanActOtd planActOtd) {
        return ResponseEntity.ok(planActOtdRepository.save(planActOtd));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
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
    @DeleteMapping("/delete/{atelier}/{year}/{week}")
    public ResponseEntity<List<PlanActOtd>> deleteByWeek(@PathVariable("atelier") String atelier , @PathVariable("year") Long year ,@PathVariable("week") Long week) {
            List<PlanActOtd> planActOtdLoaded = planActOtdRepository.findByAtelierAndYearAndWeek(atelier ,year ,week);
        if (planActOtdLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        planActOtdRepository.deleteAll(planActOtdLoaded);
        return ResponseEntity.ok(planActOtdLoaded);
    }
}
