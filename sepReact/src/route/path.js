import FinalWritePageIndex from "../page/finalWritePage/finalWritePageIndex";
import MainIndex from "../page/mainpage/mainIndex";
import WriteMainPageIndex from "../page/writeMainPage/writeMainPageIndex";
import WrtiePageIndex from "../page/writePage/writePageIndex";



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


];
export default routes;
