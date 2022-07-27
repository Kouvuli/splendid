package com.example.server.services;


import com.example.server.models.Post;
import com.example.server.models.User;
import com.example.server.repositories.UserCriteriaRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    private UserCriteriaRepository userCriteriaRepository;

    public UserService(UserRepository userRepository, UserCriteriaRepository userCriteriaRepository) {
        this.userRepository = userRepository;
        this.userCriteriaRepository = userCriteriaRepository;
    }

    public Page<User> getUser(int page, int limit){
        return userCriteriaRepository.findUserWithPagination(page,limit);
    }

    public Optional<User> getUserById(int id){
        return userRepository.findById(id);
    }

    public User addUser(User newUser){
        return userRepository.save(newUser);
    }
}
