import styled from "styled-components";
import GoogleLoginBtn from "../../../../commend/googleLoginBtn";

function LoginModal(){
    return(
        <ModalWrap>
        <div></div>
        <Modal>
        <GoogleLoginBtn/>
        </Modal>
        </ModalWrap>
    )
}
export default LoginModal;

let Modal=styled.div`
background-color: #fefefe;
margin: 0 auto;
padding: 0px;
border: 1px solid #888;
width: 30%;
height: 45%;
border-radius: 30px;
z-index: 4;
position: fixed;
top: 30%;
left: 38%;
padding: 15px;
`
let ModalWrap=styled.div`
position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`