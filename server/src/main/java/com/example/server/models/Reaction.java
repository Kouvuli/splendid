package com.example.server.models;


import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Reaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "create_at")
    private Timestamp createAt;

    @Column(name = "author_id")
    private int authorId;

    @Column(name = "post_id")
    private int postId;

    @Column(name = "comment_id")
    private int commentId;

    public Reaction() {
    }

    public Reaction(int id, Timestamp createAt, int authorId, int postId, int commentId) {
        this.id = id;
        this.createAt = createAt;
        this.authorId = authorId;
        this.postId = postId;
        this.commentId = commentId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getCreateAt() {
        return createAt;
    }

    public void setCreateAt(Timestamp createAt) {
        this.createAt = createAt;
    }

    public int getAuthorId() {
        return authorId;
    }

    public void setAuthorId(int authorId) {
        this.authorId = authorId;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }
}
