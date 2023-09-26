import styled from "styled-components";
import { KAKAO_AUTH_URL } from "../../../../api/constants";
import { useEffect, useState } from "react";


function LoginBtn(){
 
    return(
       
       <Btn href={KAKAO_AUTH_URL}>로그인</Btn>
     
    
    
    )
}
export default LoginBtn;
let Btn = styled.a`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: white;
  color: #787878;
  font-size: 18px;
  padding-top:11px ;
  font-weight: bold;
`

