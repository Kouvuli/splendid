package com.example.server.services;

import com.example.server.models.Comment;
import com.example.server.models.Post;
import com.example.server.repositories.CommentCriteriaRepository;
import com.example.server.repositories.CommentRepository;
import com.example.server.repositories.PostCriteriaRepository;
import com.example.server.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CommentService {

    private CommentRepository commentRepository;

    private  CommentCriteriaRepository commentCriteriaRepository;

    public CommentService(CommentRepository commentRepository, CommentCriteriaRepository commentCriteriaRepository) {
        this.commentRepository = commentRepository;
        this.commentCriteriaRepository = commentCriteriaRepository;
    }


    public Page<Comment> getComment(String postId, int page, int limit){
        return commentCriteriaRepository.findCommentWithFilterPagination(postId,page,limit);
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
