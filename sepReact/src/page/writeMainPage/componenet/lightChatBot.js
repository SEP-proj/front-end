import styled from "styled-components";
import blackChatBot from "../../../asset/img/blackChatBot.png";
import whiteChatBot from "../../../asset/img/whiteChatBot.png";
import chatBot from "../../../asset/img/chatbot.png";
import { useRef, useState } from "react";
import { getChatRobot, getChatText } from "../../../api/api";
import { Conclu, Intro, MainSub } from "./writing";
import { useDispatch, useSelector } from "react-redux";
function LightChatBot({ setLight }) {
  const [showImg, setShowImg] = useState(false);

  // setTimeout(() => {
  //   setShowImg(true)
  // }, 6000);

  const WritingText = useSelector((state) => state.writingsReducer);
let str='';
const dispatch=useDispatch();
  const clickChat = () => {
    getChatRobot(WritingText).then((res) => {

      for (let i = 0; i < 3; i++) {
        let questions = res.data.body.questions.at(i);
        str += questions + "\n";
      }
      console.log(str)
      dispatch({type:'chatList/CHATTEXTLIST2',payload:str})
    });
  };
  return (
    <div>
      <ImgBox onClick={clickChat}>
        <Img showImg={showImg} src={chatBot} alt="" />
      </ImgBox>
    </div>
  );
}
export default LightChatBot;
let Img = styled.img`
  width: 70px;
  height: ${(props) => (props.showImg ? "70px" : "70px")};
  cursor: pointer;
  transition: all 1s;
`;
let ImgBox = styled.div`
  position: absolute;
  right: 13%;
  top: 12%;
`;
