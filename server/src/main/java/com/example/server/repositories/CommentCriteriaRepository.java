package com.example.server.repositories;

import com.example.server.models.Comment;
import com.example.server.models.Post;
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
public class CommentCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder cb;

    public CommentCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.cb = entityManager.getCriteriaBuilder();
    }
    public Page<Comment> findCommentWithFilterPagination(String postId, int page, int limit){
        CriteriaQuery<Comment> query=cb.createQuery(Comment.class);

        Root<Comment> root=query.from(Comment.class);
        List<Predicate> predicates=new ArrayList<>();
        if(postId!=null){
            predicates.add(cb.equal(root.get("post").get("id"),postId));
        }


        Predicate predicate=cb.and(predicates.toArray(new Predicate[0]));
        query.orderBy(cb.desc(root.get("createAt")));
        query.where(predicate);

        TypedQuery<Comment> typedQuery=entityManager.createQuery(query);
        typedQuery.setFirstResult((page-1)*limit);
        typedQuery.setMaxResults(limit);


        Pageable pageable= PageRequest.of(page-1,limit);

        long commentCount=getCommentCount(predicate);
        return new PageImpl<>(typedQuery.getResultList(),pageable,commentCount);
    }

    private long getCommentCount(Predicate predicate){
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<Comment>  countRoot=countQuery.from(Comment.class);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
