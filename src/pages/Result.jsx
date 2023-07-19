import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const Result = () => {
  const countEI = useSelector(function (state) {
    return state.countSlice[0].countEI;
  });
  const countNS = useSelector(function (state) {
    return state.countSlice[0].countNS;
  });
  const countFT = useSelector(function (state) {
    return state.countSlice[0].countFT;
  });
  const countPJ = useSelector(function (state) {
    return state.countSlice[0].countPJ;
  });

  console.log('EI', countEI, countNS, countFT, countPJ);

  return (
    <PageContainer>
      <h3>INTJ - 용의주도한 전략가</h3>
      <p>목표 지향적. Github에 잔디 심어지는 모습을 보면서 큰 행복감을 느낌. 혼자 있는 것을 좋아함.</p>
      <Button>공유하기</Button>
    </PageContainer>
  );
};

export default Result;

const PageContainer = styled.div`
  border: 1px solid black;
  width: 350px;
  padding: 10px;
  margin: 20px auto;
  justify-content: center;
`;

const Button = styled.button`
  width: 90%;
  margin: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
