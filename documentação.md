criar novatabela:
yarn sequelize model:create --name NomeTabela --attributes campo:String

criar seed
yarn sequelize seed:generate --name nomeseed

tipo de dados https://cursos.alura.com.br/course/orm-nodejs-api-sequelize-mysql/task/77011

enviar atualização ao banco de dados
yarn sequelize db:migrate --debug

voltar atras a migração do banco
yarn sequelize db:migrate:undo

enviar seeds ao banco
yarn sequelize db:seed:all --debug

returar ultima seed
yarn sequelize db:seed:all:undo

restaurar para faze inicial
yarn sequelize db:migrate:undo:all

reverter somente uma migration específica.
yarn sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-users.js

Se desfazendo de todos a seeders gerados até o presente momento.
yarn sequelize db:seed:undo:all

//enviar minha porta local para um servidor linux com encaminhamento de porta
ssh -R 4000:localhost:37778 root@207.244.230.240

docker
criar imagem:
docker build -t rafaelwdornelas/api .

iniciar a imagem
docker run --name apisistema -rm -p 80:37778 -d rafaelwdornelas/api

deletar container
docker rm nomedocontainer

deletar imagem
docker rmi nomedaimagem
