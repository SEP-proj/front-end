import styled from "styled-components";

function RecommendList(){
    return(
        <RecommendUl>
        <li><p>국가 안전과 개인 프라이버시 간의 갈등</p></li>
        <li><p>드론 카메라 사용에 대한 윤리적 고려</p></li>
        <li><p>필수적 안보수단,위협이 될 수 있다</p></li>
        <li><p>사생활침해 없는 사용이 가능한가</p></li>
      </RecommendUl>
    )
}
export default RecommendList;

let RecommendUl=styled.ul`
display: flex;
  margin-top: 80px;
  &>li{
    width:400px;
    height: 180px;
    background-color: #D9D9D9;
    border: 1px solid black;
  margin-right: 40px;
  }
  &>li>p{
    width: 160px;
    text-align: center;
    font-size: 25px;
  margin: 30px auto;
  }
`