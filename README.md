# Evaluation-10-2023:

Figma: https://www.figma.com/file/rDfLqovjY21cNtzpJlEqeD/Forum-%C3%A9valuation-10%2F2023?type=design&node-id=3%3A41&mode=design&t=57OIpgu6kwzvkLuN-1

Il y a 3 pages dans Figma, une pour chaque format.


Site:

- Accueil intégrant les deux boutons permettant soit de s'enregistrer, soit de se connecter;

- Page d'enregistremenet avec vérifications nécessaires incluant un localStorage des données d'enregistrement; --> Message en cas d'enregistrement réussi.

- Page de login avec vérification des données d'enregistrement incluant un localStorage des données de connexion; --> Message en cas de connexion réussie.

- Bouton de déconnexion effaçant le localStorage créé par la page login; --> Message en cas de déconnexion.

- Page forum uniquement accessible si login réussi incluant 3 sous-forums de discussion (incluant la phrase de bienvenue sur chaque page); --> Message demandant de se connecter si pas connecté.

- Sous-forums de discussion incluant un champ pour entrer le nom des différents sujets abordés (impossible de créer un sujet vide, la bordure de la case se met en rouge):
  - Plusieurs sujets peuvent être créés à la suite des uns et des autres (incluant le nom de l'auteur et la date/heure de création du sujet);
  - On peut sélectionner le sujet que l'on veut en cliquant sur la ligne du tableau, cela nous emmène sur la page de discussion incluant:
      - un titre dynamique comportant le nom du sujet (ainsi que le nom de la page dans l'onglet du navigateur);
      - un champ permettant la discussion, incluant le nom de l'auteur et la date/heure sur chaque ligne du tableau ainsi créé (impossible de créer un sujet vide, la bordure de la case se met en rouge);

- Si l'utilisateur est déjà connecté, impossibilité de retourner sur la page de login; --> Message disant qu'on est déjà connecté.
- Si l'utilisateur n'est pas connecté, il ne pourra pas copier/coller l'URL des pages du forum et s'y rendre, cela le redirigera vers la page de login.
