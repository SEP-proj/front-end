import styled from "styled-components";
import Writing from "./componenet/writing";
import ChatContainer from "../../commend/chatContainer";
import { ment } from "../writePage/component/submitBox";

import { useEffect, useReducer, useState } from "react";
import LightChatBot from "./componenet/lightChatBot";
import { InputReducer } from "../../reducer/inputReducer";

let flag = false;
let intervalTest;

// function onChangeIntro() {
//   if (flag) {
//     clearInterval(intervalTest);

//     console.log("interver ㄲ트");

//     flag = false;

//     return;
//   }
//   setTimeout(() => {
//     intervalTest = setInterval(() => {
//       console.log("1초");
//     }, 1000);
//   }, 2000);

//   flag = true;
// }
// setTimeout(() => {

// tm=  setInterval(() => {
//   console.log('set light')
//     setLight(!light)
//   }, 1000);
// }, 6000);}

function WriteMainPageIndex() {
  const [light, setLight] = useState(false);
  let tm = null;
  // const onChangeIntro=(e)=>{
  // clearInterval(tm)
  // }
  //  useEffect(()=>{

  //  },[])
// const [state,dispatch]=useReducer(InputReducer,{value:''})
//  ment=state;

  return (
    <Main>
      <MainWrap>
        <div></div>
        <div>
          <Subject>
            <p>환경</p>
            <span>{ment.value}</span>
          </Subject>
          <Writing
            // onChangeIntro={onChangeIntro}
       
          />
        </div>
        <LightChatBot light={light} />
      </MainWrap>
      <ChatContainer />
    </Main>
  );
}
export default WriteMainPageIndex;
let Main = styled.main`
  display: grid;
  grid-template-columns: 80% 20%;
`;
let MainWrap = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  text-align: center;
  padding-left: 10%;
`;
let Subject = styled.div`
  display: flex;
  margin-top: 80px;
  margin-left: 100px;
  & > p {
    background-color: pink;
    color: white;
    width: 80px;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
  }
  & > span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;
