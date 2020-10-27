
# Exercício para criação REST APIs

### 1)

- [x] Instalar o nodejs, vscode e o modulo express.
- [x] Crie um arquivo ./server.js, rode o comando npm init -y.
- [x] Defina uma rota padrão para um serviço na porta 7001.

### 2)
- [x] Instale o nodemon.
- [x] Configure o script no package.json "dev":" nodemon server.js &".

## 3)
- [x] Instale o docker e baixe a imagem do mongo. 
- [x] Suba um container com nome mogo trabalhando na porta 27017.
- [x] Instale o mongoose e connect ao banco de dados. Baixe o studio 3T e o insomnia.

## 4) 
- [x] Crie o diretório ./src/models/Products.js e defina um schema para seu objeto.
- [x] Instale a lib require-dir.
- [x] Crie um objeto fake e import para o banco de dados quando houver requisição no endereço http://localhost:7001.

## 5)
- [x] Crie o diretório ./src/routes.js.
- [x] Agora passe a criar suas rotas neste arquivo.
 
## 6) 
- [x] Dentro do modelo Model View Controller (MVC), crie o diretório ./src/controller/ProductControllers.
- [x] Retire a lógica do arquivo de rotas.
- [x] Quando houver um request em localhost:7001/api/products, exiba os objetos contidos no banco de dados.

## 7)
- [x] Usando o método post, crie uma nova rota para inserir novos elementos no banco de dados. Para isso utilize o insomnia.

## 8) 
- [x] Crie no arquivo ./src/controllers/ProductController.js os métodos:
1. show ( Buscar um produto espícifico pelo ID no banco de dados )
2. update ( Atualização de um produto no banco de dados  )
3. destroy ( Remover item do banco de dados)
