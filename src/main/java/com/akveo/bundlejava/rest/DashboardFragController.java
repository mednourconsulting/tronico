package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.DashboardFrag;
import com.akveo.bundlejava.model.Tra;
import com.akveo.bundlejava.repository.DashboardFragRepository;
import com.akveo.bundlejava.service.DashboardFragService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("dashboardFrag")
public class DashboardFragController {
    @Autowired
    private DashboardFragRepository dashboardFragRepository;
    @Autowired
    private DashboardFragService dashboardFragService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<DashboardFrag>> getAll() {
        return ResponseEntity.ok(dashboardFragRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getByAtelier/{atelier}-{year}-{week}")
    public ResponseEntity<DashboardFrag> getByAtelier(@PathVariable("atelier") String atelier,
                                                      @PathVariable("week") Long week,
                                                      @PathVariable("year") Long year) {
        return ResponseEntity.ok(dashboardFragRepository.findDashboardFragByAtelierAndYearAndWeek(atelier, year, week));
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getTra/{atelier1}-{atelier2}-{year}-{week}")
    public ResponseEntity<Tra> getTra(@PathVariable("atelier1") String atelier1,
                                      @PathVariable("atelier2") String atelier2,
                                      @PathVariable("year") Long year,
                                      @PathVariable("week") Long week
    ){
        return ResponseEntity.ok(dashboardFragService.getTra(atelier1,atelier2,year,week));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping("/create")
    public ResponseEntity<DashboardFrag> createDashboardFrag(@RequestBody DashboardFrag dashboardFrag) {
        return ResponseEntity.ok(dashboardFragRepository.save(dashboardFrag));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<DashboardFrag> updateDashboardFrag(@RequestBody DashboardFrag dashboardFrag) {
        return ResponseEntity.ok(dashboardFragRepository.save(dashboardFrag));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<DashboardFrag> deleteDashboardFrag(@PathVariable("id") Long id) {
        DashboardFrag dashboardFragLoaded = dashboardFragRepository.findById(id).get();
        if (dashboardFragLoaded == null) {
            System.out.println("NOT FOUND");
        }
        dashboardFragRepository.deleteById(id);
        return ResponseEntity.ok(dashboardFragLoaded);
    }
}
