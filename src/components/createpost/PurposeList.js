import React, {useState} from 'react';




function PurposeList(props) {
  const [purposes, setPur] = useState([
    {
      id : 1,
      purname : '식사',
      active : true
    },
    {
      id : 2,
      purname : '운동',
      active : false
    },
    {
      id : 3,
      purname : '게임',
      active : false
    },
    {
      id : 4,
      purname : '공부',
      active : false
    },
    {
      id : 5,
      purname : '기타',
      active : false
    }
  ]);
  
  const onToggle = id => {
    setPur(
      purposes.map(purpose => 
        purpose.id === id ? { ...purpose, active: true } : { ...purpose, active: false }
      )
    );
    function isTrue(purpose) {
      if (purpose.id === id) {
        return true;
      }
    }
    props.setPurposeValue(purposes.find(isTrue).purname);
  }
  
  function Purpose({ purpose, onToggle }) {
    
    return (
      <b
        style = {{
          cursor:'pointer',
          margin: '8px',
          color: purpose.active ? 'black' : '#696969',
        }}
        onClick = {()=> onToggle(purpose.id)}
      >
      {purpose.purname}
      </b>
    );
  }

  return (
    <div>

      {purposes.map(purpose => (
        <div style={{display: 'inline-block', marginTop:'7px'}} key={purpose.id}>
          <Purpose purpose={purpose} key={purpose.id} onToggle={onToggle}/>
        </div>
      ))}
    </div>
  );
}

export default PurposeList;