package com.example.server.controllers;


import com.example.server.models.Activity;
import com.example.server.models.Pagination;
import com.example.server.models.Post;
import com.example.server.payloads.request.ActivityRequest;
import com.example.server.payloads.response.ResponeObject;
import com.example.server.payloads.response.ResponseObjectPagination;
import com.example.server.services.ActivityService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Timestamp;

@CrossOrigin(origins="*",maxAge = 3600)
@RestController
@RequestMapping("/api/v1/activity")
public class ActivityController {


    private ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    @PostMapping("")
    ResponseEntity<ResponseObjectPagination> getActivitesByAuthorId(@Valid @RequestBody ActivityRequest request){

        if(request.getPage()<0 || request.getLimit() <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find activity","")
            );
        }
        Page<Activity> activityPage= activityService.getActivitiesByAuthorId(request.getAuthorId(), request.getPage(), request.getLimit());
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(activityPage.getTotalPages(),activityPage.hasNext(), request.getPage(), request.getLimit()),"ok","",activityPage.getContent())
        );
    }
}
