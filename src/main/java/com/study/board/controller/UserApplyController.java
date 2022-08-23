package com.study.board.controller;

import com.study.board.entity.Comment;
import com.study.board.entity.UserApply;
import com.study.board.service.CommentService;
import com.study.board.service.UserApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserApplyController {
    @Autowired
    private UserApplyService userapplyService;

    @PostMapping("/api/userapply")
    public String createComment(@RequestBody UserApply userapply, Model model) {

        userapplyService.write(userapply);

        model.addAttribute("message", "신청이 완료되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @GetMapping("/api/userapply/id/{id}")
    @ResponseBody
    public UserApply getIdData(@PathVariable("id") Integer id) {
        return userapplyService.view(id);
    }
}
