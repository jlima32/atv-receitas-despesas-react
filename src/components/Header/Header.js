import "./Header.css";

import iconeReceitas from "../../assets/img/trending_up.svg"
import iconeDespesas from "../../assets/img/trending_down.svg"

import Box from "../Box/Box";
import ReceitasDespesas from "../ReceitasDespesas/ReceitasDespesas";

export default function Header(){
    return <>
        <header>     
            <Box>
                <div className="header-saldo">
                    <p className="saldo-titulo">Saldo Atual</p>
                    <p className="saldo-valor">R$ 3.056,00</p>
                </div>
                <div className="header-receitas-despesas">
                    <ReceitasDespesas tipo="Receitas" src={iconeReceitas} valor="3.500,00"/>
                    <ReceitasDespesas tipo="Despesas" src={iconeDespesas} valor="444,00"/>
                </div>
            </Box>
        </header>
    </>
}