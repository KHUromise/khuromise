import React, { useState } from 'react';
import styled from "styled-components";
import Map from './Map';

const PlaceBox = styled.div`
  width : 720px;
  height : 200px;
  display : flex;
  flex-direction : column;
`;

const SearchBox = styled.div`
  width : 300px;
  height : 50px;
  display : flex;
  margin-bottom : 7px;
  position: absolute;
  Left : 55%;

  input {
    width : 230px;
    height : 30px;
    border-radius: 16px;
    box-shadow: 0 0 5px 0 #bcbcbc;
    border:none;
  }

  button {
    box-shadow: 0 0 5px 0 #bcbcbc;
    border:none;
    width : 50px;
    height : 34px;
    border-radius: 16px;
    background-color: white;
    margin-left: 10px;
  }
`;

const MapBox = styled.div`
  width : 700px;
  height : 200px;
`;


function Place(props) {
  
  const { setPositionValue, setPlacenameValue } = props;
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  
  const onChange = (e) => {
    setInput(e.target.value);
  }

  const onClick = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  }

  return (
    <PlaceBox>
      <SearchBox>
        <input value={input} onChange={onChange}/>
        <button onClick={onClick}>검색</button>
      </SearchBox>
      <MapBox>
        <Map searchPlace={search} setPositionValue={setPositionValue} setPlacenameValue={setPlacenameValue}/>
      </MapBox>
    </PlaceBox>
  );
}

export default Place;