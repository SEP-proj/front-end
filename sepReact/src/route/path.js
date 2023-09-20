import { useSelector } from "react-redux";
import FinalWritePageIndex from "../page/finalWritePage/finalWritePageIndex";
import MainIndex from "../page/mainpage/mainIndex";
import WriteMainPageIndex from "../page/writeMainPage/writeMainPageIndex";
import WrtiePageIndex from "../page/writePage/writePageIndex";
import PostDetail from "../postDetail/postDetail";
import Community from "../page/community/community";



const routes = () => [
  {
    path: "/",
    element: <MainIndex />,
  },

  {
    path: "/writePage",
    element: <WrtiePageIndex />,
  },
  {
    path: "/writeMain",
    element: <WriteMainPageIndex />,
  },
  {
    path: "/finalWrite",
    element: <FinalWritePageIndex  />,
  },
  
  {
    path: "/postDetail",
    element: <PostDetail  />,
  },
  {
    path: "/community",
    element: <Community  />,
  },



];
export default routes;
