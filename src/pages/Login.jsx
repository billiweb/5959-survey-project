import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/modules/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <form
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
        <input
          placeholder="닉네임"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>시작하기</button>
      </form>
    </div>
  );
};

export default Login;
