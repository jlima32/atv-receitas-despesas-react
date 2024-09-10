import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Transacoes from './components/Transacoes/Transacoes';

function App() {

  //Inicia a lista de transações vazia e armazena as novas transações
  const [transacoes, setTransacoes] = useState([]);

  //Função para calcular o total de receitas
  function calcularReceitas(){
    const totalReceitas = transacoes
      .filter((transacao) => transacao.tipo === 'Receita') // Filtra as transações, inclui apenas as com o tipo 'Receita'
      .reduce((valorAcumulado, transacaoAtual) => valorAcumulado + transacaoAtual.valor,0) // Soma os valores das transações filtradas
    return totalReceitas; // retorna o total de receitas
  }

  //Função para calcular o total de despesas
  function calcularDespesas(){
    const totalDespesas = transacoes
      .filter((transacao) => transacao.tipo === 'Despesa')// Filtra as transações, inclui apenas as com o tipo 'Despesa'
      .reduce((valorAcumulado, transacaoAtual) => valorAcumulado + transacaoAtual.valor,0) // Soma os valores das transações filtradas
    return totalDespesas; // retorna o total de despesas
  }

  //Função para calcular o saldo
  function calcularSaldo(){
    const saldoAtual = calcularReceitas() - calcularDespesas();
    return saldoAtual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // retorna o saldo e formata 
  }

  //Função para mostrar/ocultar o formulário para adicionar transação
  function ocultarForm(){
    const divForm = document.querySelector('#form'); // pega a div do formulário
    //verifica se contem a classe ocultar form
    if(divForm.classList.contains('ocultar-form')){
      //se sim remove a classe para que o formulário seja exibido
      divForm.classList.remove('ocultar-form')
      //adiciona a classe anim a div
      divForm.classList.add('anim')
      //foca no input da descrição
      document.getElementById('descricao').focus();
    }else{
      //adiciona a classe para ocultar a div do formulário
      divForm.classList.add('ocultar-form')
    }
  }

  //Função para adicionar transação
  function adicionarTransacao(){
    //seleciona os campos do formulário
    const descricao = document.getElementById('descricao');
    const tipo = document.getElementById('tipo');
    const valor = document.getElementById('valor');

    //verificações dos campos
    if(descricao.value === ''){
      alert("Digite uma descrição para o item!")
    }else if(descricao.value.length < 3){
      alert("Digite uma descrição com no mínimo 3 caracteres!")
    }else if(!isNaN(descricao.value)){
      alert("Digite texto no campo de descrição!")
    }else if(isNaN(valor.value)){
      alert("Digite números no campo de valor! (ex: 199.90)")
    }else if(valor.value < 0){
      alert("Digite um valor maior do que 0!")
    }else if(valor.value === ''){
      alert("Digite um valor para o item!")
    }else{
      //cria uma nova transação
      const novaTransacao = { 
        'descricao' : descricao.value,
        'tipo' : tipo.value,
        'valor' : parseFloat(valor.value)
      }
      setTransacoes([...transacoes, novaTransacao])
      descricao.value = '';
      tipo.value = 'Despesa';
      valor.value = '';
      //oculta o formulário
      ocultarForm();
    }
    
  }

  return (<>
      <Header receitas={calcularReceitas()} despesas={calcularDespesas()} saldo={calcularSaldo()}/>
      <Transacoes transacoesObj={transacoes} ocultar={ocultarForm}/>
      <Form adicionar={adicionarTransacao}/>
  </>
  );
}

export default App;
