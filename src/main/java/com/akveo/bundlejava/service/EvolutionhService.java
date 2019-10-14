package com.akveo.bundlejava.service;


import com.akveo.bundlejava.charts.EvolutionhChartData;
import com.akveo.bundlejava.model.Evolutionh;
import com.akveo.bundlejava.repository.EvolutionhRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EvolutionhService {
    @Autowired
    private EvolutionhRepository evolutionhRepository;

    public Evolutionh updateEvolutionh(Long id, Evolutionh evolutionh) {
        Evolutionh evolutionhLoaded = evolutionhRepository.findById(id).get();
        if (evolutionhLoaded == null) {
            System.out.println("******** Not FOUND");
            return null;
        }
        evolutionhLoaded.setYear(evolutionh.getYear());
        evolutionhLoaded.setWeek(evolutionh.getWeek());
        evolutionhLoaded.setBudjet(evolutionh.getBudjet());
        evolutionhLoaded.setEcart(evolutionh.getEcart());
        evolutionhLoaded.setFacture(evolutionh.getFacture());
        evolutionhLoaded.setHeuresCDE(evolutionh.getHeuresPrevus());
        evolutionhLoaded.setHeuresPrevus(evolutionh.getHeuresPrevus());
        evolutionhRepository.save(evolutionhLoaded);
        return evolutionhLoaded;
    }

    public List<Evolutionh> saveList(List<Evolutionh> evolutionhs) {
        for (Evolutionh evolutionh : evolutionhs) {
            updateEvolutionh(evolutionh.getId(), evolutionh);
        }
        return evolutionhRepository.findAll();
    }

    public Evolutionh deleteById(Long id) {
        Evolutionh evolutionhLoaded = evolutionhRepository.findById(id).get();
        if (evolutionhLoaded == null) {
            System.out.println("******* EVOLUTION H NOT FOUND");
            return null;
        }
        evolutionhRepository.deleteById(id);
        return evolutionhLoaded;
    }

    public EvolutionhChartData getChartData(Long year) {
        Double totalBudjet = 0D;
        Integer totalHeuresCDE = Integer.valueOf(0);
        Integer totalHeuresPrevus = Integer.valueOf(0);
        Double totalFacture = 0D;
        Double totalEcart = 0D;
        EvolutionhChartData evolutionhChartData = new EvolutionhChartData();
        List<Evolutionh> evhByYear = evolutionhRepository.findByYear(year);
        if (evhByYear == null) {
            System.out.println("NO DATA FOR THIS YEAR");
        }
        for (Evolutionh evolutionh : evhByYear) {
            totalBudjet += evolutionh.getBudjet();
            totalHeuresCDE += evolutionh.getHeuresCDE();
            totalHeuresPrevus += evolutionh.getHeuresPrevus();
            totalFacture += evolutionh.getFacture();
            totalEcart += evolutionh.getEcart();
        }
        evolutionhChartData.setTotalBudjet(totalBudjet);
        evolutionhChartData.setTotalHeuresCDE(totalHeuresCDE);
        evolutionhChartData.setTotalHeuresPrevus(totalHeuresPrevus);
        evolutionhChartData.setTotalFacture(totalFacture);
        evolutionhChartData.setTotalEcart(totalEcart);
        return evolutionhChartData;
    }
}
