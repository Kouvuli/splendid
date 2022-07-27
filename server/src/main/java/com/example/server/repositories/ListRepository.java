package com.example.server.repositories;

import com.example.server.models.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ListRepository extends JpaRepository<List,Integer> {
    public List findByMalIdAndAndUserIdAndAndMalType(Integer malId,Integer userId,String malType);
}
