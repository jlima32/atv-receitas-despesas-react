import "./Transacao.css";

export default function Transacao({transacao}){
    return <>
        <ul className={`transacao ${transacao.tipo}`} key={transacao.i}>
            <li className="transacao-descricao">{transacao.descricao}</li>
            <li className={`transacao-tipo ${transacao.tipo}-txt`}>{transacao.tipo}</li>
            <li className={`transacao-valor ${transacao.tipo}-txt`}>{transacao.valor}</li>
        </ul>
        <hr/>
    </>
}