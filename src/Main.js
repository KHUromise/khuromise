import './Main.css';
import { useNavigate } from "react-router";

const Main= (props) =>{
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
      <div className="Main">
        <div className="Main-img" alt="khimg">
          <div className="Mainbar">
            <div className="button" onClick={onClick}>{isLogin ? "로그아웃":"로그인"}</div>
            <div className="button" onClick={onClick1} isLogin={isLogin}>약속하기</div>
            <div className="button" onClick={onClick2}>{isLogin ? "마이페이지":"회원가입"}</div>
          </div>
          <div className="khutext" type="button" onClick={()=>{navigate('/');}}>
            <h1>KHUROMISE 2022</h1>
          </div>
        </div>
    </div>
    )
    }

export default Main;