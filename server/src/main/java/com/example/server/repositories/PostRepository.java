package com.example.server.repositories;

import com.example.server.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Integer> {


    List<Post> findByAuthorId(Integer authorId);
}
