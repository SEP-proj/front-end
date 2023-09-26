import Layout from "./page/layout/layoutIndex";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MainIndex from "./page/mainpage/mainIndex";
import WrtiePageIndex from "./page/writePage/writePageIndex";
import WriteMainPageIndex from "./page/writeMainPage/writeMainPageIndex";
import FinalWritePageIndex from "./page/finalWritePage/finalWritePageIndex";
import PostDetail from "./postDetail/postDetail";
import Community from "./page/community/community";
import OAuth2RedirectHandler from "./api/OAuth2Redirct";
import { getCurrentUser } from "./api/apiutil";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./api/constants";
import PostDetail2 from "./postDetail/postDetail2";
import { useDispatch } from "react-redux";

function App() {
  const dispatch=useDispatch()
  const [authenticated,setAuthenticated]=useState(false)
  const [curerentUser,setCurrentUser]=useState(null)
const loadCurrentlyLoggedInUser=()=> {
    getCurrentUser()
    .then(response => {
      console.log(response)
      dispatch({type:'user/TOKENUSERID',payload:response.id})
       setAuthenticated(true);
      
    }).catch(error => {
      console.error(error)
    });    
  }

 const  componentDidMount=()=> {
    this.loadCurrentlyLoggedInUser();
  }
  useEffect(()=>{
    if(localStorage.getItem(ACCESS_TOKEN)){
      loadCurrentlyLoggedInUser();
    }
  },[])

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout  authenticated={authenticated} setAuthenticated={setAuthenticated}/>}>
          <Route path="/" element={<MainIndex />}/>
          <Route path="writePage" element={<WrtiePageIndex />}/>
          <Route path="writeMain" element={<WriteMainPageIndex />}/>
          <Route path="finalWrite" element={<FinalWritePageIndex />}/>
          <Route path="postDetail" element={<PostDetail />}/>
          <Route path="postDetail2" element={<PostDetail2 />}/>
          <Route path="community" element={<Community />}/>
          <Route path="oauth2/redirect" element={<OAuth2RedirectHandler/>}/>
          </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
