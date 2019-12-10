package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ConfigTrs;
import com.akveo.bundlejava.repository.ConfigTrsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/configTrs")
public class ConfigTrsController {
    @Autowired
    private ConfigTrsRepository configTrsRepository;

    @PostMapping(value = "/create")
    public ResponseEntity<ConfigTrs> create(@RequestBody ConfigTrs configTrs) {
        ConfigTrs configTrsLoaded=configTrsRepository.findByYear(configTrs.getYear());
        if (configTrsLoaded ==null) {
            return ResponseEntity.ok(configTrsRepository.save(configTrs));
        }
        configTrsRepository.deleteByYear(configTrs.getYear());
        return ResponseEntity.ok(configTrsRepository.save(configTrs));
    }

    @GetMapping(value = "/getObjectifByYear/{year}")
    public ResponseEntity<ConfigTrs> getConfigTrsByYear(@PathVariable("year") Long year) {
        return ResponseEntity.ok(configTrsRepository.findByYear(year));
    }
}
