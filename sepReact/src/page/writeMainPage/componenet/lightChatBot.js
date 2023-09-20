import styled from "styled-components";
import blackChatBot from '../../../asset/img/blackChatBot.png'
import whiteChatBot from '../../../asset/img/whiteChatBot.png'
import chatBot from '../../../asset/img/chatbot.png'
import { useRef, useState } from "react";
import { getChatText } from "../../../api/api";
import { Conclu, Intro, MainSub } from "./writing";
import { useSelector } from "react-redux";
function LightChatBot({setLight}){
  const [showImg,setShowImg]=useState(false);
 
    // setTimeout(() => {
    //   setShowImg(true)
    // }, 6000);

  
    const [openModal,setOpenModal]=useState(false);
    const WritingText = useSelector((state) => state.writingsReducer);
  
  
    const clickChat=()=>{
        setShowImg(false)
        getChatText(WritingText).then((res)=>{
            console.log(res);
            let str=res;
            str = str.replace(/\n/g ,'<br/>');
    
          
            
            setLight(res)
        })
    }
    return(
        <div>
          
          <ImgBox onClick={clickChat}><Img showImg={showImg} src={chatBot} alt="" /></ImgBox>
         
        
        </div>
    )
}
export default LightChatBot;
let Img=styled.img`
width:70px;
height:${props=>props.showImg?'70px':'70px'};
cursor:pointer;
transition: all 1s;

`
let ImgBox=styled.div`
position: absolute;
    right: 13%;
    top: 12%;
`