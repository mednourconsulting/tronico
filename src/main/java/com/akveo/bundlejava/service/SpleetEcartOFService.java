package com.akveo.bundlejava.service;


import com.akveo.bundlejava.model.SpleetEcartOF;
import com.akveo.bundlejava.repository.SpleetEcartOFRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpleetEcartOFService {

    @Autowired
    private SpleetEcartOFRepository  spleetEcartOFRepository;

    public SpleetEcartOF updateSpleetEcartOF(Long id, SpleetEcartOF spleetEcartOF){
        SpleetEcartOF spleetEcartOFLoaded=spleetEcartOFRepository.findById(id).get();
        if (spleetEcartOFLoaded==null){
            System.out.println("********* SPLEET ECART NOT FOUND");
            return null;
        }
        spleetEcartOFLoaded.setLot(spleetEcartOF.getLot());
        spleetEcartOFLoaded.setDescProduit(spleetEcartOF.getDescProduit());
        spleetEcartOFLoaded.setnClient(spleetEcartOF.getnClient());
        spleetEcartOFLoaded.setComment(spleetEcartOF.getComment());
        spleetEcartOFLoaded.setNewTips(spleetEcartOF.getNewTips());
        spleetEcartOFRepository.save(spleetEcartOFLoaded);
        return spleetEcartOFLoaded;
    }

    public SpleetEcartOF deleteById(Long id){
        SpleetEcartOF spleetEcartOFLoaded=spleetEcartOFRepository.findById(id).get();
        if (spleetEcartOFLoaded==null){
            System.out.println("SPLEET ECART NOT FOUND");
            return null;
        }
        spleetEcartOFRepository.deleteById(id);
        return spleetEcartOFLoaded;
    }
}
