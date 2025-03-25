---
title: "Sofia Santos - OSINT Exercice #008 - Write-up"
description: "Découvrez comment résoudre le challenge OSINT #008 de Sofia Santos en utilisant des techniques de recherche web, d’analyse d’images et de traduction pour identifier un événement Shen Yun"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercice #008"
---

# Sofia Santos - OSINT Exercice #008 - Write-up

Ce write-up détaille l'[OSINT Exercise #008 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-008/), un défi qui repose sur l’observation et la recherche en ligne pour dévoiler des informations cachées à l’aide de techniques d’investigation numérique. L’exercice est considéré comme facile à moyen pour les débutants et facile pour les experts.

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le challenge par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> La grande photo ci-dessous provient d’un article du journal chinois The Epoch Times.
> 
> Répondez aux questions suivantes :
> 
> a) Que célèbre le public par ses applaudissements ?
>
> b) À quelle date la photo a-t-elle été prise ?
>
> c) Quel est le nom du lieu où s’est tenu l’événement ?
>
> ![OSINT Exercise #008](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-1.png "OSINT Exercise #008")

## Investigation

L’image provient donc du journal The Epoch Times, un média chinois. Pour comprendre le titre et le sous-titre, nous utilisons Google Traduction afin de les décrypter.

![Google Translate](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-2.png "Google Translate")

Le titre principal indique : "「神韻造福全世界」", soit "Shen Yun apporte des bénédictions au monde entier" en français. Quant au sous-titre "美歐7城同演全爆滿", il signifie "Des représentations dans sept villes des États-Unis et d’Europe affichent complet". Ces éléments soulignent l’ampleur et le succès de Shen Yun Performing Arts, une troupe qui mêle danse et musique symphonique. Il devient alors logique de penser que le public applaudit une représentation de **Shen Yun**.

*[Par ailleurs, selon [Wikipedia](https://fr.wikipedia.org/wiki/Shen_Yun_Performing_Arts), Shen Yun est une troupe basée à New York, associée au mouvement spirituel Falun Gong, parfois qualifié de secte. Son financement provient en partie des recettes de ses spectacles. The Epoch Times, qui promeut largement Shen Yun, est quant à lui un média d’extrême droite lié à cette organisation. Ces éléments sont corroborés par plusieurs articles, dont :*

<em>
- *[« Shen Yun », la très politique et anticommuniste danse chinoise du Falun Gong](https://www.lemonde.fr/culture/article/2023/04/26/shen-yun-la-tres-politique-et-anticommuniste-danse-chinoise-du-falun-gong_6171140_3246.html), un article publié le 26 avril 2023 sur le site du journal Le Monde;*
- *[Shen Yun : le spectacle de danse chinoise est-il la vitrine d’une secte ?](https://www.liberation.fr/checknews/shen-yun-le-spectacle-de-danse-chinoise-est-il-la-vitrine-dune-secte-20230117_WMRSJNJ3PBFLFP6AWLPBAO3BLQ/), un article publié le 17 janvier 2023 sur le site du journal Libération;
- *[L’empire ésotérique du Falun Gong](https://www.monde-diplomatique.fr/2024/08/RAUGLAUDRE/67297), un article publié en août 2024 sur le site du journal Le Monde Diplomatique]*
</em>

Ensuite, il nous reste à identifier la date et le lieu exacts de la photo. Le journal est daté du 12 janvier 2023, ce qui laisse supposer que le spectacle s’est tenu peu avant cette date. Pour affiner notre recherche, nous consultons le site officiel de Shen Yun, qui répertorie les dates des tournées. Toutefois, comme nous cherchons une information passée, nous utilisons la [Wayback Machine](https://web.archive.org/web/20221127233137/https://www.shenyun.com/tickets) pour explorer une version archivée de la page de billetterie à la fin de l’année 2022.

![Calendar](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-3.png "Calendar")

Plusieurs dates correspondent à la période de début janvier. Nous décidons donc d’analyser les photos des salles concernées via Google Images. Un théâtre se démarque : le Chrysler Hall à Norfolk, en Virginie aux États-Unis. Son plafond géométrique distinctif, ses balcons arrondis, ses sièges rouges et son habillage en bois sont des éléments qui concordent parfaitement avec la salle visible sur la photo du journal. Selon les archives de billetterie, des représentations y ont eu lieu les 7 et 8 janvier 2023.

![Google Image](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-4.png "Google Image")

Pour vérifier cette hypothèse, nous effectuons une recherche d’image inversée avec Google Lens à partir de la photo du journal. Cette recherche nous mène au site minghui.org, un autre média affilié au Falun Gong, où nous retrouvons l’image avec une légende confirmant que la représentation de Shen Yun a eu lieu le **7 janvier 2023** au **Chrysler Hall, à Norfolk, Virginie**.

![Newspaper](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-5.png "Newspaper")

Conclusion
A travers cette enquête, nous avons pu confirmer que le public sur la photo applaudissait un spectacle de Shen Yun Performing Arts, qui s’est tenu le 7 janvier 2023 au Chrysler Hall, à Norfolk, Virginie. En exploitant des outils de traduction, d’archives web, de recherche d’image inversée et d’analyse contextuelle, nous avons pu identifier avec précision la date et le lieu de l’événement.

<em>
Outils utilisés :
- Google Traduction: Traduction du texte sur la photo
- Google Lens : Recherche inversée d’images
- [The Wayback Machine](https://web.archive.org/) : Consultation d’archives web
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
