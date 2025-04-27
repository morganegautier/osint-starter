---
title: "Bellingcat - Wild Lives - Spot the Location - Write-up"
description: "Solution étape par étape du défi OSINT Bellingcat Wild Lives : identification des girafes et détermination de leur pays d'origine grâce à l'analyse d'image"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Web Searching, OSINT]
sidebar_label: "Spot the Location"
position: 1
---

# Bellingcat - Wild Lives - Spot the Location - Write-up

Ce write-up présente le challenge  Wild Lives - Spot the Location proposé par [Bellingcat](https://challenge.bellingcat.com/), un challenge de recherche web mettant à l’épreuve les compétences des participants en OSINT. Le challenge a été créé par [Foeke Postma, Bellingcat](https://www.bellingcat.com/author/foekepostma/).

Ce guide propose une approche détaillée et méthodique pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> C’est une tâche de taille !
>
> Saviez-vous que les taches des girafes aident à réguler leur température corporelle ?
>
> Les girafes sont présentes partout en Afrique subsaharienne, mais qu’en est-il de cette espèce-ci...
>
> Au début, j’ai « ei-ffel » pour le montage, il m’a rendu « in-Seine ».
>
> Dans quel pays les girafes de cette image ont-elles été le plus probablement photographiées ?
>
> ![Spot the Location](/img/challenges/bellingcat/wild-lives/spot-the-location-1.jpg "Spot the Location")

## Investigation

### Analyse de l'image

Sur l'image, deux girafes occupent le premier plan. En arrière-plan, la tour Eiffel est clairement identifiable, ce qui suggère que l’image a été modifiée ou est une composition numérique. Toutefois, pour résoudre ce défi, il est nécessaire d’ignorer l’arrière-plan et de se concentrer uniquement sur les girafes, notamment sur le motif de leur pelage, qui peut nous aider à déterminer leur espèce.

Leur robe présente une teinte relativement claire, marquée par des taches brunes irrégulières, bien délimitées et séparées par des lignes blanc crème. Ce motif précis est un indice clé pour identifier leur espèce.

### Recherche par mots-clés

Afin d’identifier l’espèce des girafes, j'ai effectué une recherche Google avec les mots-clés "giraffe species". Les résultats montrent qu’il existe plusieurs espèces et sous-espèces de girafes.

![Google Search](/img/challenges/bellingcat/wild-lives/spot-the-location-2.png "Google Search")

Un article du site Conservation Mag, intitulé "[The Different Giraffe in Africa](https://conservationmag.org/en/wildlife/the-different-giraffe-in-africa)", a particulièrement attiré mon attention. Cet article propose une description détaillée des différentes espèces de girafes, accompagnée d’une image comparant leurs motifs de pelage.

En nous basant sur la description observée précédemment — des taches brunes irrégulières et bien délimitées par des lignes claires — les girafes de notre image correspondent le plus à la girafe de Thornicroft.

![Giraffes coat pattern](/img/challenges/bellingcat/wild-lives/spot-the-location-3.png "Giraffes coat pattern")

D'après sa [page Wikipedia](https://fr.wikipedia.org/wiki/Girafe_de_Rhod%C3%A9sie) :

> La Girafe de Rhodésie (Giraffa camelopardalis thornicrofti), aussi appelée Girafe de Thornicroft ou Girafe de Zambie, est l'une des sous-espèces de Girafe. La Girafe de Rhodésie est endémique de Zambie. La Girafe de Rhodésie est considérée comme l'une des plus rares sous-espèces de Girafe avec la Girafe du Niger et la Girafe de Rothschild, on estime qu'il en reste 1 500 au monde.

![Wikipedia](/img/challenges/bellingcat/wild-lives/spot-the-location-4.png "Wikipedia")

Les girafes de Rhodésie, ou de Thornicroft, sont donc une espèce endémique de la **Zambie**.

## Conclusion

Même si l’arrière-plan de l’image, la tour Eiffel, pourrait laisser croire à Paris, France, l’analyse du pelage des girafes nous mène à une toute autre conclusion. Les girafes représentées sont très probablement des girafes de Thornicroft, une espèce native exclusivement de la vallée de Luangwa en Zambie.

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
