import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <StHeader>
      <Logo>오구오구</Logo>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 75px;
  padding: 1rem;
  background-color: pink;
  /* background-color: transparent; */

  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 1px 1px 5px gray;
`;
const Logo = styled.h1`
  font-size: 50px;
  color: white;
  cursor: pointer;
`;
