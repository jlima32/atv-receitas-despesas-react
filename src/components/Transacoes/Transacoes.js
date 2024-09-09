import Box from "../Box/Box";
import "./Transacoes.css";

export default function Transacoes(){
    return <>

        <Box>
            <div className="header-transacoes">
                <p>Transações</p>
                <button>Adicionar</button>
            </div>
            <div className="lista-transacoes">
                <div className="header-lista-transacoes">
                    <div className="titulo-lista-transacoes">Descrição</div>
                    <div className="titulo-lista-transacoes">Tipo</div>
                    <div className="titulo-lista-transacoes">Valor</div>
                </div>
                <div className="conteudo-lista-transacoes">
                    <ul className="transacao">
                        <li className="transacao-descricao">Pizza</li>
                        <li className="transacao-tipo">Despesa</li>
                        <li className="transacao-valor">R$ 62,00</li>
                    </ul>
                </div>
            </div>
        </Box>
    </>
}