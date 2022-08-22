import React from "react";
import './Mainpage.css';
import Post5 from "./Post5";
import { useNavigate } from "react-router";



const Mainpage= (props) =>{
  const { isLogin, setIsLogin } = props;
  const navigate = useNavigate();
  const onClick = () => {
    if (isLogin === true) {
      sessionStorage.removeItem("LoginUserInfo");
      setIsLogin(false);
      navigate(`/`);
      window.location.reload();
  }
  else {
      navigate(`/login`);
      window.location.reload();
  }
  }
  const onClick1 = () => {
      if (isLogin === true) {
          navigate(`/createpost`);
          window.location.reload();
      }
      else {
          navigate(`/login`);
          window.location.reload();
      }
  }
  
  const onClick2 = () => {
      if (isLogin === true) {
          navigate(`/mypage`);
          window.location.reload();
      }
      else {
          navigate(`/register`);
          window.location.reload();
      }
  }
  
  return (
      <div className="box">
        <hr/>
        <div className="maintext">"주위의 경희대 학생들과<br/> 약속을 맺어보세요!"</div>
        {/* <div className="SB">
          <input className="search" type="text" placeholder='검색어를 입력하시오.'></input>
          <div className="searchb"></div>
          <div className="searcht">ex. 저녁, 롤, 헬스. 스터디 등</div>
        </div> */}
        <div isLogin={isLogin}>
          <Post5 isLogin={isLogin}/>
        </div>
      </div>
  );
};

export default Mainpage;
