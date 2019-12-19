package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.TrsCMS;
import com.akveo.bundlejava.repository.TrsTrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/trs")
@CrossOrigin("*")
public class TrsController {
    @Autowired
    private TrsTrepository trsTrepository;


    @GetMapping(value = "/getAll")
    public ResponseEntity<List<TrsCMS>> getAll(){
        return ResponseEntity.ok(trsTrepository.findAll());
    }

    @PostMapping(value = "/create")
    public ResponseEntity<TrsCMS> create(@RequestBody TrsCMS trsCMS){
        System.out.println(trsCMS);
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
