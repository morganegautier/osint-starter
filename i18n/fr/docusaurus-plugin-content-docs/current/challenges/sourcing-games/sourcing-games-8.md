---
title: "Sourcing Game 8 - Méthodes et solutions"
description: "
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, Sourcing Techniques, Online Research Skills, OSINT]
sidebar_label: "Sourcing Game 8"
---

# Sourcing Game 8 - Competition SourceCon Grandmaster 2017

Vous trouverez ici la méthode et les solutions pour terminer avec succès le [Sourcing Game 7](https://sourcing.games/sourcing-challenge-2017/), conçu pour vous initier aux fondamentaux du sourcing à un niveau avancé. Ce Sourcing Game comprend des questions du concours annuel SourceCon Grandmaster 2017. Notez qu'il n'existe pas une seule solution correcte, plusieurs approches sont envisageables. L'essentiel est de réussir les exercices en utilisant les méthodes avec lesquelles vous êtes le plus à l'aise.

## Game 01 - Trouver le nom d'un utilisateur GitHub

### Instructions

I have a GitHub user that I need to track down: https://github.com/waterlee23. What is their real name?

### Objectif

L'objectif du niveau 01 est de trouver le vrai nom de l'utilisateur associé au profil GitHub "waterlee23".

### Solution

Le lien fourni pour l'utilisateur GitHub "waterlee23" mène à une page 404, ce qui signifie que le profil n'existe plus. Cela pourrait indiquer que l'utilisateur a supprimé son compte ou changé de nom d'utilisateur. Une recherche Google pour `waterlee23` révèle une ancienne issue GitHub d'avril 2016, ouverte par [lwtwl23](https://github.com/lwtwl23). Il semble que `lwtwl23` soit le nouveau nom d'utilisateur de `waterlee23`.

![Solution du niveau 01](/img/challenges/sourcing-games/game-8/sourcing-games-8-01-1.png "Solution du niveau 01")

La visite du profil de `lwtwl23` révèle le vrai nom de l'utilisateur.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 01</summary>

Le vrai nom de "waterlee23" est Wentao Li.

![Solution du niveau 01](/img/challenges/sourcing-games/game-8/sourcing-games-8-01-2.png "Solution du niveau 01")

Le mot de passe pour atteindre le niveau suivant est "**wentaoli**".

</details>

## Game 02 - Trouver les domaines les plus demandés pour le droit à l'oubli

### Instructions

The right to forgotten movement for Google in EU is ongoing. Which domain is the third most requested? 

### Objectif

Le but du niveau 02 est d'identifier le troisième domaine le plus demandé pour suppression en 2017 dans l'UE dans le cadre du droit à l'oubli.

### Solution

En mai 2014, la Cour de justice de l'Union européenne a jugé que les individus pouvaient demander aux moteurs de recherche de déréférencer certains résultats. Le Rapport de transparence de Google fournit des données sur le nombre de demandes, les domaines fréquemment demandés pour suppression et le volume d'URL associé.

Dans la section des dix domaines les plus demandés du [Google Transparency Report](https://transparencyreport.google.com/eu-privacy/overview), nous pouvons identifier les sites les plus souvent demandés pour déréférencement et vérifier lequel correspond au troisième plus demandé.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 02</summary>

En 2017, le troisième domaine le plus demandé dans le cadre du droit à l'oubli dans l'UE était youtube.com.

![Solution du niveau 02](/img/challenges/sourcing-games/game-8/sourcing-games-8-02.png "Solution du niveau 02")

Le mot de passe pour atteindre le niveau suivant est "**youtube**".

</details>

## Game 03 - Trouver le titre de la dernière session du SourceCon 2007

### Instructions

Find the website for the first SourceCon. 
Hint, use the domain thesourcingconference.com. Find the 2007 agenda. What was the title of the final session?

### Objectif

L'objectif du niveau 03 est de retrouver le titre de la dernière session de l'agenda du SourceCon 2007.

### Solution

L'ancien site du SourceCon, thesourcingconference.com, n'est plus actif. En utilisant la [Wayback Machine](https://web.archive.org/), nous pouvons accéder à une version archivée de début 2008, qui comprend un lien vers l'agenda du SourceCon 2007. En consultant l'agenda, le titre de la dernière session est indiqué.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 03</summary>

Le titre de la dernière session de SourceCon 2007 était "Sourcing : Phone vs. Internet".

![Solution du niveau 03](/img/challenges/sourcing-games/game-8/sourcing-games-8-03.png "Solution du niveau 03")

Le mot de passe pour atteindre le niveau suivant est "**internet**".

</details>

## Game 05 - Trouver le nom d’un utilisateur ayant laissé un avis sur Airbnb

### Instructions

My friend Mikhail recommended me a two-bedroom flat in central London. Sam was an amazing host. Mikhail also recommended this flat to somebody else who stayed there in November 2022, and she was excited.

What was her name? 

### Objectif

Le but du niveau 05 est de retrouver le nom de la personne ayant laissé un avis sur l'appartement de Sam à Londres en novembre 2022.

### Solution

La description suggère que l’annonce peut être trouvée sur Airbnb avec les avis visibles. En utilisant Google Dorking, j’ai saisi une requête de recherche et limité les résultats aux pages Airbnb comme suit :

`site:airbnb.com two-bedroom flat central London hosted by Sam`

![Solution du niveau 05](/img/challenges/sourcing-games/game-8/sourcing-games-8-05-1.png "Solution du niveau 05")

L'annonce "Un appartement de 2 chambres parfait pour vous dans le centre de Londres" est l’un des appartements dont Sam est l'hôte. Dans la section des avis, on voit que Mikhail a publié un avis en octobre 2022. Le nom de la personne ayant laissé un avis en novembre 2022 devrait être indiqué dans cette même section, vous fournissant ainsi la réponse.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 05</summary>

La personne qui a séjourné dans l'appartement de Sam en novembre 2022 est Rhonda.

![Solution du niveau 05](/img/challenges/sourcing-games/game-8/sourcing-games-8-05-2.png "Solution du niveau 05")

![Solution du niveau 05](/img/challenges/sourcing-games/game-8/sourcing-games-8-05-3.png "Solution du niveau 05")

Le mot de passe pour atteindre le niveau suivant est "**rhonda**".

</details>

## Game 06 - 

### Instructions

The first editor of SourceCon had a blog. XRay the domain of that blog in Google to find the Sweet Sixteen. Click on the list. The top ranking blog in that list was sold a few years ago. Find the original owner’s LinkedIn Profile.

What job title does he have listed under that blog’s name on his LinkedIn page?

### Objectif

Le but du niveau 06 est de trouver le poste du propriétaire original d'un blog figurant dans la liste "Sweet Sixteen" des blogs de recrutement. Le blog a depuis été vendu, et nous devons retrouver le profil LinkedIn de son propriétaire d'origine. 

### Solution

**Étape 1 : Identifier le premier éditeur du blog SourceCon**

Pour trouver le premier éditeur de SourceCon, nous explorons le contenu historique de SourceCon. Le [Wayback Machine](https://web.archive.org/) est une excellente ressource pour consulter des pages Web archivées. Dans les archives de SourceCon de 2010, dans la section "À propos", la liste des contributeurs révèle qu'Amybeth Hale était la première éditrice de SourceCon.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-1.png "Solution to game 06")

**Étape 2 : Identifier le blog d’Amybeth Hale**

En consultant le profil LinkedIn d’Amybeth Hale, on découvre que son blog s’appelait "Research Goddess" et était hébergé sur le domaine `researchgoddess.com`.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-2.png "Solution to game 06")

**Étape 3 : Trouver la liste "Sweet Sixteen" sur Research Goddess**

Comme `researchgoddess.com` n’est plus en ligne, nous utilisons de nouveau le Wayback Machine pour accéder aux captures archivées du blog. Dans l'une d'elles, il y a une section appelée "Blogroll - Recruiting", qui contient une liste de blogs de recrutement populaires. Cette section semble correspondre à la liste "Sweet Sixteen".

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-3.png "Solution to game 06")

**Étape 4 : Identifier le blog le mieux classé**

Parmi les blogs de cette liste, un blog se distingue : "The Recruiters Lounge", qui était bien connu dans la communauté du recrutement. En faisant quelques recherches supplémentaires, nous apprenons que ce blog a été créé par Jim Stroud et a été vendu à une entreprise du secteur RH en 2014.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-4.png "Solution to game 06")

**Étape 5 : Trouver le profil LinkedIn de Jim Stroud et confirmer le poste**

Sachant désormais que Jim Stroud est le créateur original de The Recruiters Lounge, nous pouvons trouver son profil LinkedIn. Sur son profil, il mentionne son poste associé à The Recruiters Lounge.

En développant la section solution ci-dessous, vous obtiendrez le mot de passe :

<details>
<summary>Solution du niveau 06</summary>

![Solution du niveau 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-05.png "Solution du niveau 06")

Le mot de passe pour atteindre le niveau suivant est "**entrepreneur**".

</details>

## Félicitations

Vous venez de terminer votre huitième Sourcing Game ! Nous espérons vous revoir très vite pour le Sourcing Game 9 !
