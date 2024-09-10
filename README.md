https://atv-receitas-despesas-react.vercel.app

# Estrutura do Projeto

Projeto feito em React para gerenciar receitas e despesas.


### Estrutura dos componentes

* __App:__ Componente principal, gerencia as transações e fornece funções para adicionar, calcular receitas, despesas e saldo, passando essas funções como props para os componentes filhos.

* __Header:__ Componente que recebe o saldo atual, o total de receitas e o total de despesas como props e exibe as informações.

* __Transações:__ Componente que exibe uma lista de itens com base nas transações que foram adicionada. Se estiver vazia, exibe uma mensagem.

* __Form:__ Componente que exibe o formulário para adicionar novas transações. Utiliza props para receber a função de adição de transações. Quando o formulário é enviado, a função adicionarTransacao é chamada para validar os dados e guardar a nova transação.

* __Children:__ Foi utilizado como um componente de container para aplicar estilos e estruturas que se repetiam. 



### Como Utilizar

1. Abra o projeto no Visual Studio Code
2. Instale as dependências 
```
npm install
```
3. Execute o projeto 

```
npm start
```
O projeto será executado em http://localhost:3000




