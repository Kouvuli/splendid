package com.example.server.controllers;


import com.example.server.models.Pagination;
import com.example.server.models.Post;
import com.example.server.models.User;
import com.example.server.payloads.response.ResponeObject;
import com.example.server.payloads.response.ResponseObjectPagination;
import com.example.server.services.PostService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/post")
public class PostController {



    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }



    @GetMapping("")
    ResponseEntity<ResponseObjectPagination> getPost(
            @RequestParam(required = false,name = "author_id") String authorId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10")int limit
    ){
        if(page<0 || limit <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find post","")
            );
        }
        Page<Post> postPage=postService.getPost(authorId,page,limit);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(postPage.getTotalPages(),postPage.hasNext(),page,limit),"ok","",postPage.getContent())
                );
    }

    @GetMapping("/{id}")
    ResponseEntity<ResponeObject> getPostById(@PathVariable int id){
        Optional<Post> post=postService.getPostById(id);

        return post.isPresent()?
             ResponseEntity.status(HttpStatus.OK).body(
                    new ResponeObject("ok","Query post succesfully",post)
            ):
            ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponeObject("failed","Cannot find post with id="+id,"")
            );
    }

    @PostMapping("")
    ResponseEntity<ResponeObject> insertPost(@RequestBody Post newPost){
        int authorId =newPost.getAuthor().getId();
        newPost.setAuthor(postService.getUserById(authorId));
        newPost.setCreateAt(new Timestamp(System.currentTimeMillis()));
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponeObject("ok","Insert post succesfully",postService.addPost(newPost))
        );
    }

    @PutMapping("/{id}")
    ResponseEntity<ResponeObject> updatePost(@RequestBody Post newPost,@PathVariable int id){
        Post updatedPost= postService.getPostById(id)
                .map(post->{
                    post.setContent(newPost.getContent());
                    post.setTitle(newPost.getTitle());
                    post.setCreateAt(new Timestamp(System.currentTimeMillis()));
                    return postService.addPost(post);
                }).orElseGet(()->{
                    newPost.setId(id);
                    return postService.addPost(newPost);
                });
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponeObject("ok","Update Post successfully",postService.addPost(updatedPost))
        );
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponeObject> deletePost(@PathVariable int id){
        boolean exists=postService.ifPostExists(id);
        if(exists){
            postService.deletePostById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponeObject("ok","Deleted post succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponeObject("failed","Cannot find post to delete","")
        );
    }

}
