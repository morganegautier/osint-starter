---
title: "Bellingcat - Maritime Mysteries - Fully Stocked - Write-up"
description: "Découvrez comment résoudre le défi OSINT Fully Stocked de Bellingcat avec une méthode de géolocalisation détaillée utilisant Google Lens et Maps. Améliorez vos compétences avec ce write-up."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Fully Stocked"
---

# Bellingcat - Maritime Mysteries - Fully Stocked - Write-up

Ce write-up présente le challenge Maritime Mysteries - Fully Stocked proposé par [Bellingcat](https://challenge.bellingcat.com/), un challenge de géolocalisation qui consiste à identifier l'emplacement d'une image. Ce challenge a été créé par [Galen Reich, Bellingcat](https://www.bellingcat.com/author/galenreich/).

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Prêts à larguer les amarres.
>
> Les porte-conteneurs sont omniprésents dans les ports du monde entier, mais celui-ci est particulièrement bien chargé.
>
> Ils jouent un rôle essentiel dans la chaîne logistique mondiale, mais où ce navire est-il amarré ?
>
> Dans quelle ville se trouve ce port ?
>
> ![Fully Stocked](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-1.png "Fully Stocked")

## Investigation

### Analyse de l'image

L'image présente un grand port de commerce avec de nombreuses grues manipulant des conteneurs. Un élément distinctif est la présence d'un navire arborant l'inscription UASC, indiquant son appartenance à la United Arab Shipping Company, un acteur majeur du transport maritime mondial. Un autre indice important est l'inscription partielle "RDKAI" visible sur certaines grues.

En arrière-plan, un pont à haubans est visible, constituant un repère architectural pouvant grandement faciliter l'identification du lieu. L'infrastructure imposante du site suggère qu'il s'agit d'un port international majeur.

### Recherche d'image inversée

Alors que l'on pourrait enquêter sur le port en nous basant sur le navire ou les marquages des grues, le pont à haubans en arrière-plan constitue un indice précieux. Une recherche d'image inversée sur ce pont via Google Lens pourrait donc s'avérer donc pertinente.

![Google Lens](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-2.png "Google Lens")

Les résultats nous apprennent qu'il s'agit du Köhlbrandbrücke, situé à Hambourg, Allemagne. Ce pont enjambe le Köhlbrand, une section de l'Unterelbe, qui fait partie du fleuve Elbe.

### Géolocalisation avec Google Maps

Maintenant que nous savons que la ville concernée est Hambourg, nous devons localiser précisément le port présent sur l'image. Pour cela, nous utilisons Google Maps afin de comparer les détails de la photo avec des vues satellites.

![Google Maps area](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-3.png "Google Maps area")

En examinant attentivement le Port de Hambourg, nous trouvons une correspondance avec l'image du défi. Le terminal Burchardkai présente les mêmes grues rouges et bleues que celles de la photo du challenge. L'inscription partiellement visible "RDKAI" correspond à "Burchardkai". Le Waltershofer Hafen, une section clé du port, accueille des navires de grande taille similaires à celui présent sur l'image. De plus, le Köhlbrandbrücke est bien visible en arrière-plan, confirmant sans aucun doute notre identification.

![Google Maps Satellite View](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-4.png "Google Maps Satellite View")

Pour valider définitivement notre conclusion, nous retrouvons une photographie similaire prise par Sönke Knöfel, illustrant le même port industriel avec ses immenses grues, ses porte-conteneurs et le Köhlbrandbrücke en arrière-plan.

![Google Street View](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-5.png "Google Street View")

## Conclusion

Grâce aux techniques OSINT, nous avons confirmé que le port présent sur l'image du défi est situé à **Hambourg**, en Allemagne.

<em>
Outils utilisés :
- Google Lens : Recherche d'image inversée
- Google Maps : Géolocalisation
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
