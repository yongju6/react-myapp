import React from 'react';
import styled from 'styled-components';
import MyButton from './MyButton';

const StylePostBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  background-color: beige;
  margin-bottom: 10px;
`;

const StyledTitle = styled.div`
  color: green;
  font-size: 25px;
  font-weight: bold;
`;

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function PostItem(props) {
  console.log(props);

  // 구조화 할당
  //const { post } = props;   // 오브젝트 안에 있는 구조를 할당해줌 바로 post 적으면 됨

  // 구조 분해 할당
  const { id, title, content } = props.post;
  const { deleteById } = props;

  return (
    <StylePostBox>
      <StyledTitle>
        {id} : {title}
      </StyledTitle>
      <StyledButtonBox>
        <button onClick={() => deleteById(id)}> 삭제</button>
        <button>상세보기</button>
      </StyledButtonBox>
    </StylePostBox>
  );
}

export default PostItem;
