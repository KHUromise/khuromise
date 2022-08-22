import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const PostBox = styled.div`
  width : 100%;
  display : flex;
  justify-content : center;
  border : none;
  boxShadow:' 0 0 10px 0 #bcbcbc;
  borderRadius: 16px;
`

function PostContents(props) {

  const contentsRef = useRef(null);

  const onChange = (e) => {
    props.setContentsValue(contentsRef.current.value);
  };

  const [hei, setHei] = useState("100");

  function size(e) {
    e.target.style.height = "1px";
    e.target.style.height = (20+e.target.scrollHeight)+"px";
    setHei(e.target.style.height.slice(0,-2));
  }

  return(
    <PostBox>
      <textarea
        style = {{
          border: '1px solid #bcbcbc',
          borderRadius:'8px',
          width : '98%',
          resize : 'none',
          height : hei+'px',
          minHeight : '150px'
        }}
        onChange={onChange}
        onKeyDown = {size}
        onKeyUp = {size}
        ref = {contentsRef}
      >
      </textarea>
    </PostBox>
  );
}

export default PostContents;