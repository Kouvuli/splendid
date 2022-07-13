package com.example.server.repositories;

import com.example.server.models.Reaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReactionRepository extends JpaRepository<Reaction,Integer> {
}
