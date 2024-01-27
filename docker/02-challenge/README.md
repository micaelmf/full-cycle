# 02 Challenge - Reverse proxy with Nginx

## Original challenge text
> Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

> O retorno da aplicação node.js para o nginx deverá ser:

>"Full Cycle Rocks!"

>- Lista de nomes cadastrada no banco de dados.

>Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

>A linguagem de programação para este desafio é Node/JavaScript.

## Solution

This docker-compose.yaml file defines three services: nginx, app, and db.

<ul>
    <li><code>nginx</code> is a reverse proxy server and It depends on the "app" service and exposes port 8080.</li>
    <li><code>app</code> is a Node.js application, built from a Dockerfile in the ./node directory. It waits for the db service to start before it begins.</li>
    <li><code>db</code> is a MySQL database, built from a Dockerfile in the ./mysql directory.</li>
</ul>

Each service is built from a Dockerfile in its respective directory and they all share a custom network for communication. The Dockerfiles for each service define the necessary setup, dependencies, and exposed ports for that service. The docker-compose.yaml file orchestrates these services to work together.


## Execute soluciton
<ol>
<li>Run the command</li>
    <code>docker-compose up -d</code>
</ol>