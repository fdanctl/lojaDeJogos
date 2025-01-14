# API para loja de jogos

## Faz endpoints para:

- login, logout
- criar utilizador, editar utilizador,ver todos os dados, apagar utilizador
- adicionar jogo, editar jogo, ver jogo e apagar jogo

### utilizador

    {
    	id:num
    	username:string
    	email:string
    	password:string
    	nome:string
    	isLogged:boolean
    	lastLogin:string
    }

### jogo

    {
    	id:string
    	titulo:string
    	descricao:string
    	preco:num
    	genero:string
    	stock:num
    	emStock:bool
    }

## notas:

- o id do utilizador é de 5 em 5
- o id do jogo é as 2 primeiras letras do titulo mais o id do jogo anterior +1
- se não houver jogos o numero começa no 1
- o preço dos jogos é guardado em centimos sem virgulas ou pontos (35.95->3595)
- para qualquer response que inclua o preço de um jogo, este tem que ir formatado com o currency.js
- utilizar o router para organizar os endpoints
- utilizar o cors para permitir um cliente na origem: http://localhost:4000
- todas as responses que peçam informação são um JSON
- os valores que a db recebe tem obrigatoriamente ser os estipulados
  (stock:num -> tem quer ser um numero, se o utilizador enviar outra coisa devolver erro)
- a db é um array de objectos
- todos os requests para o utilizador são feitos com parametros (params) ou body quando aplicavel
- todos os requests para o jogo são feitos com url queries ou body quando aplicável
