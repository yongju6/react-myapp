import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MyButton from './components/MyButton';
import NavBar from './components/NavBar';
import PostItem from './components/PostItem';
import { getData } from './provider/Post';

const StyledBox = styled.div`
  margin: 30px auto;
  width: 70%;
  border: 1px solid black;
  padding: 30px;
`;

const StyledRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

function App() {
  console.log(getData());

  // 화면에 띄워줘야하는 것들은 상태로 관리해야함
  // 그래야 return을 다시 해주면서 상태가 바뀌면서 그림을 자동으로 글려줌
  // const [posts, setPosts] = useState(getData());

  const [posts, setPosts] = useState();

  function deleteById(id) {
    let deleteData = posts.filter((post) => post.id !== id);
    setPosts(deleteData);
  }

  function addPost() {
    // 상태 변경이란
    // 값을 변경하고 함수를 재실행하는 것
    setPosts([
      ...posts,
      {
        id: 5,
        title: '리액트 전개연산자',
        content: '전개연산자는 흩뿌리는 연산자',
      },
    ]);
  }

  async function download() {
    let res = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    let parseRes = await res.json();
    console.log(parseRes);
    setPosts(parseRes);
  }

  // 1.App이 최초 실행될 때 실행
  // 2. 그림이 다시 그려질 때 실행(조건 : 의존성)
  useEffect(() => {
    download();
  }, []);
  // 배열 [] 이 의존성인데 아무것도 안적으면 그림이 다시 그려지지 않음 / posts라고 적으면 posts 값이 바뀔 때만 다시 실행됨

  return (
    <div>
      <NavBar />

      <StyledBox>
        <div>{posts.name}</div>
        {/* <StyledRightBox>
          <button onClick={() => addPost()}>추가</button>
        </StyledRightBox> */}
        {/* {posts.map((post) => (
          <PostItem post={post} key={post.id} deleteById={deleteById} /> // deleteById의 파라미터 값을 모르기때문에 함수만 전달해줌
        ))} */}
      </StyledBox>
    </div>
  );
}

export default App;
