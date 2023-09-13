import styled from "styled-components";
import Writing from "./componenet/writing";
import ChatContainer from "../../commend/chatContainer";
import {ment} from "../writePage/component/submitBox"

function WriteMainPageIndex(){
  console.log(ment)
    return(
        <Main>
        <MainWrap>
          <Subject>
            <p>환경</p>
            <span>{ment.value}</span>
          </Subject>
          <Writing/>
        </MainWrap>
     
         <ChatContainer/>
      
      </Main>
    )
}
export default WriteMainPageIndex;
let Main=styled.main`
display: grid;
grid-template-columns: 80% 20%;
`
let MainWrap=styled.div`
width: 1100px;
margin: 0 auto;
text-align: center;
padding-left: 10%;
`
let Subject=styled.div`
display: flex;
margin-top: 80px;
& >p{
    background-color: pink;
    color: white;
    width: 80px;
    height: 30px;
    font-size: 20px;
    border-radius: 10px;
}
& >span{
    margin-left: 20px;
    font-size: 20px;
   font-weight: bold; 
}
`
