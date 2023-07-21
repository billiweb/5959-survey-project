import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { styled } from 'styled-components';
const AllResult = () => {
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

  return (
    <>
      {newData.map((mbti) => (
        <PostContainer key={mbti.mbti}>
          <h1>{mbti.mbti}</h1>
          <h3>{mbti.title}</h3>
          <StImage src={mbti.img} alt="이미지 없음" />
          <p>{mbti.body}</p>
        </PostContainer>
      ))}
    </>
  );
};

export default AllResult;

const PostContainer = styled.form`
  /* display: flex; */
  justify-content: center;
  /* flex-direction: column; */
  text-align: center;
`;
const StImage = styled.img`
  justify-content: center;
  margin: 10px auto;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
