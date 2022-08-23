package com.study.board.repository;

import com.study.board.entity.UserApply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserApplyRepository extends JpaRepository<UserApply, Integer> {
}
