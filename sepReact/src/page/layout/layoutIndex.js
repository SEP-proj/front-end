
import Header from "./header/header";
import Footer from "./footer/footer";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

function Layout({authenticated,setAuthenticated}){
    return(
        <>
        <Container>
        <Header authenticated={authenticated} setAuthenticated={setAuthenticated}/>

        <Outlet/>
        </Container>
        </>
    )
}
export default Layout;
let Container=styled.div`
height: 100vh;
display: grid;

grid-template-rows: 0.5fr 5fr ;
`
