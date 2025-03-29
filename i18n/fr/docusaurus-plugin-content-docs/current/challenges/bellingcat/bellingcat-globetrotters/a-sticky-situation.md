---
title: "Bellingcat - Bellingcat Globetrotters - A Sticky Situation - Write-up"
description: "Découvrez comment résoudre le défi OSINT A Sticky Situation de Bellingcat en utilisant l'analyse d'image, Overpass Turbo et Google Earth pour localiser un sommet dans le Tyrol"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "A Sticky Situation"
position: 1
---

# Bellingcat - Bellingcat Globetrotters - A Sticky Situation - Write-up

Ce write-up présente le challenge Natural Wonders - Up The Creek proposé par [Bellingcat](https://challenge.bellingcat.com/), un défi de géolocalisation demandant de déterminer les coordonnées d'un lieu visible sur une image aérienne. Le challenge a été créé par [Foeke Postma, Bellingcat](https://www.bellingcat.com/author/foekepostma/).

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Quelle magnifique vue sur les montagnes !
>
> En août 2022, Foeke Postma de Bellingcat s'est retrouvé face à ce paysage saisissant, avec en prime un autocollant Bellingcat !
>
> Mais où cette aventure en montagne s'est-elle déroulée ?
>
> Quel est le nom de la montagne où se trouvait Foeke ?
>
> ![A Sticky Situation](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-1.png "A Sticky Situation")

## Investigation

### Analyse de l'image

L'image présente un paysage montagneux avec des collines verdoyantes, des sommets imposants et une vallée contenant des habitations et des terres agricoles. Un lac est également visible en arrière-plan.

Un élément clé au premier plan est un poteau en bois maintenu par des câbles, supportant une boîte métallique recouverte d'autocollants. Certains de ces autocollants mentionnent des activités de plein air et des localisations telles que "Ready4HikeMountain" et "mysprheadshop.at", suggérant un lien avec l'Autriche. De plus, la mention du Tyrol renforce l'hypothèse que l'endroit se trouve dans cette région montagneuse.

![Google Maps area](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-2.png "Google Maps area")

La perspective de la photo suggère qu'elle a été prise depuis une altitude élevée, probablement près du sommet d'une montagne. La présence d'une boîte métallique recouverte de stickers indique un lieu de randonnée fréquenté où les visiteurs laissent une trace de leur passage. Pour identifier précisément la montagne, nous devons examiner d'autres indices, tels que la vallée, les sommets visibles en arrière-plan et le poteau en bois.

### Identification du poteau en bois

Après quelques recherches sur les sommets autrichiens, j'ai remarqué que le poteau en bois est probablement une croix sommitale, une croix chrétienne placée au sommet des montagnes alpines. Ces croix comprennent souvent un registre sommital (Gipfelbuch) stocké dans un conteneur métallique, ce qui correspond à la boîte visible sur l'image.

*Source : [Wikipedia - Summit cross](https://en.wikipedia.org/wiki/Summit_cross)*

![Wikipedia - Summit cross](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-3.png "Wikipedia - Summit cross")

L'objectif est donc de trouver une croix sommitale en bois, maintenue par des câbles, avec une boîte métallique recouverte de stickers, située dans le Tyrol.

### Affinage de la recherche avec Overpass Turbo

Compte tenu du grand nombre de croix sommitales présentes dans le Tyrol autrichien, plus de 500, j'ai utilisé [Overpass Turbo](https://overpass-turbo.eu/), aun puissant outil d'exploration de données basé sur le Web pour OpenStreetMap qui permet des requêtes personnalisées.

Après avoir observé la présence d'une ville dans la vallée et d'un lac en arrière-plan, j'ai construit une requête pour identifier les sommets avec une croix et un registre sommital situés à moins de 10 km d'une ville et à moins de 15 km d'un lac.

```
[out:json][timeout:60];

// Define the bounding box for the Austrian Tyrol
area["name"="Tirol"]["boundary"="administrative"]->.tyrol;

// Find all towns and lakes in the region
node(area.tyrol)["place"="town"]->.towns;
rel["natural"="water"]["water"="lake"](area.tyrol)->.lakes;

// Find all peaks with a summit cross and a summit register within 10km of any town and 15km of any lake
(
  node(area.tyrol)["natural"="peak"]["summit:cross"="yes"]["summit:register"="yes"](around.towns:10000)(around.lakes:15000);
)->.summit_crosses;

// Output results
out body;
>;
out skel qt;
```

![Overpass Turbo](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-4.png "Overpass Turbo")

Cette requête a réduit les résultats à 52 sommets au lieu de plus de 500. Après exploration via Google Earth, un sommet s'est distingué : le **Wiedersberger Horn**.

![Overpass Turbo](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-5.png "Overpass Turbo")

### Confirmation de la localisation

À cet endroit, on trouve une croix sommitale en bois abimé, soutenue par des câbles, un registre sommital, une vallée avec une ville en contrebas et un lac au fond d'une vallée en forme de Z. La ville de la vallée est Schlitters et le lac Achensee.

Voici une vue en 3D depuis le sommet du Wiedersberger Horn sur [Google Earth](https://earth.google.com/web/search/Wiedersberger+Horn/@47.37045347,11.91031298,1776.35807782a,2174.22032146d,35y,-39.71210858h,76.24989622t,0r/data=CoEBGlMSTQolMHg0Nzc3ZDE5NjY0MzcwNTQ5OjB4MWQwMDk3NTgyMzBhM2MxMBkghDbv7q5HQCEbqnNWVdUnQCoSV2llZGVyc2JlcmdlciBIb3JuGAEgASImCiQJi0YIqszFR0ARM0FFvniFR0AZJ1anFXvHKUAhskP3HG1UJkBCAggBOgMKATBCAggASg0I____________ARAA) :

![Google Earth](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-6.png "Google Earth")

Voici une capture [Google Earth Street View](https://earth.google.com/web/search/Wiedersberger+Horn/@47.35887846,11.92356802,2030.16046683a,0d,60y,307.81655557h,85t,0r/data=CiwiJgokCZr-_duPBkdAETk099mVDEZAGZAJGpCwQC5AIaVNjH0SvihAQgIIASIwCixBRjFRaXBQd29PbGlGYnVMRjhrTzZkYVpiYjhMR1N3TGo5aGFmUkstbXNXXxAFMikKJwolCiExdlAzamw1NFBnWDdYdnd0UE9jWnhqbTZrRzRTUzNRNTYgAToDCgEwQgIIAEoICPfj8JQHEAE) montrant la croix sommitale du Wiedersberger Horn :

![Street View](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-7.png "Street View")

Quant aux autocollants, il semblerait qu’ils soient régulièrement retirés du sommet !

## Conclusion

Ce challenge illustre la puissance des techniques OSINT en géolocalisation, combinant l'analyse d'image, la recherche en ligne, Overpass Turbo pour filtrer les données et Google Earth pour la vérification du terrain.

<em>
Outils utilisés :
- [Overpass Turbo](https://overpass-turbo.eu/): Outil d'exploration de données pour OpenStreetMap
- Google Lens : Recherche d'image inversée
- Google Earth : Géolocalisation
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
