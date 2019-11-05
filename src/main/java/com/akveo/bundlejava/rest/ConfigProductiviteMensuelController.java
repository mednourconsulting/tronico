package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.ConfigProductiviteMensuel;
import com.akveo.bundlejava.repository.ConfigProductiviteMensuelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("configProductiviteMensuel")
public class ConfigProductiviteMensuelController {
    @Autowired
    private ConfigProductiviteMensuelRepository configProductiviteMensuelRepository;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<ConfigProductiviteMensuel>> getAll() {
        return ResponseEntity.ok(configProductiviteMensuelRepository.findAll());
    }


    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/findByYear/{year}-{atelier}")
    public ResponseEntity<ConfigProductiviteMensuel> findByYear(@PathVariable("year") Long year, String atelier) {
        return ResponseEntity.ok(configProductiviteMensuelRepository.findByYearAndAtelier(year, atelier));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    @Transactional
    public ResponseEntity<ConfigProductiviteMensuel> createConfigProductiviteMensuel(@RequestBody ConfigProductiviteMensuel configProductiviteMensuel) {
        configProductiviteMensuelRepository.deleteConfigProductiviteMensuelByYearAndAtelier(Long.valueOf(Calendar.getInstance().get(Calendar.YEAR)), configProductiviteMensuel.getAtelier());
        return ResponseEntity.ok(configProductiviteMensuelRepository.save(configProductiviteMensuel));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ConfigProductiviteMensuel> updateConfigProductiviteMensuel(@RequestBody ConfigProductiviteMensuel configProductiviteMensuel) {
        return ResponseEntity.ok(configProductiviteMensuelRepository.save(configProductiviteMensuel));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ConfigProductiviteMensuel> deleteConfigProductiviteMensuel(@PathVariable("id") Long id) {
        ConfigProductiviteMensuel ConfigProductiviteMensuelLoaded = configProductiviteMensuelRepository.findById(id).get();
        if (ConfigProductiviteMensuelLoaded==null){
            System.out.println("NOT FOUND");
        }
        configProductiviteMensuelRepository.deleteById(id);
        return ResponseEntity.ok(ConfigProductiviteMensuelLoaded);
    }
}
