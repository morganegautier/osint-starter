---
title: "Sofia Santos - OSINT Exercice #023 - Write-up"
description: "Guide OSINT détaillé pour résoudre l'Exercice #023 de Sofia Santos. Apprenez les techniques de recherche, l'analyse d'images et les méthodes d'investigation numérique."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercice #023"
---

# Sofia Santos - OSINT Exercice #023 - Write-up

Ce write-up présente l’[OSINT Exercice #023 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-023/), un challenge d'observation et de recherche web visant à identifier des informations cachées grâce à des techniques d'investigation numérique. Ce challenge, catégorisé comme facile, est accessible aussi bien aux débutants qu’aux experts en OSINT.

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Parfois, les vidéos en ligne contiennent plus d'informations qu'il n'y paraît. En octobre 2023, j'ai publié une vidéo sur ma chaîne YouTube où, pendant une fraction de seconde entre la 3e et la 4e minute, mon fond d'écran est partiellement visible.
>
> Votre mission est :
>
> a) Trouver le titre de l'illustration, tel que donné par l'artiste.
> 
> b) Déterminer le coût pour que l'artiste réalise une œuvre similaire, en termes de taille et de détails.

## Investigation

### Identifier la vidéo

La première étape consiste à identifier la vidéo sur la [chaîne YouTube de Sofia Santos](https://www.youtube.com/@gralhix/videos). Rechercher manuellement la vidéo peut être fastidieux, donc nous allons utiliser des opérateurs de recherche YouTube pour filtrer les vidéos publiées en octobre 2023. Nous combinons les opérateurs before: et after: pour restreindre la recherche à une période spécifique :

`after:2023-10-01 before:2023-10-31`

Par chance, une seule vidéo a été publiée sur la chaîne de Sofia Santos en octobre 2023, ce qui simplifie notre tâche.

![Youtube video](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-1.png "Youtube video")

La vidéo à analyser est intitulée : `Filetype: The Best Advanced Search Operator for OSINT Investigations?`, cela tombe plutôt bien.

### Trouver l’illustration

Identifier le fond d’écran partiellement visible demande de l’attention. En réduisant la vitesse de lecture YouTube à 0,25 et en visionnant la vidéo image par image entre les minutes 3 et 4, on peut repérer l’illustration à 3:38.

![Illustration](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-2.png "Illustration")

Une capture d’écran de l’illustration nous permet d’effectuer une recherche d’image inversée avec Google Lens.

![Google Lens](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-3.png "Google Lens")

Les résultats de la recherche confirment que l’illustration a été réalisée par Adam Scythe et qu’elle s’intitule **Involuntary Rat Queen**.

![Devian Art](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-4.png "Devian Art")

### Trouver le prix d’une œuvre similaire

Pour estimer le coût d’une illustration semblable, on poursuit l’enquête sur DeviantArt, un réseau social où les artistes partagent et vendent leurs œuvres. Sur le profil d’Adam Scythe, un post intitulé "[New Commission Info](https://www.deviantart.com/adamscythe/journal/New-Commission-Info-1121665072)" détaille les tarifs des commandes personnalisées.

L’illustration en question correspond à la catégorie "Complete Illustration A" (personnage avec arrière-plan), dont le prix commence à 190 $, selon le niveau de détail. L’illustration Involuntary Rat Queen figure parmi les exemples correspondant à cette gamme de prix.

![Devian Art](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-5.png "Devian Art")

## Conclusion

L’illustration du fond d’écran s’intitule **Involuntary Rat Queen** et a été réalisée par Adam Scythe. Une œuvre similaire coûterait environ **190 $**.

<em>
Outils utilisés :
- Opérateurs de recherche YouTube
- Google Lens: Recherche d'image inversée
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
