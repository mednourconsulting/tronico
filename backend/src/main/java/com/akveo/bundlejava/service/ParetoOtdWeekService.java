package com.akveo.bundlejava.service;

import com.akveo.bundlejava.model.ParetoOtdWeek;
import com.akveo.bundlejava.model.ParetoOtdWeekItem;
import com.akveo.bundlejava.repository.ParetoOtdWeekItemRepository;
import com.akveo.bundlejava.repository.ParetoOtdWeekRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParetoOtdWeekService {

    @Autowired
    private ParetoOtdWeekItemRepository paretoOtdWeekItemRepository;
    @Autowired
    private ParetoOtdWeekRepository paretoOtdWeekRepository;

    public ParetoOtdWeek saveParetoOtdWeekWithItems(ParetoOtdWeek paretoOtdWeek){
        paretoOtdWeekRepository.save(paretoOtdWeek);
        for (ParetoOtdWeekItem paretoOtdWeekItem : paretoOtdWeek.getParetoOtdWeekItemList()){
            paretoOtdWeekItem.setParetoOtdWeek(paretoOtdWeek);
            paretoOtdWeekItemRepository.save(paretoOtdWeekItem);
        }
        return paretoOtdWeek;
    }
}
