import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>나는 어떤 개발자?</h2>
      <button
        onClick={() => {
          navigate('/login');
        }}
      >
        시작하기
      </button>
    </div>
  );
};

export default Main;
