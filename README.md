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

There are 3 pages in Figma, one for each format:
- Desktop;
- Tablet;
- Mobile.


## Site

### Languages used
- HTML
- CSS
- Javascript
- Bootstrap for the header


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

If the user is not logged in, he will not be able to copy/paste the URL of the forum pages and go there, this will redirect him to the login page.

##### Sub-discussion forum page
- Topics page:

A field allows you to create the different topics you want to discuss.
It is impossible to create an empty subject, the border of the box turns red.

Several topics can be created one after the other (including the name of the author and the date/time the topic was created).

You can select the topic you want to discuss by clicking on the corresponding table row, this takes you to the corresponding discussion page.

- Discussion page:

There is a dynamic title including the topic name (as well as the page name in the browser tab).
A field allows you to discuss the subject by adding comments.
It is impossible to create an empty comment, the border of the box turns red.
Each new message displays the author's name and the date/time on each line of the table thus created.


