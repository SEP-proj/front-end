import styled from "styled-components";
import refresh from '../../../asset/img/refresh.png'
function FinalTitle() {
  return (
    <FinalTitleWrap>
      <span class="title">제목</span>
      <span>기후 위기 대처를 위한 탄소중립</span>
      <button>
        <img src={refresh} alt="" />
      </button>
    </FinalTitleWrap>
  );
}
export default FinalTitle;
let FinalTitleWrap = styled.div`
  text-align: left;
  width: 80%;
  border-radius: 5px;
  border: 1px solid black;
  padding: 10px;
  & .title {
    margin-right: 20px;
  }
  & > button {
    border: none;
    background-color: transparent;
    float: right;
    margin-top: 3px;
  }
  & > button > img {
    width: 15px;
  }
`;
