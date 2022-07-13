package com.example.server.repositories;


import com.example.server.models.Reaction;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@Repository
public class ReactionCriteriaRepository {

    private final EntityManager entityManager;
    private final CriteriaBuilder cb;

    public ReactionCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        cb=entityManager.getCriteriaBuilder();
    }

    public Long getTargetCountByPostId(String postId){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<Reaction>  countRoot=countQuery.from(Reaction.class);
        Predicate predicate=cb.equal(countRoot.get("postId"),postId);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();

    }
    public long getTargetCountByCommentId(String commentId){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<Reaction>  countRoot=countQuery.from(Reaction.class);
        Predicate predicate=cb.equal(countRoot.get("commentId"),commentId);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();


    }

}
