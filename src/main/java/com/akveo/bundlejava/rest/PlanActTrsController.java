package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.PlanActTrs;
import com.akveo.bundlejava.repository.PlanActTrsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/planActTrs")
@CrossOrigin("*")
public class PlanActTrsController {
    @Autowired
    private PlanActTrsRepository planActTrsRepository;
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/get/{year}")
    public ResponseEntity<List<PlanActTrs>> getAll( @PathVariable("year") Long year) {
        return ResponseEntity.ok(planActTrsRepository.findByYearOrderByWeek( year));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")

    @GetMapping("/getAll")
    public ResponseEntity<List<PlanActTrs>> get() {
        return ResponseEntity.ok(planActTrsRepository.findAll());
    }

    @GetMapping("/getAll/{year}/{week}")
    public ResponseEntity<List<PlanActTrs>> getByWeekByAtelierByYear(@PathVariable("year") Long year ,@PathVariable("week") Long week ) {
        return ResponseEntity.ok(planActTrsRepository.findByYearAndWeekOrderByWeek(year , week));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PlanActTrs> create(@RequestBody PlanActTrs planActTrs) {
        return ResponseEntity.ok(planActTrsRepository.save(planActTrs));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/createAll")
    public ResponseEntity<List<PlanActTrs>> createAll(@RequestBody List<PlanActTrs> planActTrs) {
        System.out.println(planActTrs);
        return ResponseEntity.ok(planActTrsRepository.saveAll(planActTrs));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PlanActTrs> update(@RequestBody PlanActTrs planActTrs) {
        return ResponseEntity.ok(planActTrsRepository.save(planActTrs));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PlanActTrs> delete(@PathVariable("id") Long id) {
        PlanActTrs planActTrsLoaded = planActTrsRepository.findById(id).get();
        if (planActTrsLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        planActTrsRepository.deleteById(id);
        return ResponseEntity.ok(planActTrsLoaded);
    }
}
