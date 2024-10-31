---
title: "Sourcing Game 7 - Méthodes et solutions"
description: "Découvrez comment réussir le jeu de sourcing 7, axé sur le domaine de l'IT, avec des défis tels que la recherche d'identifiants GitHub et la validation d'URLs."
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, Sourcing Techniques, Online Research Skills, OSINT]
sidebar_label: "Sourcing Game 7"
---

# Sourcing Game 7 - Sourcing Game axé sur le domaine IT

Vous trouverez ici la méthode et les solutions pour terminer avec succès le [Sourcing Game 7](https://sourcing.games/game-7/), conçu pour vous initier aux fondamentaux du sourcing à un niveau avancé. Notez qu'il n'existe pas une seule solution correcte, plusieurs approches sont envisageables. L'essentiel est de réussir les exercices en utilisant les méthodes avec lesquelles vous êtes le plus à l'aise.

## Game 01 - Trouver un identifiant GitHub

### Instructions

What is the GitHub ID for this GitHub profile?

### Objectif

L'objectif du niveau 01 est de trouver l'ID GitHub correspondant à un profil GitHub particulier.

### Solution

Sur GitHub, le moyen le plus simple de trouver l'ID d'un utilisateur à partir de son nom d'utilisateur est d'utiliser l'API. Vous pouvez récupérer les informations de l'utilisateur en effectuant une requête GET à l'URL suivante : `https://api.github.com/user/:id`, où `:id` est l'ID de l'utilisateur.

`https://api.github.com/users/AlexanderBech`

Un autre moyen de trouver l'ID d'un utilisateur est de se rendre sur sa page de profil et de cliquer sur son avatar (photo de profil). Une fois cliquée, l'URL affichera l'ID de l'utilisateur GitHub. De manière alternative, vous pouvez inspecter le code source de la page pour trouver l'ID si nécessaire.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 01</summary>

![Solution du niveau 01](/img/challenges/sourcing-games/game-7/sourcing-games-7-01.png "Solution du niveau 01")

Le mot de passe pour atteindre le niveau suivant est "**2300056**".

</details>

## Game 02 - Trouver une URL valide

### Instructions

Sourcing requires time when searching for an answer, and there are many ways to get the answer you are looking for.

One is the hard way (you will see what I mean by that), and the other is the clever way.

I am not using word “the easy way” because, in sourcing, there is no easy way. You only have luck. Choose your way or try your luck!

### Objectif

L'objectif du niveau 02 est de trouver une URL valide parmi une liste de 300.

### Solution

Plutôt que de vérifier manuellement chaque URL jusqu'à tomber par hasard sur la bonne, adoptons une approche plus intelligente en automatisant la tâche avec Google Sheets et un Google Apps Script.

**1. Créer une Google Sheets** : Ouvrez une nouvelle Google Sheets et collez votre liste d'URLs dans la première colonne.

**2. Créer un script** : Créez un script qui vérifiera le statut de chaque URL. Les codes de statut HTTP les plus courants sont :

- **200** pour une page accessible
- **301** pour une redirection permanente
- **404** pour page non trouvée

Pour créer ce script, allez dans le menu Extensions de votre Google Sheets et sélectionnez Apps Script. Voici un exemple de script inspiré et adapté d'un tutoriel du site [No Fluff Digital](https://nofluffdigital.com/blog/seo/google-app-scripts-url-checker/) :

```
function CheckURL(url){

  var options = {
    
    'muteHttpExceptions': true,

    'followRedirects': true

  };

  var response = UrlFetchApp.fetch(url, options);

  return response.getResponseCode();

}
```

**3. Déployer le script** : Enregistrez votre script et déployez-le en choisissant "Nouveau déploiement" et en sélectionnant votre bibliothèque.

**4. Vérifier le statut des URLs** : De retour dans votre feuille Google, créez une deuxième colonne pour y stocker les codes de statut des URLs, en appelant la foncti`on CheckURL()` que vous avez créée.

![CheckURL()](/img/challenges/sourcing-games/game-7/sourcing-games-7-02-1.png "CheckURL()")

**5. Analyser les résultats** : Après avoir exécuté le script, vous verrez que 299 URLs renvoient un code 404, tandis qu'une seule aura un code 200, indiquant que cette URL est valide. Il vous suffit ensuite de la vérifier dans votre navigateur pour le confirmer.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 01</summary>

![URL valide](/img/challenges/sourcing-games/game-7/sourcing-games-7-02-2.png "URL valide")

L'URL valide est : `url.inovace.eu/vkeb6uz6.html`

![Solution to game 02](/img/challenges/sourcing-games/game-7/sourcing-games-7-02-3.png "Solution to game 02")

Le mot de passe pour atteindre le niveau suivant est "**solution47**".

</details>

## Game 03 - Déchiffrer un hash MD5

### Instructions

9cfa7aefcc61936b70aaec6729329eda

This was originally designed for use as a secure cryptographic hash algorithm for authenticating digital signatures.

Do not kill the hash yet! Find the password and use it for the next level.

### Objectif

L'objectif du niveau 03 est de déchiffrer le hash MD5 fourni et de trouver le mot de passe.

### Solution

La chaîne "9cfa7aefcc61936b70aaec6729329eda" est un hash MD5, qui est un nombre hexadécimal de 32 caractères généré pour authentifier des signatures numériques. Bien que le MD5 soit largement utilisé pour les vérifications d'intégrité des données, il peut être facilement inversé avec des techniques modernes, car il n'est pas sécurisé pour des fins de cryptage.

Il existe de nombreux sites Web offrant des services de recherche inversée de hash MD5 en utilisant de d'immenses bases de données. Un outil comme [Hashes](https://hashes.com/en/decrypt/hash) peut nous aider à déchiffrer ce hash.

En soumettant le hash donné dans cet outil, nous pouvons récupérer la chaîne originale qui a été hachée.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 03</summary>

Le hash MD5 "9cfa7aefcc61936b70aaec6729329eda" est déchiffré en "games".

![Solution du niveau 03](/img/challenges/sourcing-games/game-7/sourcing-games-7-03.png "Solution du niveau 03")

Le mot de passe pour atteindre le niveau suivant est "**games**".

</details>

## Game 04 - Trouver les mots de passe les plus courants sur LinkedIn

### Instructions

LinkedIn is growing every year, and it has had many bright moments in its history.

However, 2012 was not the best time for LinkedIn. If you do not know why, just Google it.

The password for your next level is the eighth most common LinkedIn password.

### Objectif

L'objectif du niveau 04 est de trouver le huitième mot de passe le plus courant de la fuite de données LinkedIn de 2012.

### Solution

D'abord, faisons une recherche sur Google avec les termes `LinkedIn 2012` pour comprendre ce qui s'est passé. Selon Wikipedia, en 2012, un piratage de LinkedIn a entraîné le vol de mots de passe d'environ 6,5 millions de comptes utilisateurs. Pour trouver les mot sde passe les plus courants parmi ces données, il suffit de chercher `2012 LinkedIn hack most common passwords`.

La page de Statista intitulée "Most common passwords unscrambled from the 2012 LinkedIn dataset" fournit une liste des mots de passe LinkedIn les plus fréquemment utilisés en 2012. En consultant cette liste, nous pouvons identifier le huitième mot de passe le plus utilisé.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 04</summary>

![Solution du niveau 04](/img/challenges/sourcing-games/game-7/sourcing-games-7-04.png "Solution du niveau 04")

Le mot de passe pour atteindre le niveau suivant est "**sunshine**".

</details>

## Game 05 - Trouver un freelance

### Instructions

One of my favorite global crowdsourcing marketplaces is the place where I need to find a freelancer who works as a network engineer, but he should have also experience with servers.

With his fifteen-plus years of experience, he is the right person for my next project. He should live in Norwich, and he became a member in February 2017.

His account name is the password for the next level.

### Objectif

L'objectif du niveau 05 est de trouver le nom de compte d'un freelance correspondant à la description.

### Solution

Bien qu'il existe de nombreux sites de freelances, utilisons une technique de recherche Google avancée (Google Dork) pour trouver notre freelance. Après quelques recherches, j'ai trouvé cette requête qui mène directement à un profil correspondant aux critères : `freelance AND (network engineer OR server) AND Norwich United Kingdom AND February 2017`.

![Solution to game 05](/img/challenges/sourcing-games/game-7/sourcing-games-7-05-1.png "Solution to game 05")

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 05</summary>

Le nom de compte de Lawrence G. est lawrence37.

![Solution to game 05](/img/challenges/sourcing-games/game-7/sourcing-games-7-05-2.png "Solution to game 05")

Le mot de passe pour atteindre le niveau suivant est "**lawrence37**".

</details>

## Game 06 - Trouver un hôte Airbnb

### Instructions

Last year I booked a room in San Francisco. I know that my host joined Airbnb in April 2012 and he/she is an outdoor enthusiast from Austin.

What is their first name?

### Objectif

L'objectif du niveau 06 est de trouver le prénom de l'hôte Airbnb décrit.

### Solution

En utilisant une recherche Google avancée, j'ai entré la requête suivante et ajouté `site:airbnb.com` afin de limiter les résultats aux pages Airbnb :

`site:airbnb.com San Francisco "enthusiast from Austin"`

Cela nous conduit à un résultat qui semble correspondre à la description.

![Solution to game 06](/img/challenges/sourcing-games/game-7/sourcing-games-7-06-1.png "Solution to game 06")

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 06</summary>

L'hôte Airbnb s'appelle Adam.

![Solution to game 06](/img/challenges/sourcing-games/game-7/sourcing-games-7-06-2.png "Solution to game 06")

Le mot de passe pour atteindre le niveau suivant est "**adam**".

</details>

## Game 07 - Trouver un profil sur Stack Overflow

### Instructions

I am looking for a developer from France. He/She joined stack overflow some time ago, and he is doing “…. image processing.”

I cannot remember what type of image processing, but he/she sent me the image below.

The seven numbers from his/hers URL of the StackOverflow profile is the key.

### Objectif

L'objectif du niveau 07 est de trouver le numéro d'utilisateur à sept chiffres du profil Stack Overflow d'un développeur.

### Solution

En utilisant les informations à notre disposition nous pouvons utiliser le Google dork en ajoutant `site:stackoverflow.com` pour limiter les résultats aux pages de Stack Overflow :

`site:stackoverflow.com developer "image processing" France`

Le premier résultat semble correspondre à la description.

![Solution to game 07](/img/challenges/sourcing-games/game-7/sourcing-games-7-07-1.png "Solution to game 07")

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 07</summary>

Le nom d'utilisateur du développeur est Gwen, et son numéro d'utilisateur est "6093326".

![Solution to game 07](/img/challenges/sourcing-games/game-7/sourcing-games-7-07-2.png "Solution to game 07")

Le mot de passe pour atteindre le niveau suivant est "**6093326**".

</details>

## Game 08 - Trouver un nom d'utilisateur GitHub

### Instructions

What is the username for this GitHub ID: 2314988?

### Objectif

L'objectif du niveau 08 est de trouver le nom d'utilisateur GitHub correspondant à un ID utilisateur spécifique.

### Solution

Sur GitHub, le moyen le plus simple de trouver le nom d'utilisateur à partir de l'ID est d'utiliser l'API GitHub. Vous pouvez récupérer les informations de l'utilisateur en faisant une requête GET à l'URL suivante : `https://api.github.com/user/:id` en remplaçant `:id` par l'ID fourni.

`https://api.github.com/user/2314988`

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 08</summary>

Le nom d'utilisateur GitHub associé à l'ID 2314988 est vastrolorde.

![Solution to game 08](/img/challenges/sourcing-games/game-7/sourcing-games-7-08.png "Solution to game 08")

Le mot de passe pour atteindre le niveau suivant est "**vastrolorde**".

</details>

## Félicitations

Vous venez de terminer votre septième Sourcing Game ! Nous espérons vous revoir très vite pour le Sourcing Game 8 !
