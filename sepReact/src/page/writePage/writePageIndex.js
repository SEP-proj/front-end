import styled from "styled-components";
import CategoryList from "./component/categoryList";
import SuggestionList from "./component/suggestionList";
import SubmitBox from "./component/submitBox";
import { useState } from "react";

function WrtiePageIndex(){
const [recoList,setRecoList]=useState('');
    return(
     <Main>
        <div></div>
        <div>
          <Wrap>
            <h2>카테고리</h2>
            <CategoryWrap>
              <Category>
                <div>오늘의 주제</div>
                <p>과학</p>
                <span>보안 목적 드론의 카메라의 사생활 침해 문제</span>
              </Category>
             <CategoryList recoList={recoList} setRecoList={setRecoList}/>
            </CategoryWrap>
            <SubmitBox recoList={recoList} />
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
margin-top: 20px;
& h2{
    margin-bottom: 20px;
}
`
let CategoryWrap=styled.div`
border: 1px solid black;
border-radius: 10px;
padding: 45px;
width: 900px;
`
let Category=styled.div`
display: flex;
&>div{
    background-color: #FFBD12;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    text-align: center;
    color: white;
    font-size: 25px;
    margin-right:10px ;
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
