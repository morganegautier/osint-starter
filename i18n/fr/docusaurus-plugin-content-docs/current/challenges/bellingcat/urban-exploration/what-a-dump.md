---
title: "Bellingcat - Urban Exploration - What a Dump! - Write-up"
description: "Analyse détaillée du défi OSINT 'What a Dump!' de Bellingcat : indices visuels, recherche inversée et outils de cartographie pour localiser précisément l'image."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "What a Dump!"
position: 2
---

# Bellingcat - Urban Exploration - What a Dump! - Write-up

Ce document présente une solution détaillée au défi de géolocalisation "Quel Dépotoir !" issu de la série d'exploration urbaine de Bellingcat. Conçu par [Jake Godin](https://www.bellingcat.com/author/jakegodin/), ce challlenge consiste à identifier l'emplacement exact d'une image fournie.

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Vous cherchez un trésor ?
>
> Parfois, les choses les plus intéressantes se trouvent dans les endroits les plus inattendus...
>
> ... mais parfois, ces endroits sont remplis de déchets.
>
> Cette benne à ordures se trouve dans une ruelle quelque part, mais où exactement ?
>
> Où se trouvait le photographe lorsqu'il a pris cette photo ? Donnez la latitude et la longitude au format décimal avec trois décimales (12.345, -67.890).
>
> ![What a Dump!](/img/challenges/bellingcat/urban-exploration/what-a-dump-1.jpg "What a Dump!")

## Investigation

### Analyse de l'image

La photo montre une ruelle urbaine avec une grande benne à ordures verte couverte de graffitis au premier plan. Les bâtiments environnants présentent une architecture industrielle, composée de briques et de bardages métalliques, et sont bordés de portes de garage coulissantes. Le sol est fissuré et usé, indiquant un quartier ancien. La présence importante de graffitis suggère un lieu où l'art de rue est courant, typique de nombreuses grandes villes.

Un élément clé de l'image est le logo "Waste Management" visible sur la benne à ordures. On peut aussi distinguer l'inscription "Howard U", qui semble faire référence à [Howard University à Washington, D.C.](https://fr.wikipedia.org/wiki/Universit%C3%A9_Howard). Un autre texte notable, "Guilt Parade", correspond à un [groupe de musique originaire de Washington, D.C.](https://guiltparade.bandcamp.com/music). Ces indices renforcent l'hypothèse que la ruelle se situe à Washington, D.C.

### Recherche d'image inversée

Face à la présence de graffitis, j'ai d'abord cherché à identifier des spots de street art à Washington D.C. ou l'artiste à l'origine de l'inscription "GOOF.T...", mais ces recherches n'ont rien donné de concluant. J'ai alors effectué une recherche d'image inversée avec Google Lens, en indiquant "Washington, D.C." comme paramètre.

![Google Lens](/img/challenges/bellingcat/urban-exploration/what-a-dump-2.png "Google Lens")

Deux résultats ont retenu mon attention : une photo publiée sur Instagram et une autre sur Facebook.

Le premier résultat est une publication Instagram du 22 septembre 2023 par Keith McNally, restaurateur new-yorkais. Son image montre une ruelle avec un sol fissuré, des murs en briques couverts de graffitis et des bennes vertes similaires à celles du défi. Dans sa légende, McNally identifie le lieu comme le futur emplacement du Minetta Tavern à Washington, D.C., prévu pour ouvrir en février 2024.

![Instagram](/img/challenges/bellingcat/urban-exploration/what-a-dump-3.png "Instagram")

Le second résultat est une publication Facebook du 27 août 2021 par Christopher Rabadi. Cette image montre une ruelle similaire avec des éléments distinctifs, notamment des murs en briques couverts de graffitis, des portes de garage à enroulement et un sol fissuré. La publication est géolocalisée dans le quartier de Union Market District, à Washington, D.C., confirmant une piste très sérieuse.

![Facebook](/img/challenges/bellingcat/urban-exploration/what-a-dump-4.png "Facebook")

### Géolocalisation avec Google Maps

En croisant les informations issues des publications Instagram et Facebook, j'ai confirmé que ces deux images proviennent du même quartier : Union Market District, au nord-est de Washington, D.C.

![Google Maps](/img/challenges/bellingcat/urban-exploration/what-a-dump-5.png "Google Maps")

Pour localiser précisément la ruelle, j'ai exploré les environs du futur Minetta Tavern. L'allée longeant Morse St Aly semblait correspondre, bien que l'architecture ait évolué. J'ai donc utilisé Google Street View en remontant à 2018 et ai retrouvé la scène capturée dans l'image du défi.

![Google Maps Street View"](/img/challenges/bellingcat/urban-exploration/what-a-dump-6.png "Google Maps Street View")

## Conclusion

Les coordonnées exactes du point de prise de vue sont : **[38.910, -76.998]**

<em>
Used tools:
- Google Maps: Géolocalisation
- Google Lens : Recherche d'image inversée
- Instagram & Facebook: Correspondance d'images sur les réseaux sociaux
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
