import styled from "styled-components";
import CategoryList from "./component/categoryList";
import SuggestionList from "./component/suggestionList";

import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubmitBox from "./component/submitBox";

function WrtiePageIndex(){
  let todaySubject=useRef()
  let todayCategory=useRef()

  const dispatch=useDispatch();
  const today=()=>{

    dispatch({type:'category/CATEGORY',payload:todayCategory.current.innerText});
    dispatch({type:'input/INPUTTEXT',payload:todaySubject.current.innerText})

   
  }
    return(
     <Main>
        <div></div>
        <div>
          <Wrap>
            <h2>주제 선정</h2>
            <CategoryWrap>
              <Category onClick={today}>
                <div>오늘의 주제</div>
                <p ref={todayCategory}>과학</p>
                <span ref={todaySubject}>보안 목적 드론의 카메라의 사생활 침해 문제</span>

              </Category>
             <CategoryList />
            </CategoryWrap>
            <SubmitBox />
          </Wrap>
        </div>
        <div></div>
        </Main>
       
    )
}
export default WrtiePageIndex;
 
let Main=styled.main`
display: grid;
grid-template-columns: 25% 50% 25%;
`
let Wrap=styled.div`
margin-top: 70px;
& h2{
    margin-bottom: 30px;
    margin-left:30px
}
`
let CategoryWrap=styled.div`
box-shadow: 3px 9px 5px rgba(0, 0, 0, 0.2), 11px 16px 2px rgba(0, 0, 0, 0.02);
border-radius: 10px;
padding: 45px;
width: 900px;
margin: 0 auto;
cursor: pointer;
`
let Category=styled.div`
display: flex;
&>div{
    background-color: black;
    border-radius: 18px;
    width: 200px;
    height: 40px;
    text-align: center;
    color: white;
    font-size: 25px;
    margin-right:30px ;
    margin-bottom:30px;
    cursor: pointer;
  
}
&>p{
    font-weight: bold;
    margin-right: 5px;
    font-size: 25px; 
}
&>span{
    font-size: 25px;
}
`
