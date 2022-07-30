import styled from "styled-components";
import { Link } from "react-router-dom";

const PostListItemBlock = styled.div`
  width: 100%;
  height: auto;
  margin: 10px auto;
  border-bottom: 1px solid #bcbcbc;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 10px;
`;

const LeftBox = styled.div`
  width: 85%;
  height: 100%;
  margin-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const RightBox = styled.div`
  width: 8%;
  height: 100%;
  margin-right: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.div`
  width: 100%;
  height: 40%;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background-color: white;

  display: flex;
  justify-content: flex-start;
`;

const Date = styled.div`
  width: 100%;
  height: 20%;
  font-size: 16px;
`;

const Place = styled.div`
  width: 100%;
  height: 20%;
  font-size: 16px;
`;

const Participant = styled.div`
  width: 100%;
  height: 30%;
  font-size: 20px;

  display: flex;
  justify-content: flex-end;
`;

const WrittenTime = styled.div`
  width: 100%;
  height: 3 0%;
  font-size: 14px;
  color: #bcbcbc;

  display: flex;
  justify-content: flex-end;
`;

const GenderBox = styled.div`
  width: 7%;
  height: 100%;
  font-size: 13px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostListItem = ({
  id,
  category,
  title,
  date,
  place,
  gender,
  currentPeople,
  maxPeople,
  written_time,
}) => {
  return (
    <PostListItemBlock>
      <LeftBox>
        <Link to={`/${category}/${id}`}>
          <Title>{title}</Title>
        </Link>
        <Date>{date}</Date>
        <Place>{place}</Place>
      </LeftBox>
      <GenderBox>{gender}</GenderBox>
      <RightBox>
        <Participant>
          {currentPeople} / {maxPeople}
        </Participant>
        <WrittenTime>{written_time}</WrittenTime>
      </RightBox>
    </PostListItemBlock>
  );
};

export default PostListItem;
