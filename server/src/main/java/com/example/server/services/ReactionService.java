package com.example.server.services;

import com.example.server.models.Comment;
import com.example.server.models.Post;
import com.example.server.models.Reaction;
import com.example.server.models.User;
import com.example.server.repositories.ReactionCriteriaRepository;
import com.example.server.repositories.ReactionRepository;
import com.example.server.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ReactionService {

    private ReactionRepository reactionRepository;
    private  PostService postService;
    private CommentService commentService;

    private UserRepository userRepository;

    private ReactionCriteriaRepository reactionCriteriaRepository;

    public ReactionService(ReactionRepository reactionRepository, PostService postService, CommentService commentService, UserRepository userRepository, ReactionCriteriaRepository reactionCriteriaRepository) {
        this.reactionRepository = reactionRepository;
        this.postService = postService;
        this.commentService = commentService;
        this.userRepository = userRepository;
        this.reactionCriteriaRepository = reactionCriteriaRepository;
    }

    public Integer getReactionIdByAuthorIdAndPostId(String authorId,String postId){

        return reactionCriteriaRepository.findReactionIdByAuthorIdAndPostId(authorId,postId);
    }
    public List<Reaction> getReacionsByPostId(int postId){ return reactionRepository.findByPostId(postId);}
    public List<Reaction> getAllReaction(){
        return reactionRepository.findAll();
    }

    public Post getPostById(int id){
        return postService.getPostById(id).get();
    }
    public Comment getCommentById(int id){
        return commentService.getCommentById(id).get();
    }
    public User getUserById(int id){
        return userRepository.findById(id).get();
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

    public List<Reaction> getReacionsByCommentId(Integer commentId) {
        return reactionRepository.findByCommentId(commentId);
    }

    public Integer getReactionIdByAuthorIdAndCommentId(String authorId, String commentId) {
        return reactionCriteriaRepository.findReactionIdByAuthorIdAndCommentId(authorId,commentId);
    }
}
