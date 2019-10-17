package com.akveo.bundlejava.service;

import com.akveo.bundlejava.charts.PcdWeekChartData;
import com.akveo.bundlejava.model.PcdWeek;
import com.akveo.bundlejava.repository.PcdWeekRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PcdWeekService {
    @Autowired
    private PcdWeekRepository pcdWeekRepository;

    public PcdWeekChartData getChartData(Long year) {
        Double totalPcdEuro = 0D;
        Double totalPcdQte = 0D;
        Double totalEcartEuro = 0D;
        Double totalEcartQte = 0D;
        List<PcdWeek> pcdWeeks = pcdWeekRepository.findByYear(year);
        if (pcdWeeks == null) {
            System.out.println("NO DATA FOUND");
            return null;
        }
        for (PcdWeek pcdWeek : pcdWeeks) {
            totalPcdEuro += pcdWeek.getPcdEuro();
            totalEcartEuro += pcdWeek.getPcdEuro();
            totalPcdQte += pcdWeek.getPcdQte();
            totalEcartQte += pcdWeek.getEcartEuro();
        }
        PcdWeekChartData pcdWeekChartData = new PcdWeekChartData(totalPcdEuro, totalPcdQte, totalEcartEuro, totalEcartQte);
        return pcdWeekChartData;
    }
}
