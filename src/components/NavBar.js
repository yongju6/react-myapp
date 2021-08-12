import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  border: 1px solid black;
`;
const StyledMenu = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

function NavBar(props) {
  return (
    <StyledNavBar>
      <StyledMenu>
        <li>HOME</li>
        <li>글쓰기</li>
      </StyledMenu>
    </StyledNavBar>
  );
}

export default NavBar;
