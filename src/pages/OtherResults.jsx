import React from 'react';
import { useLocation } from 'react-router-dom';

const OtherResults = () => {
  const location = useLocation();
  const { currentMBTI, allResults } = location.state;

  const filteredResults = allResults.filter((mbti) => mbti.mbti !== currentMBTI);

  return (
    <div>
      <h2>다른 결과들</h2>
      {filteredResults.map((mbti) => (
        <div key={mbti.mbti}>
          <h3>
            {mbti.mbti} - {mbti.title}
          </h3>
          <p>{mbti.body}</p>
          <img src={mbti.img} alt="이미지 없음" />
        </div>
      ))}
    </div>
  );
};

export default OtherResults;
