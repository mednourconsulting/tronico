package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.charts.RealisationWChart;
import com.akveo.bundlejava.model.RealisationW;
import com.akveo.bundlejava.repository.RealisationWRepository;
import com.akveo.bundlejava.service.RealisationWService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/realisationW")
@CrossOrigin("*")
public class RealisationWRepositoryController {
    @Autowired
    private RealisationWRepository realisationWRepository;
    @Autowired
    private RealisationWService realisationWService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<RealisationW>> getAll() {
        return ResponseEntity.ok(realisationWRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<RealisationW> createSpleetEcartOF(@RequestBody RealisationW planActPcd ) {
        return ResponseEntity.ok(realisationWRepository.save(planActPcd));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<RealisationW> updateSpleetEcartOF(@RequestBody RealisationW planActPcd) {
        return ResponseEntity.ok(realisationWRepository.save(planActPcd));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<RealisationW> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        RealisationW realisationWLoaded = realisationWRepository.findById(id).get();
        if (realisationWLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        realisationWRepository.deleteById(id);
        return ResponseEntity.ok(realisationWLoaded);
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getChartData/{year}")
    public ResponseEntity<RealisationWChart> getChartData(@PathVariable("year") Long year){
        System.out.println(realisationWService.getChartData(year));
        return ResponseEntity.ok(realisationWService.getChartData(year));
    }

}
