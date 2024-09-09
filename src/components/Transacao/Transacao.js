import "./Transacao.css";

export default function Transacao(){
    return <>
        <ul className="transacao receita">
            <li className="transacao-descricao">Salário</li>
            <li className="transacao-tipo receita-txt">Receita</li>
            <li className="transacao-valor receita-txt">R$ 3.500,00</li>
        </ul>
        <hr/>
        <ul className="transacao despesa">
            <li className="transacao-descricao">Pizza</li>
            <li className="transacao-tipo despesa-txt">Despesa</li>
            <li className="transacao-valor despesa-txt">R$ 62,00</li>
        </ul>
        <hr/>
        <ul className="transacao despesa">
            <li className="transacao-descricao">Água</li>
            <li className="transacao-tipo despesa-txt">Despesa</li>
            <li className="transacao-valor despesa-txt">R$ 162,00</li>
        </ul>
        <hr/>
        <ul className="transacao despesa">
            <li className="transacao-descricao">Luz</li>
            <li className="transacao-tipo despesa-txt">Despesa</li>
            <li className="transacao-valor despesa-txt">R$ 942,00</li>
        </ul>
        <hr/>
        <ul className="transacao despesa">
            <li className="transacao-descricao">Internet</li>
            <li className="transacao-tipo despesa-txt">Despesa</li>
            <li className="transacao-valor despesa-txt">R$ 126,00</li>
        </ul>
        <hr/>
    </>
}