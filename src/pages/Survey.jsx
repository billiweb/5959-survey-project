import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCountEI } from '../redux/modules/countSlice';

function Survey() {
  const countEI = useSelector(function (state) {
    return state.countSlice.countEI;
  });
  const countNS = useSelector(function (state) {
    return state.countSlice.countNS;
  });
  const countFT = useSelector(function (state) {
    return state.countSlice.countFT;
  });
  const countPJ = useSelector(function (state) {
    return state.countSlice.countPJ;
  });
  // console.log('>>>>', countData);

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
    if (page !== 12) {
      setPage(page + 1);
    } else {
      return navigate('/result');
    }
    dispatch(addCountEI(1));
  };

  const nextButtonStayHandler = (post) => {
    if (page !== 12) {
      setPage(page + 1);
    } else {
      return navigate('/result');
    }
  };

  // const testButton = (e) => {
  //   dispatch(addCountEI(1));
  // };

  return (
    <form>
      {newData.map((post) => {
        if (page == post.id)
          return (
            <PageContainer key={post.id}>
              <p>{post.id}</p>
              <p>{post.type}</p>
              <p>질문 : {post.question}</p>
              <Button onClick={() => nextButtonPlusHandler(post)}>A : {post.answer1}</Button>
              <Button onClick={() => nextButtonStayHandler(post)}>B : {post.answer2}</Button>
              <p>counEI : {countEI}</p>
              <p>counNS : {countNS}</p>
              <p>counFT : {countFT}</p>
              <p>counPJ : {countPJ}</p>
              {/* <button onClick={testButton}>Test</button> */}
            </PageContainer>
          );
      })}
    </form>
  );
}

export default Survey;

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
