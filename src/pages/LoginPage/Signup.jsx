import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { updateCurrentUser } from 'firebase/auth';
import LoginDiv, { input } from './Loginpage.styled';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [PW, setPW] = useState('');
  const [PWConfirm, setPWConfirm] = useState('');

  const signupFunc = async (event) => {
    event.preventDefault();

    if (PW !== PWConfirm) return alert('비밀번호와 비밀번호 확인이 다릅니다!');
    if (PW.length < 6) return alert('비밀번호 6자리 이상 입력 해주세요!');

    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, Email);
      if (signInMethods.length > 0) {
        return alert('이미 가입된 이메일 주소입니다.');
      }
      // 유저 email, pw 생성
      const userCredential = await createUserWithEmailAndPassword(auth, Email, PW);
      const user = userCredential.user;

      alert('회원가입 완료!');
      navigate('/login');
      // Dispatch
      dispatch(updateCurrentUser(user));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error with signUp', errorCode, errorMessage);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <LoginDiv>
      <form>
        <span>Sign Up</span>
        <br></br>
        <label>EMAIL</label>
        <input
          type="email"
          placeholder="이메일을 입력하세요."
          value={Email}
          name="Email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        ></input>
        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="비밀번호"
          value={PW}
          name="password"
          onChange={(e) => setPW(e.currentTarget.value)}
        ></input>
        <input
          type="password"
          placeholder="비밀번호확인"
          value={PWConfirm}
          name="PWConfirm"
          onChange={(e) => setPWConfirm(e.currentTarget.value)}
        ></input>
        <br></br>
        <button onClick={signupFunc}> 회원가입</button>
        <br></br>
        <p>이미 회원이신가요?😀</p> <button onClick={handleLogin}>로그인</button>
      </form>
    </LoginDiv>
  );
}

export default Signup;
