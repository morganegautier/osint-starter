---
title: "Bellingcat - Urban Exploration - Name that street! - Write-up"
description: "Découvrez comment résoudre le défi OSINT Name that street! de Bellingcat en identifiant une rue à l'aide d'analyses d'images, de plaques d'immatriculation et de Google Maps pour la géolocalisation."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Name that street!"
---

# Bellingcat - Urban Exploration - Name that street! - Write-up

Ce write-up détaille le challenge Urban Exploration - Name that street! proposé par [Bellingcat](https://challenge.bellingcat.com/), un défi de géolocalisation demandant aux participants d'identifier les coordonnées d’un lieu apparaissant sur une image. Ce challenge a été créé par [Kolina Koltai, Bellingcat](https://www.bellingcat.com/author/kolinakoltai/).

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Partons à l’exploration de la ville !
>
> De nombreuses rues sillonnent les villes du monde entier, et celle-ci en fait partie.
>
> Mais où se trouve-t-elle ?
>
> Quel est le nom de cette rue ?
>
> ![Name that street!](/img/challenges/bellingcat/urban-exploration/name-that-street-1.png "Name that street!")

## Investigation

### Analyse de l’image

Commençons par observer attentivement l’image. Elle représente une rue urbaine européenne, probablement en Allemagne, en raison des styles architecturaux, de la signalisation et des plaques d’immatriculation arborant le code pays "D".

On y distingue un mélange d’architecture moderne et historique, notamment une bâtisse à toit mansardé sur la droite et des façades contemporaines en verre et béton à gauche. Une file de voitures est garée le long de la rue, parmi lesquelles des marques allemandes haut de gamme comme BMW et Mercedes.

Parmi les éléments clés, on repère un panneau "P" indiquant un parking, une palissade en bois taguée sur la droite, ainsi qu’un bar ou restaurant avec une enseigne de bière. Ces indices suggèrent un quartier animé, possiblement en travaux ou en rénovation.

### Analyse des plaques d’immatriculation

Les plaques d’immatriculation allemandes débutent par un code d’une à trois lettres identifiant la ville ou le district d’immatriculation (ex. "F" pour Francfort, "B" pour Berlin, "M" pour Munich). Elles comportent ensuite un autocollant de contrôle technique (TÜV) suivi d’une combinaison unique de lettres et de chiffres. Identifier ces codes permet de réduire la zone de recherche.

Sur l’image, cinq plaques sont parfaitement lisibles. Voici les codes relevés et leur localisation selon la [liste des codes régionaux sur Wikipédia](https://fr.wikipedia.org/wiki/Liste_des_identifiants_territoriaux_des_plaques_d%27immatriculation_allemandes).

| Identifiant | Ville / arrondissement                             | Land  |
|-------------|----------------------------------------------------|-------|
| OF          | Arrondissement d'Offenbach / Offenbach-sur-le-Main | Hesse |
| WI (x2)     | Ville de Wiesbaden                                 | Hesse |
| HG          | Arrondissement du Haut-Taunus                      | Hesse |
| GG          | Arrondissement de Groß-Gerau                       | Hesse |

Ces indices nous orientent vers la région de Hesse, plus particulièrement au sud, dans les environs de Francfort.

![Google Maps area](/img/challenges/bellingcat/urban-exploration/name-that-street-2.png "Google Maps area")

### Géolocalisation avec Google Maps

Nous devons maintenant identifier précisément la rue en nous appuyant sur les enseignes visibles sur la photo et en concentrant nos recherches autour de Francfort.

L’une des enseignes lisibles porte l’inscription "JP STOFFE", une marque de tissus présente dans trois villes allemandes, dont Francfort.

![Google Maps area](/img/challenges/bellingcat/urban-exploration/name-that-street-3.png "Google Maps area")

L’aperçu aérien de la rue semble correspondre aux éléments observés : la zone en travaux, le bâtiment avec un petit dôme et les places de stationnement perpendiculaires à la rue. Pour valider cette hypothèse, nous utilisons Google Street View.

![Google Street View](/img/challenges/bellingcat/urban-exploration/name-that-street-4.png "Google Street View")

La rue identifiée est **Stiftstraße**, située au 26 Stiftstraße à Francfort-sur-le-Main, en Allemagne. Plusieurs éléments confirment cette découverte : l’architecture, l’agencement des rues et les détails visuels distinctifs comme le double lampadaire et le panneau bleu "P". La palissade taguée et la présence de véhicules haut de gamme corroborent également cette correspondance. Tous ces indices attestent que l’image du défi et celle de Google Street View représentent le même lieu, sous des angles et à des moments différents.

## Conclusion

Grâce aux techniques OSINT, nous avons identifié avec succès la rue comme étant **Stiftstraße** à Francfort-sur-le-Main, en Allemagne.

<em>
Outils utilisés :
- Wikipedia: Pour les codes d'immatriculation des véhicules allemands
- Google Maps: Géolocalisation
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
