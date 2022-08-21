package com.study.board.controller;

import com.study.board.entity.Board;
import com.study.board.entity.User;
import com.study.board.service.BoardService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
// @RequestMapping("/api")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @PostMapping("/api/posts/write")
    public String createPost(@RequestBody Board board, Model model) {

        boardService.write(board);

        model.addAttribute("message", "글 작성이 완료되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @RequestMapping(path="/api/posts/modify/{id}", method=RequestMethod.PUT)
    public String modifyPost(@PathVariable("id") Integer id, @RequestBody Board board, Model model) {

        boardService.write(board);

        model.addAttribute("message", "글 수정이 완료되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @DeleteMapping("/api/delete/{id}")
    public String deletePost(@PathVariable("id") Integer id, @RequestBody Board board, Model model){

        boardService.boardDelete(id);

        model.addAttribute("message","글이 삭제되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }

    @GetMapping("/api/posts")
    @ResponseBody
    public List<Board> getAllData() {
        return boardService.getAllData();
    }

    @GetMapping("/api/posts/{category}")
    @ResponseBody
    public List<Board> getCategoryData(@PathVariable String category) {
        return boardService.getCategoryData(category);
    }

    @GetMapping("/api/posts/id/{id}")
    @ResponseBody
    public Board getIdData(@PathVariable("id") Integer id) {
        return boardService.boardView(id);
    }
}