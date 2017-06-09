# Only-webKit start.


<p align="center">
  <img src="http://onlytech.me/images/logo_only.a86bcbf1.png">
</p>





**Only-webkit** é um start para o desenvolvimento do seu projeto web. Montando um padrão através do *gulp*,  super simples e fácil de usar.


----------
## O que tem de mais? ##
**Only-webkit** Ajuda na performance do seu trabalho, comprimindo todo o css, imagens, javascript sem te dar trabalho. Além de trazer uma boa estrutura de pasta para ser usada em qualquer projeto.

## Suporte do navegador ##
Esse é um gosto de cada um por isso decidimos deixar por default assim:

 - Safari 5
 - Internet explore 9+
 - Firefox 42
 - ios 6
 - Android 4

> Você pode mudar alterando no arquivo **Gulpfile.js**.
> .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 4'));
> Saiba mais sobre o [autoprefixer gulp](https://github.com/postcss/autoprefixer#options)

A instalação é fácil:
-------------

```
1 - Faça o download ou o clone do projeto
2 - Rode npm install para instalar as dependências.
3 - Rode gulp para monitorar css/imagens/javascript do projeto.
```

## Útil ##
 - Desenvolvemos pensando em deixar o mais limpo para o início de um projeto web, no css adicionamos apenas a **grid do bootstrap 4**, assim você ficará mais livre para poder usar outros frameworks ou nenhum em seu projeto.

> Caso não use nem a grid do bootstrap 4, não esqueça de remover o @import "grid-bootstrap" no **main.scss** para não poluir seu projeto.

- Se for usar o Jquery já existe um CDN do jquery no rodapé do html.


Entenda alguns das dependências usadas para esse start:
-------------

 - [Gulp Auto Prefixer](https://www.npmjs.com/package/gulp-autoprefixer) :insere os prefixos dos browsers no seu CSS automaticamente
 - [Gulp Concat](https://www.npmjs.com/package/gulp-concat) :Junta todos script em um só arquivo e todas as folhas de estilo em um só arquivo.
 - [Gulp ImageMin](https://www.npmjs.com/package/gulp-imagemin) :Minifica as imagens.
 - [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)  :comprime o  CSS
 - [Gulp SourceMaps](https://www.npmjs.com/package/gulp-sourcemaps) :Adiciona os arquivos de source maps para facilitar o debug do SASS
 - [plumber](https://www.npmjs.com/package/gulp-plumber) :Usando faz com que você possa debugar melhor, mostrando o error no terminal.
 -  [Uglify](https://www.npmjs.com/package/gulp-uglify) comprimi seu javascript (obs: caso haja algum error na hora de comprimir o plumber mostrara no terminal onde está o error.)
## Contribuindo ##

Projeto desenvolvido pela [Onlytech](onlytech.me) com os seguintes colaboradores: Raul Melo, José Neto, Walaks, Birinight.
