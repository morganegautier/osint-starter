---
title: "Bellingcat - Natural Wonders - Hot Stuff - Write-up"
description: "Découvrez comment identifier un hélicoptère de lutte contre les incendies grâce à l’OSINT, en retraçant son immatriculation et son numéro via des recherches open source"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Web Searching, OSINT]
sidebar_label: "Hot Stuff"
position: 2
---

# Bellingcat - Natural Wonders - Hot Stuff - Write-up

Ce write-up détaille le challenge Natural Wonders - Hot Stuff proposé par [Bellingcat](https://challenge.bellingcat.com/), un challenge de recherche web mettant à l’épreuve les compétences des participants en OSINT. Ce challenge a été créé par [Thomas Bordeaux, membre de la communauté bénévole de Bellingcat](https://www.bellingcat.com/author/thomasbordeaux/).

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> Qui combat cet incendie ?
>
> Les noms changent ! En recherche open source, il est souvent utile de trouver des informations actualisées sur les noms ou désignations de personnes, lieux ou objets.
>
> Le numéro qui identifie cet hélicoptère a été modifié depuis la prise de cette photo. Pouvez-vous retrouver son nouveau numéro ?
>
> En date de juillet 2024, quel est le numéro d’immatriculation (tail number) et le code (large number) de cet hélicoptère ? (Format attendu : TAILNUMBER-LARGENUMBER, par ex. AB-CDE-99)
>
> ![Hot Stuff](/img/challenges/bellingcat/natural-wonders/hot-stuff-1.jpg "Hot Stuff")
>
> *L’hélicoptère 21 largue de l’eau sur un incendie de forêt. Photo de Thomas Bordeaux.*

## Investigation

### Analyse de l’image

La photo montre un hélicoptère de lutte contre les incendies en pleine action, en train de larguer de l’eau sur un feu de forêt. L’environnement est densement boisé, enveloppé de fumée, et des flammes sont visibles au sol, témoignant de l’ampleur de l’incendie.

Deux éléments marquants apparaissent sur l’hélicoptère : l’inscription "bombers", qui signifie "pompiers" en catalan, ainsi que le numéro 21 inscrit dans un cercle blanc. La couleur rouge et jaune du fuselage est également typique des véhicules d’urgence aérienne.

### Identification de l’organisation

Une recherche rapide sur Google avec les mots-clés "bombers helicopter" permet d’identifier plusieurs images d’hélicoptères similaires. Celles-ci pointent rapidement vers les **Bombers de la Generalitat de Catalunya**, le service d’incendie du gouvernement régional catalan.

![Google Search](/img/challenges/bellingcat/natural-wonders/hot-stuff-2.png "Google Search")

Une recherche sur [JetPhotos](https://www.jetphotos.com/photo/10191638), un site spécialisé en photographies d’avions et d’hélicoptères, confirme le lien avec cette flotte. On y retrouve des modèles aux couleurs identiques.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-3.png "JetPhotos")

### Étude de la flotte

Sur le [site officiel de la Generalitat de Catalunya](https://interior.gencat.cat/en/incendis-forestals/actuem/mitjans-campanya-forestal/), on trouve des informations sur les moyens aériens engagés dans la lutte contre les incendies. En septembre 2024, 10 hélicoptères bombardiers d’eau sont recensés.

La [version catalane de Wikipédia](https://ca.wikipedia.org/wiki/Bombers_de_la_Generalitat_de_Catalunya) fournit une liste encore plus précise des appareils utilisés, avec leurs bases respectives.

![Wikipedia](/img/challenges/bellingcat/natural-wonders/hot-stuff-4.png "Wikipedia")

Cependant, ni le site officiel ni Wikipédia ne permettent de relier directement le numéro "21" à un modèle ou une immatriculation précise. Il faut donc revenir sur JetPhotos pour aller plus loin.

### Finding the specific helicopter

Sur JetPhotos, la première photo utile provient d’un utilisateur nommé Trànsit aeri de Catalunya. En consultant ses autres clichés, on découvre une image essentielle : une photographie datée de juin 2021 montrant clairement l’hélicoptère 21.

On y distingue deux informations cruciales : son numéro d’immatriculation (ou tail number) : EC-MQR, et son numéro de série constructeur (manufacturer serial number, MSN) : 4914. Ce dernier est particulièrement important, car il reste identique durant toute la vie de l’appareil, quel que soit son numéro visible ou son opérateur.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-6.png "JetPhotos")

Une recherche sur JetPhotos du numéro de série 4914 permet de retracer l’historique de l’appareil. On apprend qu’il a porté les numéros 51, puis 21, et qu’il est désormais identifié comme 11.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-7.png "JetPhotos")

Une photo récente, datée de juillet 2024, montre clairement l’hélicoptère EC-MQR avec le nouveau grand numéro 11.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-8.png "JetPhotos")

En croisant toutes ces données, on peut donc affirmer qu’en juillet 2024, l’hélicoptère précédemment identifié comme "21" porte désormais la désignation **EC-MQR-11**.

## Conclusion

Ce défi démontre parfaitement l’efficacité d’une enquête OSINT méthodique. En combinant l’analyse visuelle, la recherche d’informations ouvertes, et la consultation de bases de données aéronautiques, il est possible d’identifier avec précision un appareil malgré le changement de ses marquages. Le numéro de série, en particulier, s’est révélé être la clé pour faire le lien entre le passé et le présent de l’hélicoptère.

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Bellingcat](https://www.bellingcat.com/) !
