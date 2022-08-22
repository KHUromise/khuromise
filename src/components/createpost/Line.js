import React from 'react';
import styled from "styled-components";

const Linetype = styled.div`
  width : 600px;
  height : 1px;
  background : gray;
  margin : auto;
`;

function Line() {
    return (
      <Linetype />
    );
}

export default Line;