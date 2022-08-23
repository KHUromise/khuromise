package com.study.board.controller;

import com.study.board.entity.Board;
import com.study.board.entity.User;
import com.study.board.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.sun.org.apache.xalan.internal.xsltc.compiler.util.Util.println;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/users/reg")
    public String userRegister(User user, Model model) {
        user.useremail = user.useremail + "@khu.ac.kr";
        userService.write(user);

        model.addAttribute("message", "회원가입에 성공했습니다!");
        model.addAttribute("searchUrl", "/login");

        return "message";
    }

    @GetMapping("/api/users")
    @ResponseBody
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @DeleteMapping("/api/delete/user/{id}")
    public String deleteUser(@PathVariable("id") Integer id, @RequestBody User user, Model model){

        userService.delete(id);

        model.addAttribute("message","회원 탈퇴되었습니다.");
        model.addAttribute("searchUrl", "/");

        return "message";
    }
}
