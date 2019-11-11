package com.akveo.bundlejava.service;

import com.akveo.bundlejava.model.DashboardFrag;
import com.akveo.bundlejava.model.Tra;
import com.akveo.bundlejava.repository.DashboardFragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardFragService {
    @Autowired
    private DashboardFragRepository dashboardFragRepository;

    public Tra getTra(Long year) {
        Tra tra = new Tra();
        List<DashboardFrag> list = dashboardFragRepository.findByYear(year);
        for (DashboardFrag dashboardFrag : list) {
            tra.setHeuresAmelioration(dashboardFrag.getHeuresAmelioration());
            // same thing above for all 46 variables
        }
        return tra;
    }
}
