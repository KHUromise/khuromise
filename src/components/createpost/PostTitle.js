import React, {useRef} from 'react';
import styled from 'styled-components';

const TitleBox = styled.div`
  height : 25px;
  display : inline-block;
  text-align : center;
  font-size: 13px;
  padding: 6px;
`;

const TitleWritingBox = styled.div`
  width : 300px;
  height : 25px;
  border-bottom : 1px solid #bcbcbc;
  display : inline-block;
  padding: 1px;
`;

const TotalTitleBox = styled.div`
  width : 100%;
  height : 100%;
  display : flex;
  justify-content : center;
  
`;

function PostTitle(props) {

  const titleRef = useRef(null);

  const onChange = (e) => {
    props.setTitleValue(titleRef.current.value);
  };

  return (
    <div>
      <TotalTitleBox>
        <TitleBox>
          제목 :
        </TitleBox>
        <TitleWritingBox>
          <input style={{
            width : '80%',
            height : '20px',
            border : '0px solid #bcbcbc',
            position : 'relative',
            }}
            ref={titleRef}
            onChange={onChange}
            />
        </TitleWritingBox>
      </TotalTitleBox>
    </div>
    )
}

export default PostTitle;