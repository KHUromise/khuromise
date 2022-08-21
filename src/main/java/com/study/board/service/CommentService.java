package com.study.board.service;

import com.study.board.entity.Board;
import com.study.board.entity.Comment;
import com.study.board.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    public void write(Comment comment){

        commentRepository.save(comment);
    }

    public void delete(Integer id){

        commentRepository.deleteById(id);
    }

    @Transactional
    public List<Comment> getPostidData(Integer postid){
        return commentRepository.findByPostidContaining(postid);
    }

}