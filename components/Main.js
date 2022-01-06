import styled from "styled-components";
import Link from "next/link";

const Main = ()=>{
    return(
        <MainComponent>
            <h1>RANDOM VERBS GENERATION</h1>
            <h2>English to Portuguese</h2>
            <Link href={{pathname:"api/randomVerbs"}}>
                <a>Visitar o endpoint da API</a>
            </Link>
        </MainComponent>
    );
}

const MainComponent = styled.div`

    width:100vw;
    height:60vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    h1{
        font-size:50px;
        font-weight:800;
        text-align:center;
        padding:0;
        margin:0;
    }

    h2{
        font-size:20px;
    }

    a{
        margin-top:50px;
        color:#c0c0c0;
        text-decoration:none;
        font-size:15px;
        font-weight:300;
        border:solid 1px #c0c0c0;
        padding: 15px;
        border-radius:20px;
    :hover{
        color:#000;
    }
    }
`;

export default Main;