import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Main from '../pages/Main';
import Result from '../pages/ResultPage/Result';
import Survey from '../pages/Survey';
import Layout from '../redux/components/Layout';
import Login from '../pages/LoginPage/Login';
import Signup from '../pages/LoginPage/Signup';
import AllResult from '../pages/ResultPage/AllResult';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/survey/:id" element={<Survey />} />
          <Route path="/result" element={<Result />} />
          <Route path="/allresult" element={<AllResult />} />
          <Route
            path="*"
            element={
              <>
                <div>없는 페이지입니다.</div>
                <Link to="/">홈으로 이동</Link>
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
