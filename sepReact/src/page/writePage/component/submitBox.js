import styled from "styled-components";

import rightArrow from '../../../asset/img/rightArrow.png'

import { Link } from "react-router-dom";

import { next } from "../../../api/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function SubmitBox({recoList,suggestion}) {
  let changeInputplacehold = useSelector((state) => state.inputText);
  let recommendList=useSelector((state)=>state.recommendList)
const [inputWrite,setInputWrtie]=useState('')
const dispatch=useDispatch();
const changeInput=(e)=>{
  setInputWrtie(e.target.value)

}

const ClickNext=()=>{
  console.log('직접쓴',inputWrite)
  
  next(changeInputplacehold).then((res)=>{
    console.log(res)
    dispatch({type:'input/INPUTTEXT',payload:inputWrite})

  })
}
const valueOnclick = (e) => {
  console.log(e.target.innerText);

  dispatch({type:'input/INPUTTEXT',payload:e.target.innerText});
  console.log("inputListText로바뀐",changeInputplacehold)
};
  return (
    <SubmitBoxContents>
      <CategorytInput
        type="text"
        placeholder={changeInputplacehold}
  
        onChange={changeInput}
      />
      <Link to='/writeMain'><ArrowImg src={rightArrow} onClick={ClickNext} alt="" /></Link>
      <div>
      <SuggestionUl >
        {recommendList.map((list) => (
          <li onClick={valueOnclick}>{list}</li>
        ))}
      </SuggestionUl>
    </div>
    </SubmitBoxContents>
  );
}
export default SubmitBox;

let SubmitBoxContents = styled.div`
  text-align: center;
  & > img {
    position: relative;
    top: 10px;
    left: -50px;
    width: 30px;
    cursor: pointer;
  }
`;
let CategorytInput = styled.input`
  width: 600px;
  height: 50px;
  border-radius: 10px;
  margin-top: 50px;
  &::placeholder {
    padding-left: 20px;
    margin-top: 5px;
    font-size: 20px;
  }
`;
let ArrowImg=styled.img`
position: relative;
top: 10px;
left: -50px;
width: 30px;
cursor: pointer;
`

const SuggestionUl = styled.ul`
  text-align: left;
  /* display: ${(props) => (props.suggestion ? "block" : "none")}; */
  display: block;
  width: 450px;
  margin: 40px auto;
  border: 1px solid black;
  border-radius: 10px;
  & > li {
    list-style: square;
    font-size: 16px;
    font-weight: bold;
    margin: 30px;
    margin-left: 50px;
    cursor: pointer;
  }
`;
