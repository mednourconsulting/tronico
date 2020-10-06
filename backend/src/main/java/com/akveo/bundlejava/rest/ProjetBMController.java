package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ProjetBM;
import com.akveo.bundlejava.model.RealisationW;
import com.akveo.bundlejava.repository.ProjetBMRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("projetBM")
public class ProjetBMController {
    @Autowired
    private ProjetBMRepository projetBMRepository;

    @GetMapping("/getAll")
    public ResponseEntity<List<ProjetBM>> getAll() {
        return ResponseEntity.ok(projetBMRepository.findAll());
    }

    @GetMapping("/getByYearAndWeekBetween/{year}-{weekMin}-{weekMax}")
    public ResponseEntity<List<ProjetBM>> getByYearAndWeekBetween(@PathVariable("year") Long year,
                                                                  @PathVariable("weekMin") Long weekMin,
                                                                  @PathVariable("weekMax") Long weekMax
    ) {
        return ResponseEntity.ok(projetBMRepository.findByYearAndStartsAtBetween(year, weekMin, weekMax));
    }

    @PostMapping("/create")
    public ResponseEntity<ProjetBM> createSpleetEcartOF(@RequestBody ProjetBM projetBM) {
        return ResponseEntity.ok(projetBMRepository.save(projetBM));
    }

    @PutMapping("/update")
    public ResponseEntity<ProjetBM> updateSpleetEcartOF(@RequestBody ProjetBM projetBM) {
        return ResponseEntity.ok(projetBMRepository.save(projetBM));
    }
}
