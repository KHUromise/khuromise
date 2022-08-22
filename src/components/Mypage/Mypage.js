import React from "react";
import { useNavigate } from "react-router-dom";
import './Mypage.css';
import useFetch from "../../hooks/useFetch";


function Mypage ({ setIsLogin }) {
    const navigate = useNavigate();
    const users = useFetch(`http://localhost:3002/users`);
  const findUsers = [...users];
  const findUser =
    findUsers.find(
      (user) => user.userId === sessionStorage.getItem("LoginUserInfo")
    ) || {};
  const userInfoId = findUser.id;

  const delUser = () => {
    fetch(`http://localhost:3002/users/${userInfoId}`, {
      method: "DELETE",
    });
    users
      .filter((user) => user.id !== findUser.id)
      .forEach((user) => {
        fetch("http://localhost:3002/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            ...user,
          }),
        });
      });
    sessionStorage.removeItem("LoginUserInfo");
    setIsLogin(false);
    alert("회원탈퇴 성공");
    navigate("/");
  };
    return (
        <>
        <div className="mypage">
            <div className="bar">
                <div className="mybutton" type="button" onClick={()=>{navigate('/mypage/mypostlist');}}>나의게시글</div>
                <div className="mybutton" type="button" onClick={()=>{navigate('/mypage/myreply');}}>나의댓글</div>
                <div className="mybutton" type="button" onClick={()=>{navigate('/mypage/mypromise');}}>약속목록</div>
            </div>
            <div className="list"></div>
        </div>
        
        </>
    )
}

export default Mypage;
