package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ConfigOtdW;
import com.akveo.bundlejava.repository.ConfigOtdWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("configOtdW")
public class ConfigOtdWController {
    @Autowired
    private ConfigOtdWRepository configOtdWRepository;

    @GetMapping("/getAll")
    public ResponseEntity<List<ConfigOtdW>> getAll() {
        return ResponseEntity.ok(configOtdWRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<ConfigOtdW> findByYear(@PathVariable("atelier") String atelier , @PathVariable("year") Long year ) {
        return ResponseEntity.ok(configOtdWRepository.findByYearAndAtelier(year,atelier));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ConfigOtdW> createProduit(@RequestBody ConfigOtdW configOtdW){
        return ResponseEntity.ok(configOtdWRepository.save(configOtdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ConfigOtdW> updateConfigOtdW(@RequestBody ConfigOtdW configOtdW) {
        return ResponseEntity.ok(configOtdWRepository.save(configOtdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ConfigOtdW> deleteConfigOtdW(@PathVariable("id") Long id) {
        ConfigOtdW configOtdWLoaded = configOtdWRepository.findById(id).get();
        if (configOtdWLoaded==null){
            System.out.println("NOT FOUND");
        }
        configOtdWRepository.deleteById(id);
        return ResponseEntity.ok(configOtdWLoaded);
    }
}
