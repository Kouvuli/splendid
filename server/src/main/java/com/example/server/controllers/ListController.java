package com.example.server.controllers;


import com.example.server.models.Comment;
import com.example.server.models.List;
import com.example.server.models.Pagination;
import com.example.server.models.Post;
import com.example.server.payloads.response.ResponeObject;
import com.example.server.payloads.response.ResponseObjectPagination;
import com.example.server.services.ListService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;

@CrossOrigin(origins="*",maxAge = 3600)
@RestController
@RequestMapping("/api/v1/list")
public class ListController {

    private ListService listService;

    public ListController(ListService listService) {
        this.listService = listService;
    }

    @GetMapping("")
    ResponseEntity<ResponseObjectPagination> getList(
            @RequestParam(name = "user_id") String userId,
            @RequestParam(name = "mal_type") String malType,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10")int limit
    ){
        if(page<0 || limit <1){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObjectPagination(new Pagination(),"failed","Cannot find list","")
            );
        }
        Page<List> listPage=listService.getList(userId,malType,page,limit);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObjectPagination(new Pagination(listPage.getTotalPages(),listPage.hasNext(),page,limit),"ok","",listPage.getContent())
        );
    }

    @PostMapping("")
    ResponseEntity<ResponeObject> insertList(@RequestBody List newList){
        List temp = listService.getListByMalIdUserIdMalType(newList.getMalId(), newList.getUser().getId(), newList.getMalType());
        List result=null;
        if(temp!=null){
            temp.setType(newList.getType());
            temp.setCreateAt(new Timestamp(System.currentTimeMillis()));
            result=listService.addList(temp);
        }else{
            newList.setUser(listService.getUserById(newList.getUser().getId()));
            newList.setCreateAt(new Timestamp(System.currentTimeMillis()));
            result=listService.addList(newList);
        }


        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponeObject("ok","Insert user succesfully",result)
        );
    }
    @DeleteMapping("/{id}")
    ResponseEntity<ResponeObject> deleteList(@PathVariable int id){
        boolean exists=listService.ifListExist(id);
        if(exists){
            listService.deleteListById(id);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponeObject("ok","Deleted list succesfully","")
            );
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                new ResponeObject("failed","Cannot find list to delete","")
        );
    }
}
