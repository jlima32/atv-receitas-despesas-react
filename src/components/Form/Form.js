import "./Form.css";
import Box from "../Box/Box";

export default function Form(){
    return<>
        <Box>
            <p className="header-form-titulo">
                Adicionar Transação
            </p>
            <form className="form">
                <div className="form-input w100">
                    <label htmlFor="descricao">Descrição: </label>
                    <input type="text" />
                </div>
                <div className="form-input-group w100">
                    <div className="form-input w50">
                        <label htmlFor="tipo">Tipo: </label>
                        <select name="tipo">
                            <option value="Despesa">Despesa</option>
                            <option value="Receita">Receita</option>
                        </select>
                    </div>
                    <div className="form-input w50">
                        <label htmlFor="valor">Valor: </label>
                        <input type="text" />
                    </div>
                </div>
                <button>Adicionar Transação</button>
            </form>
        </Box>
    </>
}