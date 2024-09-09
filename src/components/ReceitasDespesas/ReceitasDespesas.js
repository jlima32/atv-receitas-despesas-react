import "./ReceitasDespesas.css";

export default function ReceitasDespesas({tipo, src, valor}){
    const tipoLowerCase = tipo.toLowerCase();
    return<>
        <div className="total-transacoes-container">
            <div className="total-transacoes-icone">
                <img src={src} alt={`Ícone ${tipo}`} />
            </div>
            <div className="total-transacoes-info">
                <p className="total-transacoes-titulo">{tipo}</p>
                <p className={`total-transacoes-soma ${tipoLowerCase}`}>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </div>
    </>
}