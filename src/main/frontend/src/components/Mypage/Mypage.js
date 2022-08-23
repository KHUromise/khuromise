import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import PostListItem from "../PostList/PostListItem";

const Mypagecontainer = styled.div`
  width: 100%;
  height: 23rem;
`;
const Mypagebox = styled.div`
  width: 61rem;
  height: 20rem;
  box-shadow: 0 0 8px 0 #bcbcbc;
  border-radius: 16px;
  margin: 3rem auto 0;
  display: grid;
  grid-template-columns: 13rem 16rem 16rem 16rem;
  grid-template-rows: 4rem 6rem 10rem;

  .item: nth-child(1) {
    grid-column: 1/2;
    grid-row: 1/3;
    border-right: 1px solid #bcbcbc;
    border-bottom: 1px solid #bcbcbc;
  }
  .item: nth-child(2) {
    grid-column: 1/2;
    grid-row: 3/4;
    border-right: 1px solid #bcbcbc;
  }
  .item: nth-child(3) {
    grid-column: 2/5;
    grid-row: 1/2;
    border-bottom: 1px solid #bcbcbc;
    margin: 1px;
  }
  .item: nth-child(4) {
    grid-column: 2/5;
    grid-row: 2/4;
    overflow: auto;
  }
`;
const Buttonstyle = styled.button`
  width: 31%;
  height: 4em;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 4px;
  cursor: Pointer;
  text-align: center;
`;
const Button2 = styled.button`
  width: 10rem;
  height: 3rem;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  cursor: Pointer;
  margin-left: 22px;
  margin-top: 20px;
`;

function Mypage({ isLogin }) {
  const users = useFetch("/api/users");
  const findUsers = [...users];
  const findUser =
    findUsers.find(
      (user) => user.userid === sessionStorage.getItem("LoginUserInfo")
    ) || {};

  const [list, setList] = useState([]);
  const posts = useFetch(`/api/posts`);
  const userPosts = posts.filter((post) => post.writerid === findUser.userid);
  const navigate = useNavigate();
  const logOut = () => {
    sessionStorage.removeItem("LoginUserInfo");
    navigate(`/`);
    window.location.reload();
  };

  const [checks, setCheck] = useState([
    {
      id: 1,
      title: "나의 게시글",
      active: true,
    },
    {
      id: 2,
      title: "나의 댓글",
      active: false,
    },
    {
      id: 3,
      title: "약속 목록",
      active: false,
    },
  ]);

  const onToggle = (id) => {
    setCheck(
      checks.map((check) =>
        check.id === id
          ? { ...check, active: true }
          : { ...check, active: false }
      )
    );
  };

  useEffect(() => {
    const trueCheck = checks.find((check) => check.active === true);
    const title = trueCheck.title;
    switch (title) {
      case "나의 게시글":
        setList("게시글");
        break;

      case "나의 댓글":
        setList("댓글");
        break;

      case "약속 목록":
        setList("약속");
        break;

      default:
        break;
    }
  }, [checks, posts]);

  function Titles({ title, onToggle }) {
    return (
      <Buttonstyle
        style={{
          cursor: "pointer",
          color: title.active ? "black" : "#bcbcbc",
        }}
        onClick={() => onToggle(title.id)}
      >
        {title.title}
      </Buttonstyle>
    );
  }

  function PostList() {
    return userPosts.map((post) => (
      <PostListItem
        key={post.id}
        id={post.id}
        category={post.category}
        title={post.title}
        date={post.date}
        noon={post.noon}
        hour={post.hour}
        minute={post.minute}
        placeName={post.placename}
        genderDisplay={post.genderdisplay}
        currentPeople={post.currentpeople}
        maxPeople={post.maxpeople}
        writtenTime={post.writtentime}
        isLogin={isLogin}
      />
    ));
  }

  if (posts[0].id === 0) {
    return null;
  }

  return (
    <div>
      <Mypagecontainer>
        <Mypagebox>
          <div className="item">사진</div>
          <div className="item">
            <Button2>나의정보수정</Button2>
            <Button2 onClick={logOut}>로그아웃</Button2>
          </div>
          <div className="item">
            {checks.map((check) => (
              <Titles title={check} key={check.id} onToggle={onToggle} />
            ))}
          </div>
          <div className="item">
            {list === "게시글" && (
              <PostList onToggle={onToggle} isLogin={isLogin} />
            )}
          </div>
        </Mypagebox>
      </Mypagecontainer>
    </div>
  );
}

export default Mypage;
