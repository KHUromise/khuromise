package com.study.board.service;

import com.study.board.entity.Userapply;
import com.study.board.entity.Userapply;
import com.study.board.repository.UserapplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserapplyService {
    @Autowired
    private UserapplyRepository userapplyRepository;

    public void write(Userapply userapply){

        userapplyRepository.save(userapply);
    }

    public Userapply view(Integer id){

        return userapplyRepository.findById(id).get();
    }

}
