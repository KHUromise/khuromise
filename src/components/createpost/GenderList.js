import React, {useState} from 'react';
import styled from "styled-components";

const GenderBox = styled.div`
  width: 18%;
  height : 30px;
  margin : auto;
  display : inline-block;
  border: 1px solid #bcbcbc;
  position : relative;
  font-size: 15px;
  text-align : center;
  line-height : 30px;
`;

const GenderBarBox = styled.div`
  display : flex;
  justify-content : center; 
`;


function GenderList() {
  const [currentgender, setGender] = useState([
    {
      id : 1,
      gendertype : '남자만',
      active : true
    },
    {
      id : 2,
      gendertype : '여자만',
      active : false
    },
    {
      id : 3,
      gendertype : '성별무관',
      active : false
    }])
  
  const onToggle = id => {
    setGender(
      currentgender.map(gender => 
        gender.id === id ? { ...gender, active: true } : { ...gender, active: false }
        )
    );
  }
  
  function Gender({ gender, onToggle }) {
    return (
      <b
        style = {{
          cursor:'pointer',
          color: gender.active ? 'red' : 'black'
        }}
        onClick = {()=> onToggle(gender.id)}
      >
      
        {gender.gendertype}
      </b>
    );
  }

  return (
    <GenderBarBox>
      {currentgender.map(gender => (
        <GenderBox>
          <Gender gender={gender} key={gender.id} onToggle={onToggle}/>
        </GenderBox>
      ))}
    </GenderBarBox>
  );
}

export default GenderList;