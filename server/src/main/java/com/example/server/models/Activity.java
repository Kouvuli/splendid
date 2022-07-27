package com.example.server.models;

import java.sql.Timestamp;

public class Activity {


    private Integer id;

    private String type;

    private Timestamp createAt;

    private Object source;


    public Activity() {
    }

    public Activity(Integer id, String type, Timestamp createAt, Object source) {
        this.id = id;
        this.type = type;
        this.createAt = createAt;
        this.source = source;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }



    public Object getSource() {
        return source;
    }

    public void setSource(Object source) {
        this.source = source;
    }
}

