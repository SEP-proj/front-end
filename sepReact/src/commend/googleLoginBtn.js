import {GoogleLogin, GoogleOAuthProvider, useGoogleLogin} from '@react-oauth/google';
import styled from 'styled-components';
import google from '../asset/img/google.png'
function GoogleLoginBtn(){
    const clientId='775405737077-58i2affkch68c6ho9q8np94o1hmkmlt6.apps.googleusercontent.com'
    
    const googleSocialLogin = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
        flow: 'auth-code',
      })

    return(
 
            // <GoogleLogin
            // clientId={clientId}
            // onSuccess={(res)=>{
            //     console.log(res)

            // }}
            // onFailure={(err)=>{
            //     console.log(err)
            // }}
            // render={(renderProps) => (
            //     <div className='social_login_box google' onClick={renderProps.onClick}>
            //       <div className='social_login_image_box'>
            //         {/* <img src={googleIcon} alt='google_login' /> */}
            //       </div>
            //       <div className='social_login_text_box'>구글로 시작하기</div>
            //       <div className='social_login_blank_box'> </div>
            //     </div>
            //   )}
            // />

            <div className='social_login_box google' onClick={() => googleSocialLogin()}>
                        <ImgBox>
                          <LoginBtn>로그인</LoginBtn>
                        </ImgBox>
                        <div className='social_login_text_box'></div>
                        <div className='social_login_blank_box'> </div>
             </div>
            
       
    )
}
export default GoogleLoginBtn;
let ImgBox=styled.div`
cursor:pointer;
&img{
    width:40px;
}
`
let LoginBtn=styled.button`
cursor: pointer;
background-color: black;
color: white;
font-size: 18px;
height: 40px;
width: 100px;
border-radius: 5px;
border: none;

`