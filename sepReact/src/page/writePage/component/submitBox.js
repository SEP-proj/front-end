import styled from "styled-components";
import SuggestionList from "./suggestionList";
import rightArrow from '../../../asset/img/rightArrow.png'
import { useReducer } from "react";
import { Link } from "react-router-dom";
import {InputReducer} from "../../../reducer/inputReducer";

export let ment = {}
function SubmitBox() {
    // const [inputValue,setInputValue]=useState('')
    
    
  const [state,dispatch]=useReducer(InputReducer,{value:''})
 ment = state;
  console.log('ment값',ment)
console.log('바뀐state값',state.value)
console.log('바뀐state값',typeof(state.value))

  return (
    <SubmitBoxWrap>
      <CategorytInput
        type="text"
        placeholder={(state.value=='')?"카테고리 속 주제를 선택해주세요":state.value}
        class="categoryInput"
      />
      <Link to='/writeMain'><ArrowImg src={rightArrow} alt="" /></Link>
      <SuggestionList dispatchValue={dispatch} />
    </SubmitBoxWrap>
  );
}
export default SubmitBox;
let SubmitBoxWrap = styled.div`
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