import styled from "styled-components";
import { Conclu, Intro, MainSub } from "../../writeMainPage/componenet/writing";
import { useEffect, useState } from "react";
import { saveAll } from "../../../api/api";



function FinalContent({setTitle}){
    const [submitText,setSubmitText] = useState(""); 
useEffect(()=>{
    saveAll(Intro,MainSub,Conclu).then(res=>{
        console.log(res)

        console.log(res.data.content)
    let str=res.data.content;
    str = str.replace(/\n/g ,'<br/>');
  
    
        setSubmitText(str)
        setTitle(res.data.title);
    },[])
})
    return(
        <>

        <FinalContentWrap>
           {submitText.split('<br/>').map((line)=>(
            <>
            {line}
            <br/>
            </>
           ))}
          </FinalContentWrap>
          </>
    )
}
export default FinalContent;
let FinalContentWrap=styled.p`
margin-top: 20px;
border: 1px solid black;
border-radius: 5px;
width: 80%;
height: 50vh;
padding: 10px;
text-align: left;
line-height: 25px;
`