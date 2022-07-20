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

    @ManyToOne
    @JoinColumn(name = "author_id",referencedColumnName = "id")
    private User author;

    @ManyToOne
    @JoinColumn(name = "post_id",referencedColumnName = "id")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "comment_id",referencedColumnName = "id")
    private Comment comment;

    public Reaction() {
    }

    public Reaction(int id, Timestamp createAt, User author, Post post, Comment comment) {
        this.id = id;
        this.createAt = createAt;
        this.author = author;
        this.post = post;
        this.comment = comment;
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

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public Comment getComment() {
        return comment;
    }

    public void setComment(Comment comment) {
        this.comment = comment;
    }

    @Override
    public String toString() {
        return "Reaction{" +
                "id=" + id +
                ", createAt=" + createAt +
                ", author=" + author +
                ", post=" + post +
                ", comment=" + comment +
                '}';
    }
}
