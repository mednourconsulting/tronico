package com.akveo.bundlejava.charts;

public class MqTrfEiffelVauban {
    private String semaine;
    private Long mqTrfEiffel = Long.valueOf(0);
    private Long mqTrfVauban = Long.valueOf(0);

    public String getSemaine() {
        return semaine;
    }

    public void setSemaine(String semaine) {
        this.semaine = semaine;
    }

    public Long getMqTrfEiffel() {
        return mqTrfEiffel;
    }

    public void setMqTrfEiffel(Long mqTrfEiffel) {
        this.mqTrfEiffel = mqTrfEiffel;
    }

    public Long getMqTrfVauban() {
        return mqTrfVauban;
    }

    public void setMqTrfVauban(Long mqTrfVauban) {
        this.mqTrfVauban = mqTrfVauban;
    }
}
