import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/modules/userSlice';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LoginAll>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(
            addUser({
              name,
              email
            })
          );
          navigate('/survey/1');
        }}
      >
        <NicknameInput
          placeholder="닉네임"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <EmailInput
          placeholder="e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <LoginBtn>시작하기</LoginBtn>
      </Form>
    </LoginAll>
  );
};

export default Login;

const LoginAll = styled.div`
  width: 800px;
  height: 500px;
  /* z-index: 9999; */
  position: fixed;
  margin-top: 100px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 1px 1px 5px gray;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NicknameInput = styled.input`
  padding: 20px;
  font-size: 20px;
  width: 300px;
  border: 2px solid gray;
  border-radius: 10px;
`;
const EmailInput = styled.input`
  padding: 20px;
  font-size: 20px;
  width: 300px;
  margin-top: 40px;
  border: 2px solid gray;
  border-radius: 10px;
`;

const LoginBtn = styled.button`
  padding: 20px 40px 20px 40px;
  margin-top: 40px;
  font-size: 20px;
  background-color: pink;
  border-radius: 10px;
  border: 2px solid gray;
  color: white;
`;
