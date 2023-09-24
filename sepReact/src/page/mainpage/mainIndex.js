import styled from "styled-components";
import RecommendList from "./component/recommendList/recommendList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import getSubject from "../../api/api";
import { useDispatch } from "react-redux";
import mainlogo from '../../asset/img/mainlogo.png'
function MainIndex() {
  const disptch=useDispatch()
  const navigate = useNavigate();
  const clickStart = () => {
    navigate("/writePage");
    disptch({type:'FLAG',payload:true})
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
          {/* <h1>Meta Training</h1> */}
          <h1>Meta Training</h1>
          <p>
            메타인지 향상을 위한 첫걸음
            <br />
            쉽고 재미있는 글쓰기, 메타 트레이닝과 함께
          </p>
          <button onClick={clickStart}>시작하기</button>
        </MainBanner>
        <img
          src={mainlogo}
          alt=""
        />
      </MainWrap>
      {/* <Contents>
        <ContetnHeader>
          <div>오늘의 주제</div>
          <p>과학</p>
          <span>보안 목적 드론의 카메라의 사생활 침해 문제</span>
        </ContetnHeader>
        <div>
          <RecommendList />
        </div>
      </Contents> */}
    </Main>
  );
}
export default MainIndex;
let Main = styled.main`
  display: grid;
  background-color: #05d0b8;
`;

let MainWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
 
  margin-top:150px;
 & >img{
  width:550px;
  height:450px;

 }
`
let MainBanner = styled.div`
  text-align: center;
  font-size: 35px;

  & h1 {
    margin-bottom: 50px;
  }
  & p {
    font-weight: bold;
    line-height: 50px;
  }
  & button {
    cursor: pointer;
    width: 150px;
    height: 50px;
    border: none;
    font-size: 23px;
    background-color: black;
    color: white;
    border-radius: 5px;
    font-weight: bold;
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
