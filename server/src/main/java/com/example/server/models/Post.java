package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String content;

    @Column(name = "create_at")
    private Timestamp createAt;

    @Column(name = "author_id")
    private int authorId;

    private String title;

    public Post(int id, String content, Timestamp createAt, int authorId, String title) {
        this.id = id;
        this.content = content;
        this.createAt = createAt;
        this.authorId = authorId;
        this.title = title;
    }

    public Post() {}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createAt=" + createAt +
                ", authorId=" + authorId +
                ", title='" + title + '\'' +
                '}';
    }
}
