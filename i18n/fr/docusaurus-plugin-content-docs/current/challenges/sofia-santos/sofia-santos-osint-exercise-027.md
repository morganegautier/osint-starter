---
title: "Sofia Santos - OSINT Exercice #027 - Write-up"
description: "Analyse OSINT étape par étape de l'exercice #027 par Sofia Santos, incluant recherche web, analyse d'image et techniques d'investigation numérique."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercice #027"
---

# Sofia Santos - OSINT Exercice #027 - Write-up

Ce write-up présente l’[OSINT Exercise #021 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-021/), qui repose sur l'observation et la recherche web afin de découvrir des informations cachées à l'aide de techniques d'investigation numérique. Ce challenge, catégorisé comme facile, est accessible aussi bien aux débutants qu’aux experts en OSINT.

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Task briefing

> L'image ci-dessous montre un groupe de personnes assises devant un grand écran affichant "Lectura en Movimiento en Lima". Un orateur se tient à gauche devant trois grands drapeaux.
>
> Votre mission consiste à :
>
> a) Identifier l'orateur.
>
> b) Déterminer ce qu'il porte sur le revers de sa veste.
>
> c) Trouver une vidéo de son discours.
>
> ![OSINT Exercise #027](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-1.png "OSINT Exercise #027")

## Investigation

### Analyse de l'image

L'image montre ce qui semble être une conférence ou un événement public. L'écran affiche "Lectura en Movimiento en Lima" ("Lecture en mouvement à Lima"), accompagné des logos des institutions partenaires. Trois drapeaux se trouvent derrière l'orateur, dont un rouge et blanc, probablement le drapeau du Pérou. Sur la droite, un dispositif d'enregistrement laisse penser qu'il existe une vidéo de l'événement.

### Identification de l'orateur

Une recherche Google de "Lectura en Movimiento en Lima" renvoie vers un article de l'Organización de Estados Iberoamericanos (OEI), dont le logo figure sur l'écran de l'événement. L'article, publié le 18 juillet 2023, s'intitule [“Lectura en Movimiento en Lima”: Una iniciativa que une a 14 entidades para promover la lectura en el país](https://oei.int/oficinas/peru/noticias/lectura-en-movimiento-en-lima-una-iniciativa-que-une-a-14-entidades-para-promover-la-lectura-en-el-pais/).

Cet article mentionne que l'événement a eu lieu dans le cadre de la Foire Internationale du Livre de Lima et vise à promouvoir la lecture dans les espaces publics. Une des photos de l'article montre un homme en costume sombre, cravate bleu ciel et badge blanc sur le revers de sa veste, qui semble correspondre à l'orateur recherché.

![OEI Speaker](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-2.png "OEI Speaker")

L'article l'identifie comme **Juan Carlos Ruiz**, directeur de l'OEI au Pérou. Une vérification par recherche d'images confirme cette information avec plusieurs photos supplémentaires.

![OEI Speaker](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-3.png "OEI Speaker")

### Identification des insignes sur le revers de la veste

Juan Carlos Ruiz porte un badge blanc. Une recherche Google Lens fournit un gros plan d'un badge marqué "OEI", correspondant à l'Organización de Estados Iberoamericanos dont il est le directeur.

![OEI Speaker badge](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-4.png "OEI Speaker badge")

Il porte également une épinglette en forme de cocarde. Une recherche inversée sur Google Lens ne donne pas de résultat concluant, mais en ajoutant "Pérou" comme mot-clé, une annonce eBay présente un insigne similaire, identifié comme "Escarapela del Perú".

![OEI Speaker badge](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-5.png "OEI Speaker badge")

D'après Wikipedia, l'**Escarapela del Perú** est un symbole non officiel du pays, souvent porté lors des fêtes nationales en juillet.

### Recherche de la vidéo du discours

L'[article de l'OEI](https://oei.int/oficinas/peru/noticias/lectura-en-movimiento-en-lima-una-iniciativa-que-une-a-14-entidades-para-promover-la-lectura-en-el-pais/) indique que :

> The event was opened by the director of OEI Peru, Juan Carlos Ruiz, who commented and detailed the activities that will be developed during the execution of this project. He also thanked all the institutions that joined and supported the goal of continuing to promote reading in the country.

Une recherche Google "Lectura en Movimiento en Lima" filtrée par "vidéos" donne plusieurs résultats pertinents.

![OEI Footage](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-6.png "OEI Footage")

Un vidéo YouTube intitulée [Lectura en Movimiento en Lima](https://youtu.be/WVU-ei4Dunk?si=s7ydsIdflOC95jAy&t=573) contient l'enregistrement de l'événement. **Le discours de Juan Carlos Ruiz commence à 9:33 et se termine à 18:12.**

![OEI Footage](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-7.png "OEI Footage")

## Conclusion

Grâce aux techniques OSINT, nous avons identifié Juan Carlos Ruiz comme orateur, confirmé qu'il portait un badge OEI et une escarapela péruvienne et trouvé une vidéo de son discours (9:33 - 18:12).

<em>
Outils utilisés :
- Google Lens: Recherche d'image inversée
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
