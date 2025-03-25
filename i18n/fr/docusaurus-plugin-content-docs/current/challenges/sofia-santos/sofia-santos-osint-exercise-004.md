---
title: "Sofia Santos - OSINT Exercice #004 - Write-up"
description: "Découvrez une enquête OSINT détaillée pour résoudre l’Exercice #004 de Sofia Santos : analyse d’image, recherche inversée et géolocalisation pour identifier une île tropicale."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Geolocation, OSINT]
sidebar_label: "OSINT Exercice #004"
---

# Sofia Santos - OSINT Exercice #004 - Write-up

Ce write-up détaille l’[OSINT Exercise #004 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-004/), un challenge de géolocalisation visant à déterminer les coordonnées exactes d’un lieu à partir d’une image. Le niveau de difficulté est estimé à facile/moyen pour les débutants et facile pour les experts.

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Voici une photo d’un complexe hôtelier situé sur une île.
>
> a) Quel est le nom de ce complexe ?
>
> b) Quelles sont les coordonnées de l'île ?
>
> c) Dans quelle direction cardinale l’appareil photo était-il orienté lors de la prise de vue ?
>
> ![OSINT Exercise #004](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-1.png "OSINT Exercise #004")

## Investigation

### Analyse de l’image

Commençons par examiner l’image fournie. Elle représente une île tropicale entourée d’eaux turquoise et de récifs coralliens. L’île est densément recouverte de palmiers et possède des petites plages de sable. L’océan environnant présente des variations de couleurs, avec des eaux profondes en bleu foncé et des zones plus claires indiquant des hauts-fonds et des formations coralliennes.

En arrière-plan, on distingue d’autres îles, suggérant que cette île fait partie d’un archipel. Le ciel est majoritairement dégagé, avec quelques nuages épars, et l’eau calme renforce l’aspect paradisiaque du lieu, propice aux vacances et à la plongée sous-marine.

### Identification de l’île

Rien ne ressemble plus à une île tropicale qu'une autre île tropicale, ce qui peut compliquer son identification. Pour gagner du temps, nous allons utiliser la recherche inversée d’images via Google Lens.

![Google Lens Search](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-2.png "Google Lens Search")

Google Lens identifie le lieu comme étant **Oan Resort**, une plage située à Wonip, en Micronésie. Pour confirmer cette information, j’ai effectué une recherche sur Google Maps et retrouvé la même image que celle du défi.

![Google Maps](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-3.png "Google Lens Maps")

### Localisation de l’île

Ayant validé l’identification de l’île, nous en extrayons les coordonnées précises via Google Maps : **7.362441826458632, 151.75671412680836**.

![Google Maps](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-4.png "Google Maps")

Pour identifier la direction dans laquelle l’appareil photo était orienté lors de la prise de vue, nous allons utiliser Google Earth. En exploitant la vue 3D, comparons l’alignement des îles visibles à l’arrière-plan avec celles de l’image originale. 

Résultat : l’appareil photo était orienté vers le **Nord-Ouest**.

![Google Earth](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-5.png "Google Earth")

## Conclusion

Grâce à une combinaison de recherche inversée d’image, de techniques de géolocalisation et d’analyse spatiale, nous avons réussi à identifier l’île, ses coordonnées précises et l’orientation de la caméra. Cet exercice illustre parfaitement l’efficacité des méthodes OSINT pour vérifier et localiser des informations géographiques. La pratique régulière de ces techniques permet d’améliorer ses compétences en investigation numérique.

<em>
Outils utilisés :
- Google Lens : Recherche inversée d’images
- Google Maps : Géolocalisation
- Google Earth : Analyse spatiale en 3D
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
