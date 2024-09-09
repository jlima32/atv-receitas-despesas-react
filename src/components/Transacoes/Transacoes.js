import Box from "../Box/Box";
import Transacao from "../Transacao/Transacao";
import "./Transacoes.css";

export default function Transacoes(){
    return <>

        <Box>
            <div className="header-transacoes">
                <p className="header-transacoes-titulo">Transações</p>
                <button className="header-btn-transacoes">Adicionar</button>
            </div>
            <div className="lista-transacoes">
                <div className="header-lista-transacoes">
                    <div className="titulo-lista-transacoes">Descrição</div>
                    <div className="titulo-lista-transacoes">Tipo</div>
                    <div className="titulo-lista-transacoes">Valor</div>
                </div>
                <hr/>
                <div className="conteudo-lista-transacoes">
                    
                    <Transacao />
                   
                </div>
            </div>
        </Box>
    </>
}