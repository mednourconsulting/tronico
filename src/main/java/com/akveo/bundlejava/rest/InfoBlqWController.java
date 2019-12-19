package com.akveo.bundlejava.rest;
import com.akveo.bundlejava.model.InfoBlqW;
import com.akveo.bundlejava.repository.InfoBlqWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/infoBloquant")
@CrossOrigin("*")
public class InfoBlqWController {
    @Autowired
    private InfoBlqWRepository infoBlqWRepository;

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<InfoBlqW>> getAll(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year) {
        return ResponseEntity.ok(infoBlqWRepository.findByAtelierAndYear(atelier, year));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}/{week}")
    public ResponseEntity<List<InfoBlqW>> getAll(@PathVariable("atelier") String atelier ,@PathVariable("year") Long year ,@PathVariable("week") Long week) {
        return ResponseEntity.ok(infoBlqWRepository.findByAtelierAndYearAndWeek(atelier,year,week));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<InfoBlqW> createSpleetEcartOF(@RequestBody InfoBlqW infoBlqW) {
        return ResponseEntity.ok(infoBlqWRepository.save(infoBlqW));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<InfoBlqW> updateSpleetEcartOF(@RequestBody InfoBlqW infoBlqW) {
        return ResponseEntity.ok(infoBlqWRepository.save(infoBlqW));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getWeekBetween/{w1}-{w2}")
    public ResponseEntity<List<InfoBlqW>> findByWeekBetween(@PathVariable("w1") Long w1,@PathVariable("w2") Long w2) {
        return ResponseEntity.ok(infoBlqWRepository.findByWeekBetween(w1,w2));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<InfoBlqW> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        InfoBlqW infoBlqWLoaded = infoBlqWRepository.findById(id).get();
        if (infoBlqWLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        infoBlqWRepository.deleteById(id);
        return ResponseEntity.ok(infoBlqWLoaded);
    }
}
