import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { NextPostIdContext } from '../../context/Context';
import useFetch from '../../hooks/useFetch';

const PostBox = styled.div`
  width : 90%;
  height : 100%;
  display : flex;
  justify-content : center;
  line-height : 29px;
`;

function PostSend({ titlevalue , contentvalue, noonvalue, hourvalue, minutevalue, peoplenumvalue, datevalue, purposevalue, gendervalue, latvalue, lonvalue, placenamevalue }) {

  const users = useFetch(`/api/users`);

  const findUsers = [...users]
  const findUser = findUsers.find((user)=>user.userid === sessionStorage.getItem('LoginUserInfo')) || {};

  const nextId = useContext(NextPostIdContext);
  console.log(nextId);
  const navigate = useNavigate();
  let gender = '';

  if (gendervalue === "남자만") {
    gender = 'm'
  }
  else if (gendervalue === "여자만") {
    gender = 'w'
  }
  else {
    gender = 'b'
  }
  
  console.log(latvalue);
  console.log(lonvalue);

  function onSubmit(e) {
    e.preventDefault();
    const submitForm = document.querySelector("#createpost");

    
    if (gender !== findUser.usergender && gender !== 'b') {
      alert("성별을 확인해 주세요.")
    }
    else {
      fetch("/board/writepro", {
        method : "POST",
        headers : {
          "Content-Type" : "application/json; charset=UTF-8"
        },
        body : JSON.stringify({
          "writerid" : sessionStorage.getItem('LoginUserInfo'),
          "userApply" : [sessionStorage.getItem('LoginUserInfo')],
          "writergender" : "w",
          "date" : datevalue,
          "noon" : noonvalue,
          "hour" : hourvalue,
          "minute" : minutevalue,
          "category" : purposevalue,
          "genderdisplay" : gendervalue,
          "gendercheck" : gender,
          "currentpeople" : 1,
          "maxpeople" : Number(peoplenumvalue),
          "title" : titlevalue,
          "content" : contentvalue,
          "lat" : latvalue,
          "lon" : lonvalue,
          "placename" : placenamevalue
        }),
      })
          .then(res => res.json())
          .then(res => {
            if (res) {
              submitForm.submit();
            }
          })
      // .then(res =>{
      //   if (res.ok) {
      //     alert("등록이 완료되었습니다");
      //     navigate(`/${purposevalue}`);
      //   }
      // })
    }
  }
  
  return(
    <PostBox>
      <form style = {{
          width : '100%',
          display : 'flex',
          justifyContent : 'center'}} 
        onSubmit = {onSubmit}
        id = "createpost"
      >
        <button style={{
          width : '80%',
          lineHeight : '20px'
        }}
        >
          등록
        </button>
      </form>
    </PostBox>
  );
}
export default PostSend;