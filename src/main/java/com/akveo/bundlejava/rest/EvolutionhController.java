package com.akveo.bundlejava.rest;


import com.akveo.bundlejava.charts.EvolutionhChartData;
import com.akveo.bundlejava.model.Evolutionh;
import com.akveo.bundlejava.repository.EvolutionhRepository;
import com.akveo.bundlejava.service.EvolutionhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/evolutionh")
public class EvolutionhController {

    @Autowired
    private EvolutionhRepository evolutionhRepository;
    @Autowired
    private EvolutionhService evolutionhService;

    // get All reocrds
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<Evolutionh>> getAll() {
        return ResponseEntity.ok(evolutionhRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<Evolutionh> updateEvolutionh(@PathVariable("id") Long id, @RequestBody Evolutionh evolutionh) {
        System.out.println(evolutionh);
        return ResponseEntity.ok(evolutionhService.updateEvolutionh(id, evolutionh));
    }

    // update List -- for smart table ;)

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateList")
    public ResponseEntity<List<Evolutionh>> saveList(@RequestBody List<Evolutionh> evolutionhs) {
        return ResponseEntity.ok(evolutionhService.saveList(evolutionhs));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getChartData/{year}")
    public ResponseEntity<EvolutionhChartData> getChartData(@PathVariable("year") Long year) {
        System.out.println("Year" + year + evolutionhService.getChartData(year));
        return ResponseEntity.ok(evolutionhService.getChartData(year));
    }

    // create record
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Evolutionh> createEvolutionh(@RequestBody Evolutionh evolutionh) {
        System.out.println(evolutionh);
        return ResponseEntity.ok(evolutionhRepository.save(evolutionh));
    }

    // delete record
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Evolutionh> deleteEvolutionh(@PathVariable("id") Long id) {
        return ResponseEntity.ok(evolutionhService.deleteById(id));
    }


}
