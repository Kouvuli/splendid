package com.example.server.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.GeneratorType;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String content;

    @Column(name = "create_at")
    private Timestamp createAt;

    @OneToMany(mappedBy = "post")
    @JsonIgnore
    private Set<Comment> comments=new HashSet<>();

    @OneToMany(mappedBy = "post")
    @JsonIgnore
    private Set<Reaction> reactions=new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "author_id",referencedColumnName = "id")
    private User author;

    private String title;

    public Post(int id, String content, Timestamp createAt, User author, String title) {
        this.id = id;
        this.content = content;
        this.createAt = createAt;
        this.author = author;
        this.title = title;
    }

    public Post() {}

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

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


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Set<Reaction> getReactions() {
        return reactions;
    }

    public void setReactions(Set<Reaction> reactions) {
        this.reactions = reactions;
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createAt=" + createAt +
                ", comments=" + comments +
                ", reactions=" + reactions +
                ", author=" + author+
                ", title='" + title + '\'' +
                '}';
    }
}
