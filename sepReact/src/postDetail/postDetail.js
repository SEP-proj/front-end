import { useSelector } from "react-redux";
import styled from "styled-components";
import FinalContent from "../page/finalWritePage/componenet/finalContent";

function PostDetail() {
  let inputText = useSelector((state) => state.inputReducer);
  let category = useSelector((state) => state.categoryReducer);
  const submit = useSelector((state) => state.submitWrite);
  console.log(submit.content)
  return (
    <Main>
      <div></div>
      <div>
        <HeaderWrap>
        <Subject>
          <p>{category}</p>
          <span>{inputText}</span>
        </Subject>
        <ReportBtn>신고</ReportBtn>
        </HeaderWrap>
        <FinalTitleWrap>
          <span class="title">제목</span>
          <span>{submit.title}</span>
        </FinalTitleWrap>
        <FinalContentWrap>

        {submit.content.split("<br/>").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </FinalContentWrap>
      </div>
      <div></div>
    </Main>
  );
}

export default PostDetail;

let Main = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  text-align: center;
`;
let HeaderWrap=styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    align-items: flex-end;
    margin: 50px 0;
    `
    
let Subject = styled.div`
  display: flex;

  & > p {
    background-color: #05d0b8;
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
let FinalTitleWrap = styled.div`
  text-align: left;
  width: 60%;
margin: 0 auto;
  padding: 10px 0 10px 40px;

  font-size:20px;
  background-color: #f5f5f5;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
  border-radius: 10px;

  & .title {
    margin-right: 20px;
  }
`;
let ReportBtn=styled.button`
width: 50px;
height: 25px;
background-color: #FFE773;
border: none;
border-radius: 5px;

`
let FinalContentWrap = styled.p`
margin:40px auto;


width: 60%;
height: 50vh;
padding: 10px;
text-align: left;
line-height: 25px;
background-color:#F5F5F5;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
  border-radius: 10px;
`;
