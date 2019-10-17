package com.akveo.bundlejava.service;

import com.akveo.bundlejava.charts.RealisationWChart;
import com.akveo.bundlejava.model.RealisationW;
import com.akveo.bundlejava.repository.RealisationWRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RealisationWService {
    @Autowired
    private RealisationWRepository realisationWRepository;

    public RealisationWChart getChartData(Long year) {
        Double totalRealisation = 0D;
        Double totalObjectif = 0D;
        Double totalEcart = 0D;

        List<RealisationW> realisationWS = realisationWRepository.findByYear(year);
        if (realisationWS == null) {
            System.out.println("DATA NOT FOUND");
            return new RealisationWChart();
        }
        for (RealisationW realisationW : realisationWS) {
            totalRealisation += realisationW.getHeuresRealise();
            totalObjectif += realisationW.getObjectif();
            totalEcart += realisationW.getEcart();
        }
        return new RealisationWChart(totalRealisation, totalObjectif, totalEcart);
    }
}
