# 01 Challenge - Create image GoLang with less 2MB

## Original challenge text
> Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go! Você terá que publicar uma imagem no docker hub. Quando executarmos: docker run seu-user/fullcycle

>Temos que ter o seguinte resultado: Full Cycle Rocks!!

>Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final, logo, vale a pena dar uma conferida no próprio site da Go Lang para aprender como fazer um "olá mundo".

>Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.

> A imagem de nosso projeto Go precisa ter menos de 2MB =)

> Suba o projeto em um repositório Git remoto e coloque o link da imagem que subiu no Docker Hub.

## Solution
<ol>
    <li>Pull a lightweight image using GoLang, using alpine</li>
    <li>Compile the main.go file</li>
    <li>Start an empty image with scratch</li>
    <li>Copy the executable to the new container</li>
    <li>Execute the file</li>
</ol>

## Full soluciton
https://github.com/micaelmf/full-cycle-devops/blob/main/docker/01-challenge/Dockerfile

## Execute soluciton
<ol>
<li>Pull docker image</li>
    <code>docker pull micaelmf/fullcycle-docker-go-2mb:latest</code>
<li>Run the container</li>
    <code>docker run micaelmf/fullcycle-docker-go-2mb:latest</code>
</ol>

## Image on Dockerhub
https://hub.docker.com/r/micaelmf/fullcycle-docker-go-2mb