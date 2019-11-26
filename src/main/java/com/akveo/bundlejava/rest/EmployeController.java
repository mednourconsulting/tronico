package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.Employe;
import com.akveo.bundlejava.repository.EmployeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employe")
@CrossOrigin("*")
public class EmployeController {
    @Autowired
    private  EmployeRepository employeRepository;

    @GetMapping("/getAll")
    public ResponseEntity<List<Employe>> getAll() {
        return ResponseEntity.ok(employeRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<Employe> createSpleetEcartOF(@RequestBody Employe employe) {
        return ResponseEntity.ok(employeRepository.save(employe));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<Employe> updateSpleetEcartOF(@RequestBody Employe employe) {
        return ResponseEntity.ok(employeRepository.save(employe));
    }



    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Employe> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        Employe employeLoaded = employeRepository.findById(id).get();
        if (employeLoaded==null){
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        employeRepository.deleteById(id);
        return ResponseEntity.ok(employeLoaded);
    }

}
