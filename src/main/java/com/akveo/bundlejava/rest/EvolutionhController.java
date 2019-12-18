package com.akveo.bundlejava.rest;


import com.akveo.bundlejava.charts.EvolutionhChartData;
import com.akveo.bundlejava.model.Evolutionh;
import com.akveo.bundlejava.repository.EvolutionhRepository;
import com.akveo.bundlejava.service.EvolutionhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/evolutionh")
@CrossOrigin("*")

public class EvolutionhController {

    @Autowired
    private EvolutionhRepository evolutionhRepository;
    // get All reocrds
    @Autowired
    private EvolutionhService evolutionhService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{year}")
    public ResponseEntity<List<Evolutionh>> getAll(@PathVariable ("year") Long year) {
        return ResponseEntity.ok(evolutionhRepository.findByYearOrderByWeek(year));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{year}/{week}")
    public ResponseEntity<Evolutionh> getAllByWeek(@PathVariable ("year") Long year , @PathVariable("week") Long week) {
        return ResponseEntity.ok(evolutionhRepository.findByYearAndWeek(year , week));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Evolutionh> updateEvolutionh(@RequestBody Evolutionh evolutionh) {
        return ResponseEntity.ok(evolutionhRepository.save(evolutionh));
    }

    // update List -- for smart table ;)

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/updateList")
    public ResponseEntity<List<Evolutionh>> saveList(@RequestBody List<Evolutionh> evolutionhs) {
        return ResponseEntity.ok(evolutionhRepository.saveAll(evolutionhs));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getChartData/{year}")
    public ResponseEntity<EvolutionhChartData> getChartData(@PathVariable("year") Long year){
        System.out.println("Year" + year + evolutionhService.getChartData(year));
        return ResponseEntity.ok(evolutionhService.getChartData(year));
    }

    // create record
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Evolutionh> createSpleetEcartOF(@RequestBody Evolutionh evolutionh) {
        evolutionh.setEcart(Double.valueOf(evolutionh.getHeuresPrevus()-evolutionh.getHeuresCDE()));
        return ResponseEntity.ok(evolutionhRepository.save(evolutionh));
    }

    //delete record
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Evolutionh> deleteEvolutionh(@PathVariable("id") Long id) {
        Evolutionh EvolutionhLoaded = evolutionhRepository.findById(id).get();
        if (EvolutionhLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        evolutionhRepository.deleteById(id);
        return ResponseEntity.ok(EvolutionhLoaded);
    }


    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/id={id}")
    public ResponseEntity<Evolutionh> deleteEvolutionParId(@PathVariable("id") Long id) {
        Evolutionh evolutionhLoaded = evolutionhRepository.findById(id).get();
        if (evolutionhLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        evolutionhRepository.deleteById(id);
        return ResponseEntity.ok(evolutionhLoaded);
    }
}
