package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ParetoOtdWeek;
import com.akveo.bundlejava.model.ParetoOtdWeekItem;
import com.akveo.bundlejava.repository.ParetoOtdWeekItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/paretoOtdWeekItem")
@CrossOrigin("*")
public class ParetoOtdWeekItemController {
    @Autowired
    private ParetoOtdWeekItemRepository paretoOtdWeekItemRepository;
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ParetoOtdWeekItem>> getAll() {
        return ResponseEntity.ok(paretoOtdWeekItemRepository.findAll());
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getParetoOtdItemByParetoOtd")
    public ResponseEntity<List<ParetoOtdWeekItem>> getAll(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekItemRepository.findByParetoOtdWeek(paretoOtdWeek));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ParetoOtdWeekItem> createSpleetEcartOF(@RequestBody ParetoOtdWeekItem paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekItemRepository.save(paretoOtdWeek));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/createAll")
    public ResponseEntity<List<ParetoOtdWeekItem>> saveListSpleetEcartOF(@RequestBody List<ParetoOtdWeekItem> paretoOtdWeekItems) {
        return ResponseEntity.ok(paretoOtdWeekItemRepository.saveAll( paretoOtdWeekItems));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ParetoOtdWeekItem> updateSpleetEcartOF(@RequestBody ParetoOtdWeekItem paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekItemRepository.save(paretoOtdWeek));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ParetoOtdWeekItem> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        ParetoOtdWeekItem paretoOtdWeekLoaded = paretoOtdWeekItemRepository.findById(id).get();
        if (paretoOtdWeekLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        paretoOtdWeekItemRepository.deleteById(id);
        return ResponseEntity.ok(paretoOtdWeekLoaded);
    }
}
