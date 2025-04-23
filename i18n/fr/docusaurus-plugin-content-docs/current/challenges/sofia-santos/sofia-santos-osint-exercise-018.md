---
title: "Sofia Santos - OSINT Exercise #018 - Write-up"
description: "Enquête OSINT détaillée sur le cortège du couronnement de la reine Elizabeth II en 1953 : itinéraire, vitesse moyenne, analyse cartographique et sources historiques croisées"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercice #018"
---

# Sofia Santos - OSINT Exercice #018 - Write-up

Ce write-up détaille l’[OSINT Exercise #018 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-018/), un défi centré sur la recherche en ligne et l’observation afin de faire émerger des informations historiques précises à l’aide de techniques d’enquête numérique. Le niveau de difficulté est estimé à facile/moyen pour les débutants et facile pour les experts.

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> En mai 2023, le monde a assisté au couronnement du roi Charles III à l’abbaye de Westminster, à Londres. Comme pour le précédent monarque, le roi a parcouru la ville dans un carrosse royal après la cérémonie. Cependant, l’itinéraire de 2023 différait de celui de 1953.
> 
> Votre mission :
> 
> a) Identifier par quelle porte précise la reine Elizabeth II a quitté l’abbaye de Westminster après son couronnement.
>
> b) Mesurer la distance parcourue par le carrosse royal en 1953.
>
> c) Estimer la vitesse moyenne à laquelle se déplaçait le carrosse de la reine.

## Investigation

### Par quelle porte la reine Elizabeth II est-elle sortie ?

Je commence par une recherche simple sur Google : “Queen Elizabeth II coronation Westminster Abbey exit door”. La première source pertinente est la [page Wikipédia dédiée au couronnement d’Elizabeth II](https://fr.wikipedia.org/wiki/Couronnement_d%27%C3%89lisabeth_II), où l’on apprend :

> Portant alors la couronne impériale d’apparat et tenant le sceptre à la Croix et l'orbe, et alors que les invités réunis chantaient God Save the Queen, Élisabeth quitta l'abbaye de Westminster par la nef et l'abside, par le grand portail ouest.

![Wikipedia](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-1.png "Wikipedia")

Pour recouper cette information, j'ai consulté [The Gazette](https://www.thegazette.co.uk/awards-and-accreditation/content/103597), une publication officielle du gouvernement britannique :

> Elizabeth II, portant la couronne impériale et tenant le sceptre et l’orbe, quitta l’abbaye de Westminster « en passant par le chœur et la nef, vers la porte ouest de l’église […] pendant que l’hymne national était chanté par l’assemblée ».

![The Gazette](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-2.png "The Gazette")

Enfin, j'ai visionné les [images d’archives de la BBC]((https://youtu.be/52NTjasbmgw?si=-jQE5VdrWOLwNsjU&t=10414)), disponibles sur la chaîne YouTube Archive of Recorded Church Music. À 2:53:34, on voit clairement la reine quitter l’édifice par la nef, puis franchir la grande porte ouest à 2:53:54.

La reine Elizabeth II est bien sortie de l’abbaye de Westminster par la **Great West Door**, également utilisée pour son entrée.

### Distance parcourue par le carrosse royal

Le site officiel de la famille royale britannique, [royal.uk](https://www.royal.uk/queen-elizabeth-iis-accession-and-coronation), précise :

> Une procession a eu lieu dans Londres après le service religieux, conçue pour permettre au plus grand nombre de voir la Reine. L’itinéraire de 7,2 kilomètres a mobilisé 16 000 participants pendant deux heures.

![Map](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-3.jpg "Map")

Pour vérifier cette distance, j’utilise l’[outil de mesure du visionneur de cartes ArcGIS](https://www.arcgis.com/apps/mapviewer/index.html)), en m’appuyant sur la carte officielle de la procession de 1953 (référence catalogue : PC 22/11), disponible sur le site des [Archives Nationales du Royaume-Uni](https://www.nationalarchives.gov.uk/).


![Arcgis Map](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-4.png "Arcgis Map")

Ma propre mesure donne un total d’environ **8,21 km**, soit légèrement plus que les 7,2 km annoncés officiellement.

### Vitesse moyenne du carrosse

Selon le programme officiel, la reine aurait quitté l’abbaye à 14h50 pour arriver à Buckingham Palace à 16h30, soit 1 heure et 40 minutes, ou 100 minutes.

Temps en heures :
```
100 minutes ÷ 60 = 1,67 heures
```

Formule de la vitesse : `Vitesse = Distance ÷ Temps`

En appliquant notre distance mesurée de 8,21 km :

```
Vitesse = 8,21 km ÷ 1,67 h ≈ 4,93 km/h
```

La vitesse moyenne estimée du cortège royal en 1953 serait d’environ **4,93 km/h**, ce qui correspond à une allure lente et solennelle, adaptée à un événement de cette envergure.

## Conclusion

Cette enquête démontre la pertinence des techniques OSINT lorsqu’elles sont appliquées à l’analyse d’événements historiques. En croisant des sources officielles, des archives audiovisuelles et des outils numériques de cartographie, nous avons pu identifier la sortie de la reine par la grande porte ouest de l’abbaye de Westminster, mesurer un parcours de 8,21 km, légèrement supérieur à la version officielle et estimer une vitesse moyenne d’environ 4,92 km/h pour le cortège royal. Ce type d’exercice illustre l’importance de la vérification croisée et de l’utilisation judicieuse des ressources en ligne pour toute enquête OSINT.

<em>
Outils utilisés :
- [Arcgis](https://www.arcgis.com/apps/mapviewer/index.html) : outil de mesure de distance sur une carte
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
