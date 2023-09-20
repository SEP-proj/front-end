import styled from "styled-components";
import { useEffect, useState } from "react";
import { saveAll } from "../../../api/api";
import { useSelector } from "react-redux";

function FinalContent({ submit }) {


 

  console.log('합쳐서 가져온 글',submit)
  return (
    <>
      <FinalContentWrap>
        {/* {submit.content} */}
        {submit.content.split("<br/>").map((line) => (
          <>
            {line}
            <br />
          </>
        ))}
      </FinalContentWrap>
    </>
  );
}
export default FinalContent;
let FinalContentWrap = styled.p`
  margin-top: 20px;
 
 
  width: 80%;
  height: 50vh;
  padding: 10px;
  text-align: left;
  line-height: 25px;
  background-color:#F5F5F5;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.2), 8px 5px 2px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
`;
