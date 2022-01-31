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
        text-transform: uppercase;
        text-align: center;
        font: 70px 'Open Sans';
        font-weight: bold;
        margin: 0px 20px 0px 20px;
        
        /* gradiente */
        background-image:linear-gradient(to right, #e3c924, #f38c19);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    h2{
        font: 25px 'Open Sans';
        color: #c4c5cf;
        text-align: center;
    }

    a{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 35px;
        border-radius: 20px;
        border: 0;
        background-color: #f38c19;
        color: #fff;
        font-family: 'Open Sans';
        font-size: 15px;
        cursor: pointer;
        padding:5px;
        text-decoration:none;
        margin-top:50px ;
    :hover{
        background-color: #995d18;
    }
    }
`;

export default Main;