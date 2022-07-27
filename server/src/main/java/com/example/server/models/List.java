package com.example.server.models;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
@Table(name = "LIST")
public class List {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @Column(name="mal_id")
    private Integer malId;

    @Column(name = "mal_type")
    private String malType;

    @Column(name = "mal_title")
    private String malTitle;

    @Column(name = "type")
    private String type;

    @Column(name = "create_at")
    private Timestamp createAt;


    public List() {

    }

    public List(Integer id, User user, Integer malId, String malType, String malTitle, String type, Timestamp createAt) {
        this.id = id;
        this.user = user;
        this.malId = malId;
        this.malType = malType;
        this.malTitle = malTitle;
        this.type = type;
        this.createAt = createAt;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }

    public Integer getMalId() {
        return malId;
    }

    public void setMalId(Integer malId) {
        this.malId = malId;
    }

    public String getMalType() {
        return malType;
    }

    public void setMalType(String malType) {
        this.malType = malType;
    }

    public String getMalTitle() {
        return malTitle;
    }

    public void setMalTitle(String malTitle) {
        this.malTitle = malTitle;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
