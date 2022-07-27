package com.example.server.services;

import com.example.server.models.Comment;
import com.example.server.models.List;
import com.example.server.models.User;
import com.example.server.repositories.ListCriteriaRepository;
import com.example.server.repositories.ListRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;


@Service
public class ListService {
    private ListRepository listRepository;


    private UserRepository userRepository;

    private ListCriteriaRepository listCriteriaRepository;

    public ListService(ListRepository listRepository, UserRepository userRepository, ListCriteriaRepository listCriteriaRepository) {
        this.listRepository = listRepository;
        this.userRepository = userRepository;
        this.listCriteriaRepository = listCriteriaRepository;
    }

    public Page<List> getList(String userId, String malType, int page, int limit){
        return listCriteriaRepository.findListWithFilterPagination(userId,malType,page,limit);
    }

    public User getUserById(Integer id){
        return userRepository.findById(id).get();
    }
    public boolean ifListExist(Integer id){
        return listRepository.existsById(id);
    }
    public void deleteListById(int id){
        listRepository.deleteById(id);
    }

    public List addList(List newList) {
        return listRepository.save(newList);
    }
    public List getListByMalIdUserIdMalType(Integer malId,Integer userId,String malType){
        return listRepository.findByMalIdAndAndUserIdAndAndMalType(malId,userId,malType);
    }
}
