// import styled from "styled-components";
// import { getChatText, getSendText } from "../api/api";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function replaceAll(str, searchStr, replaceStr) {
//   return str.split(searchStr).join(replaceStr);
// }

// function ChatContainer({ light }) {
//   const dispatch = useDispatch();
//   const [message, setMessage] = useState("");
//   const [message2, setMessage2] = useState("");
//   const [chatTextList, setChatTextList] = useState([]);
//   // const [flag,setFlag]=useState(false)
//   let flag = false;
//   let chatTextList2 = useSelector((state) => state.chatTextListReducer2);
//   const submit = useSelector((state) => state.writingsReducer);

//   const textChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const clickSend = () => {
//     //  setFlag(!flag)
//     if (message == "") {
//       alert("텍스트가 없습니다");
//     } else {
//       console.log("들어옴");
//       // dispatch({type:'chatList/CHATTEXTLIST2',payload:[...chatTextList, message]});
//       setChatTextList([...chatTextList, message]);
//       console.log(chatTextList);
//       getChatText(submit, message).then((res) => {
//         // let str=res;
//         // str = str.replace(/\n/g ,'<br/>');
//         let str = "";
//         console.log(res.data);

//         if (res.data.body.answer.type == "link") {
//           for (let i = 0; i < 3; i++) {
//             let title = res.data.body.answer.result.at(i).title;
//             str += title + "\n";
//             let content = res.data.body.answer.result.at(i).content;
//             str += content + "\n";

//             if (i != 2) {
//               let url = res.data.body.answer.result.at(i).url;
//               str += url + "\n";
//             } else if (i == 2) {
//               let url = res.data.body.answer.result.at(i).url;
//               str += url;
//             }
//           }
//           console.log(str);

//           // dispatch({type:'chatList/CHATTEXTLIST2',payload:str});
//           // setChatTextList([...chatTextList,chatTextList2])
//           setChatTextList([...chatTextList, str]);

//           console.log(chatTextList);
//         } else if (res.data.body.answer.type == "chat") {
//           setMessage2(res.data.body.answer.result);
//           setChatTextList([...chatTextList, message2]);
//           // console.log(res.data.body.answer.result)
//           // dispatch({type:'chatList/CHATTEXTLIST2',payload: res.data.body.answer.result});
//           // setChatTextList([...chatTextList,chatTextList2])

//           console.log(chatTextList);
//         }
//         // console.log('값받아온후',chatTextList)
//       });
//     }
//   };

//   // },[message])
//   useEffect(() => {
//     setChatTextList([...chatTextList, light]);
//   }, [light]);
//   let scrollRef = useRef();
//   useEffect(() => {
//     scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     scrollRef.current.scrollIntoView({ behavior: "smooth" });
//   });
//   useEffect(() => {
//     setChatTextList([...chatTextList, chatTextList2]);
//     console.log(chatTextList);
//   }, [chatTextList2]);
//   return (
//     <ChatBot>
//       <div></div>
//       <ChatWrap>
//         <ChatList ref={scrollRef}>
//           {light}
//           {chatTextList.map((list) => (
//             <ChatElementBox>
//               {list == "" ? (
//                 <></>
//               ) : (
//                 <>
//                   {flag ? (
//                     <ChatElement2>
//                       {list.split("\n").map((detailList) => (
//                         <>
//                           {detailList}
//                           <br />
//                         </>
//                       ))}
//                     </ChatElement2>
//                   ) : (
//                     <ChatElement>
//                       {list.split("\n").map((detailList) => (
//                         <>
//                           {detailList}
//                           <br />
//                         </>
//                       ))}
//                     </ChatElement>
//                   )}
//                   {(flag = !flag)}
//                 </>
//               )}
//             </ChatElementBox>
//           ))}
//         </ChatList>
//         <ChatInputBox>
//           <ChatInput
//             type="text"
//             placeholder="궁금한 것을 물어보세요 "
//             onChange={textChange}
//           />
//           <button onClick={clickSend}>전송</button>
//         </ChatInputBox>
//       </ChatWrap>
//       <div></div>
//     </ChatBot>
//   );
// }
// export default ChatContainer;
import styled from "styled-components";
import { getChatText, getSendText } from "../api/api";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function replaceAll(str, searchStr, replaceStr) {
  return str.split(searchStr).join(replaceStr);
}

