# TEST_MERN

-----Documentation----- :<br>
Instructions pour Installer et Exécuter le Backend, l'Application Electron, et le Frontend Reactjs :<br> 
Node.js (version 16)<br>
npm <br>
MongoDB <br>
-----Étapes d'installation & Exécution du Backend-----<br>
1) Installer et configurer Node.js et Express.js : <br>
Crée un nouveau répertoire:   -mkdir screen-capture-backend
                              -cd  screen-capture-backend
-npm init -y<br>
-npm install express<br>
Ajoutre un script de démarrage dans package.json : <br>
"scripts": {
  "start": "node index.js"
}<br>
2) Configurer MongoDB et connecter le backend à la base de données : npm install mongoose <br>
Configurer  la connexion à MongoDB dans index.js<br>
Définir le schéma MongoDB pour les captures d'écran<br>
--------------------------------------------------------------
-----Étapes d'installation & Exécution d'electron-----<br>
 npm install electron --save-dev<br>
Ajouter un script de démarrage dans package.json : "scripts": {
  "start": "electron ."
}<br>
--------------------------------------------------------------
-----Étapes d'installation & Exécution de Reactjs-----<br>
npx create-react-app screenshot-app1<br>
cd screenshot-app1<br>
npm start<br>
--------------------------------------------------------------
-------Description des Choix Techniques et des Technologies Utilisées-------<br>
 MERN (MongoDB, Express.js, React.js, Node.js) :<br>
MongoDB : Utilisé comme base de données NoSQL pour stocker les captures d'écran.<br>
Express.js : Framework web pour Node.js, utilisé pour créer le serveur API backend.<br>
React.js : Bibliothèque JavaScript pour construire l'interface utilisateur du frontend.<br>
Node.js : Environnement d'exécution JavaScript pour le backend et l'application Electron.<br>
Electron.js :Utilisé pour créer une application de bureau multiplateforme & Permet la capture d'écran .<br>
Axios :Bibliothèque HTTP pour effectuer des requêtes vers le serveur API depuis l'application Electron et React.<br>
Electron IPC (Inter-Process Communication) :Utilisé pour la communication entre le processus principal d'Electron et le processus de rendu.<br>
React Router :Utilisé pour la gestion des routes dans l'application React.<br>
----------------------------------------------------------------------
------------Guide de l'Utilisateur pour l'Application-------<br>
Lancement de l'Application<br>
Il faut que  MongoDB est en cours d'exécution<br>
Lancez le backend en suivant les instructions <br>
Lancez le frontend <br>
Lancez l'application Electron<br>
Configuration de l'Intervalle de Capture<br>
Ouvrez l'application Electron.<br>
Dans l'onglet "Configuration", cliquez sur "Start Capture" pour commencer à capturer les captures d'écran toutes les 5 secondes.<br>
Cliquez sur "Stop Capture" pour arrêter la capture.<br>
Ouvrez le frontend React (qui tourne sur http://localhost:3000).<br>
La page d'accueil affiche l'historique des captures d'écran pour l'utilisateur spécifié.<br>
