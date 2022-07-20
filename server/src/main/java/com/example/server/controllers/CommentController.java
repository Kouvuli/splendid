package com.example.server.controllers;

import com.example.server.models.*;
import com.example.server.payloads.response.ResponeObject;
import com.example.server.payloads.response.ResponseObjectPagination;
import com.example.server.services.CommentService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/comment")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping("")
    ResponseEntity<ResponseObjectPagination> getComment(
            @RequestParam(required = false,name = "post_id") String postId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10")int limit
    ){

        if(page<0 || limit <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find comment","")
            );
        }
        Page<Comment> commentPage=commentService.getComment(postId,page,limit);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(commentPage.getTotalPages(),commentPage.hasNext(),page,limit),"ok","",commentPage.getContent())
        );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponeObject> getCommentById(@PathVariable int id){
        Optional<Comment> comment=commentService.getCommentById(id);
        return comment.isPresent()?
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponeObject("ok","Query comment successfully",comment)
                ):
                ResponseEntity.status(HttpStatus.OK).body(
                        new ResponeObject("failed","Cannot find comment with id="+id,"")
                );
    }

    @PostMapping("")
    ResponseEntity<ResponeObject> insertComment(@RequestBody Comment newComment){
        newComment.setAuthor(commentService.getUserById(newComment.getAuthor().getId()));
        newComment.setPost(commentService.getPostById(newComment.getPost().getId()));
        newComment.setCreateAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponeObject("ok","Insert comment succesfully",commentService.addComment(newComment))
        );
    }

    @PutMapping("/{id}")
    ResponseEntity<ResponeObject> updateComment(@RequestBody Comment newComment,@PathVariable int id){
        Comment updatedComment= commentService.getCommentById(id)
                .map(comment->{
                    comment.setContent(newComment.getContent());
                    comment.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return commentService.addComment(comment);
                }).orElseGet(()->{
                    newComment.setId(id);
                    newComment.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return commentService.addComment(newComment);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponeObject("ok","Update comment successfully",commentService.addComment(updatedComment))
        );
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponeObject> deleteComment(@PathVariable int id){
        boolean exists=commentService.ifCommentExists(id);
        if(exists){
            commentService.deleteCommentById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponeObject("ok","Deleted comment succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponeObject("failed","Cannot find comment to delete","")
        );
    }
}
