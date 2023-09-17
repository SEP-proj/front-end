import styled from "styled-components";

function ChatContainer({light,setChatText}){
    
    const chatList=[
        {
            uri:'https://ko.wikipedia.org/wiki/%ED%83%84%EC%86%8C_%EC%A4%91%EB%A6%BD',
            title:''
        }
    ]
    const textChange=(e)=>{
        setChatText(e.target.value);
    }
    return(
        <ChatBot>
        <div></div>
        <ChatWrap>
        <ChatTitle>챗봇 가이드</ChatTitle>
        <ChatList>

        {light}
        </ChatList>
        <ChatInput type="text" placeholder="궁금한 것을 물어보세요 " onChange={textChange}/>
      </ChatWrap>
          <div></div>
          </ChatBot>
    )
}
export default ChatContainer;
let ChatBot=styled.div`
border-left: 1px solid #cfc3c3;
display: grid;
grid-template-columns: 10% 80% 10% ;

`
let ChatWrap=styled.div`
text-align: left;
`
let ChatTitle=styled.div`
text-align: center;
width: 120px;
height: 30px;
border-radius: 10px;
font-size: 18px;
color: white;
padding-top: 2px;
background-color: #428CFC;
margin-top: 30px;
`
let ChatList=styled.div`
    margin-top: 40px;
    margin-left: 20px;
    font-size: 20px;
`
let ChatInput=styled.input`
position: absolute;
bottom: 10vh;
width: 16%;
height: 30px;
border-radius: 5px;
border:1px solid #aca5a5
&::placeholder{
    padding-left: 10px;
}
`