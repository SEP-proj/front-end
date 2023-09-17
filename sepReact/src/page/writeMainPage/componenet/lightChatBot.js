import styled from "styled-components";
import blackChatBot from '../../../asset/img/blackChatBot.png'
import whiteChatBot from '../../../asset/img/whiteChatBot.png'
import { useState } from "react";
import { getChatText } from "../../../api/api";
import { Conclu, Intro, MainSub } from "./writing";
function LightChatBot({light,setLight,chatText}){
    const [openModal,setOpenModal]=useState(false);
    
    const clickChat=()=>{
        
        getChatText(Intro,MainSub,Conclu,chatText).then((res)=>{
            console.log(res);
            let str=res;
            str = str.replace(/\n/g ,'<br/>');
            setLight(res)
        })
    }
    return(
        <div>
          
          <div onClick={clickChat}><Img src={blackChatBot} alt="" /></div>
         
        
        </div>
    )
}
export default LightChatBot;
let Img=styled.img`
width:50px;
height:50px;
cursor:pointer;
`