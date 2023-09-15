import styled from "styled-components";
import RecommendList from "./component/recommendList/recommendList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSubject from "../../api/api";

function MainIndex() {
  const navigate = useNavigate();
  const clickStart = () => {
    navigate("/writePage");
  };
  // useEffect(()=>{
  //   getSubject().then((res)=>{
  //     console.log(res)
  //   })
  // })
  return (
    <Main>
      <MainWrap>
        <MainBanner>
          <p>
            메타인지 향상을 위한 첫걸은
            <br />
            쉽고 재미있는 글쓰기, 메타 트레이닝과 함께
          </p>
          <button onClick={clickStart}>시작하기</button>
        </MainBanner>
        <img src="https://media.discordapp.net/attachments/1148477775062249534/1151462800028352532/images.png?width=799&height=600" alt="" />
      </MainWrap>
      <Contents>
        <ContetnHeader>
          <div>오늘의 주제</div>
          <p>과학</p>
          <span>보안 목적 드론의 카메라의 사생활 침해 문제</span>
        </ContetnHeader>
        <div>
          <RecommendList />
        </div>
      </Contents>
    </Main>
  );
}
export default MainIndex;
let Main=styled.main`
display: grid;
grid-template-rows: 50% 50%;
`


let MainWrap = styled.div`
  display: flex;
  background-color: #a2d4f7;
  justify-content: space-around;
  align-items: center;
 & >img{
  width:500px;
  height:300px;

 
`;
let MainBanner = styled.div`
  text-align: center;
  font-size: 25px;
  margin-left: 5%;
  margin-top: 40px;
  & button {
    width: 150px;
    height: 40px;
    border: none;
    font-size: 20px;
    background-color: #428cfc;
    color: white;
    border-radius: 5px;

    margin-top: 5%;
  }
  & img {
    width: 300px;
  }
`;
let Contents = styled.div`
  width: 1400px;
  margin: 50px auto;
`;
let ContetnHeader = styled.div`
  display: flex;
  & > div {
    background-color: #ffbd12;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    text-align: center;
    color: white;
    font-size: 25px;
    margin-right: 10px;
  }
  & > p {
    font-weight: bold;
    margin-right: 5px;
    font-size: 25px;
  }
  & > span {
    font-size: 25px;
  }
`;
