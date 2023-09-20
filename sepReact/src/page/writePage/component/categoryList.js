import axios from "axios";
import styled from "styled-components";
import { getCategoryList, getClickSubject } from "../../../api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoryList({setRecoList,setSuggestion,category}){
let test=[{
    title:"title"
}]
const dispatch=useDispatch()
    const inputTitle=(e)=>{
 
        
    dispatch({type:'CATEGORY',payload:e.target.innerText});
        setSuggestion(true)
        console.log(category)
        getClickSubject(category).then((res)=>{
            console.log('writePagrres:',res.data.body.subjects)
            // setRecoList(res.data.body.subjects);
            setRecoList(test);
            
          
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
      
        <CategortUl >
            {categoryList.map((list)=><li onClick={inputTitle}><p>{list.title}</p></li>)}

            
        </CategortUl>
      </div>
    )
}
export default CategoryList;

let CategortUl=styled.ul`
margin-top: 20px;
width: 800px;
display: flex;
justify-content: space-between;

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