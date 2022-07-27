package com.example.server.repositories;


import com.example.server.models.List;
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


@Repository
public class ListCriteriaRepository {
    private final EntityManager entityManager;
    private final CriteriaBuilder cb;

    public ListCriteriaRepository(EntityManager entityManager) {
        this.entityManager = entityManager;
        this.cb = entityManager.getCriteriaBuilder();
    }


    public Page<List> findListWithFilterPagination(String userId,String malType, int page, int limit) {
        CriteriaQuery<List> query=cb.createQuery(List.class);

        Root<List> root=query.from(List.class);
        java.util.List<Predicate> predicates=new ArrayList<>();
        if(userId!=null){
            predicates.add(cb.equal(root.get("user").get("id"),userId));
        }
        if(malType!=null){
            predicates.add(cb.equal(root.get("malType"),malType));
        }


        Predicate predicate=cb.and(predicates.toArray(new Predicate[0]));
        query.orderBy(cb.desc(root.get("createAt")));
        query.where(predicate);

        TypedQuery<List> typedQuery=entityManager.createQuery(query);
        typedQuery.setFirstResult((page-1)*limit);
        typedQuery.setMaxResults(limit);


        Pageable pageable= PageRequest.of(page-1,limit);

        long listCount=getListCount(predicate);
        return new PageImpl<>(typedQuery.getResultList(),pageable,listCount);
    }

    private Long getListCount(Predicate predicate) {
        CriteriaQuery<Long> countQuery=cb.createQuery(Long.class);
        Root<List>  countRoot=countQuery.from(List.class);
        countQuery.select(cb.count(countRoot)).where(predicate);
        return entityManager.createQuery(countQuery).getSingleResult();
    }
}
