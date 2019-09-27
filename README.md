# Introdução

API RESTful para simular cadastro de produtos e pedidos.

Desenvolvida para um trabalho da disciplina Manutenção de Software na Universidade Federal do Ceará - Campus Russas.

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

        // Pelo menos um atributo é obrigatório
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
    
    ```json
        {
          "productId": "ID_PRODUTO",
          "quantity": "QUANTIDADE_PRODUTO" (opcional - padrão = 1)
        }
    ```
    * GET 
`http://localhost:3000/orders`
    
    * GET 
`http://localhost:3000/orders/1`
    
    * DELETE
    `http://localhost:3000/orders/1`

## Instalação

### Com Docker

Construa o conteiner usando o *Dockerfile* que se encontra na pasta do projeto. Com isso a API estará funcionando na porta 3000.

### Sem Docker

Tenha instalado o *Node.Js*, e pelo terminal, acesse a pasta do projeto, então execute os comandos:

`npm install`

`npm install -g nodemon`

## Execução

Depois de instalar todas as dependências, execute o seguinte comando:

`npm start`

Após esse comando a API estará funcionando na porta 3000. Basta então, com o [*Postman*](https://www.getpostman.com/) ou [*Insomnia*](https://insomnia.rest/), testar os serviços disponíveis de acordo com a documentação.

## Documentação

A documentação se encontra na pasta **doc**. Ela foi escrita baseada no padrão [API Blueprint](https://apiblueprint.org/) e depois renderizada com o [Aglio](https://github.com/danielgtaylor/aglio). Para visializar a documentação na sua versão rendereizada, abra o arquivo `index.html`.
