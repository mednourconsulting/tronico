package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ParetoOtdWeek;
import com.akveo.bundlejava.repository.ParetoOtdWeekRepository;
import com.akveo.bundlejava.service.ParetoOtdWeekService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paretoOtdWeek")
@CrossOrigin("*")
public class ParetoOtdWeekController {
    @Autowired
    private ParetoOtdWeekRepository paretoOtdWeekRepository;
    @Autowired
    private ParetoOtdWeekService paretoOtdWeekService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ParetoOtdWeek>> getAll() {
        return ResponseEntity.ok(paretoOtdWeekRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<ParetoOtdWeek>> getAllByAtelierAndYear(@PathVariable("atelier") String atelier, @PathVariable("year") Long year) {
        return ResponseEntity.ok(paretoOtdWeekRepository.findByAtelierAndYear(atelier, year));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ParetoOtdWeek> createSpleetEcartOF(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekRepository.save(paretoOtdWeek));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/saveParetoOtdWithItems")
    public ResponseEntity<ParetoOtdWeek> saveParetoOtdWithItems(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        System.out.println("------------->" + paretoOtdWeek);
        System.out.println(paretoOtdWeek.getParetoOtdWeekItemList());
        return ResponseEntity.ok(paretoOtdWeekService.saveParetoOtdWeekWithItems(paretoOtdWeek));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ParetoOtdWeek> updateSpleetEcartOF(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        return ResponseEntity.ok(paretoOtdWeekService.saveParetoOtdWeekWithItems(paretoOtdWeek));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateParetoOtdWithItems")
    public ResponseEntity<ParetoOtdWeek> updateParetoOtdWithItems(@RequestBody ParetoOtdWeek paretoOtdWeek) {
        System.out.println("------------->" + paretoOtdWeek);
        System.out.println(paretoOtdWeek.getParetoOtdWeekItemList());
        return ResponseEntity.ok(paretoOtdWeekService.saveParetoOtdWeekWithItems(paretoOtdWeek));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ParetoOtdWeek> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        ParetoOtdWeek paretoOtdWeekLoaded = paretoOtdWeekRepository.findById(id).get();
        if (paretoOtdWeekLoaded == null) {
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        paretoOtdWeekRepository.deleteById(id);
        return ResponseEntity.ok(paretoOtdWeekLoaded);
    }
}
