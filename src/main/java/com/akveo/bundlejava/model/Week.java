package com.akveo.bundlejava.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Calendar;

public class Week {
    @Id
    @GeneratedValue (strategy =  GenerationType.IDENTITY)
    private  Long id;
    private  String name;
    private Long year = Long.valueOf(Calendar.getInstance().get(Calendar.YEAR));

    public Week() {
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Week{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
