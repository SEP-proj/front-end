import styled from "styled-components";
import Table from "./component/table";

function Community() {
  const categoryList = [
    {
      title: "전체",
    },
    {
      title: "일상",
    },
    {
      title: "사회",
    },
    {
      title: "과학",
    },
    {
      title: "스포츠",
    },
    {
      title: "문화/예술",
    },
    {
      title: "환경",
    },
  ];
  return (
    <Main>
      <CategortUl>
        {categoryList.map((list) => (
          <li>
            <p>{list.title}</p>
          </li>
        ))}
        <SearchBox>
        <input type="text" />
        <button>검색</button>
        </SearchBox>
      </CategortUl>
      <Table/>
    </Main>
  );
}
export default Community;

let Main=styled.div`
display: grid;
grid-template-rows: 20% 80%;

`

let CategortUl=styled.ul`
align-items: center;
width: 1200px;
display: flex;
justify-content: space-between;
margin: 30px auto;
& >li{
    
    background-color: white;
    width:120px;    
    border:1px solid black;
    height: 40px;
    text-align:center;
    border-radius: 10px;
    font-size: 18px;
    color: black;
    cursor: pointer; 
}

& >li>p{
    margin-top:6px
}
`
let SearchBox=styled.div`
margin-left:50px ;
& input{
    width: 180px;
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    padding-left: 3px;
}
& button{
    border-radius: 5px;
    width: 50px;
    height: 30px;
    background-color: #484646;
    color:white;
}
`