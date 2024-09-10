import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Transacoes from './components/Transacoes/Transacoes';

function App() {

  const [transacoes, setTransacoes] = useState([]);


  function calcularReceitas(){
    const totalReceitas = transacoes
      .filter((transacao) => transacao.tipo === 'Receita')
      .reduce((valorAcumulado, transacaoAtual) => valorAcumulado + transacaoAtual.valor,0)
    return totalReceitas;
  }

  function calcularDespesas(){
    const totalDespesas = transacoes
      .filter((transacao) => transacao.tipo === 'Despesa')
      .reduce((valorAcumulado, transacaoAtual) => valorAcumulado + transacaoAtual.valor,0)
    return totalDespesas;
  }

  function calcularSaldo(){
    const saldoAtual = calcularReceitas() - calcularDespesas();
    return saldoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  function ocultarForm(){
    const divForm = document.querySelector('#form');
    if(divForm.classList.contains('ocultar-form')){
      divForm.classList.remove('ocultar-form')
      divForm.classList.add('anim')
      document.getElementById('descricao').focus();
    }else{
      divForm.classList.add('ocultar-form')
    }
  }

  function adicionarTransacao(){
    const descricao = document.getElementById('descricao');
    const tipo = document.getElementById('tipo');
    const valor = document.getElementById('valor');
    const novaTransacao = { 
      'descricao' : descricao.value,
      'tipo' : tipo.value,
      'valor' : parseFloat(valor.value)
    }
    setTransacoes([...transacoes, novaTransacao])
    descricao.value = '';
    tipo.value = 'Despesa';
    valor.value = '';

    ocultarForm();
    
  }

  return (<>
      <Header receitas={calcularReceitas()} despesas={calcularDespesas()} saldo={calcularSaldo()}/>
      <Transacoes transacoesObj={transacoes} ocultar={ocultarForm}/>
      <Form adicionar={adicionarTransacao}/>
  </>
  );
}

export default App;
