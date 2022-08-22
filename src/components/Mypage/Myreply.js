import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import './Mypage.css';

function Myreply() {
  const navigate = useNavigate();
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
  );
}

export default Myreply;