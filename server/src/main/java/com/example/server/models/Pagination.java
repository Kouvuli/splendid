package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Pagination {


    private int lastVisiblePage;


    private boolean hasNextPage;


    private int currentPage;

    private int limit;

    public Pagination() {
    }

    public Pagination(int lastVisiblePage, boolean hasNextPage, int currentPage, int limit) {
        this.lastVisiblePage = lastVisiblePage;
        this.hasNextPage = hasNextPage;
        this.currentPage = currentPage;
        this.limit = limit;
    }

    public int getLastVisiblePage() {
        return lastVisiblePage;
    }

    public void setLastVisiblePage(int lastVisiblePage) {
        this.lastVisiblePage = lastVisiblePage;
    }

    public boolean isHasNextPage() {
        return hasNextPage;
    }

    public void setHasNextPage(boolean hasNextPage) {
        this.hasNextPage = hasNextPage;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }
}
