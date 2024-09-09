import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Transacoes from './components/Transacoes/Transacoes';

function App() {

  const transacoes = [
    {
      'descricao' : 'Salario',
      'tipo' : 'Receita',
      'valor' : 2500.32
    },
    {
      'descricao' : 'Pizza',
      'tipo' : 'Despesa',
      'valor' : 62.48
    },
    {
      'descricao' : 'Agua',
      'tipo' : 'Despesa',
      'valor' : 94.95
    },
    {
      'descricao' : 'Luz',
      'tipo' : 'Despesa',
      'valor' : 162.10
    },
    {
      'descricao' : 'Internet',
      'tipo' : 'Despesa',
      'valor' : 126.35
    }
  ]

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



  return (<>
      <Header receitas={calcularReceitas()} despesas={calcularDespesas()} saldo={calcularSaldo()}/>
      <Transacoes transacoesObj={transacoes}/>
      <Form />
  </>
  );
}

export default App;
