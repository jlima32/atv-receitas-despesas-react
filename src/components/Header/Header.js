import "./Header.css";
import iconeReceitas from "../../assets/img/trending_up.svg"
import iconeDespesas from "../../assets/img/trending_down.svg"
import Box from "../Box/Box";

export default function Header(){
    return <>
        <header>     
            <Box>
                <div className="header-saldo">
                    <p className="saldo-titulo">Saldo Atual</p>
                    <p className="saldo-valor">R$ 3.056,00</p>
                </div>
                <div className="header-receitas-despesas">
                    <div className="total-transacoes-container">
                        <div className="total-transacoes-icone">
                            <img src={iconeReceitas} alt="Ícone Receitas" />
                        </div>
                        <div className="total-transacoes-info">
                            <p className="total-transacoes-titulo">Receitas</p>
                            <p className="total-transacoes-soma receitas">R$ 3.500,00</p>
                        </div>
                    </div>

                    <div className="total-transacoes-container">
                        <div className="total-transacoes-icone">
                            <img src={iconeDespesas} alt="Ícone Despesas" />
                        </div>
                        <div className="total-transacoes-info">
                            <p className="total-transacoes-titulo">Despesas</p>
                            <p className="total-transacoes-soma despesas">R$ 444,00</p>
                        </div>
                    </div>

                </div>
            </Box>
        </header>
    </>
}