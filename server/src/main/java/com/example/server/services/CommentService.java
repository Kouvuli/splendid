package com.example.server.services;

import com.example.server.models.Comment;
import com.example.server.models.Post;
import com.example.server.models.User;
import com.example.server.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CommentService {

    private CommentRepository commentRepository;

    private  CommentCriteriaRepository commentCriteriaRepository;

    private UserRepository userRepository;

    private PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, CommentCriteriaRepository commentCriteriaRepository, UserRepository userRepository, PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.commentCriteriaRepository = commentCriteriaRepository;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public Page<Comment> getComment(String postId, int page, int limit){
        return commentCriteriaRepository.findCommentWithFilterPagination(postId,page,limit);
    }

    public User getUserById(int id){
        return userRepository.findById(id).get();
    }

    public Post getPostById(int id){
        return postRepository.findById(id).get();
    }



    public Optional<Comment> getCommentById(int id){
        return commentRepository.findById(id);
    }

    public Comment addComment(Comment newPost){
        return commentRepository.save(newPost);
    }

    public void deleteCommentById(int id){
        commentRepository.deleteById(id);
    }

    public boolean ifCommentExists(int id){
        return commentRepository.existsById(id);
    }
}
