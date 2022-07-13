package com.example.server.services;

import com.example.server.models.Post;
import com.example.server.models.Reaction;
import com.example.server.repositories.ReactionCriteriaRepository;
import com.example.server.repositories.ReactionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ReactionService {

    private ReactionRepository reactionRepository;
    private  PostService postService;
    private CommentService commentService;
    private ReactionCriteriaRepository reactionCriteriaRepository;

    public ReactionService(ReactionRepository reactionRepository, PostService postService, CommentService commentService, ReactionCriteriaRepository reactionCriteriaRepository) {
        this.reactionRepository = reactionRepository;
        this.postService = postService;
        this.commentService = commentService;
        this.reactionCriteriaRepository = reactionCriteriaRepository;
    }

    public List<Reaction> getAllReaction(){
        return reactionRepository.findAll();
    }

    public Long getTargetCountByPostId(String postId){
        return reactionCriteriaRepository.getTargetCountByPostId(postId);
    }

    public long getTargetCountByCommentId(String commentId){
        return reactionCriteriaRepository.getTargetCountByCommentId(commentId);
    }

    public Optional<Reaction> getReactionById(int id){
        return reactionRepository.findById(id);
    }

    public Reaction addReaction(Reaction newReaction){
        return reactionRepository.save(newReaction);
    }

    public void deleteReactionById(int id){
        reactionRepository.deleteById(id);
    }
    public boolean ifReactionExists(int id){
        return reactionRepository.existsById(id);
    }

    public boolean ifPostExistsById(Integer postId){
        if(postId==null){
            return false;
        }
        return postService.getPostById(postId).isPresent() ;

    }

    public boolean ifCommentExistsById(Integer commentId){
        if(commentId==null){
            return false;
        }
        return postService.getPostById(commentId).isPresent() ;

    }
}
