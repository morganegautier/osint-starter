---
title: "Bellingcat - Multispectral Viewpoints - Take You to the Beach - Write-up"
description: "Découvrez la solution du défi OSINT Take You to the Beach de Bellingcat. Analyse d'image, recherche inversée et géolocalisation pour identifier un archipel à partir d'une vue satellite"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Take You to the Beach"
position: 1
---

# Bellingcat - Multispectral Viewpoints - Take You to the Beach - Write-up

Ce write-up détaille le challenge Multispectral Viewpoints - Take You to the Beach proposé par [Bellingcat](https://challenge.bellingcat.com/), un défi de géolocalisation demandant aux participants à identifier un lieu à partir d'une image satellite. Ce challenge a été créé par [Galen Reich, Bellingcat](https://www.bellingcat.com/author/galenreich/).

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Quelle quantité d'eau !
>
> Cette image a été capturée par Landsat 8, un satellite qui orbite autour de la Terre toutes les 99 minutes.
>
> Il capture des images dans plusieurs bandes du spectre électromagnétique. Ici, seules les bandes de lumière visible sont affichées, correspondant à ce que l'œil humain perçoit.
>
> Mais où Landsat 8 se trouvait-il lorsqu'il a pris cette image ?
>
> Quel est le nom de l'archipel visible sur cette image ?
>
> ![Take You to the Beach](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-1.jpg "Take You to the Beach")

## Investigation

### Analyse de l’image

L’image fournie est une vue satellite d’une île entourée par un récif corallien. La masse terrestre présente une végétation dense, des zones plus claires qui indiquent probablement des zones urbaines ou arides, ainsi que plusieurs petits îlots formant un lagon. Cette combinaison de végétation tropicale, de récifs coralliens et de lagon suggère que l’île appartient à un atoll ou à un archipel volcanique, vraisemblablement situé dans l’océan Indien ou le Pacifique.

### Recherche par mots-clés

Sur la base de cette analyse, j’initie une recherche Google ciblée. Plutôt que d’effectuer immédiatement une recherche inversée d’image, que j’utiliserai plus tard pour confirmation, je commence par chercher "archipel avec lagon".Parmi les résultats, un article de la [Nasa Earth Observatory](https://earthobservatory.nasa.gov/images/151046/mayottes-lagoon) retient mon attention. Il traite du lagon de Mayotte et présente une image satellite qui ressemble fortement à celle du défi.

![Nasa](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-2.png "Nasa")

### Recherche inversée d’image

Pour confirmer cette identification, je réalise une recherche inversée via Google Lens. Les résultats montrent une forte similarité entre l’image du défi et des images satellites connues de Mayotte.

![Google Lens](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-3.png "Google Lens")

### Vérification avec Google Maps

Je compare ensuite ces observations avec la vue satellite de Mayotte sur Google Maps. La correspondance est là : le récif-barrière courbé au sud, la forme générale de la masse terrestre et la topographie confirment que l’archipel observé est **Mayotte**, un département et une région d’outre-mer français situé dans le nord du canal du Mozambique, dans l’océan Indien occidental qui se trouve entre Madagascar et le nord-est du Mozambique.

![Google Maps](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-4.png "Google Maps")

## Conclusion

En combinant plusieurs approches OSINT, analyse d’image, recherche par mots-clés, recherche inversée et vérification sur Google Maps, il a été possible d’identifier avec certitude l’archipel présenté dans le défi : Mayotte. Bien sûr, j’aurais pu simplement utiliser Google Lens dès le début et obtenir la réponse en quelques secondes, mais ce n’était pas l’objectif du challenge. L'exercice montre l'importance de croiser différentes méthodes OSINT pour affiner ses résultats et valider ses hypothèses.

<em>
Outils utilisés :
- Google Lens : Recherche d'image inversée
- Google Maps : Géolocalisation
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
