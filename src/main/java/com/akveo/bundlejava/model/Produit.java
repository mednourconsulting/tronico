package com.akveo.bundlejava.model;

import java.io.Serializable;

public class Produit implements Serializable {
    private Long id;
    private String desc;

    public Produit(Long id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

}
