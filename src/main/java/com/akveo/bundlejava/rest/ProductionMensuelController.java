package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.charts.ProductionMensuelChartData;
import com.akveo.bundlejava.model.ProductionMensuel;
import com.akveo.bundlejava.repository.ProductionMensuelRepository;
import com.akveo.bundlejava.service.ProductionMensuelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productionMensuel")
@CrossOrigin("*")
public class ProductionMensuelController {
    @Autowired
    private ProductionMensuelRepository productionMensuelRepository;
    @Autowired
    private ProductionMensuelService productionMensuelService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll/{atelier}/{year}")
    public ResponseEntity<List<ProductionMensuel>> getAll(@PathVariable String atelier , @PathVariable Long year) {
        return ResponseEntity.ok(productionMensuelRepository.findByAtelierAndYear(atelier , year));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<ProductionMensuel> createSpleetEcartOF(@RequestBody ProductionMensuel productionMensuel) {
        return ResponseEntity.ok(productionMensuelRepository.save(productionMensuel));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<ProductionMensuel> updateSpleetEcartOF(@RequestBody ProductionMensuel productionMensuel) {
        return ResponseEntity.ok(productionMensuelRepository.save(productionMensuel));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ProductionMensuel> deleteSpleetEcartOF(@PathVariable("id") Long id) {
        ProductionMensuel productionMensuelLoaded = productionMensuelRepository.findById(id).get();
        if (productionMensuelLoaded == null) {
            System.out.println("NOT FOUND");
            ResponseEntity.notFound();
        }
        productionMensuelRepository.deleteById(id);
        return ResponseEntity.ok(productionMensuelLoaded);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getChartData/{year}")
    public ResponseEntity<ProductionMensuelChartData> getChartData(@PathVariable("year") Long year) {
        System.out.println("+++++++++++++++++++++++++++++" + productionMensuelService.getChartData(year));
        return ResponseEntity.ok(productionMensuelService.getChartData(year));
    }
}
