package com.akveo.bundlejava.service;

import com.akveo.bundlejava.charts.MqTrfEiffelVauban;
import com.akveo.bundlejava.model.DashboardFrag;
import com.akveo.bundlejava.model.Tra;
import com.akveo.bundlejava.repository.DashboardFragRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashboardFragService {
    @Autowired
    private DashboardFragRepository dashboardFragRepository;

    public Tra getTra(String atelier1, String atelier2, Long year, Long week) {
        Tra tra = new Tra();
        DashboardFrag frag1 = dashboardFragRepository.findByAtelierAndYearAndWeek(atelier1, year, week);
        DashboardFrag frag2 = dashboardFragRepository.findByAtelierAndYearAndWeek(atelier2, year, week);

        tra.sethRecusTrf(frag1.gethRecusTrf() + frag2.gethRecusTrf());
        tra.sethObjectif(frag1.gethObjectif() + frag2.gethObjectif());
        tra.sethRealise(frag1.gethRealise() + frag2.gethRealise());
        tra.setnBCarteEngage(frag1.getnBCarteEngage() + frag2.getnBCarteEngage());
        tra.setnBCarteRetard(frag1.getnBCarteRetard() + frag2.getnBCarteRetard());
        tra.setOtd(frag1.getOtd() + frag2.getOtd());
        //---------------------------------------
        tra.setMqtTrf(frag1.getMqtTrf() + frag2.getMqtTrf());
        tra.setMqtTa(frag1.getMqtTa() + frag2.getMqtTa());
        tra.setQualite(frag1.getQualite() + frag2.getQualite());
        tra.setPcd(frag1.getPcd() + frag2.getPcd());
        tra.setTest(frag1.getTest() + frag2.getTest());
        tra.setBloqueDossier(frag1.getBloqueDossier() + frag2.getBloqueDossier());
        tra.setMaintenance(frag1.getMaintenance() + frag2.getMaintenance());
        tra.setProcessOutillage(frag1.getProcessOutillage() + frag2.getProcessOutillage());
        tra.setRetardProduction(frag1.getRetardProduction() + frag2.getRetardProduction());
        tra.setEcartStock(frag1.getEcartStock() + frag2.getEcartStock());
        tra.setAttenteInfoClient(frag1.getAttenteInfoClient() + frag2.getAttenteInfoClient());
        tra.setRepporterSuiteDeClient(frag1.getRepporterSuiteDeClient() + frag2.getRepporterSuiteDeClient());
        //---------------------------------------------
        tra.setEncours(frag1.getEncours() + frag2.getEncours());
        tra.setNetFabricable(frag1.getNetFabricable() + frag2.getNetFabricable());
        tra.setEnTransit(frag1.getEnTransit() + frag2.getEnTransit());
        tra.setMonquantTa(frag1.getMonquantTa() + frag2.getMonquantTa());
        tra.setClientMqtFc(frag1.getClientMqtFc() + frag2.getClientMqtFc());
        tra.setQualiteEncours(frag1.getQualiteEncours() + frag2.getQualiteEncours());
        tra.setAqf(frag1.getAqf() + frag2.getAqf());
        tra.setProcessDossierTra(frag1.getProcessDossierTra() + frag2.getProcessDossierTra());
        tra.setTestEncours(frag1.getTestEncours() + frag2.getTestEncours());
        tra.setMachine(frag1.getMachine() + frag2.getMachine());
        tra.setFinisAttRiClient(frag1.getFinisAttRiClient() + frag2.getFinisAttRiClient());
        tra.setFinisReportDelai(frag1.getFinisReportDelai() + frag2.getFinisReportDelai());
        //-------------------------------------

        tra.setMqecartStock(frag1.getMqecartStock() + frag2.getMqecartStock());
        tra.setMqRuptEtConsom(frag1.getMqRuptEtConsom() + frag2.getMqRuptEtConsom());
        //------------------------------------------------
        tra.sethPrevus(frag1.gethPrevus() + frag2.gethPrevus());
        tra.setDontRetard(frag1.getDontRetard() + frag2.getDontRetard());
        tra.setFabricable(frag1.getFabricable() + frag2.getFabricable());
        tra.setVolumeFabricableCms(frag1.getVolumeFabricableCms() + frag2.getVolumeFabricableCms());
        tra.setFabricableEncours(frag1.getFabricableEncours() + frag2.getFabricableEncours());
        tra.setPrevisions(frag1.getPrevisions() + frag2.getPrevisions());
        //------------------------------------------
        tra.setBesoinEtp(frag1.getBesoinEtp() + frag2.getBesoinEtp());
        tra.setEtpDispo(frag1.getEtpDispo() + frag2.getEtpDispo());
        tra.setEffectifPlus(frag1.getEffectifPlus() + frag2.getEffectifPlus());
        //----------------------------------------
        tra.setHeuresFormation(frag1.getHeuresFormation() + frag2.getHeuresFormation());
        tra.setHeuresAmelioration(frag1.getHeuresAmelioration() + frag2.getHeuresAmelioration());
        //------------------------------------------

        return tra;
    }

    public List<MqTrfEiffelVauban> getChartDataMqTrf(Long weekX, Long year) {
        List<MqTrfEiffelVauban> mqTrfEiffelVaubans = new ArrayList<>();
        for (int i = 1; i <= weekX; i++) {
            MqTrfEiffelVauban mqTrfEiffelVauban = new MqTrfEiffelVauban();
            DashboardFrag fragVauban = dashboardFragRepository.findByAtelierAndYearAndWeek("vauban", year, Long.valueOf(i));
            DashboardFrag fragEiffel = dashboardFragRepository.findByAtelierAndYearAndWeek("eiffel", year, Long.valueOf(i));
            mqTrfEiffelVauban.setSemaine("Semaine " + i);
            mqTrfEiffelVauban.setMqTrfEiffel(fragEiffel.getMqtTrf());
            mqTrfEiffelVauban.setMqTrfVauban(fragVauban.getMqtTrf());
            mqTrfEiffelVaubans.add(mqTrfEiffelVauban);
        }
        return mqTrfEiffelVaubans;
    }
}
