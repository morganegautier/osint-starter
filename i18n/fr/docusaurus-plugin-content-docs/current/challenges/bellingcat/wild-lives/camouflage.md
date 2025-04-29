---
title: "Bellingcat - Wild Lives - Camouflage - Write-up"
description: "Découvrez comment résoudre le défi OSINT « Camouflage » de Bellingcat en identifiant un tigre de Sumatra grâce à l’analyse d’image, la recherche inversée et l’enquête ouverte"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Web Searching, OSINT]
sidebar_label: "Camouflage"
position: 2
---

# Bellingcat - Wild Lives - Camouflage - Write-up

Ce write-up présente le challenge  Wild Lives - Spot the Location proposé par [Bellingcat](https://challenge.bellingcat.com/), un challenge conçu pour tester et affiner vos compétences en OSINT. Le challenge a été créé par [Foeke Postma, Bellingcat](https://www.bellingcat.com/author/foekepostma/).

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Un tigre ne change jamais de rayures !
>
> L’Inde abrite plus de la moitié de la population mondiale de tigres, mais ceux-ci vivent en captivité et peuvent se trouver n’importe où dans le monde.
>
> Quel est le nom du tigre sur la photo ?
>
> ![Camouflage](/img/challenges/bellingcat/wild-lives/camouflage-1.jpg "Camouflage")
>
> *Crédit image : Bonnie Britain / Cover Images via Reuters Connect.*

## Investigation

### Analyse de l’image

Le tigre de la photo présente une silhouette trapue avec des membres relativement courts et musclés. Son pelage est d’un orange intense, orné de rayures noires épaisses, denses et rapprochées. Le visage est très marqué, notamment au niveau du front et des joues, avec un motif presque "masqué". Le pelage semble mi-long et légèrement rêche, ce qui suggère une adaptation à un environnement humide ou forestier, plutôt qu’à un climat froid et ouvert.

Ces éléments nous orientent vers une sous-espèce adaptée aux forêts tropicales denses plutôt qu’aux zones tempérées. L’étape suivante consiste donc à identifier la sous-espèce.

### Identification de la sous-espèce

Pour initier les recherches, j’ai utilisé Google Lens afin d’effectuer une recherche d’image inversée.

![Google Lens](/img/challenges/bellingcat/wild-lives/camouflage-2.png "Google Lens")

Les résultats désignent ce tigre comme étant un tigre de Sumatra (Panthera tigris sumatrae), une sous-espèce rare et endémique de l'île indonésienne du même nom.

Selon [Wikipedia](https://fr.wikipedia.org/wiki/Tigre#Sous-esp%C3%A8ces) :

> Le Tigre de Sumatra (Panthera tigris sumatrae) est la plus petite sous-espèce de tigres encore vivante. La robe est très foncée, le blanc de l'abdomen est moins étendu, et les rayures sont doubles, fines et très serrées. Les mâles ont la particularité de posséder un col de fourrure épaisse autour du cou.

Ces traits correspondent aux observations initiales : un gabarit plus petit, un pelage sombre, une face très rayée et une morphologie compacte. Contrairement à d’autres sous-espèces comme le tigre du Bengale ou de Sibérie, celui-ci semble bien être un **tigre de Sumatra**.

### Recherche du zoo

Maintenant que la sous-espèce est identifiée, l’objectif est de localiser ce tigre en particulier. Une recherche Google "Sumatran tigers zoo list" m’a orienté vers le site allemand [Zootierliste](https://www.zootierliste.de/en/?klasse=1&ordnung=115&familie=11508&art=1120923&subhaltungen=1), qui recense les animaux hébergés dans les zoos du monde entier.

![Zootierliste](/img/challenges/bellingcat/wild-lives/camouflage-3.png "Zootierliste")

Pas moins de 117 zoos accueillent des tigres de Sumatra — un nombre trop important pour tout vérifier manuellement. Pour affiner ma recherche, je me suis penché sur l’auteure de la photo : Bonnie Britain.

Son [website](https://www.bonniebritain.com/about/) et ses réseaux sociaux (Instagram notamment) révèlent qu’elle réside à **Londres, Royaume-Uni**, et qu’elle précise avoir une mobilité réduite, ce qui laisse penser qu’elle travaille principalement dans sa ville.

![Bonnie Britain](/img/challenges/bellingcat/wild-lives/camouflage-4.png "Bonnie Britain")

![Instagram](/img/challenges/bellingcat/wild-lives/camouflage-5.png "Instagram")

D’après Zootierliste, le zoo de Londres héberge bien des tigres de Sumatra. C’est donc une piste sérieuse à creuser.

![Zootierliste](/img/challenges/bellingcat/wild-lives/camouflage-6.png "Zootierliste")

Selon le [site officiel du zoo de Londres](https://www.londonzoo.org/plan-your-visit/events/international-tiger-day), ce zoo accueille une famille de quatre tigres : la mère Gaysha, le père Asim, et leurs deux petits : Zac et Crispin.

### Confirmation de l’identité

En parcourant les pages du site du zoo, je trouve des photos précises des tigres, dont une de Crispin, encore jeune. Malgré la différence d’âge, les motifs sur son visage semblent identiques à ceux du tigre dans l’image du défi.

![Sumatran tiger](/img/challenges/bellingcat/wild-lives/camouflage-7.png "Sumatran tiger")

Les rayures sur le visage, notamment autour des yeux et du front, sont distinctives, denses, et forment une sorte de "masque" — un motif unique à chaque tigre, qui ne change pas avec l’âge. La morphologie trapue et le pelage sombre sont également cohérents.

Ces éléments permettent de conclure avec confiance que le tigre en question est **Crispin**, photographié à un stade plus avancé de sa croissance.

## Conclusion

Grâce à une approche méthodique combinant analyse visuelle, recherche d’image inversée, bases de données spécialisées et réseaux sociaux, nous avons pu identifier le tigre comme étant **Crispin**, un tigre de Sumatra vivant au zoo de Londres.

Ce défi met en lumière la puissance de la vérification croisée à travers des sources ouvertes, une compétence centrale en OSINT.

<em>
Outils utilisés :
- Google Lens : Recherche d'image inversée
- Instagram & Facebook : Correspondance de localisation sur les réseaux sociaux
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
