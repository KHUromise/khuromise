import React, {useState} from 'react';
import styled from "styled-components";
import PurposeList from "./PurposeList";
import Time from "./Time";
import Place from "./Place";
import Peoplenum from "./Peoplenum";
import GenderList from "./GenderList";
import PostTitle from "./PostTitle";
import PostContents from "./PostContents";
import Line from "./Line";
import PostSend from './PostSend';
import './CP.css';

/* const PurposeListBox = styled.div`
  
`; */


function CreatePost(props) {

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth()+1;

  const exactMonth = (todayMonth) => {
    if (todayMonth >= 10) {
      return todayMonth;
    }
    else {
      return '0'+todayMonth;
    }
  }
  
  const exactDate = (todayDate) => {
    if (todayDate >= 10) {
      return todayDate;
    }
    else {
      return '0'+todayDate;
    }
  }

  const [titlevalue, setTitleValue] = useState('제목없음');
  const [contentvalue, setContentsValue] = useState('내용없음');
  const [noonvalue, setNoonValue] = useState('오전');
  const [hourvalue, setHourValue] = useState('1');
  const [minutevalue, setMinuteValue] = useState('00');
  const [peoplenumvalue, setPeopleNumValue] = useState('2');
  const [datevalue, setDateValue] = useState(todayYear+'-'+exactMonth(todayMonth)+'-'+exactDate(todayDate));
  const [purposevalue, setPurposeValue] = useState('식사');
  const [gendervalue, setGenderValue] = useState('남자만');
  const [positionvalue, setPositionValue] = useState([37.2437815,127.0764067]);
  const [placenamevalue, setPlacenameValue] = useState('경희대학교 국제캠퍼스');

  /*
  console.log(titlevalue);
  console.log(contentvalue);
  console.log(datevalue);
  console.log(noonvalue);
  console.log(hourvalue);
  console.log(minutevalue);
  console.log(peoplenumvalue);
  console.log(exactMonth(todayMonth));
  */
  console.log(positionvalue);
  console.log(placenamevalue);
  return (
    <div className='promisebox'>
        <div className="pcate">
        &nbsp;&nbsp;약속목적<br/>
          <PurposeList setPurposeValue = {setPurposeValue} />
        </div>
        <div className="pgend">
        &nbsp;&nbsp;성별선택<br/>
          <GenderList setGenderValue={setGenderValue} />
        </div>
        <div className="pdate">
        &nbsp;&nbsp;&nbsp;시간선택<br/>
          <Time setNoonValue={setNoonValue}
            setHourValue={setHourValue}
            setMinuteValue={setMinuteValue}
            setDateValue={setDateValue} />
        </div>
        <div className="pplace">
          <Place setPositionValue={setPositionValue} setPlacenameValue={setPlacenameValue}/>
        </div>
        <div className="ptitle">
          <PostTitle setTitleValue={setTitleValue}/></div>
        <div className="ppnum">
          <Peoplenum setPeopleNumValue={setPeopleNumValue}/>
        </div>
        <div className="pcont">
          <PostContents setContentsValue={setContentsValue}/>
        </div> 
        <div className="pbutton">
          <PostSend
            titlevalue={titlevalue} 
            contentvalue = {contentvalue}
            noonvalue = {noonvalue}
            hourvalue = {hourvalue}
            minutevalue = {minutevalue}
            peoplenumvalue = {peoplenumvalue}
            datevalue = {datevalue}
            purposevalue = {purposevalue} 
            gendervalue = {gendervalue} 
            positionvalue = {positionvalue}
            placenamevalue = {placenamevalue}/>
        </div>
      </div>
    
  );
}

export default CreatePost;