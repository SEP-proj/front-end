import axios from "axios";
import styled from "styled-components";
import { getCategoryList, getClickSubject } from "../../../api/api";
import { useEffect, useState } from "react";

function CategoryList({setRecoList,recoList,setSuggestion={setSuggestion}}){

    const[category,setCategory]=useState(false)
    const inputTitle=(e)=>{
        console.log("recoList = ",recoList);
        let category=e.target.innerText
        setSuggestion(true)
        getClickSubject(category).then((res)=>{
            console.log('writePagrres:',res.data.body.subjects)
            setRecoList(res.data.body.subjects);
     

          
    })
    }
  
 const categoryList=[
    {
        title:'일상'
    },
    {
        title:'사회'
    },
    {
        title:'과학'
    },
    {
        title:'스포츠'
    },
    {
        title:'문화/예술'
    },
    {
        title:'환경'
    },
    
 ]
    return(
        <div>
        <CategortUl category={category}>
            {categoryList.map((list)=><li onClick={inputTitle}><p>{list.title}</p></li>)}

            
        </CategortUl>
      </div>
    )
}
export default CategoryList;

let CategortUl=styled.ul`
margin-top: 20px;
width: 700px;
display: flex;
justify-content: space-between;
& >li{
    margin-left: 30px;
    background-color: #00BF2A;
   
    height: 30px;
    border-radius: 10px;
    font-size: 18px;
    color: white;
    cursor: pointer;
 
}
& >li>p{
    padding: 2px 8px;
}
`