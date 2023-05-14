# store-microservices

>Micro serviço de carrinho de compras.

[![Author](https://img.shields.io/badge/author-EdersonDav-000000?style=flat-square)](https://github.com/EdersonDav)

# 📌 Índice

- [Recursos](#-recursos)
- [Instalação](#-instalação)
- [Começando](#-começando)
- [Tecnologias Usadas](#-tecnologias-usadas)
- [Créditos](#-créditos)

# 🚀 Recursos

- Listar produtos
- Adicionar produto ao carrinho
- Listar carrinho
- Deletar produto do carrinho


# 👷🏿 Instalação

**O projeto é separado em três API's, um serviço onde possui os produtos da loja, um serviço onde é salvo o carrinho e um gateway de comunicação.**

**Você precisa instalar o [Node.js](https://nodejs.org/en/download/) e o [Yarn](https://yarnpkg.com/) primeiramente.**

**Para clonar o projeto via HTTPS, execute este comando:**

`git clone https://github.com/EdersonDav/store-microservices.git`

## Serviço de produto

**No serviço de produto utilizamos MongoDB para persistencia dos dados**

### Instalação de dependências

**No terminal, dentro da pasta product, execute o comando**

`yarn`

**Após a instalação de dependências é necessário a criação do arquivo `.env` na pasta product do projeto com os valores de:**

~~~javascript
  PORT=
  URI_CONNECTION= 
~~~

## Serviço de carrinho

**No serviço de carrinho utilizamos Postgres SQL para persistencia dos dados**

### Instalação de dependências

**No terminal, dentro da pasta cart, execute o comando**

`yarn`

**Após a instalação de dependências é necessário a criação do arquivo `.env` na pasta cart do projeto com os valores de:**

~~~javascript
  PORT=
  DB_TYPE=
  DB_HOST=
  DB_PORT=
  DB_USER=
  DB_PASS=
  DB_NAME=
~~~

## Store gateway

**No API gateway não utilizamos persistencia de dados**

### Instalação de dependências

**No terminal, dentro da pasta store, execute o comando**

`yarn`

**Após a instalação de dependências é necessário a criação do arquivo `.env` na pasta store do projeto com os valores de:**

~~~javascript
  PORT=
  PRODUCT_SERVICE_URL=
  CART_SERVICE_URL=
~~~

# 🏃🏿 Começando

### Iniciar servidor

**É necessario que cada serviço e o gateway estejam com portas diferentes configuradas nos seus respectivos envs.**

**Para rodar cada projeto, basta acessar suas pastas e rodar o comando**

`yarn start:dev`

**Para fazer a primeira carga de produtos, basta fazer um post para a rota.**

`(serviço de produto)/products/initial-load`

**Na API gateway existe a documentação das rotas no swagger. Após a API rodar basta acessar a rota.**

`(gateway)/api`

**Para auxilio de testes na pasta raiz do projeto existe a collection utilizada no insomnia para desenvolvimento.**

# 👨🏿‍💻 Tecnologias Usadas

* [TypeScript](https://www.typescriptlang.org/)
* [NodeJs](https://nodejs.org/en/)
* [NestJs](https://nestjs.com/)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io//)

# ☕ Créditos

## <i>Ederson Davi</i>

[Github](https://github.com/EdersonDav) 👨🏿‍🎓🚀

[LinkedIn](https://www.linkedin.com/in/silvaedersonqueiroz) 👨🏿‍👔
