import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCountEI } from '../redux/modules/countSlice';
import { auth } from '../firebase';

function Survey() {
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
  console.log('>>>>', countEI);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery('survey', async () => {
    const response = await axios.get('https://aquatic-respected-tuba.glitch.me/survey');
    return response.data;
  });

  // console.log('>>', data);

  const newData = data ? Object.values(data) : [];
  // console.log('it new', newData);

  const [page, setPage] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  const nextButtonPlusHandler = (post) => {
    dispatch(addCountEI(post.mbti));
    if (page !== 12) {
      setPage(page + 1);
    } else {
      return navigate(
        '/result'
        // {
        //   state: { EI: countEI, NS: countNS, FT: countFT, PJ: countPJ }
        // }
      );
    }
  };

  const userEmail = auth.currentUser.email;
  const name = userEmail.split('@')[0];

  const nextButtonStayHandler = (post) => {
    if (page !== 12) {
      setPage(page + 1);
    } else {
      return navigate('/result');
    }
  };

  return (
    <form>
      {newData.map((post) => {
        if (page == post.id)
          return (
            <PageContainer key={post.id}>
              <h3>{name} 님의 테스트 진행중 ...</h3>
              <ProgressBar value={post.id * 8.33} max="100"></ProgressBar>
              <p>{post.type}</p>
              <p>질문 : {post.question}</p>
              <Button onClick={() => nextButtonPlusHandler(post)}>A : {post.answer1}</Button>
              <Button onClick={() => nextButtonStayHandler(post)}>B : {post.answer2}</Button>
            </PageContainer>
          );
      })}
    </form>
  );
}

export default Survey;

const PageContainer = styled.div`
  width: 800px;
  height: 500px;
  position: fixed;
  top: 40%;
  left: 50%;
  margin-top: 20px;
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
  width: 90%;
  margin: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ebebeb;
`;

const ProgressBar = styled.progress`
  width: 90%;
`;
