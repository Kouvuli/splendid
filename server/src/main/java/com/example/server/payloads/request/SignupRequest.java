package com.example.server.payloads.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class SignupRequest {


    private String dob;

    private String fullname;

    @NotBlank
    @Size(min = 3, max = 20)
    private String username;



    @NotBlank
    @Size(min = 6, max = 40)
    private String password;

    private boolean isAdmin;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public boolean isAdmin() {
        return isAdmin;
    }

    public void setAdmin(boolean admin) {
        isAdmin = admin;
    }
}
