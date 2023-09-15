import Layout from "./page/layout/layoutIndex";
import MainIndex from "./page/mainpage/mainIndex";
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Routing from "./route/routings";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";

function App() {
  const clientId='775405737077-58i2affkch68c6ho9q8np94o1hmkmlt6.apps.googleusercontent.com'

  return (
    
    <BrowserRouter>
    
    <Layout>
   <Routing />
   </Layout>
   
   </BrowserRouter>
  );
}

export default App;