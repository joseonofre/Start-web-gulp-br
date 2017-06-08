# Gulp para iniciar um projeto.

[![N|Solid](http://onlytech.me/images/logo_image.bc413ab9.png)](https://nodesource.com/products/nsolid)

Hey! I'm your first Markdown document in **StackEdit**[^stackedit]. Don't delete me, I'm very helpful! I can be recovered anyway in the **Utils** tab of the <i class="icon-cog"></i> **Settings** dialog.

----------


A instalação é fácil:
-------------

```
1 - Faça o download ou o clone do projeto
2 - Rode npm install para instalar as dependências.
3 - Rode gulp para monitorar css/imagens/javascript do projeto.
```

Entenda alguns das dependências usadas para esse start:
-------------

 - [Gulp Auto Prefixer](https://www.npmjs.com/package/gulp-autoprefixer) :insere os prefixos dos browsers no seu CSS automaticamente
 - [Gulp Concat](https://www.npmjs.com/package/gulp-concat) :Concatena o JS e o CSS em um arquivo.
 - [Gulp ImageMin](https://www.npmjs.com/package/gulp-imagemin) :Minifica as imagens.
 - [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)  :comprime o  CSS
 - [Gulp SourceMaps](https://www.npmjs.com/package/gulp-sourcemaps) :Adiciona os arquivos de source maps para facilitar o debug do SASS
 - [plumber](https://www.npmjs.com/package/gulp-plumber) :Usando faz com que você possa debugar melhor, mostrando o error no terminal.
 -  [Uglify](https://www.npmjs.com/package/gulp-uglify) comprimi seu javascript (obs: caso haja algum error na hora de comprimir o plumber mostrara no terminal onde está o error.)
