import "./Transacao.css";

export default function Transacao({transacao}){
    const tipoTransacao = transacao.tipo.toLowerCase();
    return <>
        <ul className={`transacao ${tipoTransacao}`} key={transacao.i}>
            <li className="transacao-descricao">{transacao.descricao}</li>
            <li className={`transacao-tipo ${tipoTransacao}-txt`}>{transacao.tipo}</li>
            <li className={`transacao-valor ${tipoTransacao}-txt`}>{transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
        </ul>
        <hr/>
    </>
}