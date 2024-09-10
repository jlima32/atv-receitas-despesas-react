import Box from "../Box/Box";
import Button from "../Button/Button";
import Transacao from "../Transacao/Transacao";
import "./Transacoes.css";

export default function Transacoes({transacoesObj, ocultar}){

    
  const transacoes = [...transacoesObj];

    return <>

        <Box>
            <div className="header-transacoes">
                <p className="header-transacoes-titulo">Transações</p>
                <Button text="Adicionar" class="header-btn-transacoes" type="button" onclick={ocultar}/>
            </div>
            <div className="lista-transacoes">
                <div className="header-lista-transacoes">
                    <div className="titulo-lista-transacoes">Descrição</div>
                    <div className="titulo-lista-transacoes">Tipo</div>
                    <div className="titulo-lista-transacoes">Valor</div>
                </div>
                <hr/>
                <div className="conteudo-lista-transacoes">
                    { transacoes.map ((transacao, i) => (
                        <Transacao transacao={transacao} key={i}/>
                    ))}
                </div>
            </div>
        </Box>
    </>
}