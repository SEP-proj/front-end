import styled from "styled-components";
import refresh from '../../../asset/img/refresh.png'
import { getRecommendTitle } from "../../../api/api";
import { useMemo, useState } from "react";
function FinalTitle({title,setTitle}){
  const [flag,setFlag]=useState(false);
  const [title2,setTitle2]=useState('')
  const clickRecommend=()=>{
    getRecommendTitle().then((res)=>{
      console.log(res.data.title)
      setTitle2(res.data.title)
setFlag(true)
    })
  }
  return (
    <FinalTitleWrap>
      <span class="title">제목</span>
      <span>{flag?title2:title}</span>
      <button onClick={clickRecommend}>
        <img src={refresh} alt="" />
      </button>
    </FinalTitleWrap>
  );
}
export default FinalTitle;
let FinalTitleWrap = styled.div`
  text-align: left;
  width: 80%;
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  & .title {
    margin-right: 20px;
  }
  & > button {
    border: none;
    background-color: transparent;
    float: right;
    margin-top: 3px;
  }
  & > button > img {
    width: 15px;
  }
`;
