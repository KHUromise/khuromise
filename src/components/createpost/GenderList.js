import React, {useState} from 'react';


function GenderList(props) {
  const [currentgender, setGender] = useState([
    {
      id : 1,
      gendertype : '남자만',
      gendertypeEng : 'm',
      active : true
    },
    {
      id : 2,
      gendertype : '여자만',
      gendertypeEng : 'w',
      active : false
    },
    {
      id : 3,
      gendertype : '성별무관',
      gendertypeEng : 'b',
      active : false
    }])

  const onToggle = id => {
      setGender(
        currentgender.map(gender => 
          gender.id === id ? { ...gender, active: true } : {...gender, active: false}
        )
      );
      function isTrue(gender) {
        if (gender.id === id) {
          return true;
        }
      }
      props.setGenderValue(currentgender.find(isTrue).gendertype)
    }
  
  function Gender({ gender, onToggle }) {
    return (
      <b
        style = {{
          cursor:'pointer',
          margin: '3px',
          color: gender.active ? 'black' : '#696969',
          fontWeight: gender.active ? 'bold':''
        }}
        onClick = {()=> onToggle(gender.id)}
      >
      {gender.gendertype}
      </b>
    );
  }

  return (
    <div>
      {currentgender.map(gender => (
        <div key={gender.id} style={{display:'inline-block', margin:'6px'}}>
          <Gender gender={gender} key={gender.id} onToggle={onToggle}/>
        </div>
      ))}
    </div>
  );
}

export default GenderList;