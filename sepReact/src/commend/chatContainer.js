import styled from "styled-components";
import { getChatText, getSendText } from "../api/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function ChatContainer({ light}) {
  const [message,setMessage]=useState('')
  const [chatTextList,setChatTextList]=useState([])
  const submit=useSelector((state)=>state.writingsReducer)
  const [chatText,setChatText]=useState("")
  const textChange = (e) => {
    setMessage(e.target.value);
    
  };
  // useEffect(()=>{

 
  const clickSend=()=>{
  setChatTextList([...chatTextList,message])
    
  getChatText(submit,message).then((res)=>{
      // let str=res;
            // str = str.replace(/\n/g ,'<br/>');
            let str ="";
          console.log(res.data);
     
           

          
      if(res.data.body.answer.type=="link"){
        for(let i =0; i<3 ; i++){

          let content = res.data.body.answer.result.at(i).content
          str += content + "\n";

          let url =  res.data.body.answer.result.at(i).url
          str +=url + "\n";

          let title = res.data.body.answer.result.at(i).title
          str += title + "\n";
        }
        setMessage(str)
       setChatTextList([...chatTextList,message])
      //  setMessage(null)
      //메세지가 null일때는 전송이 안되게
      }else if(res.data.body.answer.type=="chat"){
        setMessage(res.data.body.answer.result)
        setChatTextList([...chatTextList,message])
      }
      // console.log('값받아온후',chatTextList)
    })
  }

// },[message])
 useEffect(()=>{
  setChatTextList([...chatTextList,light])
 },[light])
  return (
    
    <ChatBot>
      <div></div>
      <ChatWrap>
        
        <ChatList >{light}
        {chatTextList.map((list)=>(
          <ChatElementBox>
          <ChatElement>{list}</ChatElement>
          </ChatElementBox>
        ))}
        
        </ChatList>
        <ChatInputBox>
        <ChatInput
          type="text"
          placeholder="궁금한 것을 물어보세요 "
          onChange={textChange}
        />
        <button onClick={clickSend}>전송</button>
      </ChatInputBox>
      </ChatWrap>
      <div></div>
    </ChatBot>
  );
}
export default ChatContainer;
let ChatElementBox=styled.div`
overflow-wrap:break-word ;
width: 450px;
height: 50px;
margin-top: 20px;
`
let ChatElement=styled.p`
background-color: grey;

/* height: 40px; */
border: 1px solid black;
border-radius: 5px;
`
let ChatBot = styled.div`

  display: grid;
  grid-template-columns: 10% 80% 10%;
`;
let ChatWrap = styled.div`
  text-align: left;
  border:1px solid #898888;
/* border-radius:10px; */
height:600px;
margin-top:100px;

`;
let ChatTitle = styled.div`
  text-align: center;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  font-size: 18px;
  color: white;
  padding-top: 2px;
  background-color: #428cfc;
  margin-top: 30px;
`;
let ChatList = styled.div`

font-size: 20px;
    height: 600px;
    /* overflow-y:scroll; */
    overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }

`;
let ChatInputBox=styled.div`
width: 100%;
height: 80px;
border-radius: 10px;
background-color: #F5F5F5;
position: relative;

justify-content: space-around;
display: flex;
align-items: center;
& button{
    width:80px;
    height:40px;
    border-radius:5px;
    font-size:15px;
    background-color: black;
    color:white;
}

`
let ChatInput = styled.input`

width: 70%;
height: 50px;
border-radius: 10px;
border:1px solid #aca5a5;


`;
