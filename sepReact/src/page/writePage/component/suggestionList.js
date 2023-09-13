import { useReducer } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import {InputReducer,state} from "../../../reducer/inputReducer";

function SuggestionList({dispatchValue}){
    const suggest=[
        {
            content:'국가 안전과 개인 프라이버시 간의 갈등'
        },
        {
            content:'드론 카메라 사용에 대한 윤리적 고려'
        },
        {
            content:'필수적 안보수단,위협이 될 수 있다'
        },
        {
            content:'사생활침해 없는 사용이 가능한가'
        },
    ]
   
    // const [state,dispatch]=useReducer(InputReducer,{value:''})
    const valueOnclick=(e)=>{
        dispatchValue(e.target.innerText);
    
        
    }
    return(
        <div>
        <SuggestionUl>
         {suggest.map((suggest)=><li onClick={valueOnclick}>{suggest.content}</li>)}
        </SuggestionUl>
      </div>
    )
}
export default SuggestionList;

const SuggestionUl=styled.ul`
text-align: left;
width: 450px;
margin: 40px auto;
border: 1px solid black;
border-radius: 10px;
& >li{
    list-style: square;
    font-size: 16px;
    font-weight: bold;
    margin :30px;
    margin-left: 50px;
    cursor:pointer;
}
`