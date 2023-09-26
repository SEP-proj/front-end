import styled from "styled-components";

import { useState } from "react";
import logo from '../../../asset/img/logo.png'

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginBtn from "./componenet/login";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constants";
function Header({authenticated,setAuthenticated}) {
  const [clickFlag, setClickFlag] = useState(false);
  const flag = useSelector((state) => state.headerReducer);
  const dispatch = useDispatch();
  const falgClick = () => {
    setClickFlag(true);
  };
  const navigation = useNavigate();
  const clickHome = () => {
    navigation("/");
  };
  const clickWriting = () => {
    navigation("/writePage");
    dispatch({ type: "FLAG", payload: true });
  };
  const clickCommu = () => {
    navigation("/community");
  };
  const handleLogout=()=> {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setAuthenticated(false)


    console.log("로그아웃 됨");
  }

  return (
    <HeadeWrap flag={flag}>
      <h1 onClick={clickHome}><img src={logo} alt="" /></h1>

      <Menu flag={flag}>
        <li>이용 안내</li>
        <li onClick={clickWriting}>글 작성하기</li>
        <li onClick={clickCommu}>커뮤니티</li>
      </Menu>
      {authenticated? <Logout onClick={handleLogout}>로그아웃</Logout> :<LoginBtn authenticated={authenticated}/>}
      
    </HeadeWrap>
  );
}
export default Header;
let HeadeWrap = styled.header`
  height: 100%;
  text-align: center;
  background-color: #05d0b8;
  border-bottom: none;

  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  & h1 {
    cursor: pointer;
  }
  & h1>img{
    width: 200px;
    margin-top: 20px;
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
    cursor: pointer;
    color: "white";
    font-weight: bold;
  }
`;
let Logout=styled.a`
 width: 130px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: white;
  color: #787878;
  font-size: 18px;
  padding-top:11px ;
  font-weight: bold;
`