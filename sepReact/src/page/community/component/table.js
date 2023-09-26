import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getCommunityList, getPostDetail } from "../../../api/api";
import { Link, useNavigate, useNavigation } from "react-router-dom";

function Table({clickCategoryList,setClickCategoryList}) {
const postId=useRef()
const navigation=useNavigate()
  useEffect(() => {
    getCommunityList().then((res)=>{
      console.log(res.data)
  setClickCategoryList(res.data)
    },[])

  }, []);
  const clickList=()=>{

 
    getPostDetail(postId.current.innerText).then((res)=>{
      console.log(res)
      navigation('/postDetail2',{state:{value:res.data}})
    })
  }
  
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
            {/* <div class="count">조회</div>
            <div class="count">좋아요</div> */}
          </TableHeader>
          <TableUl>
        {clickCategoryList.map((list)=>(
  <TableList onClick={clickList}>
    <div style={{display:'none'}} ref={postId}>{list.id}</div>
  <div class="num">{list.category}</div>
  <div class="title">
    <div>{list.title}</div>
  </div>
  <div class="writer">{list.memberName}</div>
  <div class="date">{list.createDate}</div>
  {/* <div class="count">33</div>
  <div class="count">23</div> */}
</TableList>
        ))}
        
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
font-size: 22px;

cursor: pointer;
display: grid;
grid-template-columns: 10% 60% 10% 10% 5% 5%;
text-align: center;
height: 50px;
align-items: center;
border-bottom: 1px solid #F5F5F5;
`