package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ConfigPcdW;
import com.akveo.bundlejava.repository.ConfigPcdWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("configPcdW")
public class ConfigPcdWController {
    @Autowired
    private ConfigPcdWRepository configPcdWRepository;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ConfigPcdW>> getAll() {
        return ResponseEntity.ok(configPcdWRepository.findAll());
    }
    @PreAuthorize("hasAuthority('ADMIN')")

    @PostMapping("/create")
    public ResponseEntity<ConfigPcdW> createConfigPcdW(@RequestBody ConfigPcdW ConfigPcdW) {
        return ResponseEntity.ok(configPcdWRepository.save(ConfigPcdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ConfigPcdW> updateConfigPcdW(@RequestBody ConfigPcdW ConfigPcdW) {
        return ResponseEntity.ok(configPcdWRepository.save(ConfigPcdW));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ConfigPcdW> deleteConfigPcdW(@PathVariable("id") Long id) {
        ConfigPcdW ConfigPcdWLoaded = configPcdWRepository.findById(id).get();
        if (ConfigPcdWLoaded==null){
            System.out.println("NOT FOUND");
        }
        configPcdWRepository.deleteById(id);
        return ResponseEntity.ok(ConfigPcdWLoaded);
    }
}
