package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.charts.PcdWeekChartData;
import com.akveo.bundlejava.model.PcdWeek;
import com.akveo.bundlejava.repository.PcdWeekRepository;

import com.akveo.bundlejava.service.PcdWeekService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/pcdWeek")
@CrossOrigin("*")
public class PcdWeekController {
    @Autowired
    private PcdWeekRepository pcdWeekRepository;
    @Autowired
    private PcdWeekService pcdWeekService;

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<PcdWeek>> getAll() {
        return ResponseEntity.ok(pcdWeekRepository.findAll());
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<PcdWeek>> getAll(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year) {
        return ResponseEntity.ok(pcdWeekRepository.findByAtelierAndYear(atelier, year));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}/{week}")
    public ResponseEntity<PcdWeek> getAllByWeek(@PathVariable("atelier") String atelier , @PathVariable("year") Long year , @PathVariable("week") Long week) {
        return ResponseEntity.ok(pcdWeekRepository.findByAtelierAndYearAndWeek(atelier ,  year , week));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<PcdWeek> createSpleetEcartOF(@RequestBody PcdWeek pcdWeek) {
        return ResponseEntity.ok(pcdWeekRepository.save(pcdWeek));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<PcdWeek> updateSpleetEcartOF(@RequestBody PcdWeek pcdWeek) {
        return ResponseEntity.ok(pcdWeekRepository.save(pcdWeek));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<PcdWeek> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        PcdWeek pcdWeekLoaded = pcdWeekRepository.findById(id).get();
        if (pcdWeekLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        pcdWeekRepository.deleteById(id);
        return ResponseEntity.ok(pcdWeekLoaded);
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getChartData/{year}")
    public ResponseEntity<PcdWeekChartData> getChartData(@PathVariable("year") Long year){
        System.out.println(pcdWeekService.getChartData(year));
        return ResponseEntity.ok(pcdWeekService.getChartData(year));
    }
}
