import Link from "next/link";

const Home = ()=>{
    return (
        <div>
            <h1>Bem vindo a API</h1>
            <Link href={{pathname:"api/randomVerbs"}}>
                <a>visitar o endpoint da API</a>
            </Link>
        </div>
    );
}

export default Home;