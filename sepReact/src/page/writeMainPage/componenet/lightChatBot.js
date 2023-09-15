import styled from "styled-components";
import blackChatBot from '../../../asset/img/blackChatBot.png'
import whiteChatBot from '../../../asset/img/whiteChatBot.png'
import { useState } from "react";
function LightChatBot({light,setLight}){
    const [openModal,setOpenModal]=useState(false);
    const explanationModal=()=>{
setOpenModal(!openModal)
setLight(!light)
    }
    return(
        <div>
          
          <div onClick={explanationModal}><Img src={light?whiteChatBot:blackChatBot} alt="" /></div>
         {openModal?
          <div>
          <p>
              설명
          </p>
       </div>:
       <></>
        }
        
        </div>
    )
}
export default LightChatBot;
let Img=styled.img`
width:50px;
height:50px;
cursor:pointer;
`