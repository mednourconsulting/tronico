package com.akveo.bundlejava.rest;

import com.akveo.bundlejava.charts.MqTrfEiffelVauban;
import com.akveo.bundlejava.model.DashboardFrag;
import com.akveo.bundlejava.model.Tra;
import com.akveo.bundlejava.repository.DashboardFragRepository;
import com.akveo.bundlejava.service.DashboardFragService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("dashboardFrag")
public class DashboardFragController {
    @Autowired
    private DashboardFragRepository dashboardFragRepository;
    @Autowired
    private DashboardFragService dashboardFragService;

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/get/{atelier}")
    public ResponseEntity<List<DashboardFrag>> get(@PathVariable("atelier") String atelier ) {
        return ResponseEntity.ok(dashboardFragRepository.findByAtelier(atelier));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getByAtelier/{atelier}-{year}-{week}")
    public ResponseEntity<DashboardFrag> getByAtelier(@PathVariable("atelier") String atelier,
                                                      @PathVariable("year") Long year,@PathVariable("week") Long week) {
        System.out.println("------------------"+ week);
        return ResponseEntity.ok(dashboardFragRepository.findByAtelierAndYearAndWeek(atelier, year, week));
    }

    @GetMapping("/getCurrentWeek")
    public ResponseEntity<Long> geCurrenttWeek() {
        // must contains just 6 elements - 1 element by atelier
        Calendar calendar = new GregorianCalendar();
        int week = calendar.get(GregorianCalendar.WEEK_OF_YEAR);
        return ResponseEntity.ok(Long.valueOf(week));
    }

    @GetMapping("/getByYearAndWeek/{year}-{week}")
    public ResponseEntity<List<DashboardFrag>> findByWeekAndYear(Long week, Long year) {
        // must contains just 6 elements - 1 element by atelier
        return ResponseEntity.ok(dashboardFragRepository.findDashboardFragByWeekAndYear(week, year));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getTra/{atelier1}/{atelier2}/{year}/{week}")
    public ResponseEntity<Tra> getTra(@PathVariable("atelier1") String atelier1,
                                      @PathVariable("atelier2") String atelier2,
                                      @PathVariable("year") Long year,
                                      @PathVariable("week") Long week
    ) {
        return ResponseEntity.ok(dashboardFragService.getTra(atelier1, atelier2, year, week));
    }
    //@PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getTra/{year}-{weekX}")
    public ResponseEntity<List<MqTrfEiffelVauban>> getMqTrfChart(@PathVariable("year") Long year,
                                                           @PathVariable("weekX") Long weekX
    ) {
        return ResponseEntity.ok(dashboardFragService.getChartDataMqTrf(weekX, year));
    }


    @PostMapping("/create")
    public ResponseEntity<DashboardFrag> createDashboardFrag(@RequestBody DashboardFrag dashboardFrag) {
        System.out.println("'---------------------------------'" + dashboardFrag);
        return ResponseEntity.ok(dashboardFragRepository.save(dashboardFrag));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/update")
    public ResponseEntity<DashboardFrag> updateDashboardFrag(@RequestBody DashboardFrag dashboardFrag) {
        return ResponseEntity.ok(dashboardFragRepository.save(dashboardFrag));
    }

    //@PreAuthorize("hasAuthority('ADMIN')")
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
