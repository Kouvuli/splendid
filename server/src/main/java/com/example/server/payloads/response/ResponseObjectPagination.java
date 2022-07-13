package com.example.server.payloads.response;

import com.example.server.models.Pagination;

public class ResponseObjectPagination {


    private Pagination pagination;

    private String status;
    private String message;
    private Object data;

    public ResponseObjectPagination(Pagination pagination, String status, String message, Object data) {
        this.pagination = pagination;
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public Pagination getPagination() {
        return pagination;
    }

    public void setPagination(Pagination pagination) {
        this.pagination = pagination;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
