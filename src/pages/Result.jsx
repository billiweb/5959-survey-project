import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const Result = () => {
  const { data, isLoading, error } = useQuery('mbti', async () => {
    const response = await axios.get('http://localhost:3001/mbti');
    return response.data;
  });

  const newData = data ? Object.values(data) : [];

  const EI = useSelector(function (state) {
    return state.countSlice[0].countEI;
  });
  const NS = useSelector(function (state) {
    return state.countSlice[0].countNS;
  });
  const FT = useSelector(function (state) {
    return state.countSlice[0].countFT;
  });
  const PJ = useSelector(function (state) {
    return state.countSlice[0].countPJ;
  });

  let list = '';
  if (EI < 2) {
    list += 'E';
  } else {
    list += 'I';
  }

  if (NS < 2) {
    list += 'N';
  } else {
    list += 'S';
  }
  if (FT < 2) {
    list += 'F';
  } else {
    list += 'T';
  }

  if (PJ < 2) {
    list += 'P';
  } else {
    list += 'J';
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <PageContainer>
      {newData
        .filter((mbti) => list === mbti.mbti)
        .map((mbti) => {
          return (
            <div key={mbti.mbti}>
              <h3>
                {mbti.mbti} - {mbti.title}
              </h3>
              <p>{mbti.body}</p>
            </div>
          );
        })}
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

// E : 0,1
// I : 2,3

// N : 0,1
// S : 2,3

// F : 0,1
// T : 2,3

// P : 0,1
// J : 2,3
