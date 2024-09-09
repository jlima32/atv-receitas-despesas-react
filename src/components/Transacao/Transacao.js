import "./Transacao.css";

export default function Transacao({transacao}){
    const tipoLowerCase = transacao.tipo.toLowerCase();
    return <>
        <ul className={`transacao ${tipoLowerCase}`} key={transacao.i}>
            <li className="transacao-descricao">{transacao.descricao}</li>
            <li className={`transacao-tipo ${tipoLowerCase}-txt`}>{transacao.tipo}</li>
            <li className={`transacao-valor ${tipoLowerCase}-txt`}>{transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
        </ul>
        <hr/>
    </>
}