package com.example.server.services;

import com.example.server.models.Post;
import com.example.server.models.User;
import com.example.server.repositories.PostCriteriaRepository;
import com.example.server.repositories.PostRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class PostService {


    private PostRepository postRepository;

    private PostCriteriaRepository postCriteriaRepository;

    private UserRepository userRepository;

    public PostService(PostRepository postRepository, PostCriteriaRepository postCriteriaRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.postCriteriaRepository = postCriteriaRepository;
        this.userRepository = userRepository;
    }

    public Page<Post> getPost(String authorId, int page, int limit){
        return postCriteriaRepository.findPostWithFilterPagination(authorId,page,limit);
    }

    public Optional<Post> getPostById(int id){
        return postRepository.findById(id);
    }
    public User getUserById(int id){return userRepository.findById(id).get();}
    public Post addPost(Post newPost){
        return postRepository.save(newPost);
    }

    public void deletePostById(int id){
        postRepository.deleteById(id);
    }

    public boolean ifPostExists(int id){
        return postRepository.existsById(id);
    }
}
