import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCountEI } from '../redux/modules/countSlice';

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
    const response = await axios.get('http://localhost:3001/survey');
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
              {/* <p>{post.id}</p> */}
              <p>{post.type}</p>
              {/* <p>{post.mbti}</p> */}
              <p>질문 : {post.question}</p>
              <Button onClick={() => nextButtonPlusHandler(post)}>A : {post.answer1}</Button>
              <Button onClick={() => nextButtonStayHandler(post)}>B : {post.answer2}</Button>
              <p>counEI : {countEI}</p>
              <p>counNS : {countNS}</p>
              <p>counFT : {countFT}</p>
              <p>counPJ : {countPJ}</p>
            </PageContainer>
          );
      })}
    </form>
  );
}

export default Survey;

const PageContainer = styled.div`
  width: 800px;
  height: 700px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: 100px;
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
