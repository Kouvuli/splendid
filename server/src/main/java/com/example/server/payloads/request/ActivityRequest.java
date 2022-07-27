package com.example.server.payloads.request;

import org.springframework.lang.Nullable;

import javax.validation.constraints.NotBlank;

public class ActivityRequest {
    @NotBlank
    private Integer authorId;

    @Nullable
    private Integer page;

    @Nullable
    private Integer limit;

    public ActivityRequest() {
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getLimit() {
        return limit;
    }

    public void setLimit(Integer limit) {
        this.limit = limit;
    }
}
