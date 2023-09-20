import styled from "styled-components";
import SuggestionList, { categoryTitle } from "./suggestionList";
import rightArrow from '../../../asset/img/rightArrow.png'
import { useReducer } from "react";
import { Link } from "react-router-dom";
import {InputReducer} from "../../../reducer/inputReducer";
import { next } from "../../../api/api";
import { useSelector } from "react-redux";


function SubmitBox({recoList,suggestion,inputText}) {
   
    let Subject;


const ClickNext=()=>{

  Subject=inputText
  console.log("Subject",Subject)
  next(Subject)
}
  return (
    <SubmitBoxContents>
      <CategorytInput
        type="text"
        placeholder={categoryTitle}
        class="categoryInput"
      />
      <Link to='/writeMain'><ArrowImg src={rightArrow} onClick={ClickNext} alt="" /></Link>
      <SuggestionList  recoList={recoList} suggestion={suggestion}  />
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