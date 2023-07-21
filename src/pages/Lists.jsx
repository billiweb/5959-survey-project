import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const Lists = () => {
  const { data, isLoading, error } = useQuery('mbti', async () => {
    const response = await axios.get('https://aquatic-respected-tuba.glitch.me/mbti');
    return response.data;
  });

  const newData = data ? Object.values(data) : [];

  return (
    <div>
      {newData.map((mbti) => {
        return (
          <div>
            <p>{mbti.mbti}</p>
            <img src={mbti.img} alt="이미지 없음" />
            <p>{mbti.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
