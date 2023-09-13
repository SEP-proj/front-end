import styled from "styled-components";
import ChatContainer from "../../commend/chatContainer";
import FinalTitle from "./componenet/finalTitle";
import FinalContent from "./componenet/finalContent";

function FinalWritePageIndex() {
  return (
    <Main>
      <MainWrap>
        <Subject>
          <p>환경</p>
          <span>"탄소중립"에 앞장서야하나, 속도 조절필요한가</span>
        </Subject>
        <FinalWriting>
          <FinalTitle/>
          <FinalContent/>
          <FinalSubmit>
            <div>
              공개하기
              <input type="checkbox" />
            </div>
            <div>
              <CompleteBtn>완료</CompleteBtn>
            </div>
          </FinalSubmit>
        </FinalWriting>
      </MainWrap>
      <ChatContainer />
    </Main>
  );
}
export default FinalWritePageIndex;

let Main = styled.main`
  display: grid;
  grid-template-columns: 80% 20%;
`;
let MainWrap=styled.div`
width: 1100px;
margin: 0 auto;
text-align: center;
padding-left: 10%;
`
let Subject=styled.div`
display: flex;
margin-top: 80px;
&>p{
    background-color: pink;
    color: white;
    width: 80px;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
}
&>span{
    margin-left: 20px;
    font-size: 20px;
   font-weight: bold;  
}
`
let FinalWriting=styled.div`
margin-top: 40px;
`
let FinalSubmit=styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
`
let CompleteBtn=styled.button`
background-color: #00BF2A;
border: none;  
color: white;
width: 100px;
height: 30px;
font-size: 18px;
border-radius: 5px;
margin-right: 190px;
`