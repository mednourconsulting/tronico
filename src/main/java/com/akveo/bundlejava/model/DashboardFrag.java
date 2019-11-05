package com.akveo.bundlejava.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class DashboardFrag implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long year;
    private Long week;
    private String atelier;
    private Long hRecusTrf = Long.valueOf(0);
    private Long hObjectif = Long.valueOf(0);
    private Long hRealise = Long.valueOf(0);
    private Long nBCarteEngage = Long.valueOf(0);
    private Long nBCarteRetard = Long.valueOf(0);
    private Double otd = new Double(0);
    //-------------------------
    private Long mqtTrf = Long.valueOf(0);
    private Long mqtTa = Long.valueOf(0);
    private Long qualite = Long.valueOf(0);
    private Long pcd = Long.valueOf(0);
    private Long test = Long.valueOf(0);
    private Long bloqueDossier = Long.valueOf(0);
    private Long maintenance = Long.valueOf(0);
    private Long processOutillage = Long.valueOf(0);
    private Long retardProduction = Long.valueOf(0);
    private Long ecartStock = Long.valueOf(0);
    private Long attenteInfoClient = Long.valueOf(0);
    private Long repporterSuiteDeClient = Long.valueOf(0);
    //--------------------------
    private Long encours = Long.valueOf(0);
    private Long netFabricable = Long.valueOf(0);
    private Long enTransit = Long.valueOf(0);
    private Long monquantTa = Long.valueOf(0);
    private Long clientMqtFc = Long.valueOf(0);
    private Long qualiteEncours = Long.valueOf(0);
    private Long aqf = Long.valueOf(0);
    private Long processDossierTra = Long.valueOf(0);
    private Long testEncours = Long.valueOf(0);
    private Long machine = Long.valueOf(0);
    private Long finisAttRiClient = Long.valueOf(0);
    private Long finisReportDelai = Long.valueOf(0);
    //-------------------------------
    private Long mqecartStock = Long.valueOf(0);
    private Long mqRuptEtConsom = Long.valueOf(0);
    ///--------------------------------------
    private Long hPrevus = Long.valueOf(0);
    private Long dontRetard = Long.valueOf(0);
    private Long fabricable = Long.valueOf(0);
    private Long volumeFabricableCms = Long.valueOf(0);
    private Double fabricableEncours = Double.valueOf(0);
    private Long previsions = Long.valueOf(0);
    //----------------------------
    private Long besoinEtp = Long.valueOf(0);
    private Long etpDispo = Long.valueOf(0);
    private Long effectifPlus = Long.valueOf(0);
    //-------------------
    private Long heuresFormation = Long.valueOf(0);
    private Long heuresAmelioration = Long.valueOf(0);

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getWeek() {
        return week;
    }

    public void setWeek(Long week) {
        this.week = week;
    }

    public String getAtelier() {
        return atelier;
    }

    public void setAtelier(String atelier) {
        this.atelier = atelier;
    }

    public Long gethRecusTrf() {
        return hRecusTrf;
    }

    public void sethRecusTrf(Long hRecusTrf) {
        this.hRecusTrf = hRecusTrf;
    }

    public Long gethObjectif() {
        return hObjectif;
    }

    public void sethObjectif(Long hObjectif) {
        this.hObjectif = hObjectif;
    }

    public Long gethRealise() {
        return hRealise;
    }

    public void sethRealise(Long hRealise) {
        this.hRealise = hRealise;
    }

    public Long getnBCarteEngage() {
        return nBCarteEngage;
    }

    public void setnBCarteEngage(Long nBCarteEngage) {
        this.nBCarteEngage = nBCarteEngage;
    }

    public Long getnBCarteRetard() {
        return nBCarteRetard;
    }

    public void setnBCarteRetard(Long nBCarteRetard) {
        this.nBCarteRetard = nBCarteRetard;
    }

    public Double getOtd() {
        return otd;
    }

    public void setOtd(Double otd) {
        this.otd = otd;
    }

    public Long getMqtTrf() {
        return mqtTrf;
    }

    public void setMqtTrf(Long mqtTrf) {
        this.mqtTrf = mqtTrf;
    }

    public Long getMqtTa() {
        return mqtTa;
    }

    public void setMqtTa(Long mqtTa) {
        this.mqtTa = mqtTa;
    }

    public Long getQualite() {
        return qualite;
    }

    public void setQualite(Long qualite) {
        this.qualite = qualite;
    }

    public Long getPcd() {
        return pcd;
    }

    public void setPcd(Long pcd) {
        this.pcd = pcd;
    }

    public Long getTest() {
        return test;
    }

    public void setTest(Long test) {
        this.test = test;
    }

    public Long getBloqueDossier() {
        return bloqueDossier;
    }

    public void setBloqueDossier(Long bloqueDossier) {
        this.bloqueDossier = bloqueDossier;
    }

    public Long getMaintenance() {
        return maintenance;
    }

    public void setMaintenance(Long maintenance) {
        this.maintenance = maintenance;
    }

    public Long getProcessOutillage() {
        return processOutillage;
    }

    public void setProcessOutillage(Long processOutillage) {
        this.processOutillage = processOutillage;
    }

    public Long getRetardProduction() {
        return retardProduction;
    }

    public void setRetardProduction(Long retardProduction) {
        this.retardProduction = retardProduction;
    }

    public Long getEcartStock() {
        return ecartStock;
    }

    public void setEcartStock(Long ecartStock) {
        this.ecartStock = ecartStock;
    }

    public Long getAttenteInfoClient() {
        return attenteInfoClient;
    }

    public void setAttenteInfoClient(Long attenteInfoClient) {
        this.attenteInfoClient = attenteInfoClient;
    }

    public Long getRepporterSuiteDeClient() {
        return repporterSuiteDeClient;
    }

    public void setRepporterSuiteDeClient(Long repporterSuiteDeClient) {
        this.repporterSuiteDeClient = repporterSuiteDeClient;
    }

    public Long getNetFabricable() {
        return netFabricable;
    }

    public void setNetFabricable(Long netFabricable) {
        this.netFabricable = netFabricable;
    }

    public Long getEnTransit() {
        return enTransit;
    }

    public void setEnTransit(Long enTransit) {
        this.enTransit = enTransit;
    }

    public Long getMonquantTa() {
        return monquantTa;
    }

    public void setMonquantTa(Long monquantTa) {
        this.monquantTa = monquantTa;
    }

    public Long getClientMqtFc() {
        return clientMqtFc;
    }

    public void setClientMqtFc(Long clientMqtFc) {
        this.clientMqtFc = clientMqtFc;
    }

    public Long getQualiteEncours() {
        return qualiteEncours;
    }

    public void setQualiteEncours(Long qualiteEncours) {
        this.qualiteEncours = qualiteEncours;
    }

    public Long getAqf() {
        return aqf;
    }

    public void setAqf(Long aqf) {
        this.aqf = aqf;
    }

    public Long getProcessDossierTra() {
        return processDossierTra;
    }

    public void setProcessDossierTra(Long processDossierTra) {
        this.processDossierTra = processDossierTra;
    }

    public Long getTestEncours() {
        return testEncours;
    }

    public void setTestEncours(Long testEncours) {
        this.testEncours = testEncours;
    }

    public Long getMachine() {
        return machine;
    }

    public void setMachine(Long machine) {
        this.machine = machine;
    }

    public Long getFinisAttRiClient() {
        return finisAttRiClient;
    }

    public void setFinisAttRiClient(Long finisAttRiClient) {
        this.finisAttRiClient = finisAttRiClient;
    }

    public Long getFinisReportDelai() {
        return finisReportDelai;
    }

    public void setFinisReportDelai(Long finisReportDelai) {
        this.finisReportDelai = finisReportDelai;
    }

    public Long getMqecartStock() {
        return mqecartStock;
    }

    public void setMqecartStock(Long mqecartStock) {
        this.mqecartStock = mqecartStock;
    }

    public Long getMqRuptEtConsom() {
        return mqRuptEtConsom;
    }

    public void setMqRuptEtConsom(Long mqRuptEtConsom) {
        this.mqRuptEtConsom = mqRuptEtConsom;
    }

    public Long gethPrevus() {
        return hPrevus;
    }

    public void sethPrevus(Long hPrevus) {
        this.hPrevus = hPrevus;
    }

    public Long getDontRetard() {
        return dontRetard;
    }

    public void setDontRetard(Long dontRetard) {
        this.dontRetard = dontRetard;
    }

    public Long getFabricable() {
        return fabricable;
    }

    public void setFabricable(Long fabricable) {
        this.fabricable = fabricable;
    }

    public Long getVolumeFabricableCms() {
        return volumeFabricableCms;
    }

    public void setVolumeFabricableCms(Long volumeFabricableCms) {
        this.volumeFabricableCms = volumeFabricableCms;
    }

    public Double getFabricableEncours() {
        return fabricableEncours;
    }

    public void setFabricableEncours(Double fabricableEncours) {
        this.fabricableEncours = fabricableEncours;
    }

    public Long getPrevisions() {
        return previsions;
    }

    public void setPrevisions(Long previsions) {
        this.previsions = previsions;
    }

    public Long getBesoinEtp() {
        return besoinEtp;
    }

    public void setBesoinEtp(Long besoinEtp) {
        this.besoinEtp = besoinEtp;
    }

    public Long getEtpDispo() {
        return etpDispo;
    }

    public void setEtpDispo(Long etpDispo) {
        this.etpDispo = etpDispo;
    }

    public Long getEffectifPlus() {
        return effectifPlus;
    }

    public void setEffectifPlus(Long effectifPlus) {
        this.effectifPlus = effectifPlus;
    }

    public Long getHeuresFormation() {
        return heuresFormation;
    }

    public void setHeuresFormation(Long heuresFormation) {
        this.heuresFormation = heuresFormation;
    }

    public Long getHeuresAmelioration() {
        return heuresAmelioration;
    }

    public void setHeuresAmelioration(Long heuresAmelioration) {
        this.heuresAmelioration = heuresAmelioration;
    }
}
