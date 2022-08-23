package com.study.board.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(schema="userapply")
public class UserApply {

    @Id
    public Integer id;
    @Id
    public String userid;
}
