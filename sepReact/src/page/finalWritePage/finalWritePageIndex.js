import styled from "styled-components";
import ChatContainer from "../../commend/chatContainer";
import FinalTitle from "./componenet/finalTitle";
import FinalContent from "./componenet/finalContent";
import { ment } from "../writePage/component/submitBox";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { completeText, getRecommendTitle } from "../../api/api";
import refresh from '../../asset/img/refresh.png'
function FinalWritePageIndex({ category }) {
  const [title, setTitle] = useState("");
  const [flag,setFlag]=useState(false);
  const dispatch=useDispatch();
  let inputText = useSelector((state) => state.inputReducer);
  const navigation=useNavigate();
  const complete=()=>{
    navigation('/postDetail')
    completeText(submit,bchecked).then((res)=>{
      console.log(res)
    })
  }
  const submit=useSelector((state)=>state.submitWrite);
  const [bchecked,setbchecked]=useState(false);
  const checkHandler=()=>{
    
    setbchecked(!bchecked);
  }
  const clickRecommend=()=>{
    getRecommendTitle(submit).then((res)=>{
      console.log(res.data.title)
      dispatch({
        type: "SUBMITTEXT",
        payload: {  title: "새로운submitTest중입니다" },
      });
setFlag(true)
    })
  }
  return (
    <MainWrap>
      <div></div>
      <FinalWrap>
        <Subject>
          <p>{category}</p>
          <span>{inputText}</span>
        </Subject>
  
      <FinalWriting>
       
      
        <FinalTitleWrap>
      <span class="title">제목</span>
    
      <span>{submit.title}</span>

      <button onClick={clickRecommend}>
        <img src={refresh} alt="" />
      </button>
    </FinalTitleWrap>
        <FinalContent setTitle={setTitle} submit={submit} />
        <FinalSubmit>
          <div>
            공개하기
            <input type="checkbox" checked={bchecked} onChange={checkHandler}/>
          </div>
          <div>
            <CompleteBtn onClick={complete}>완료</CompleteBtn>
          </div>
        </FinalSubmit>
      </FinalWriting>
      </FinalWrap>
      <div></div>
    </MainWrap>
  );
}
export default FinalWritePageIndex;

let MainWrap = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
text-align: center;

`;
let FinalWrap=styled.div`

`
let Subject = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 100px;
  & > p {
    background-color: #05D0B8;
    color: white;
    width: 120px;
    height: 40px;
    font-size: 20px;
    border-radius: 20px;
    padding-top: 6px;
  }
  & > span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;
let FinalWriting = styled.div`
  margin-top: 40px;
  margin-left: 100px;

`;
let FinalSubmit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
let CompleteBtn = styled.button`
  background-color: #00bf2a;
  border: none;
  color: white;
  width: 100px;
  height: 30px;
  font-size: 18px;
  border-radius: 5px;
  margin-right: 190px;
`;
let FinalTitleWrap = styled.div`
  text-align: left;
  width: 80%;


  padding: 10px;
  background-color:#F5F5F5;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
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
