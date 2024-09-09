import "./Header.css";

import iconeReceitas from "../../assets/img/trending_up.svg"
import iconeDespesas from "../../assets/img/trending_down.svg"

import Box from "../Box/Box";
import ReceitasDespesas from "../ReceitasDespesas/ReceitasDespesas";

export default function Header({saldo, receitas, despesas}){
    return <>
        <header>     
            <Box>
                <div className="header-saldo">
                    <p className="saldo-titulo">Saldo Atual</p>
                    <p className="saldo-valor">{saldo}</p>
                </div>
                <div className="header-receitas-despesas">
                    <ReceitasDespesas tipo="Receitas" src={iconeReceitas} valor={receitas}/>
                    <ReceitasDespesas tipo="Despesas" src={iconeDespesas} valor={despesas}/>
                </div>
            </Box>
        </header>
    </>
}