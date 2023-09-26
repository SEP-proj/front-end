import axios from "axios";
import styled from "styled-components";
import { getCategoryList, getClickSubject } from "../../../api/api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CategoryList({}) {
  let test = [
    {
      title: "title",
    },
  ];
  const dispatch = useDispatch();

  const inputTitle = (e) => {
    getClickSubject(e.target.innerText).then((res) => {
      console.log(res.data.body.subjects);
      dispatch({ type: "category/CATEGORY", payload: e.target.innerText });
      dispatch({
        type: "recommend/RECOMMNEDLIST",
        payload: res.data.body.subjects,
      });
    });
  };

  const categoryList = [
    {
      title: "일상",
      category: "DAILY",
    },
    {
      title: "사회",
      category: "SOCIETY",
    },
    {
      title: "과학",
      category: "SCIENCE",
    },
    {
      title: "스포츠",
      category: "SPORTS",
    },
    {
      title: "문화/예술",
      category: "CULTURE",
    },
    {
      title: "환경",
      category: "ENVIRONMENT",
    },
  ];

  return (
    <div>
      <CategortUl>
        {categoryList.map((list) => (
          <li onClick={inputTitle}>
            <p>{list.title}</p>
          </li>
        ))}
      </CategortUl>
    </div>
  );
}
export default CategoryList;

let CategortUl = styled.ul`
  margin-top: 20px;
  width: 800px;
  display: flex;
  justify-content: space-between;

  & > li {
    background-color: white;
    width: 120px;
    border: 1px solid black;
    height: 40px;
    text-align: center;
    border-radius: 10px;
    font-size: 20px;
    color: black;
    cursor: pointer;
  }

  & > li > p {
    margin-top: 10px;
  }
`;
