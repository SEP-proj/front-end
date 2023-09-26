import styled from "styled-components";
import Writing from "./componenet/writing";
import ChatContainer from "../../commend/chatContainer";
import { ment } from "../writePage/component/submitBox";

import { useEffect, useReducer, useState } from "react";
import LightChatBot from "./componenet/lightChatBot";

import { useSelector } from "react-redux";

import FinalWritePageIndex from "../finalWritePage/finalWritePageIndex";



function WriteMainPageIndex() {
  const [light, setLight] = useState(false);



let category=useSelector((state)=>state.categoryReducer)
let changeInputplacehold = useSelector((state) => state.inputReducer);
const [next,setNext]=useState(false)

  return (
    <Main>
      {next?<FinalWritePageIndex category={category}/>:<MainWrap>
        <div></div>
        <div>
          <Subject>
            <p>{category}</p>
            <span>{changeInputplacehold}</span>
          </Subject>
          <Writing setNext={setNext} />
        </div>
        <LightChatBot light={light} setLight={setLight} />
      </MainWrap>}
      <ChatContainer light={light}/>
    </Main>
  );
}
export default WriteMainPageIndex;
let Main = styled.main`
  display: grid;
  grid-template-columns: 70% 30%;
`;
let MainWrap = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  text-align: center;

`;
let Subject = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 100px;
  & > p {
    background-color:#05D0B8;
    color: white;
    width: 120px;
    height: 40px;
    font-size: 20px;
    border-radius: 20px;
   padding-top:10px;
  }
  & > span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
`;
