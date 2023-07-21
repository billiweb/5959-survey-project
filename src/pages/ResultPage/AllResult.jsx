import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { styled } from 'styled-components';
import reset from './icons8-reset-64 (1).png';
import { useDispatch } from 'react-redux';
import { resetCount } from '../../redux/modules/countSlice';
import { useNavigate } from 'react-router';

const AllResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery('mbti', async () => {
    const response = await axios.get('https://aquatic-respected-tuba.glitch.me/mbti');
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  const newData = data ? Object.values(data) : [];

  const resetButton = () => {
    dispatch(resetCount());
    navigate('/survey/1');
  };

  return (
    <>
      <All>
        {newData.map((mbti) => (
          <PostContainer key={mbti.mbti}>
            <h1>{mbti.mbti}</h1>
            <h3>{mbti.title}</h3>
            <StImage src={mbti.img} alt="이미지 없음" />
            <TextTag>{mbti.body}</TextTag>
          </PostContainer>
        ))}
      </All>
      <ResetButton onClick={() => resetButton()}>
        <img src={reset} alt="reset" />
      </ResetButton>
    </>
  );
};

export default AllResult;
const All = styled.div`
  flex-direction: row;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 1100px;
  margin: 0 auto;
`;
const PostContainer = styled.form`
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  box-shadow: 1px 1px 5px gray;

  border-radius: 80px;
  background-color: a1bde4f;
  margin-bottom: 15px;
  width: 600px;
  height: 380px;
  margin-right: 30px;
  margin-left: -20px;
`;
const StImage = styled.img`
  justify-content: center;
  margin: 10px auto;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const TextTag = styled.p`
  width: 450px;
  display: flex;
  margin: 0 auto;
  height: 50px;
  /* background-color: green; */
`;
const ResetButton = styled.button`
  border-radius: 40px;
  border: none;
  background-color: transparent;
  display: flex;
  margin: 40px 50% 0px 50%;
  cursor: pointer;
  &:hover {
    transform: rotate(45deg);
    transition-duration: 2s;
  }
`;
