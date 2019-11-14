# Introdução

API RESTful para simular cadastro de produtos e pedidos.

Desenvolvida para um trabalho da disciplina Manutenção de Software na Universidade Federal do Ceará - Campus Russas.

>Abaixo constam algumas informações importantes sobre as requisições e resposta da API, mas uma documentação completa está na pasta *doc*. Também é importante observar as informações sobre o banco de dados.

## Tecnologias

- Node.js
- Express
- MongoDb

## Serviços
+ **Produto**

   * POST
   `http://localhost:3000/products`

      Ex. Body:
    ```json
        {
          "name": "Bicicleta",
          "price": "339.99"
        }
    ```
   * GET 
   `http://localhost:3000/products`

   * GET 
   `http://localhost:3000/products/1`

   * PATCH
   `http://localhost:3000/products/1`

      Ex. Body:

      Pelo menos um atributo é obrigatório
    ```json
        {
            "name": "NOME_PRODUTO",
            "price": "PRECO_PRODUTO"
        }
    ```

   * DELETE
   `http://localhost:3000/products/1`

+ **Peditos**

  * POST
    `http://localhost:3000/orders`
    
      Ex. Body:

      A quantidade é opcional, e caso seja omitida o valor padrão é 1

  ```json
      {
        "productId": "ID_PRODUTO",
        "quantity": "QUANTIDADE_PRODUTO"
      }
  ```

  * GET 
   `http://localhost:3000/orders`
    
  * GET 
   `http://localhost:3000/orders/1`
    
  * DELETE
   `http://localhost:3000/orders/1`

## Instalação

### Banco de Dados

Para que a API se conecte com um banco de dados é necessário que você crie um banco no site do *MongoDB Aatlas*, copie a *Connection String* e substitua colando aonde tem `<SUA_STRING_DE_CONEXÃO>` no arquivo `app.js`. **Sem essa alteração a API não irá funcionar**.

### Com Docker

Construa o conteiner usando o *Dockerfile* que se encontra na pasta do projeto. Com isso a API estará funcionando na porta 3000.

### Sem Docker

Tenha instalado o *Node.Js*, e pelo terminal, acesse a pasta do projeto, então execute os comandos para instalar as dependências:

`npm install`

`npm install -g nodemon`

#### Execução

Depois de instalar todas as dependências, execute o seguinte comando:

`npm start`

Após esse comando, a API estará funcionando na porta 3000. Basta então, com o [Postman](https://www.getpostman.com/) ou [Insomnia](https://insomnia.rest/), testar as rotas disponíveis de acordo com a documentação.

## Documentação

A documentação se encontra na pasta **doc**. Ela foi escrita baseada no padrão [API Blueprint](https://apiblueprint.org/) e depois renderizada com o [Aglio](https://github.com/danielgtaylor/aglio). Para visializar a documentação na sua versão rendereizada, abra o arquivo `index.html`.
