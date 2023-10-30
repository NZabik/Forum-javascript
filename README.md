# Evaluation-10-2023

- [Evaluation-10-2023](#evaluation-10-2023)
  - [Figma](#figma)
  - [Site](#site)
    - [Languages used](#languages-used)
    - [Site Details](#site-details)
      - [1. Header](#1-header)
      - [2. Home](#2-home)
      - [3. Registration page](#3-registration-page)
      - [4. Login page](#4-login-page)
      - [5. Forum page](#5-forum-page)
        - [Sub-discussion forum page](#sub-discussion-forum-page)

## Figma
[Link to the figma](https://www.figma.com/file/rDfLqovjY21cNtzpJlEqeD/Forum-%C3%A9valuation-10%2F2023?type=design&node-id=3%3A41&mode=design&t=57OIpgu6kwzvkLuN-1)

Il y a 3 pages dans Figma, une pour chaque format.


## Site

### Languages used
- HTML
- CSS
- Javascript
- Bootstrap


### Site Details

#### 1. Header

There are 5 buttons on the header:

- The **_Accueil_** button: Allows you to go to the corresponding home page.
- The **_Forum_** button: Only accessible if the user is connected via the login page, otherwise, a message asks the user to log in.
- The **_S'enregistrer_** button: Allows you to create an account.
- The **_Se connecter_** button: Allows you to log in if an account has been created. The button only works if the user is logged out, otherwise a message appears to indicate that the user is already logged in.
- The **_Se déconnecter_** button: Allows you to disconnect and empty the log in LocalStorage. Displays a message to validate the disconnection.

#### 2. Home
Includes two buttons allowing you to either register or log in.

#### 3. Registration page
Includes the necessary checks in the registration datas, such as the name length, the mail typo verification, the password requirements...etc...

The register LocalStorage is filled with all the data gathered during the resgister completion.

*A message is displayed upon successful registration.*

#### 4. Login page
Includes the necessary checks from the data saved in the register LocalStorage.

*A message is displayed upon successful connection.*

#### 5. Forum page
Only accessible if login is successful.
There are 3 discussion sub-forums.
A login status is displayed at the top of each page with the user name and login date/time.

##### Sub-discussion forum page
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



