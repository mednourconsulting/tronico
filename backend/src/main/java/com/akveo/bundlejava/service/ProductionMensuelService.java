package com.akveo.bundlejava.service;

import com.akveo.bundlejava.charts.ProductionMensuelChartData;
import com.akveo.bundlejava.model.ProductionMensuel;
import com.akveo.bundlejava.repository.ProductionMensuelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductionMensuelService {
    @Autowired
    private ProductionMensuelRepository productionMensuelRepository;

    public ProductionMensuelChartData getChartData(Long year) {
        Double totalProductivite = 0D;
        Double totalObjectif = 0D;
        Double totalEcart = 0D;
        List<ProductionMensuel> list = productionMensuelRepository.findByYearOrderByMonth(year);
        if (list == null) {
            System.out.println("NOT DTA for this year");
            return null;
        }
        for (ProductionMensuel productionMensuel : list) {
            totalProductivite += productionMensuel.getProductivite();
            totalObjectif += productionMensuel.getObjectif();
            totalEcart += productionMensuel.getEcart();
        }
        ProductionMensuelChartData productionMensuelChartData = new ProductionMensuelChartData(totalProductivite, totalObjectif, totalEcart);
        return productionMensuelChartData;
    }
}
