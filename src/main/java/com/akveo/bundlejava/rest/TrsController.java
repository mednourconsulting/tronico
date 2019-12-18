package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.TrsCMS;
import com.akveo.bundlejava.repository.TraRepository;
import com.akveo.bundlejava.repository.TrsTrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trs")
@CrossOrigin("*")
public class TrsController {
    @Autowired
    private TrsTrepository trsTrepository;

    @GetMapping(value = "/getAll/{year}")
    public ResponseEntity<List<TrsCMS>> getAll(@PathVariable("year") Long year){
        return ResponseEntity.ok(trsTrepository.findByYear(year));
    }

    @PostMapping(value = "/create")
    public ResponseEntity<TrsCMS> create(@RequestBody TrsCMS trsCMS){
        return ResponseEntity.ok(trsTrepository.save(trsCMS));
    }

    @PutMapping(value = "/update")
    public ResponseEntity<TrsCMS> update(@RequestBody TrsCMS trsCMS){
        return ResponseEntity.ok(trsTrepository.save(trsCMS));
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<TrsCMS> delete(@PathVariable("id") Long id){
        TrsCMS trsCMSLoaded=trsTrepository.findById(id).get();
        if (trsCMSLoaded==null){
            return (ResponseEntity<TrsCMS>) ResponseEntity.status(404);
        }
        trsTrepository.delete(trsCMSLoaded);
        return ResponseEntity.ok(trsCMSLoaded);
    }
}
