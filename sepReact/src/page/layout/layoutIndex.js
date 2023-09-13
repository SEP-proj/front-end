
import Header from "./header/header";
import Footer from "./footer/footer";
import styled from "styled-components";

function Layout({children}){
    return(
        <>
        <Container>
        <Header/>

            {children}
       
        <Footer/>
        </Container>
        </>
    )
}
export default Layout;
let Container=styled.div`
height: 100vh;
display: grid;

grid-template-rows: 0.5fr 4fr 0.5fr;
`
