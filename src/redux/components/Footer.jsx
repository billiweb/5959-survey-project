import React from 'react';
import { styled } from 'styled-components';

//   #footer_img {
//     width: 170px;
//     height: 50px;
//     margin-bottom: 13px;
//   }
const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 160px;
  font-size: 13px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: pink;
  color: gray;
`;
const Ul = styled.ul`
  list-style: none;
  border-left: 1px solid #c6c6c6;

  text-decoration: none;
  color: gray;
  display: flex;
  flex-direction: row;
`;
const Li = styled.li`
  float: left;
  margin-right: 20px;
`;
function Footer() {
  return (
    <FooterContainer>
      <Ul>
        <Li>회사소개</Li>
        <Li>제휴/광고/부대사업 문의</Li>
        <Li>이용약관</Li>
        <Li>위치기반서비스 이용약관</Li>
        <Li>개인정보처리방침</Li>
        <Li>윤리경영</Li>
      </Ul>
      <address>
        <p>
          <div>🏠게더시 내일배움캠프구 리액트로 5959</div>
          <div>5️⃣9️⃣5️⃣9️⃣조</div>
          <div>
            조장 : 송희진 <br />
            조원 : 김혜민, 최다연, 한희, 홍서영
          </div>
        </p>
        {/* <p>Copyright 2023 by Naebaecamp Inc. All right reserved</p> */}
      </address>
    </FooterContainer>
  );
}

export default Footer;
