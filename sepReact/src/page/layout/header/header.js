import { GoogleLogin } from "@react-oauth/google";
import styled from "styled-components";
import GoogleLoginBtn from "../../../commend/googleLoginBtn";
import { useState } from "react";
import LoginModal from "./componenet/loginModal";
function Header() {
  const [clickFlag,setClickFlag]=useState(false);
  const falgClick=()=>{
    setClickFlag(true)
  }
  return (
    <HeadeWrap>
      <h1>Meta Training</h1>

      <Menu>
        <li>이용 안내</li>
        <li>글 작성하기</li>
        <li>커뮤니티</li>
      </Menu>

      {/* <LoginBtn onClick={falgClick}>로그인</LoginBtn> */}
      <GoogleLoginBtn />
      {/* {clickFlag?<LoginModal/>:""} */}
    </HeadeWrap>
  );
}
export default Header;
let HeadeWrap = styled.header`
  height: 100%;
  text-align: center;
  background-color: #a2d4f7;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
`;
let Menu = styled.ul`
  display: flex;
  font-size: 30px;
  color: white;
  justify-content: center;
  & li {
    margin-right: 80px;
    text-align: center;
  }
`;
let LoginBtn = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: white;
  color: #787878;
  font-size: 18px;
  
`;
