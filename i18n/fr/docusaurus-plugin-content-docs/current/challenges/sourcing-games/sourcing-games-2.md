---
title: "Sourcing Game 2 - Méthodes et solutions"
description: Découvrez toutes les solutions et astuces pour réussir le Sourcing Game 2. De l'encodage d'URL à la recherche avancée sur LinkedIn, suivez notre guide pas à pas pour maîtriser chaque niveau.
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, OSINT]
sidebar_label: "Sourcing Game 2"
---

# Sourcing Game 2 - Toutes les URL ne sont pas inaccessibles

Vous trouverez ici la méthode et les solutions pour terminer avec succès le [Sourcing Game 2](https://sourcing.games/game-2/), conçu pour vous initier aux fondamentaux du sourcing à un niveau intermédiaire. Notez qu'il n'existe pas une seule solution correcte, plusieurs approches sont envisageables. L'essentiel est de réussir les exercices en utilisant les méthodes avec lesquelles vous êtes le plus à l'aise.

## Game 01 - Encodage d'URL

### Instructions

Get the password from the URL below.

`www.sourcing.%20games/games/02s/`

### Objectif

’objectif du niveau 01 est de trouver un mot de passe qui déverrouille le niveau suivant. Pour cela, cliquez sur le bouton "OPEN URL", qui vous redirigera vers une nouvelle page.

La page s'ouvre avec une erreur indiquant que le site est inaccessible :

![Page en erreur](/img/challenges/sourcing-games/game-2/sourcing-games-2-01-1.png "Page en erreur")

### Solution

Ici, il faut vérifier l’URL de la page : `www.sourcing.%20games/games/02s/`. Dans cette URL, vous pouvez remarquer un `%20`, qui est un encodage généralement utilisé pour remplacer un espace dans une URL. Il suffit de retirer cet encodage pour obtenir l'URL correcte.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 01</summary>

L'URL correcte pour trouver le mot de passe est : `https://www.sourcing.games/games/02s/`.

![Solution du niveau 01](/img/challenges/sourcing-games/game-2/sourcing-games-2-01-2.png "Solution du niveau 01")

Le mot de passe pour accéder au niveau suivant est "**4vc7sa**".

</details>

## Game 02 - Trouver une information sur une page web indexée

### Instructions

I can’t travel back in time, but in October 26, 1996 on microsoft.com, I saw the name of the guy who became a certified trainer. His name stuck in my mind, and that’s why this surname is the password for the next URL.

### Objectif

L’objectif du niveau 02 est de trouver une information sur une page d’un site indexée. Le site en question est "microsoft.com", et l'information que vous recherchez se trouvait sur la page web le 26 octobre 1996.

### Solution

Pour trouver l’information recherchée, vous pouvez utiliser l'outil [Wayback Machine](https://web.archive.org/), et entrer l'URL du site (ici "microsoft.com") dans la barre de recherche. Un calendrier s’affichera, montrant toutes les captures disponibles pour ce site. Choisissez la date du 26 octobre 1996, ce qui ouvrira une capture de la page à cette date. Il ne reste plus qu’à trouver l'information recherchée.

![Wayback Machine](/img/challenges/sourcing-games/game-2/sourcing-games-2-02-1.png "Wayback Machine")

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 02</summary>

![Solution du niveau 02](/img/challenges/sourcing-games/game-2/sourcing-games-2-02-2.png "Solution du niveau 02")

Le mot de passe pour accéder au niveau suivant est "**mcintosh**".

</details>

## Game 04 - Fichier Robots.txt

### Instructions

LinkedIn disallows all robots to index some things, and these robots already know that your "keyword for next level" is a part of the e-mail address before @linkedin.com.

### Objectif

Le but du niveau 04 est de trouver l'adresse e-mail pour contacter LinkedIn afin de demander l'autorisation de crawler leur site. Pour cela, vous devez consulter le fichier `robots.txt`. Le fichier robots.txt est une norme utilisée par les sites web pour communiquer avec les robots d'indexation et d'autres agents automatisés. Il est placé à la racine d'un site web et contient des directives qui spécifient quelles parties du site ne doivent pas être crawlées ou indexées.

### Solution

Pour trouver l'adresse e-mail, consultez le fichier robots.txt du site LinkedIn. Il est situé à la racine du site, vous pouvez donc y accéder en visitant `https://www.linkedin.com/robots.txt`. Cherchez l'adresse e-mail pour demander l'autorisation de crawler LinkedIn, et vous trouverez le mot de passe recherché.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 04</summary>

![Solution du niveau 04](/img/challenges/sourcing-games/game-2/sourcing-games-2-04.png "Solution du niveau 04")

Le mot de passe pour accéder au niveau suivant est "**whitelist-crawl**".

</details>

## Game 05 - Trouver une adresse e-mail à partir d'un compte GitHub

### Instructions

The first part of the e-mail address of this GitHub user is the password that will open the file below. (Use only the part before @). The password that is in that file will open the next level.

### Objectif

Le but du niveau 05 est de trouver l'adresse e-mail cachée derrière un compte GitHub. L'instinct premier serait de visiter le profil GitHub de l'utilisateur, mais ici, son adresse e-mail n'est pas affichée. Une autre idée est de parcourir les divers dépôts publics, commits, pull requests, et issues liés à cet utilisateur. Cependant, son adresse e-mail semble avoir été cachée.

### Solution

Une façon de trouver l'adresse e-mail liée à un compte GitHub est d'utiliser la commande git log. Choisissez un dépôt, par exemple "example-01-helloworld", et clonez-le :

`git clone https://github.com/angularjs-gdit/example-01-helloworld.git`

Puis parcourez ce dépôt cloné : `cd example-01-helloworld`

Enfin, utilisez la commande `git log` pour accéder à l'historique des commits.

Vous y trouverez l'adresse e-mail liée au commit :

![Commandes Git](/img/challenges/sourcing-games/game-2/sourcing-games-2-05-1.png "Commandes Git")

Une autre méthode, plus simple, consiste à ajouter `.patch` à l'URL d'un commit pour obtenir l'historique ainsi que des informations sur celui-ci :

![URL.patch](/img/challenges/sourcing-games/game-2/sourcing-games-2-05-2.png "URL.patch")

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 05</summary>

L'adresse e-mail correcte et le mot de passe du fichier sont "**pt103368**".

Le mot de passe pour accéder au niveau suivant est "**s00rcing**".

</details>

## Game 06 - Trouver un profil LinkedIn

### Instructions

THINK LOCALLY, ACT LOCALLY! In 2016, I met a great guy, who worked as a Developer in Poland, not sure if he was from Warsaw, Wroclaw or Crakow. But what I remember was that he is a developer (intermediate level), working with Angular, Java, JUnit and Python. When he told me his name I thought that he was a foreigner, but he doesn’t speak a word in English, only Polish. I also found his LinkedIn profile, I hope he will learn English and I wish I was fluent in Polish.

### Objectif

Le but du niveau 06 est de trouver le nom d’une personne, à partir de quelques informations. Voici les 5 éléments utiles concernant cette personne :

 - Profession : Développeur
 - Compétences : Angular, Java, JUnit, et Python
 - Localisation : Varsovie, Wroclaw ou Cracovie
 - Langue : Polonais
 - Réseau social utilisé : LinkedIn

### Solution

Pour trouver le profil LinkedIn de ce développeur, utilisez la technique du Google Dorking. Dans votre requête de recherche, entrez vos mots-clés et ajoutez `site:linkedin.com` pour limiter les résultats de recherche à LinkedIn uniquement :

`angular java junit python developer warsaw wroclaw krakow polish site:linkedin.com`

Voici le résultat de la recherche :

![Google Dork](/img/challenges/sourcing-games/game-2/sourcing-games-2-06-1.png "Google Dork")

Nous obtenons une liste de profils LinkedIn à tester, en espérant trouver rapidement le bon.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 06</summary>

Jetons un œil au premier profil de la liste :

![Solution du niveau 06](/img/challenges/sourcing-games/game-2/sourcing-games-2-06-2.png "Solution du niveau 06")

Par chance, ce premier profil semble être celui que vous cherchez ! Si ce n’est pas le cas, vous devrez poursuivre vos recherches.

Le mot de passe pour accéder au niveau suivant est "**petr-davis**".

</details>

## Game 07 - Explorer les métadonnées d'un document

### Instructions

THIS IS NOT THE END. ONE MORE URL AND YOU WILL FINISH THE GAME! If you are Mac user, maybe it’s time to call your friends with Windows. They have more experience with Word.

### Objectif

Le but du niveau 07 est de trouver un mot de passe dans un document Word appelé "one-more-url.docx". En ouvrant le fichier, vous ne verrez qu’un emoji souriant, sans plus d’indices.

### Solution

S’il n’y a aucun indice dans le document, peut-être en trouverez-vous dans ses propriétés. Ouvrez les propriétés du document et choisissez l’onglet Détails. Vous y trouverez ce que vous cherchez.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 07</summary>

![Solution du niveau 07](/img/challenges/sourcing-games/game-2/sourcing-games-2-07.png "Solution du niveau 07")

Le mot de passe pour accéder au niveau suivant est "**42sourcer**".

</details>

## Félicitations

Vous venez de terminer votre deuxième Sourcing Game ! Nous espérons vous revoir très vite pour le Sourcing Game 3 !
