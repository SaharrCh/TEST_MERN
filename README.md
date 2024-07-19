# TEST_MERN
//
-----Documentation----- :
//
Instructions pour Installer et Exécuter le Backend, l'Application Electron, et le Frontend Reactjs : 
//
Node.js (version 16)
//
npm 
//
MongoDB 
//

-----Étapes d'installation & Exécution du Backend-----

1) Installer et configurer Node.js et Express.js : 
Crée un nouveau répertoire:   -mkdir screen-capture-backend
                              -cd  screen-capture-backend
-npm init -y
-npm install express

Ajoutre un script de démarrage dans package.json : 
"scripts": {
  "start": "node index.js"
}

2) Configurer MongoDB et connecter le backend à la base de données : npm install mongoose
   
Configurer  la connexion à MongoDB dans index.js
Définir le schéma MongoDB pour les captures d'écran

--------------------------------------------------------------
-----Étapes d'installation & Exécution d'electron-----
 npm install electron --save-dev
Ajouter un script de démarrage dans package.json : "scripts": {
  "start": "electron ."
}
--------------------------------------------------------------
-----Étapes d'installation & Exécution de Reactjs-----
npx create-react-app screenshot-app1
cd screenshot-app1
npm start

--------------------------------------------------------------



-------Description des Choix Techniques et des Technologies Utilisées-------
 MERN (MongoDB, Express.js, React.js, Node.js) :

MongoDB : Utilisé comme base de données NoSQL pour stocker les captures d'écran.
Express.js : Framework web pour Node.js, utilisé pour créer le serveur API backend.
React.js : Bibliothèque JavaScript pour construire l'interface utilisateur du frontend.
Node.js : Environnement d'exécution JavaScript pour le backend et l'application Electron.

Electron.js :Utilisé pour créer une application de bureau multiplateforme & Permet la capture d'écran .
Axios :Bibliothèque HTTP pour effectuer des requêtes vers le serveur API depuis l'application Electron et React.
Electron IPC (Inter-Process Communication) :Utilisé pour la communication entre le processus principal d'Electron et le processus de rendu.
React Router :Utilisé pour la gestion des routes dans l'application React.
----------------------------------------------------------------------

------------Guide de l'Utilisateur pour l'Application-------
Lancement de l'Application
Il faut que  MongoDB est en cours d'exécution
Lancez le backend en suivant les instructions 
Lancez le frontend 
Lancez l'application Electron
Configuration de l'Intervalle de Capture
Ouvrez l'application Electron.
Dans l'onglet "Configuration", cliquez sur "Start Capture" pour commencer à capturer les captures d'écran toutes les 5 secondes.
Cliquez sur "Stop Capture" pour arrêter la capture.
Ouvrez le frontend React (qui tourne sur http://localhost:3000).
La page d'accueil affiche l'historique des captures d'écran pour l'utilisateur spécifié.
