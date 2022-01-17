import styled from "styled-components";
import Link from "next/link";

const FooterComponent = ()=>{
    return(
        <Footer>
            <h2>Developed by Gustavo Barreto:</h2>
            <Link href="https://github.com/barretogustavo">
                <a>GitHub</a>
            </Link>
            <Link href="https://www.linkedin.com/in/gustavobarretodev/">
                <a>LinkedIn</a>
            </Link>
            <Link href="https://instagram.com/gustavobarreto.dev/">
                <a>Instagram</a>
            </Link>
        </Footer>
    );
}

const Footer = styled.div`

    width:100vw;
    height:30vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    text-align:center;

    h2{
        font-size:15px;
        font-family: 'Open sans';
        color: #292929;
    }

    a{
        margin-left:20px;
        color:black;
        :active{
            color:#000;
        }
    }
    
`;

export default FooterComponent;