---
title: "Sourcing Game 1 : Guide complet pour maîtriser les bases"
description: Apprenez à maitriser les bases du sourcing avec des solutions détaillées pour chaque niveau du Sourcing Game 1 et développez vos compétences en OSINT.
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, OSINT]
sidebar_label: "Sourcing Game 1"
---

# Sourcing Game 1 - Commencer par les bases

Vous trouverez ici la méthode et les solutions pour terminer avec succès le [Sourcing Game 1](https://sourcing.games/game-1/), conçu pour vous initier aux fondamentaux du sourcing à un niveau débutant. Notez qu'il n'existe pas une seule solution correcte, plusieurs approches sont envisageables. L'essentiel est de réussir les exercices en utilisant les méthodes avec lesquelles vous êtes le plus à l'aise.

## Game 01 - Utiliser l'outil d'inspection

### Instructions

Password from that page below will unlock next level. 

[OPEN SITE](http://inovace.eu/game01/)

### Objectif

L'objectif du niveau 01 est de trouver le mot de passe qui débloquera le prochain niveau. Cliquez sur le bouton "OPEN SITE", qui vous redirigera vers une nouvelle page. Sur cette page, vous verrez un écran blanc avec le message "78% SOURCERS ARE NOT GOING TO PASS THIS FIRST LEVEL." (78% DES SOURCERS NE PASSERONT PAS CE PREMIER NIVEAU). Ce message seul n'est pas très utile.

### Solution

Pour obtenir un indice, essayez de sélectionner tous les éléments de la page. Un nouveau message apparaîtra : "NOT ALL THINGS THAT ARE INVISIBLE ARE HIDDEN." (TOUTES LES CHOSES INVISIBLES NE SONT PAS FORCÉMENT CACHÉES). Cela indique que l'indice est caché sur la page.

Utilisez l'outil d'inspection sur cet indice. Vous trouverez le mot de passe commenté dans le code source de la page, qui vous mènera au niveau suivant.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 01</summary>

![Solution du niveau 01](/img/challenges/sourcing-games/game-1/sourcing-games-1-01.png "Solution du niveau 01")

Le mot de passe pour atteindre le niveau suivant est "**games42**".

</details>

## Game 02 - Identifier une personne sur une photo

### Instructions

Find who is this person and his name will unlock another level.

### Objectif

Le but du niveau 02 est d'identifier une personne à partir d'une photo.

### Solution

Pour ce faire, utilisez la fonction de recherche inversée d'images de votre moteur de recherche, comme "Rechercher une image avec Google".

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 02</summary>

![Solution du niveau 02](/img/challenges/sourcing-games/game-1/sourcing-games-1-02.png "Solution du niveau 02")

Le mot de passe pour atteindre le niveau suivant est "**boyce**".

</details>

## Game 03 - Explorer les métadonnées d'une URL raccourcie

### Instructions

Find the date when this [URL](https://bit.ly/mylnkbio) (shortener) was created. Password is Month and Day (eg. “jan” and day “1”).

### Objectif

Le but du niveau 03 est de trouver la date de création d'une URL raccourcie.

### Solution

Dans notre cas, le service de raccourcissement d'URL utilisé est Bitly. La méthode la plus simple consiste à ajouter un "+" à la fin du lien raccourci pour consulter les informations sur sa création.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 03</summary>

![Solution du niveau 03](/img/challenges/sourcing-games/game-1/sourcing-games-1-03.png "Solution du niveau 03")

Le mot de passe pour atteindre le niveau suivant est "**apr-17**".

</details>

## Game 04 - Trouver l'adresse e-mail d'une personne, à partir de son nom et de son entreprise

### Instructions

I met James Jones a few years ago, and he helped me with some things at recruitment.camp. To speed up our communication, I gave him an email at recruitment.camp. However, I had to learn how to create a professional email address, especially since James didn’t want to have a dot in the email address. His email is the password to the file below.

Hint: Don’t let bounce, disposable, spam-trap and deactivated emails decrease your sending reputation.

### Objectif

L'objectif du niveau 04 est de trouver l'adresse e-mail d'une personne à partir de son prénom, nom et organisation (ou domaine).

### Solution

Plusieurs combinaisons sont possibles, et toutes les tester peut prendre du temps. Voici la méthode pour accélérer le processus :

1. Utilisez un permutateur d'e-mails comme `[mailmeteor](https://mailmeteor.com/email-permutator/)` pour générer une liste de toutes les combinaisons possibles.
2. Passez cette liste dans un vérificateur d'e-mails comme `[deltadromeus](https://www.deltadromeus.com/)` pour éliminer les e-mails rebondis, jetables, pièges à spam et désactivés.

Si tout se passe bien, il ne vous restera plus qu'une seule adresse e-mail valide. Téléchargez le fichier et ouvrez le en utilisant l'adresse e-mail valide comme mot de passe.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 04</summary>

![Solution du niveau 04](/img/challenges/sourcing-games/game-1/sourcing-games-1-04.png "Solution du niveau 04")

![Solution du niveau 04](/img/challenges/sourcing-games/game-1/sourcing-games-1-04-2.png "Solution du niveau 04")

L'adresse e-mail correcte et mot de passe du fichier est  "**jamesj@recruitment.camp**".

Le mot de passe pour atteindre le niveau suivant est "**sourcingfun**".

</details>

## Game 05 - Trouver le nom d'une personne à partir d'un profil utilisateur

### Instructions

Find the first name of this [StackOverflow](https://meta.stackoverflow.com/users/5696502/arsen) user.

### Objectif

L'objectif du niveau 05 est de trouver le prénom d'une personne à partir de son profil utilisateur. En cliquant sur le lien, vous accédez à un profil StackOverflow qui comporte une photo et plusieurs liens vers d'autres réseaux sociaux, facilitant ainsi la recherche.

### Solution

Utilisez la recherche d'images inversée de votre moteur de recherche pour trouver d'autres comptes associés à cette photo de profil, tels que GitHub ou X (anciennement Twitter), où vous trouverez le prénom de cette personne.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 05</summary>

![Solution du niveau 05](/img/challenges/sourcing-games/game-1/sourcing-games-1-05.png "Solution du niveau 05")

Le mot de passe pour atteindre le niveau suivant est "**Kolja**".

</details>

## Game 06 - Trouver une ancienne page web indexée

### Instructions

One folder of this website “inovace.eu” was indexed by Google. You can find there the password for the next level.

### Objectif

L'objectif du niveau 06 est de trouver une page sur l'URL donnée qui a été indexée. L'URL est "inovace.eu." Lorsque vous visitez ce site, vous verrez qu'il affiche actuellement seulement "En construction..." sans lien vers d'autres pages.

### Solution

Pour en savoir plus sur la structure du site au fil du temps, utilisez l'outil Wayback Machine, en particulier la section [Site Map](https://web.archive.org/web/sitemap/). Cet outil classe les archives du site par année et crée une carte visuelle en forme d'arborescence.

En entrant l'URL donnée dans la barre de recherche et en parcourant les différentes années, vous constaterez que pour une certaine année, le site proposait différentes pages, y compris une page "folder" qui par ailleurs existe toujours qui et contient le mot de passe recherché.

En déroulant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 06</summary>

![Solution du niveau 06](/img/challenges/sourcing-games/game-1/sourcing-games-1-06.png "Solution du niveau 06")

Le mot de passe pour atteindre le niveau suivant est "**007games**".

</details>

## Félicitations

Vous venez de termier votre premier Sourcing Game ! Nous espérons vous revoir très vite pour le Sourcing Game 2 !
