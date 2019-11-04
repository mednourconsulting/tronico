package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ConfigOtdW;
import com.akveo.bundlejava.repository.ConfigOtdWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("configOtdW")
public class ConfigOtdWController {
    @Autowired
    private ConfigOtdWRepository configconfigOtdWRepository;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findByYear/{year}-{atelier}")
    public ResponseEntity<ConfigOtdW> findByYear(@PathVariable("year") Long year, @PathVariable("atelier") String atelier) {
        return ResponseEntity.ok(configconfigOtdWRepository.findByYearAndAtelier(year, atelier));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ConfigOtdW>> getAll() {
        return ResponseEntity.ok(configconfigOtdWRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    @Transactional
    public ResponseEntity<ConfigOtdW> createConfigOtdW(@RequestBody ConfigOtdW configOtdW) {
        configconfigOtdWRepository.deleteConfigOtdWByYearAndAtelier(Long.valueOf(Calendar.getInstance().get(Calendar.YEAR)), configOtdW.getAtelier());
        return ResponseEntity.ok(configconfigOtdWRepository.save(configOtdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ConfigOtdW> updateConfigOtdW(@RequestBody ConfigOtdW configOtdW) {
        return ResponseEntity.ok(configconfigOtdWRepository.save(configOtdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ConfigOtdW> deleteConfigOtdW(@PathVariable("id") Long id) {
        ConfigOtdW configOtdWLoaded = configconfigOtdWRepository.findById(id).get();
        if (configOtdWLoaded==null){
            System.out.println("NOT FOUND");
        }
        configconfigOtdWRepository.deleteById(id);
        return ResponseEntity.ok(configOtdWLoaded);
    }
}
