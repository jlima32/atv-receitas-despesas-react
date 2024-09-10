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
            {transacoes.length === 0 ? 
                <p className="msg-lista">A lista de transações está vazia. Comece a adicionar itens!</p>
            : 
                <div className="lista-transacoes">
                    <div className="header-lista-transacoes">
                        <div className="titulo-lista-transacoes">Descrição</div>
                        <div className="titulo-lista-transacoes">Tipo</div>
                        <div className="titulo-lista-transacoes">Valor</div>
                    </div>
                    <hr/>
                    <div className="conteudo-lista-transacoes">
                        {/* Percorre o array com as transações e renderiza os dados */}
                        { transacoes.map ((transacao, i) => (
                            <Transacao transacao={transacao} key={i}/>
                        ))}
                    </div>
                </div>
            }
        </Box>
    </>
}