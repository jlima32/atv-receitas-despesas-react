import "./Form.css";
import Box from "../Box/Box";
import Button from "../Button/Button";

export default function Form(){
    return<>
        <div id="form" className="ocultar-form"> 
            <Box>
                <p className="header-form-titulo">
                    Adicionar Transação
                </p>
                <form className="form">
                    <div className="form-input w100">
                        <label htmlFor="descricao">Descrição: </label>
                        <input type="text"  id="descricao"/>
                    </div>
                    <div className="form-input-group w100">
                        <div className="form-input w50">
                            <label htmlFor="tipo">Tipo: </label>
                            <select id="tipo">
                                <option value="Despesa">Despesa</option>
                                <option value="Receita">Receita</option>
                            </select>
                        </div>
                        <div className="form-input w50">
                            <label htmlFor="valor">Valor: </label>
                            <input type="text" id="valor" />
                        </div>
                    </div>
                    <Button text="Adicionar Transação" class="btn-adicionar-transacao w100" type="submit"/>
                </form>
            </Box>
        </div>
    </>
}