import { useReducer, useRef, useState } from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { saveAll, updateSave } from "../../../api/api";

function Writing({ setNext }) {
  const intro = useRef();
  const mainSub = useRef();
  const conclu = useRef();
  let userId=useSelector((state)=>state.userReducer)
  const WritingText = useSelector((state) => state.writingsReducer);

  const dispatch = useDispatch();
  const clickNext = () => {
    console.log("클릭발생");

    dispatch({
      type: "WRITING",
      payload: {
        
        intro: intro.current.value,
        body: mainSub.current.value,
        conclu: conclu.current.value,
      },
    });
    // console.log("saveAlltest 동작 확인");
    // dispatch({
    //   type: "SUBMITTEXT",
    //   payload: { content: "submitTest완료", title: "submitTest중입니다" },
    // });
    saveAll(WritingText,userId).then((res) => {
      console.log(res);

      console.log(res.data.content);
      let str = res.data.content;
      str = str.replace(/\n/g, "<br/>");

      console.log("saveAll 동작 확인");
      dispatch({
        type: "SUBMITTEXT",
        payload: { content: res.data.content, title: res.data.title.body.title },
      });
      setNext(true)
    });
  };

  const clickSave = () => {
    console.log('넘어온 userid',userId)
    dispatch({
      type: "WRITING",
      payload: {
        intro: intro.current.value,
        body: mainSub.current.value,
        conclu: conclu.current.value,
      },
    });

    updateSave(WritingText,userId)
    // .then((res) => {
    //   console.log("saveALlRES", res);

    //   console.log(res.data.content);
    //   let str = res.data.content;
    //   str = str.replace(/\n/g, "<br/>");

    //   console.log("saveAll 동작 확인");
    //   dispatch({
    //     type: "SUBMITTEXT",
    //     payload: { content: res.data.content, title: res.data.title },
    //   });
    // });
  };

  return (
    <>
      <WritingWrap>
        <Introdution>
          <SaveBox>
            <h3>서론</h3>
          </SaveBox>
          <input
            
            placeholder="◆ 글의 핵심 내용이 될 의견을 담아서 간략하게 표현해 보세요."
            ref={intro}
          />
        </Introdution>
        <MainSubject>
          <SaveBox>
            <h3>본론</h3>
          </SaveBox>
          <input
            placeholder="◆ 앞서 작성한 주장에 대한 이유를 설명해보세요."
            ref={mainSub}
          />
        </MainSubject>
        <Conclusion>
          <SaveBox>
            <h3>결론</h3>
          </SaveBox>
          <input
            placeholder="◆ 위에서 작성한 서론,본론을 보고 본인의 주장을 다시 강조해 보세요."
            ref={conclu}
          />
        </Conclusion>
      </WritingWrap>
      <BtnBox>
        <div className="next1" onClick={clickSave}>
          임시저장
        </div>
        <div className="next2" onClick={clickNext}>
          다음 단계로
        </div>
      </BtnBox>
    </>
  );
}
export default Writing;
let WritingWrap = styled.div`
  width: 100%;
  text-align: left;

  margin-left: 100px;
  & h3 {
    margin-top: 40px;
    margin-left: 20px;
  }
`;
let Introdution = styled.div`
  & input {
    width: 80%;
    height: 5em;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    resize: none;
    padding: 5px;
    padding-left: 20px;
    font-size: 20px;
    margin-top: 10px;
  }
  & input::placeholder {
    font-size: 15px;
  }
  & input:focus {
    outline: 2px solid green;
  }
`;
let MainSubject = styled.div`
  & input {
    width: 80%;
    height: 6em;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    resize: none;
    padding: 5px;
    font-size: 20px;
    margin-top: 10px;
    padding-left: 20px;
  }
  & input::placeholder {
    font-size: 15px;
  }
  & input:focus {
    outline: 2px solid green;
  }
`;
let Conclusion = styled.div`
  & input {
    width: 80%;
    height: 7em;
    border: none;
    background-color: #f5f5f5;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
    resize: none;
    padding: 5px;
    font-size: 20px;
    margin-top: 10px;
    padding-left: 20px;
  }
  & input::placeholder {
    font-size: 15px;
  }
  & input:focus {
    outline: 2px solid green;
  }
`;
let BtnBox = styled.div`
  margin-top: 20px;
  margin-left: 59%;
  display: flex;
  & div {
    color: black;
    width: 130px;
    height: 40px;
    font-size: 18px;
    border-radius: 5px;
    margin-left: 30px;
    padding-top: 6px;
  }
  & .next1 {
    border: 1px solid black;
    cursor: pointer;
  }
  & .next2 {
    cursor: pointer;
    background-color: #05d0b8;
    color: white;
  }
`;
let SaveBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
