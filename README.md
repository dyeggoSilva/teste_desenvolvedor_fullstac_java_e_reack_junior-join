# teste_desenvolvedor_fullstac_java_e_reack_junior-join

# ✨ Front-End

## 🔧 Tecnologias Utilizadas

* Node v22.18
* React
* Npm
* Axios
* Vite

## 🚀 Instruções para rodar o Front-end localmente.

O front foi desenvolvido em Reacte.  
Siga os passos abaixo para rodar localmente.

## 🔹 Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)  

Verifique se estão instalados:

```bash
node -v
npm -v
```

## 🔹 1. Clonar o repositório

```bash
git clone git@github.com:dyeggoSilva/teste_desenvolvedor_fullstac_java_e_reack_junior-join.git
```
entre na pasta do projeto e depôs na pasta FRONT-END

execute 

```bash
npm install
```
ou com Yarn

```bash
yarn install
```
---
## 🔹 3. Rodar a aplicação em modo desenvolvimento

Com npm:

```bash
npm run dev
```
Ou com yarn:
```bash
yarn run dev
```

## 🔹 3. Abra o navegador e acesse o link
```web
http://localhost:5173/
```
---

# ✨ Back-End

## 🔧 Tecnologias Utilizadas

* Java 21
* Spring Boot 3.x
* Spring Web
* Mavem
* Flyway (Gerenciador de migrations)
* Banco de dados H2(Banco em memória)
* Swagger OpenAPI 3
* Docker
* Mockito
* JUnit
  
---

## 🔹 Link Para a API rodando no Render.

a API leva em torno de 50Seg para iniciar pela primeira vez.
```bash
https://api-cardapio-protfolio.onrender.com/food?page=0&size=6

```

Documentação com Swagger.

```bash
https://api-cardapio-protfolio.onrender.com/swagger-ui/index.html#/
```
---

##  🚀 Instruções para rodar o Back-end localmente.

## 🔹 Pré-requisitos
* Java 21
* Mavem

### 1. Abra a pasta BACK-END.

em seguida abra o terminal na pasta e execute o comando

```bach
mvn spring-boot:run
```

## 🔹 2. Testar no navegador

Abra no navegador ou no Postman:

```web
http://localhost:8080/food?page=0&size=6
```
ou essa URL para Documentação no Swagger.

```web
http://localhost:8080/swagger-ui/index.html#/
```
---
##  🚀 Instruções para rodar o Back-end com Docker.

Este projeto já possui um **Dockerfile** configurado. Siga os passos abaixo para rodá-lo em um container Docker.



## 🔹 Pré-requisitos

- [Docker](https://www.docker.com/products/docker-desktop) instalado na sua máquina.

  Verifique se está funcionando:

### 1. Verificar se o Docker está instalado.

No terminal, execute:

```bash
docker -v
```
---
Se aparecer a versão, tá beleza. Caso contrário, precisa instalar o Docker Desktop
 (Windows/Mac) ou o docker-ce (Linux).

 ---

## 🔹 2. Construir a imagem Docker do projeto

Dentro da pasta do projeto (onde está o Dockerfile), No terminal, execute:

```bash
docker build -t nome-do-projeto .
```

-t nome-do-projeto → dá um nome pra sua imagem (ex: meu-projeto-java).

. → significa que o Dockerfile está na pasta atual.

---

## 🔹 3. Rodar o container

Depois que a imagem for criada, No terminal, execute:

```bash
docker run -p 8080:8080 nome-do-projeto

```
-p 8080:8080 → mapeia a porta 8080 do container pra 8080 do seu PC .

nome-do-projeto → o mesmo nome que você colocou no build.

---

## 🔹 4. Testar no navegador

Abra no navegador ou no Postman:

```web
http://localhost:8080
```
ou essa URL para Documentação no Swagger.

```web
http://localhost:8080/swagger-ui/index.html#/
```
---

