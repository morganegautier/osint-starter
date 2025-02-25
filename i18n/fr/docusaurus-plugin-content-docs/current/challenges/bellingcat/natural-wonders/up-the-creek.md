---
title: "Bellingcat - Natural Wonders - Up The Creek - Write-up"
description: "Une enquête OSINT étape par étape résolvant le défi Up The Creek de Bellingcat, en utilisant l'analyse d'image, la recherche inversée et Google Maps pour géolocaliser une rivière sinueuse."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Up The Creek"
---

# Bellingcat - Natural Wonders - Up The Creek - Write-up

Ce write-up présente le challenge Natural Wonders - Up The Creek proposé par [Bellingcat](https://challenge.bellingcat.com/), un défi de géolocalisation demandant aux participants de déterminer les coordonnées d'un lieu visible sur une image aérienne. Ce challenge a été créé par [Kolina Koltai, Bellingcat](https://www.bellingcat.com/author/kolinakoltai/).

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Quelle belle rivière sinueuse !
>
> Depuis un hublot d’avion, on peut découvrir le monde sous un angle unique. Ici, nous avons une vue sur une rivière serpentant à travers le paysage !
>
> Les avions volent à différentes altitudes, mais cet appareil était suffisamment haut pour capturer le tracé sinueux du cours d’eau.
>
> Quel est le nom de cette rivière ? (n’incluez pas "River" dans votre réponse)
>
> ![Up the creek](/img/challenges/bellingcat/natural-wonders/up-the-creek-1.png "Up the creek")

## Investigation

### Analyse de l'image

Commençons par examiner l’image fournie. Elle présente une vue aérienne d’un paysage rural dominé par une rivière sinueuse. Celle-ci forme plusieurs méandres prononcés, typiques des cours d’eau à faible pente. Le paysage environnant se compose de terres agricoles, de champs verts, de bâtiments agricoles dispersés et de petites localités reliées par des routes étroites.

Un pont blanc distinctif enjambe la rivière à l’un de ses méandres, servant de repère clé. À droite de l’image, une forêt dense contraste avec les champs ouverts. En arrière-plan, une zone périurbaine et une chaîne de montagnes sont partiellement visibles à travers la brume. Ces éléments géographiques sont des indices précieux pour identifier l’emplacement exact.

### Recherche d’image inversée

L’identification de cette zone uniquement à partir de la carte est complexe. Pour simplifier cette tâche, effectuons une recherche d’image inversée avec Google Lens.

![Google Lens](/img/challenges/bellingcat/natural-wonders/up-the-creek-2.png "Google Lens")

Parmi les résultats, une image a particulièrement retenu mon attention : celle illustrant un article intitulé "[Advocacy Update: Fish, Farm, Flood 2.0](https://www.snovalleytilth.org/advocacy-update-fish-farm-flood-2-0/)" publié sur le site snovalleytilth.org. L’article explique l’initiative Fish, Farm, Flood (FFF), un programme du comté de King visant à concilier la restauration des habitats aquatiques, la préservation des terres agricoles et la gestion des inondations. Il mentionne notamment la vallée de la Snoqualmie.

![Snoqualmie Valley](/img/challenges/bellingcat/natural-wonders/up-the-creek-3.png "Snoqualmie Valley")

Cette image correspond étroitement à celle du défi : on y retrouve un paysage rural similaire, une rivière sinueuse et un pont blanc. Les courbes distinctives de la rivière, les parcelles agricoles ordonnées et l’environnement naturel environnant renforcent l’hypothèse qu’il s’agit bien du même endroit. D’après l’article, l’image représente la vallée de la Snoqualmie et la rivière Snoqualmie.

### Vérification avec Google Maps

Pour confirmer cette hypothèse, consultons Google Maps. La rivière Snoqualmie s’étend sur 72 km à travers les comtés de King et de Snohomish, dans l’État de Washington, aux États-Unis. La recherche d’un méandre correspondant nous conduit près de la ville de Novelty. En utilisant le mode Globe pour une vue en 3D, nous tentons de reproduire les conditions de prise de vue.

![Snoqualmie River](/img/challenges/bellingcat/natural-wonders/up-the-creek-4.png "Snoqualmie River")

L’image satellite de Google Maps correspond parfaitement à l’image aérienne initiale. La ressemblance est évidente : la rivière suit le même tracé sinueux, avec plusieurs méandres bien distincts. Les parcelles agricoles situées en bas à droite de l’image satellite correspondent aux champs structurés visibles sur l’image du défi. De plus, le pont blanc observable sur l’image initiale apparaît également sur la carte, traversant la rivière près de NE 124th St, dans la région de Novelty. La combinaison de forêts, de terres cultivées et de zones périurbaines confirme que ces images représentent bien la même section de la vallée de la Snoqualmie, dans l’État de Washington, aux États-Unis.

## Conclusion

La rivière illustrée dans ce défi est la **rivière Snoqualmie**, située dans l’État de Washington, aux États-Unis. Les coordonnées approximatives de l’image sont 47°42'55.1"N, 121°59'48.0"W.

<em>
Outils utilisés :
- Google Lens : Recherche d'image inversée
- Google Maps : Géolocalisation
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
