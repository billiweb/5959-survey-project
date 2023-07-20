import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { styled } from 'styled-components';
import { resetCount } from '../redux/modules/countSlice';
import { auth } from '../firebase';

// import { useRef } from 'react';

const Result = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery('mbti', async () => {
    const response = await axios.get(`${process.env.REACT_APP_GLITCH_URL}`);
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

  const userEmail = auth.currentUser.email;
  const name = userEmail.split('@')[0];

  const resetButton = () => {
    dispatch(resetCount());
    navigate('/survey/1');
  };

  return (
    <PageContainer>
      {newData
        .filter((mbti) => list === mbti.mbti)
        .map((mbti) => {
          return (
            <PostContainer key={mbti.mbti}>
              <h1>{mbti.mbti}</h1>
              <StImage src={mbti.img} alt="이미지 없음" />
              <h3>
                {name} 님은 "{mbti.title}" 입니다 😀
              </h3>
              <p>{mbti.body}</p>
            </PostContainer>
          );
        })}
      <ButtonContainer>
        <Button>
          <Icon src="https://cdn-icons-png.flaticon.com/128/2550/2550207.png" alt="공유하기" />
          공유하기
        </Button>
        <Button onClick={() => resetButton()} style={{ marginLeft: '20px' }}>
          다시하기
        </Button>
        {/* </Link> */}
      </ButtonContainer>
    </PageContainer>
  );
};

export default Result;

const PageContainer = styled.div`
  width: 800px;
  height: 700px;
  position: fixed;
  margin-top: 20px;
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
  width: 200px;
  padding: 20px auto 20px auto;
  font-size: 20px;
  background-color: pink;
  border: 2px solid gray;
`;

const Icon = styled.img`
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 15px;
`;

const PostContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 100px;
`;

const StImage = styled.img`
  justify-content: center;
  margin: 10px auto;
  padding: 20px;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
