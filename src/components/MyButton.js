import React from 'react';
import styled from 'styled-components';

function MyButton(props) {
  const { text, color } = props;

  const StyledPostButton = styled.button`
    background-color: ${color || 'orange'};
    height: 30px;
    border: none;
    box-shadow: 0 3px 3px 0 gray;
    margin-left: 3px;
    cursor: pointer;
  `;

  return <StyledPostButton> {text}</StyledPostButton>;
}

export default MyButton;
