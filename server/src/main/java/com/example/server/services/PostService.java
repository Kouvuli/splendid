package com.example.server.services;

import com.example.server.models.Post;
import com.example.server.repositories.PostCriteriaRepository;
import com.example.server.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PostService {


    private PostRepository postRepository;

    private PostCriteriaRepository postCriteriaRepository;

    public PostService(PostRepository postRepository, PostCriteriaRepository postCriteriaRepository) {
        this.postRepository = postRepository;
        this.postCriteriaRepository = postCriteriaRepository;
    }

    public Page<Post> getPost(String authorId, int page, int limit){
        return postCriteriaRepository.findPostWithFilterPagination(authorId,page,limit);
    }

    public Optional<Post> getPostById(int id){
        return postRepository.findById(id);
    }

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
