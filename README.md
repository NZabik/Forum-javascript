# Evaluation-10-2023

- [Evaluation-10-2023](#evaluation-10-2023)
  - [Figma](#figma)
  - [Site](#site)
    - [Langages utilisés](#langages-utilisés)
    - [Détails du site](#détails-du-site)
      - [1. Header](#1-header)
      - [2. Accueil](#2-accueil)
      - [3. Page d'enregistrement](#3-page-denregistrement)
      - [4. Page de login](#4-page-de-login)
      - [5. Pages forum](#5-pages-forum)
        - [Sous-forums de discussion](#sous-forums-de-discussion)

## Figma
[Lien vers le figma](https://www.figma.com/file/rDfLqovjY21cNtzpJlEqeD/Forum-%C3%A9valuation-10%2F2023?type=design&node-id=3%3A41&mode=design&t=57OIpgu6kwzvkLuN-1)

Il y a 3 pages dans Figma, une pour chaque format.


## Site

### Langages utilisés
- HTML
- CSS
- Javascript
- Bootstrap


### Détails du site

#### 1. Header

Il y a 5 boutons sur le header:

- Le bouton **_Accueil_**: Permet de se rendre sur la page d'accueuil correspondante.
- Le bouton **_Forum_**: Uniquement accessible si l'utilisateur est connecté via la page de login, sinon, un message demande à l'utilisateur de se connecter.
- Le bouton **_S'enregistrer_**: Permet de créer un compte.
- Le bouton **_Se connecter_**: Permet de se connecter si un compte a été créé. Le bouton ne fonctionne que si l'utilisateur est déconnecté, sinon, un message apparaît pour signaler que l'utilisateur est déjà connecté.
- Le bouton **_Se déconnecter_**: Permet de se déconnecter et vide le localStorage de connexion. Affiche un message pour valider la déconnexion.

#### 2. Accueil
Intègre les deux boutons permettant soit de s'enregistrer, soit de se connecter.

#### 3. Page d'enregistrement
Inclus une vérifications nécessaire dans un localStorage des données d'enregistrement.

*Un message s'affiche en cas d'enregistrement réussi.*
#### 4. Page de login
Inclus une vérification des données d'enregistrement dans un localStorage des données de connexion.

*Un message s'affiche en cas de connexion réussie.*

#### 5. Pages forum
Uniquement accessible si login réussi.
Il y a 3 sous-forums de discussion.
Un état du login est affiché en haut sur chaque page avec le nom de l'utilisateur et la date/heure de connexion.

##### Sous-forums de discussion
- Page des sujets:

Un champ permet de créer les différents sujets que l'on souhaite aborder.
Il est impossible de créer un sujet vide, la bordure de la case se met en rouge.

Plusieurs sujets peuvent être créés à la suite des uns et des autres (incluant le nom de l'auteur et la date/heure de création du sujet).

On peut sélectionner le sujet que l'on veut en cliquant sur la ligne du tableau correspondante, cela nous emmène sur la page de discussion.

- Page de discussion:

Il y a un titre dynamique comportant le nom du sujet (ainsi que le nom de la page dans l'onglet du navigateur).
Un champ permet de discuter sur le sujet en y mettant des commentaires.
Il est impossible de créer un commentaire vide, la bordure de la case se met en rouge.
Chaque nouveau message affiche le nom de l'auteur et la date/heure sur chaque ligne du tableau ainsi créé.


Si l'utilisateur n'est pas connecté, il ne pourra pas copier/coller l'URL des pages du forum et s'y rendre, cela le redirigera vers la page de login.



