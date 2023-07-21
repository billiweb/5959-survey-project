import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Main = () => {
  const navigate = useNavigate();

  return (
    <MainAll>
      <WhoAmI>나는 어떤 개발자?</WhoAmI>
      <StartBtn
        onClick={() => {
          navigate('/login');
        }}
      >
        시작하기
      </StartBtn>
    </MainAll>
  );
};

export default Main;

const MainAll = styled.div`
  width: 800px;
  height: 300px;
  z-index: 9999;
  margin: 35px auto 0px auto;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  box-shadow: 1px 1px 5px gainsboro;
`;

const WhoAmI = styled.h1`
  color: gray;
`;

const StartBtn = styled.button`
  padding: 10px 30px 10px 30px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: pink;
  cursor: pointer;
  border-radius: 10px;
`;
