import React , {useState, useEffect} from 'react';
import './Post5.css';
import useFetch from '../../hooks/useFetch';
import PostListItem from '../PostList/PostListItem';
import { useNavigate } from "react-router";



function Post5(props){
  const { isLogin } = props;
  const posts = useFetch(`http://localhost:3002/posts`);
 
  const [postList, setList] = useState([]);
  
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

  
  useEffect(() => {
    const findposts = [...posts] || [];
    const truePurpose = purposes.find((category) => category.active === true);
    const category = truePurpose.purname;
    setList(findposts.filter((post) => post.category === category));
    },[purposes, posts]);

  const onToggle = id => {
    setPur(
      purposes.map(purpose => 
        purpose.id === id ? { ...purpose, active: true } : { ...purpose, active: false }
        ));
    
  }

  function Purpose({ purpose, onToggle }) {
    const navigate = useNavigate();
    return (
      <div>
      <button
        style = {{
          width: '110px',
          height: '30px',
          border: 'none',
          borderRadius: '16px',
          marginLeft: '55px',
          backgroundColor: 'rgb(193, 225, 164)',
          fontSize:'16px',
          cursor:'pointer',
          color: purpose.active ? 'black' : 'gray',
          fontWeight: purpose.active ? 'bold' : ''
        }}
        onClick = {()=> onToggle(purpose.id)}
      >
      {purpose.purname}
      </button>

        <div className='more' onClick={()=>{navigate(`/${purpose.purname}`);}}>
        ->more
        </div>

      </div>
    );
  }


  function PostList({postList}) {
    return (
      postList.map((post) =>
      <PostListItem
                  key={post.id}
                  id={post.id}
                  category={post.category}
                  title={post.title}
                  date={post.date}
                  noon={post.noon}
                  hour={post.hour}
                  minute={post.minute}
                  placeName={post.placeName}
                  genderDisplay={post.genderDisplay}
                  currentPeople={post.currentPeople}
                  maxPeople={post.maxPeople}
                  writtenTime={post.writtenTime}
                  isLogin={isLogin}
                />
        )
    );
  }

    
 

  return (
    <div className='categoryBox'>
          {purposes.map(purpose => (
            <>
            <div className='categorybuttonbox' key={purpose.id}>
              <Purpose purpose={purpose} key={purpose.id} onToggle={onToggle}/>
            </div>
            </>
          ))}
      <PostList postList={postList} isLogin={isLogin}/>
    </div>
  );
}




export default Post5;