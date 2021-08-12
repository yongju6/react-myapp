import React from 'react';
import styled from 'styled-components';

const StyleBox = styled.div`
  display: flex;
  gap: 10px;
  background-color: navy;
`;

const StyleItem = styled.div`
  background-color: skyblue;
  width: 30%;
  height: 50px;
  margin-bottom: 5px;
`;

function Center(props) {
  console.log(props);
  return (
    <StyleBox>
      <StyleItem>
        {props.num}, {props.haha}
      </StyleItem>
      <StyleItem>{props.haha}</StyleItem>
      <StyleItem>{props.haha}</StyleItem>
    </StyleBox>
  );
}

export default Center;
