package com.study.board.service;

import com.study.board.entity.Board;
import com.study.board.entity.Comment;
import com.study.board.entity.UserApply;
import com.study.board.repository.UserApplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserApplyService {
    @Autowired
    private UserApplyRepository userapplyRepository;

    public void write(UserApply userapply){

        userapplyRepository.save(userapply);
    }

    public UserApply view(Integer id){

        return userapplyRepository.findById(id).get();
    }

}
