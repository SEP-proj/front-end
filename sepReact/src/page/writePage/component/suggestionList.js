import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect } from "react-router-dom";
import styled from "styled-components";

// import {InputReducer,state} from "../../../reducer/inputReducer";
export let categoryTitle;
function SuggestionList({ recoList, suggestion }) {
 
  const dispatch = useDispatch();
  const valueOnclick = (e) => {
    console.log(e.target.innerText);
    categoryTitle=e.target.innerText;
    dispatch({type:"INPUTTEXT",payload:e.target.innerText});
    console.log(categoryTitle)
  };
  return (
    <div>
      <SuggestionUl suggestion={suggestion}>
        {recoList.map((list) => (
          <li onClick={valueOnclick}>{list}</li>
        ))}
      </SuggestionUl>
    </div>
  );
}
export default SuggestionList;

const SuggestionUl = styled.ul`
  text-align: left;
  display: ${(props) => (props.suggestion ? "block" : "none")};
  width: 450px;
  margin: 40px auto;
  border: 1px solid black;
  border-radius: 10px;
  & > li {
    list-style: square;
    font-size: 16px;
    font-weight: bold;
    margin: 30px;
    margin-left: 50px;
    cursor: pointer;
  }
`;
