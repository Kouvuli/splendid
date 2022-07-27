package com.example.server.repositories;

import com.example.server.models.Post;
import com.example.server.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;


@Repository
public class UserCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder cb;

    public UserCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        cb=entityManager.getCriteriaBuilder();
    }

    public Page<User> findUserWithPagination(int page, int limit){
        CriteriaQuery<User> query=cb.createQuery(User.class);

        Root<User> root=query.from(User.class);


        TypedQuery<User> typedQuery=entityManager.createQuery(query.select(root));
        typedQuery.setFirstResult((page-1)*limit);
        typedQuery.setMaxResults(limit);


        Pageable pageable= PageRequest.of(page-1,limit);

        long postCount=getUserCount();
        return new PageImpl<>(typedQuery.getResultList(),pageable,postCount);
    }

    private long getUserCount(){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<User>  countRoot=countQuery.from(User.class);
        countQuery.select(cb.count(countRoot));
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
