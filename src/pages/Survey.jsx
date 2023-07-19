import { useQuery } from 'react-query';
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Survey() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery('survey', async () => {
    const response = await axios.get('http://localhost:3001/survey');
    return response.data;
  });

  console.log('>>', data);

  const [page, setPage] = useState(1);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  const nextButtonHandler = (post) => {
    if (page !== 12) {
      setPage(page + 1);
    } else {
      return navigate('/result');
    }
  };

  return (
    <form>
      {data.map((post) => {
        if (page === post.id)
          return (
            <PageContainer key={post.id}>
              <p>{post.id}</p>
              <p>{post.type}</p>
              <p>질문 : {post.question}</p>
              <Button onClick={() => nextButtonHandler(post)}>A : {post.answer1}</Button>
              <Button onClick={() => nextButtonHandler(post)}>B : {post.answer2}</Button>
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
