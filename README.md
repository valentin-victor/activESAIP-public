# eleventy (11ty)

https://www.11ty.dev/

## objectif

1. avoir un site fonctionnel à 100% avec eleventy
2. rendre la modification du texte simplifié avec des variables (nunjunk) [??à faire??]
3. tout mettre sur wordpress si on a le temps

## organisation

- installation windows

https://nodejs.org/en/

- installation linux

??
https://nodejs.org/en/
??

--- ou en ligne de commande ---

https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version
??

sudo apt-get install nodejs

sudo apt-get install npm

??

sudo npm cache clean -f

sudo npm install -g n

sudo n stable

- faire fonctionner eleventy avec un "hot-reload"

npx @11ty/eleventy --input=./src --serve

note: pour être sur de la modification, il est possible de supprimer le fichier "_site" pour tout enlever, il sera recrée automatiquement proprement.

## structure

tous les fichiers sont à mettre dans /src

"/src/CSS" pour le/les CSS  (bootstrap ou custom?)

"/src/JS" le/les fichiers javascript

"/src" pour le menu principal 

"/src/X" ou "X" représente une page spécifique

s'il y a plusieurs niveaux, il faut tous les mettre dans le /src/...     ex:



/src/batiment-1     |ou|    /src/batiment

/src/batiment-2-intérieur

/src/batiment-3-extérieur


et pour le nom des fichiers HTML, il faut juste:

- ajouter l'extension .njk au lieu de .html

- mettre au début du fichier
```
---
layout: layoutPage.njk
---
```
(ca crée automatiquement le header)
