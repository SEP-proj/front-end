import styled from "styled-components"

function Footer(){
    return(
        <FooterWrap>
        <FooterLeft>
          <div>
            <ul>
              <li>한국전파진흥협회</li>
              <li>사업자등록번호 : 201-82-30821</li>
              <li>TEL : 02-317-6144</li>
            </ul>
          </div>
          <div><p>경기도 선남시 수정구 대왕판교로 815 판교제2테크노밸리 기업지원허브 1층 메타버스 아카데미</p></div>
        </FooterLeft>
        <FooterRight>
          <div>
              <ul>
                  <li>개인정보처리방침</li>
                  <li>서비스이용약관</li>
              </ul>
          </div>
          <FooterTxt>ⓒ RAPA. All rights reserved.</FooterTxt>
        </FooterRight>
      </FooterWrap>
    )
}
export default Footer;
let FooterWrap=styled.footer`
background-color: #D9D9D9;
display: flex;
position : absolute;
bottom: 0;
width: 100%;
height: 80px;
justify-content: space-between;
color: #787878;
font-size: 12px;
`
let FooterLeft=styled.div`
margin-left: 10px;
&> div{
    margin-top: 15px;
}
&>div >ul{
    display: flex;
}
`
let FooterRight=styled.div`
margin-right: 30px;
&> div{
    margin-top: 15px;
}
&>div>ul{
    display: flex;
}
&>div>ul>li{
    margin-left: 20px;
}
`
let FooterTxt=styled.div`
float: right;
`