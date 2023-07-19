import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
// import { useRef } from 'react';

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

  // // url 복사
  // const copyUrlRef = useRef(null);

  // const copyUrl = () => {
  //   const currentUrl = window.location.href; // 현재 페이지 URL 가져오기
  //   const additionalPath = `detail/`; // 추가할 경로

  //   const newUrl = currentUrl + additionalPath; // 현재 URL에 추가 경로를 붙임
  //   copyUrlRef.current.value = newUrl; // 복사할 URL을 참조하는 input 요소에 새로운 URL 설정

  //   copyUrlRef.current.select();
  //   document.execCommand('copy');

  //   alert('링크가 복사되었습니다.');
  // };

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
      <Button>
        {/* onClick={copyUrl}> */}
        <Icon src="https://cdn-icons-png.flaticon.com/128/2550/2550207.png" alt="공유하기" />
        공유하기
      </Button>
      {/* <TextArea readOnly ref={copyUrlRef} value={window.location.href}></TextArea> */}
    </PageContainer>
  );
};

export default Result;

const PageContainer = styled.div`
  width: 800px;
  height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;

  box-shadow: 1px 1px 5px gray;
  font-size: 20px;
`;

const Button = styled.button`
  width: 30%;
  padding: 20px auto 20px auto;
  font-size: 20px;
  background-color: pink;
  border: 2px solid gray;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

// E : 0,1
// I : 2,3

// N : 0,1
// S : 2,3

// F : 0,1
// T : 2,3

// P : 0,1
// J : 2,3
