import styled from "styled-components";
import CategoryList from "./component/categoryList";
import SuggestionList from "./component/suggestionList";

import { useState } from "react";
import { useSelector } from "react-redux";
import SubmitBox from "./component/submitBox";

function WrtiePageIndex(){
const [recoList,setRecoList]=useState([]);
const [suggestion,setSuggestion]=useState(false);
let category=useSelector((state)=>state.categoryReducer)
let inputText = useSelector((state) => state.inputText);
    return(
     <Main>
        <div></div>
        <div>
          <Wrap>
            <h2>주제 선정</h2>
            <CategoryWrap>
              <Category>
                <div>오늘의 주제</div>
                <p>과학</p>
                <span>보안 목적 드론의 카메라의 사생활 침해 문제</span>

              </Category>
             <CategoryList setRecoList={setRecoList} setSuggestion={setSuggestion} recoList={recoList} category={category}/>
            </CategoryWrap>
            <SubmitBox recoList={recoList} suggestion={suggestion} inputText={inputText}/>
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
