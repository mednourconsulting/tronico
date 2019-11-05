package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.model.DashboardFrag;
import com.akveo.bundlejava.repository.DashboardFragRepository;
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

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getAll")
    public ResponseEntity<List<DashboardFrag>> getAll() {
        return ResponseEntity.ok(dashboardFragRepository.findAll());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getByAtelier/{atelier}-{week}-{year}")
    public ResponseEntity<DashboardFrag> getByAtelier(@PathVariable("atelier") String atelier,
                                                      @PathVariable("week") Long week,
                                                      @PathVariable("year") Long year) {
        return ResponseEntity.ok(dashboardFragRepository.findDashboardFragByAtelierAndYearAndWeek(atelier, year, week));
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
