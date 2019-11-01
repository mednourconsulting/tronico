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
}
