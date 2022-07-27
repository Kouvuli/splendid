package com.example.server.services;

import com.example.server.models.Activity;
import com.example.server.models.Comment;
import com.example.server.models.Post;
import com.example.server.models.Reaction;
import com.example.server.repositories.CommentRepository;
import com.example.server.repositories.PostRepository;
import com.example.server.repositories.ReactionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;


@Service
public class ActivityService {

    private PostRepository postRepository;

    private ReactionRepository reactionRepository;

    private CommentRepository commentRepository;

    public ActivityService(PostRepository postRepository, ReactionRepository reactionRepository, CommentRepository commentRepository) {
        this.postRepository = postRepository;
        this.reactionRepository = reactionRepository;
        this.commentRepository = commentRepository;
    }
    public Page<Activity> getActivitiesByAuthorId(Integer authorId,int page,int limit){
        List<Post> postList=postRepository.findByAuthorId(authorId);
        List<Comment> commentList=commentRepository.findByAuthorId(authorId);
        List<Reaction> reactionList=reactionRepository.findByAuthorId(authorId);

        List<Activity> activityList=new ArrayList<>();
        AtomicInteger i= new AtomicInteger();
        postList.forEach(post -> {
            activityList.add(new Activity(i.getAndIncrement(),"post",post.getCreateAt(),post));
        });

        commentList.forEach(comment -> {
            activityList.add(new Activity(i.getAndIncrement(),"comment",comment.getCreateAt(),comment));
        });

        reactionList.forEach(reaction -> {
            activityList.add(new Activity(i.getAndIncrement(),"reaction",reaction.getCreateAt(),reaction));
        });

        Collections.sort(activityList, new Comparator<Activity>() {
            @Override
            public int compare(Activity p1, Activity p2) {
                return p2.getCreateAt().compareTo( p1.getCreateAt());
            }
        });
        Pageable pageable= PageRequest.of(page-1,limit);
        final int start = (int)pageable.getOffset();
        final int end = Math.min((start + pageable.getPageSize()), activityList.size());
        return new PageImpl<>(activityList.subList(start,end),pageable, activityList.size());


    }
}
