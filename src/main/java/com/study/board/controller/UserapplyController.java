package com.study.board.controller;

import com.study.board.entity.Comment;
import com.study.board.entity.Userapply;
import com.study.board.service.UserapplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class UserapplyController {
    @Autowired
    private UserapplyService userapplyService;

    @PostMapping("/api/userapply")
    public String createApply(@RequestBody Userapply userapply, Model model) {

        userapplyService.write(userapply);

        model.addAttribute("message", "신청이 완료되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @GetMapping("/api/userapply/id/{postid}")
    @ResponseBody
    public List<Userapply> getCategoryData(@PathVariable("postid") Integer postid) {
        return userapplyService.getPostidData(postid);
    }
}
