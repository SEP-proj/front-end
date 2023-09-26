import styled from "styled-components";

import rightArrow from '../../../asset/img/rightArrow.png'

import { Link } from "react-router-dom";

import { next, recommendCategory } from "../../../api/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function SubmitBox({recoList,suggestion}) {
  let changeInputplacehold = useSelector((state) => state.inputReducer);
  let recommendList=useSelector((state)=>state.recommendList)
  let category=useSelector((state)=>state.categoryReducer)
  const memeberId=useSelector((state)=>state.userIdReducer)
const [inputWrite,setInputWrtie]=useState('')
const dispatch=useDispatch();
const changeInput=(e)=>{
  setInputWrtie(e.target.value)
  dispatch({type:'input/INPUTTEXT',payload:inputWrite})
  dispatch({ type: "category/CATEGORY", payload:'' });
}

const ClickNext=()=>{
  console.log('직접쓴',inputWrite)
  
if(category==''){
  console.log('카테고리 값없음')
  console.log(changeInputplacehold)
  recommendCategory(changeInputplacehold).then((res)=>{
    console.log(res.data.category)
    dispatch({type:'user/USERID',payload:res.data.id})
    dispatch({type:'category/CATEGORY',payload:res.data.category})
  })
}else{
console.log('카테고리 값있음')
  next(changeInputplacehold,category,memeberId).then((res)=>{
    console.log(res.data)
    dispatch({type:'user/USERID',payload:res.data.id})
    dispatch({type:'input/INPUTTEXT',payload:res.data.subject});
  })
}
}
const valueOnclick = (e) => {
  console.log(e.target.innerText);
  dispatch({ type: "category/CATEGORY", payload:'' });
  dispatch({type:'input/INPUTTEXT',payload:e.target.innerText});
  
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
   font-size: 20px;
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
    font-size: 20px;
    font-weight: bold;
    margin: 30px;
    margin-left: 50px;
    cursor: pointer;
  }
`;
