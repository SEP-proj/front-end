import { useEffect } from "react";
import styled from "styled-components";
import { getCommunityList } from "../../../api/api";
import { Link } from "react-router-dom";

function Table() {
  useEffect(() => {
    getCommunityList();
    // .then((res)=>{
    //     console.log(res)
    // })
  }, []);
  return (
    <Main>
      <div></div>
      <TableWrap>
        <div>
          <TableHeader>
            <div class="num">카테고리</div>
            <div class="title">제목</div>
            <div class="writer">작성자</div>
            <div class="date">작성일</div>
            <div class="count">조회</div>
            <div class="count">좋아요</div>
          </TableHeader>
          <TableUl>
          <TableList>
            <div class="num">환경</div>
            <div class="title">
              <a href="view.html">탄소중립에 앞장서야하나,속도조절 필요한가</a>
            </div>
            <div class="writer">kim</div>
            <div class="date">2021.1.15</div>
            <div class="count">33</div>
            <div class="count">23</div>
          </TableList>
          </TableUl>
        </div>
      </TableWrap>

      <div></div>
    </Main>
  );
}
export default Table;
let Main = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  height: 100%;
  border-top: 1px solid black;
  padding-top: 20px;
`;

let TableWrap = styled.div`
  width: 1400px;
  margin: 20px auto;
  /* border: 1px solid black; */
  `;
let TableUl=styled.div`
height: 500px;
overflow-y: scroll;
overflow-x: hidden;
`
let TableHeader=styled.div`
display: grid;
grid-template-columns: 10% 60% 10% 10% 5% 5%;
text-align: center;
height: 50px;
align-items: center;
background-color: grey;
border-bottom: 1px solid black;
& div{
border-right:  1px solid black;
}  

`
let TableList=styled.div`
display: grid;
grid-template-columns: 10% 60% 10% 10% 5% 5%;
text-align: center;
height: 50px;
align-items: center;
border-bottom: 1px solid #F5F5F5;
`