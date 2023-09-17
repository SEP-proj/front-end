import { useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { saveAll, saveConclu, saveIntro, saveMainSub } from "../../../api/api";
import { SubmitReducer } from "../../../reducer/submitReducer";



export let Intro='';
export let MainSub='';
export let Conclu='';
function Writing(){


    const navigator=useNavigate();
    
    const intro=useRef();
    const mainSub=useRef ();
    const conclu=useRef();
    
   
    // const [state,dispatch]=useReducer(SubmitReducer,{value:''})
    // submitText = state;

    const clickNext=()=>{
        navigator('/finalWrite');
        Intro=(intro.current.value);
        MainSub=(mainSub.current.value);
        Conclu=(conclu.current.value);
      
    }

    const clickSaveIntro=()=>{
        
        Intro=(intro.current.value)
        saveIntro(Intro).then(res=>{
            console.log(res)
        })
    }
    const clickSaveMainSub=()=>{
        
        MainSub=(mainSub.current.value)
        saveMainSub(MainSub).then(res=>{
            console.log(res)
        })
    }
    const clickSaveConclu=()=>{
        
        Conclu=(conclu.current.value)
        saveConclu(Conclu).then(res=>{
            console.log(res)
        })
    }

    return(
        <>
    <WritingWrap>
            <Introdution>
                <SaveBox>
              <h4>서론</h4>
              <Save onClick={clickSaveIntro}>임시저장</Save>
              </SaveBox>
              <textarea name="" id="" cols="30" rows="10" ref={intro} ></textarea>
            </Introdution>
            <MainSubject>
                <SaveBox>
              <h4>본론</h4>
              <Save onClick={clickSaveMainSub}> 임시저장</Save>
              </SaveBox>
              <textarea name="" id="" cols="30" rows="10" ref={mainSub}></textarea>
            </MainSubject>
            <Conclusion>
                <SaveBox>
              <h4>결론</h4>
              <Save onClick={clickSaveConclu}>임시저장</Save>
              </SaveBox>
              <textarea name="" id="" cols="30" rows="10" ref={conclu}></textarea>
            </Conclusion>
          </WritingWrap>
          <BtnBox>
           
            <div className="next" onClick={clickNext}>다음</div>
          </BtnBox>
          </>
    )
}
export default Writing;
let WritingWrap=styled.div`
text-align: left;
margin-top: 30px;
margin-left:100px;
& h4{
    margin-top: 20px;
   
}
`
let Introdution=styled.div`
& textarea{
    width: 80%;
    height: 2em;
    /* border: none; */
    border-radius: 10px;
    resize: none;
    padding: 5px;
    font-size: 20px;
    margin-top: 10px;
}
`
let MainSubject=styled.div`
& textarea{
    width: 80%;
    height:6em;
    /* border: none; */
    border-radius: 10px;
    resize: none;
    padding: 5px;
    font-size: 20px;
    margin-top: 10px;
}
`
let Conclusion=styled.div`
& textarea{
    width: 80%;
    height:6em;
    /* border: none; */
    border-radius: 10px;
    resize: none;
    padding: 5px;
    font-size: 20px;
    margin-top: 10px;
}
`
let BtnBox=styled.div`
margin-top: 20px;
margin-left: 54%;


& .next{
    background-color: #FFBD12;
    border: none;
    color: white;
    width: 100px;
    height: 30px;
    font-size: 18px;
    border-radius: 5px;
}
`
let SaveBox=styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end

`
let Save=styled.button`
background-color: #00BF2A;
border: none;  
color: white;
width: 80px;
height: 20px;
font-size: 12px;
border-radius: 5px;
margin-right: 200px;
`