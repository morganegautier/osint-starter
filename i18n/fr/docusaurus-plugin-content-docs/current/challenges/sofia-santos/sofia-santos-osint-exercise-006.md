---
title: "Sofia Santos - OSINT Exercice #006 - Write-up"
description: "Apprenez à vérifier l’authenticité des images virales avec l’OSINT : recherche inversée, archives web et techniques pour identifier la désinformation efficacement."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Fact Checking, OSINT]
sidebar_label: "OSINT Exercice #006"
---

# Sofia Santos - OSINT Exercice #006 - Write-up

Ce write-up présente l’[OSINT Exercise #006 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-006/), un challenge de vérification d’informations visant à déterminer l’origine réelle d’une photo partagée dans un tweet. Ce challenge, catégorisé comme facile, est accessible aussi bien aux débutants qu’aux experts en OSINT.

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Le 19 janvier 2023, un journaliste suivi par près de 140 000 abonnés sur Twitter a partagé l’image d’un véhicule détruit, entouré d’un épais nuage de fumée et de flammes. Le tweet affirmait : "URGENT : Le TTP a mené une attaque-suicide contre un poste de police à Khyber, au Pakistan, faisant trois morts parmi les policiers pakistanais."
>
> Cependant, la photo ne correspond pas à l’événement décrit par le journaliste.
>
> a) Vérifier l’exactitude de cette affirmation.
>
> ![OSINT Exercise #006](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-1.png "OSINT Exercise #006")

## Investigation

Avant de commencer les recherches, analysons le tweet et l’image associée. Publié le 19 janvier 2023, le tweet affirme que la photo montre les conséquences d’un attentat terroriste revendiqué par Tehreek-e-Taliban Pakistan (TTP) à Khyber, au Pakistan. L’image représente les restes d’un véhicule en flammes, apparemment détruit par une explosion.

Notre objectif est de vérifier si cette image correspond réellement à l’événement décrit.

### Recherche d’image inversée

Pour identifier la source de l’image, nous utilisons Google Lens pour effectuer une recherche inversée.

![Google Lens Search](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-2.png "Google Lens Search")

Les résultats affichent de nombreuses images correspondantes. Parmi elles, une source Wikipédia semble pertinente, car elle pourrait fournir des détails fiables sur l’origine de la photo.

### Identification de la source

La recherche nous mène à une [Wikipedia page](https://fr.m.wikipedia.org/wiki/Fichier:WaziriyaAutobombeIrak.jpg) contenant des informations clés. Selon cette source, la photo a été prise le 27 août 2006 par un photographe de l’US Navy, Eli J. Medellin. Elle est décrite comme suit :

> "Un engin explosif improvisé transporté par un véhicule (VBIED) après son explosion dans une rue, devant les bureaux du journal Al Sabah, dans le quartier de Waziriya à Bagdad, en Irak. L’explosion a détruit plus de 20 voitures, tué deux personnes et blessé une trentaine d’autres."

![Wikipedia Source](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-3.png "Wikipedia Source")

L’image provient donc d’un attentat à Bagdad en 2006, et non d’un événement récent au Pakistan.

### Vérification avec des sources archivées

L’image était également référencée sur le site officiel de l’US Navy, mais le lien d’origine est désormais inactif. Pour confirmer sa provenance, nous utilisons [The Wayback Machine](https://web.archive.org/web/20160304200237/http://www.navy.mil/view_image.asp?id=38460), un outil permettant d’accéder aux versions archivées des pages web.

Nous retrouvons une capture de la page datant de mars 2016, qui confirme l’authenticité et le contexte d’origine de l’image.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-4.png "Wayback Machine")

## Conclusion

Notre enquête démontre que l’image partagée sur Twitter n’est pas liée à un attentat du TTP à Khyber, au Pakistan, en 2023. Il s’agit en réalité d’une photo datant de 2006, prise en Irak après l’explosion d’un VBIED à Bagdad. Ce challenge illustre l’importance de vérifier les images virales avant de les considérer comme authentiques. La désinformation peut rapidement se propager, et l’OSINT fournit des outils efficaces pour la combattre.

<em>
Outils utilisés :
- Google Lens : Recherche inversée d’images
- [The Wayback Machine](https://web.archive.org/) : Consultation d’archives web
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
