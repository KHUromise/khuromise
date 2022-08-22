import React, {useRef} from 'react';
import styled from 'styled-components';
import './CP.css';

const DateInputBox = styled.div`
  width : 100px;
  display : flex;
  justify-content : center;
`;

const TimeInputBox = styled.div`
  margin: 0;
`;

function Time(props) {
  
  const dateRef = useRef(null);
  const noonRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const onChange1 = () => {
    props.setNoonValue(noonRef.current.value);
  };

  const onChange2 = () => {
    props.setHourValue(hourRef.current.value);
  };

  const onChange3 = () => {
    props.setMinuteValue(minuteRef.current.value);
  };

  const onChange4 = () => {
    props.setDateValue(dateRef.current.value);
  };

  return (
    <div style={{display: 'inline-block', padding: '2px', marginLeft:'10px'}}>
        
      <div style={{width:'170px'}}>
        <input
          ref={dateRef}
          onChange={onChange4}
          type='date'
          style={{
            width : '100%',
            height : '25px',
            fontSize : '15px',
            border : '1px solid #bcbcbc',
            borderRadius: '10px'}}/>
      </div>
      <div >
        <select ref={noonRef} onChange={onChange1} style={{width : '60px', height:'25px',
            margin: '2px',
            border : '1px solid #bcbcbc',
            borderRadius: '10px'}}>
          <option>오전</option>
          <option>오후</option>
        </select>
        <select ref={hourRef} onChange={onChange2} style={{width : '50px', height:'25px',
            margin: '2px',
            border : '1px solid #bcbcbc',
            borderRadius: '10px'}}>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <select ref={minuteRef} onChange={onChange3} style={{width : '50px', height:'25px',
            margin: '2px',
            border : '1px solid #bcbcbc',
            borderRadius: '10px'}}>
          <option>00</option>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
        </select>
      </div>
    </div>
  );
}

export default Time;