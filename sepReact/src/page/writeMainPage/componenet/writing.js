import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Writing(){
    const navigator=useNavigate();
    const clickNext=()=>{
        navigator('/finalWrite')
    }
    const saveClick=()=>{
        axois({
            method:"POST",
            url:'',
            data:{'data':}
        })
    }
    return(
        <>
    <WritingWrap>
            <Introdution>
                <SaveBox>
              <h4>서론</h4>
              <Save>임시저장</Save>
              </SaveBox>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </Introdution>
            <MainSubject>
                <SaveBox>
              <h4>본론</h4>
              <Save>임시저장</Save>
              </SaveBox>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </MainSubject>
            <Conclusion>
                <SaveBox>
              <h4>결론</h4>
              <Save>임시저장</Save>
              </SaveBox>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </Conclusion>
          </WritingWrap>
          <BtnBox>
           
            <button className="next" onClick={clickNext}>다음</button>
          </BtnBox>
          </>
    )
}
export default Writing;
let WritingWrap=styled.div`
text-align: left;
margin-top: 30px;
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
margin-left: 48%;


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