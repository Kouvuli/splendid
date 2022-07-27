package com.example.server.repositories;

import com.example.server.models.Reaction;
import com.example.server.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ReactionRepository extends JpaRepository<Reaction,Integer> {
    List<Reaction> findByPostId(int postId);

    List<Reaction> findByCommentId(int commentId);

    List<Reaction> findByAuthorId(Integer authorId);
}
