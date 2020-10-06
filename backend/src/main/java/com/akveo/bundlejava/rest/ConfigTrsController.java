package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ConfigTrs;
import com.akveo.bundlejava.repository.ConfigTrsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;

@CrossOrigin("*")
@RestController
@RequestMapping("/configTrs")
public class ConfigTrsController {
    @Autowired
    private ConfigTrsRepository configTrsRepository;
    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping(value = "/create")
    @Transactional
    public ResponseEntity<ConfigTrs> create(@RequestBody ConfigTrs configTrs) {
        configTrsRepository.deleteConfigTrsByYear(Long.valueOf(Calendar.getInstance().get(Calendar.YEAR)));
        return ResponseEntity.ok(configTrsRepository.save(configTrs));
    }
    @GetMapping(value = "/getObjectifByYear/{year}")
    public ResponseEntity<ConfigTrs> getConfigTrsByYear(@PathVariable("year") Long year) {
        return ResponseEntity.ok(configTrsRepository.findByYear(year));
    }
}
