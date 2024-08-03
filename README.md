# LocationDeVehicule

## Description

Ce projet est une application React Native de base pour la gestion de la location de véhicules. Il comprend une structure de projet initiale avec une configuration simple et claire, incluant la navigation entre les écrans, la gestion des API, et l'utilisation de Tailwind CSS pour le style.

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez ce dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/LocationDeVehicule.git
    ```

2. Accédez au répertoire du projet :
    ```bash
    cd LocationDeVehicule
    ```

3. Installez les dépendances :
    ```bash
    npm install
    ```

4. Exécutez le projet :
    ```bash
    npm start
    ```

## Structure du Projet

La structure du projet est organisée comme suit :

```
LocationDeVehicule/
├── .expo/
├── .vscode/
├── assets/
├── node_modules/
├── src/
│   ├── api/
│   │   └── userApi.js
│   ├── components/
│   │   └── ImageRound.js
│   ├── navigation/
│   │   └── AppNavigator.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── UserScreen.js
├── .gitignore
├── App.js
├── README.md
├── app.json
├── babel.config.js
├── package-lock.json
├── package.json
└── tailwind.config.js
```

### Fichiers et Dossiers Principaux

- `src/api/userApi.js` : Gère les appels API pour récupérer, créer, mettre à jour et supprimer des utilisateurs.
- `src/components/ImageRound.js` : Composant pour afficher des images rondes.
- `src/navigation/AppNavigator.js` : Gère la navigation entre les écrans.
- `src/screens/HomeScreen.js` : Écran d'accueil avec navigation vers la liste des utilisateurs.
- `src/screens/UserScreen.js` : Écran affichant la liste des utilisateurs récupérés depuis l'API.
- `App.js` : Point d'entrée principal de l'application.
- `tailwind.config.js` : Configuration de Tailwind CSS pour le projet.

## Utilisation

### Écran d'Accueil

L'écran d'accueil (`HomeScreen.js`) affiche un message de bienvenue et un bouton pour naviguer vers l'écran des utilisateurs.

### Écran des Utilisateurs

L'écran des utilisateurs (`UserScreen.js`) affiche une liste des utilisateurs récupérés depuis l'API. Vous pouvez actualiser la liste en appuyant sur le bouton "Refresh Users".

### API

L'API est gérée dans le fichier `src/api/userApi.js`. Les fonctions disponibles incluent :

- `getUserApi` : Récupère la liste des utilisateurs.
- `getUserById` : Récupère les détails d'un utilisateur par ID.
- `createUser` : Crée un nouvel utilisateur.
- `updateUser` : Met à jour les informations d'un utilisateur.
- `deleteUser` : Supprime un utilisateur.

## Configuration de Tailwind CSS

Le fichier `tailwind.config.js` est configuré pour inclure tous les fichiers JavaScript et TypeScript dans le projet :

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```