---
title: "Sofia Santos - OSINT Exercice #021 - Write-up"
description: "Guide détaillé pour résoudre l'OSINT Exercice #021 de Sofia Santos, avec des techniques de géolocalisation et une analyse approfondie pour identifier l'emplacement exact d'une carte."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Fact Checking, OSINT]
sidebar_label: "OSINT Exercice #021"
---

# Sofia Santos - OSINT Exercice #021 - Write-up

Ce write-up présente l’[OSINT Exercise #021 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-021/), un challenge de éolocalisation visant à déterminer les coordonnées exactes d'un lieu représenté sur une carte. Ce challenge, catégorisé comme facile, est accessible aussi bien aux débutants qu’aux experts en OSINT.

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Les cartes peuvent apparaître dans les endroits les plus inattendus. L'image ci-dessous montre une barre de chocolat comportant une carte. À côté, vous trouverez une vue satellite du même lieu.
>
> Votre mission est :
>
> a) Trouver les coordonnées de l'emplacement visible sur les deux images.
>
> ![OSINT Exercise #021](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-1.png "OSINT Exercise #021")

## Investigation

Commençons par examiner les deux images fournies. La première montre une barre de chocolat avec une carte imprimée dessus, accompagnée d'un logo portant l'inscription "Do it right." La seconde image est une vue satellite du même lieu représenté sur la barre de chocolat. La zone semble rurale, avec un petit groupe de bâtiments entouré de champs et de zones boisées. Un cours d'eau sinueux et une route sont également visibles.

### Recherche d’image inversée

L'identification de la zone géographique uniquement à partir de la carte est complexe, mais le logo sur la barre de chocolat offre un indice. Une recherche d'image inversée à l'aide de Google Lens fournit des informations pertinentes.

![Google Lens Search](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-2.png "Google Lens Search")

Les résultats indiquent que cette barre de chocolat provient de Puchero, une marque spécialisée dans le café et le chocolat artisanal provenant de petits producteurs à travers le monde.

### Analyse du site web

En visitant le site web de [Puchero](https://somospuchero.com/en/category-product/chocolate-en/bars/), nous constatons que la même carte apparaît sur plusieurs de leurs barres de chocolat. Cela suggère que cette carte pourrait représenter l'emplacement de leur usine ou de leur siège.

![Website analysis](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-3.png "Website analysis")

La section "Contact" du site web indique que le siège de Puchero est situé à :

`Carretera N-601 Km-155, 47238 Hornillos de Eresma, Valladolid, Spain`

Une recherche de cette adresse sur Google Maps révèle un lieu correspondant à la vue satellite du défi, mais sous un angle de 180°.

La zone est constituée de champs et de forêts, avec le même cours d'eau sinueux traversé par une route.

![Google Maps](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-4.png "Google Maps")

![OSINT Exercise #021](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-5.png "OSINT Exercise #021")

Un autre indice confirmant cette information est que certaines barres de chocolat produites par Puchero sont fabriquées avec des produits issus de la région de Tierra de Pinares, en Castille-et-León, Espagne, ce qui est inhabituel pour la production de chocolat.

## Conclusion

La carte imprimée sur la barre de chocolat représente une partie de Tierra de Pinares, une région naturelle proche de Valladolid, dans la communauté autonome de Castille-et-León, en Espagne. Les coordonnées du lieu visible sur les images sont approximativement `41.352757, -4.690017`.

<em>
Used tools:
- Google Lens: Recherche d'image inversée
- Google Maps: Vérification de la géolocalisation
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
