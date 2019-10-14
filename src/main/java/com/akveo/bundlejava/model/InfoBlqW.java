package com.akveo.bundlejava.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Calendar;

@Entity
public class InfoBlqW implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long week;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));
    private String fmq;
    private String sbs1;
    private String sbs2;
    private String sbs3;
    private String sbs4;
    private String sbs5;
    private String sbs6;

    public InfoBlqW() {
    }

    public InfoBlqW(Long week, Long year, String fmq, String sbs1, String sbs2, String sbs3, String sbs4, String sbs5, String sbs6) {
        this.week = week;
        this.year = year;
        this.fmq = fmq;
        this.sbs1 = sbs1;
        this.sbs2 = sbs2;
        this.sbs3 = sbs3;
        this.sbs4 = sbs4;
        this.sbs5 = sbs5;
        this.sbs6 = sbs6;
    }

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

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public String getFmq() {
        return fmq;
    }

    public void setFmq(String fmq) {
        this.fmq = fmq;
    }

    public String getSbs1() {
        return sbs1;
    }

    public void setSbs1(String sbs1) {
        this.sbs1 = sbs1;
    }

    public String getSbs2() {
        return sbs2;
    }

    public void setSbs2(String sbs2) {
        this.sbs2 = sbs2;
    }

    public String getSbs3() {
        return sbs3;
    }

    public void setSbs3(String sbs3) {
        this.sbs3 = sbs3;
    }

    public String getSbs4() {
        return sbs4;
    }

    public void setSbs4(String sbs4) {
        this.sbs4 = sbs4;
    }

    public String getSbs5() {
        return sbs5;
    }

    public void setSbs5(String sbs5) {
        this.sbs5 = sbs5;
    }

    public String getSbs6() {
        return sbs6;
    }

    public void setSbs6(String sbs6) {
        this.sbs6 = sbs6;
    }

    @Override
    public String toString() {
        return "InfoBlqW{" +
                "id=" + id +
                ", week=" + week +
                ", year=" + year +
                ", fmq='" + fmq + '\'' +
                ", sbs1='" + sbs1 + '\'' +
                ", sbs2='" + sbs2 + '\'' +
                ", sbs3='" + sbs3 + '\'' +
                ", sbs4='" + sbs4 + '\'' +
                ", sbs5='" + sbs5 + '\'' +
                ", sbs6='" + sbs6 + '\'' +
                '}';
    }
}
