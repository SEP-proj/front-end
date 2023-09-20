import { GoogleLogin } from "@react-oauth/google";
import styled from "styled-components";
import GoogleLoginBtn from "../../../commend/googleLoginBtn";
import { useState } from "react";
import LoginModal from "./componenet/loginModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const [clickFlag,setClickFlag]=useState(false);
  const flag=useSelector((state)=>state.headerReducer);
  const dispatch=useDispatch();
  const falgClick=()=>{
    setClickFlag(true)
  }
  const navigation=useNavigate();
  const clickHome=()=>{
    navigation("/")
  }
  const clickWriting=()=>{
    navigation("/writePage")
   dispatch({type:'FLAG',payload:true});
  }
  const clickCommu=()=>{
    navigation("/community")

  }
  return (
    <HeadeWrap flag={flag}>
      <h1 onClick={clickHome}>Meta Training</h1>

      <Menu flag={flag}>
        <li>이용 안내</li>
        <li onClick={clickWriting}>글 작성하기</li>
        <li onClick={clickCommu}>커뮤니티</li>
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
  background-color:#05D0B8;
  border-bottom:${props=>props.flag?'1px solid black':'none'} ;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  & h1{
    cursor:pointer;
  }
`;
let Menu = styled.ul`
  display: flex;
  font-size: 30px;
  color: white;
  justify-content: center;
  & li {
    margin-right: 80px;
    text-align: center;
    cursor:pointer;
    color:'white';
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
