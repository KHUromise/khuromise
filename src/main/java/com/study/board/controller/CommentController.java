package com.study.board.controller;

import com.study.board.entity.Board;
import com.study.board.entity.Comment;
import com.study.board.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CommentController {
    @Autowired
    private CommentService commentService;

    @PostMapping("/api/comment")
    public String createComment(@RequestBody Comment comment, Model model) {

        commentService.write(comment);

        model.addAttribute("message", "댓글 작성이 완료되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @DeleteMapping("/api/comment/delete/{id}")
    public String deleteComment(@PathVariable("id") Integer id, @RequestBody Comment comment, Model model){

        commentService.delete(id);

        model.addAttribute("message","댓글이 삭제되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @GetMapping("/api/comment/data/{postid}")
    @ResponseBody
    public List<Comment> getCategoryData(@PathVariable("postid") Integer postid) {
        return commentService.getPostidData(postid);
    }

    @GetMapping("/api/comment/id/{id}")
    @ResponseBody
    public Comment getIdData(@PathVariable("id") Integer id) {
        return commentService.view(id);
    }
}