function ChatContainer({ light }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [chatTextList, setChatTextList] = useState([]);
  const [urlList, setUrlList] = useState([]);
  // const [flag,setFlag]=useState(false)
  let flag = false;
  let chatTextList2 = useSelector((state) => state.chatTextListReducer2);
  const submit = useSelector((state) => state.writingsReducer);

  const textChange = (e) => {
    setMessage('사용자 : '+e.target.value);
  };
  var tempUrlList = [];
  const clickSend = () => {
    //  setFlag(!flag)
    if (message == "") {
      alert("텍스트가 없습니다");
    } else {
      console.log("들어옴");
      // dispatch({type:'chatList/CHATTEXTLIST2',payload:[...chatTextList, message]});
      setChatTextList([...chatTextList, message]);
      console.log(chatTextList);
      getChatText(submit, message).then((res) => {
        // let str=res;
        // str = str.replace(/\n/g ,'<br/>');
        let str = "";
        console.log(res.data);


        if (res.data.body.answer.type == "link") {
          for (let i = 0; i < 3; i++) {
            let title = res.data.body.answer.result.at(i).title;
            str += title + "\n";
            let content = res.data.body.answer.result.at(i).content;
            str += content + "\n";

            if (i != 2) {
              let url = res.data.body.answer.result.at(i).url;
              // str += url + "\n";
              tempUrlList[i] = url+"\n";
            } else if (i == 2) {
              let url = res.data.body.answer.result.at(i).url;
              // str += url;
              tempUrlList[i] = url;
            }
          }
          
          setUrlList(tempUrlList);
          // dispatch({type:'chatList/CHATTEXTLIST2',payload:str});
          // setChatTextList([...chatTextList,chatTextList2])
          setChatTextList([...chatTextList, str]);
          // setChatTextList(contentList);

          console.log("저장된 값\n"+str);
          console.log("urlList \n"+urlList)
        } else if (res.data.body.answer.type == "chat") {
          setMessage2(res.data.body.answer.result);
          setChatTextList([...chatTextList, message2]);
          // console.log(res.data.body.answer.result)
          // dispatch({type:'chatList/CHATTEXTLIST2',payload: res.data.body.answer.result});
          // setChatTextList([...chatTextList,chatTextList2])

          console.log(chatTextList);
        }
        // console.log('값받아온후',chatTextList)
      });
    }
  };

  // },[message])
  useEffect(() => {
    setChatTextList([...chatTextList, light]);
  }, [light]);
  let scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  });
  useEffect(() => {
    setChatTextList([...chatTextList, chatTextList2]);
    console.log(chatTextList);
  }, [chatTextList2]);
  var count =0;
  return (
    <ChatBot>
      <div></div>
      <ChatWrap>
        <ChatList ref={scrollRef}>
          {light}
          {chatTextList.map((list, index) => (
            <ChatElementBox key={index}>
              {list == "" ? (
                <></>
              ) : (
                <>
                  {flag ? (
                    <ChatElement2>
                      {list.split("\n").map((detailList) => (
                        <>
                          {detailList}
                          <br />
                        </>
                      ))}
                    </ChatElement2>
                  ) : (
                    <ChatElement>
                      {list.split("\n").map((detailList,index) => (
                        <>
                          <br/>
                          {detailList}
                         
                          {index%2==1?<a href={urlList[count]}>{urlList[count++]}</a> : <></>}
                          <br/>
                        </>
                      ))}
                    </ChatElement>
                  )}
                  {(flag = !flag)}
                </>
              )}
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

let ChatElementBox = styled.div`
  overflow-wrap: break-word;
  width: 450px;
  margin-left: 5px;

  margin-top: 14px;
`;
let ChatElement = styled.p`

  background-color: #07e7cc7d;
  padding: 10px;
  font-size: 19px;
  /* height: 40px; */
  border-radius: 5px;
  line-height: 25px;

`;
let ChatElement2 = styled.p`

  background-color: #f5f5f5;
  padding: 10px;
  font-size: 19px;
  line-height: 25px;
  /* height: 40px; */
  border-radius: 5px;

`;
let ChatBot = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;
let ChatWrap = styled.div`
  text-align: left;
  border: 1px solid #898888;
  /* border-radius:10px; */
  height: 600px;
  margin-top: 100px;
  border-radius: 10px;
  

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
  padding: 10px 0;
  overflow-y:scroll;
  /* overflow-y: auto; */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;
let ChatInputBox = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: #f5f5f5;
  position: relative;

  justify-content: space-around;
  display: flex;
  align-items: center;
  & button {
    width: 80px;
    height: 40px;
    border-radius: 5px;
    font-size: 15px;
    background-color: black;
    color: white;
  }
`;
let ChatInput = styled.input`
  width: 70%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #aca5a5;
  padding-left: 10px;
`;
