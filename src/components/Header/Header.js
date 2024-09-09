import "./Header.css";

export default function Header(){
    return <>
        <header>
            <div className="header-container">
                <div className="header-saldo">
                    <p className="saldo-titulo">Saldo Atual</p>
                    <p className="saldo-valor">R$ 3.056,00</p>
                </div>
                <div className="header-receitas-despesas">

                    <div className="receitas-container">
                        <div className="receitas-icone">
                            #
                        </div>
                        <div className="receitas-info">
                            <p className="receitas-titulo">Receitas</p>
                            <p className="receitas-total">R$ 3.500,00</p>
                        </div>
                    </div>

                    <div className="despesas-container">
                        <div className="despesas-icone">
                            #
                        </div>
                        <div className="despesas-info">
                            <p className="despesas-titulo">Despesas</p>
                            <p className="despesas-total">R$ 444,00</p>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    </>
}