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
  /* margin-top: 200px;
  margin-left: 30%;

  background-color: green;
  width: 500px; */
  width: 800px;
  height: 300px;
  z-index: 9999;
  position: fixed;
  margin-top: 100px;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
  /* border: 1px solid gainsboro; */

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
