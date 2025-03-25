---
title: "Sofia Santos - OSINT Exercice #031 - Write-up"
description: "Guide pas-à-pas pour résoudre l'exercice OSINT #031 de Sofia Santos : analyse d’image, recherche web et investigation numérique pour retracer l'histoire et la localisation de la girafe Willow"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercice #031"
---

# Sofia Santos - OSINT Exercice #031 - Write-up

Ce write-up détaille l’[OSINT Exercice #031 de Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-031/), un challenge axé sur l'observation et la recherche web pour découvrir des informations cachées grâce à des techniques d'enquête numérique. Ce challenge, catégorisé comme facile, est accessible aussi bien aux débutants qu’aux experts en OSINT.

Dans ce guide, nous vous proposons une approche pas à pas pour résoudre l’exercice, tout en fournissant des techniques essentielles pour les enquêtes OSINT. Il est recommandé d’essayer de résoudre le défi par vous-même avant de consulter cette solution pour comparer vos résultats ou obtenir de l’aide. Gardez à l’esprit qu’il existe souvent plusieurs approches valides en OSINT, l’important est de maîtriser et d’être à l’aise avec la méthode choisie.

## Présentation du challenge

> La girafe nouveau-née visible sur la photo ci-dessous appartient à une espèce en danger. Les individus nés en captivité participent souvent à des programmes de conservation. Cela peut inclure des transferts vers des installations accréditées afin de favoriser des efforts de reproduction contrôlés visant à assurer la survie de leur espèce.
>
> Votre mission est de retrouver les informations suivantes concernant cet individu :
>
> a) Lieu et date de naissance.
> 
> b) Lieu de résidence actuel et date d’arrivée.
>
> c) Une photo dans son habitat actuel.
>
> ![OSINT Exercise #031](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-1.png "OSINT Exercise #031")

## Investigation

### Identification du lieu et de la date de naissance de la girafe

Pour identifier la girafe, nous effectuons une recherche d’image inversée avec Google Lens.

![Giraffe](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-2.png "Giraffe")

Le résultat le plus pertinent provient du site ZooBorns, avec un article intitulé "[Virginia Zoo Welcomes Leggy Girl](https://www.zooborns.com/zooborns/2009/10/baby-giraffe-calf-at-the-virginia-zoo.html)". Publié le 27 octobre 2009, cet article annonce la naissance de cette girafe.

![Giraffe](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-3.png "Giraffe")

Selon l'article, la girafe est née au **Virginia Zoo**, situé au 3500 Granby St, Norfolk, VA 23504, États-Unis. Cependant, sa date de naissance varie dans l'article entre le 21 et le 23 octobre 2009. Pour clarifier cette information, nous allons consulter les archives du site du Virginia Zoo via la [Wayback Machine](https://web.archive.org/web/20250000000000*/https://virginiazoo.org/).

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-4.png "Wayback Machine")

Sur la page d'accueil, un avis de naissance indique que la girafe est née le 22 octobre 2009.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-5.png "Wayback Machine")

Une recherche plus approfondie sur le site Web du zoo de Virginie [https://web.archive.org/web/20091031015448/http://www.virginiazoo.org/about-the-zoo/new-arrivals.asp] confirme la date de naissance officielle comme étant le **mercredi 21 octobre 2009 à 21h15**.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-6.png "Wayback Machine")

### Identification du lieu de résidence actuel et de la date d’arrivée

À ce stade, le nom de la girafe est encore inconnu. Cependant, l’article de ZooBorns nous donne les noms de ses parents : Imara et Billy.

Une recherche Google pour `Virginia Zoo giraffe 2009 Imara Billy` nous mène à une [discussion sur le forum ZooChat](https://www.zoochat.com/community/threads/north-american-masai-giraffe-population.482787/) documentant la population de girafes Masaï en Amérique du Nord. L'objectif de ce fil de discussion lancé fin 2021 est de documenter les naissances, les décès et les transferts de girafes Masaï en Amérique du Nord. Le fil de discussion confirme qu'une girafe née le 21 octobre 2009 au zoo de Virginie de parents Imara et Billy s'appelait **Willow**. Fin 2021, elle vivait au **Disney's Animal Kingdom**.

![Giraffe population](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-7.png "Giraffe population")

Une nouvelle recherche pour `Willow giraffe Disney’s Animal Kingdom` nous mène à plusieurs articles évoquant son arrivée. Un article de [Windsor Palms](https://www.windsor-palms-florida.net/latest-news/disneys-animal-kingdom-gets-a-new-baby-giraffe) daté du 13 octobre 2010 nous indique que Willow est arrivée au Disney’s Animal Kingdom le **12 octobre 2010**. Elle réside dans la **zone Kilimanjaro Safari Ride du Disney’s Animal Kingdom,** un parc à thème zoologique au sein du Walt Disney World Resort à Bay Lake, en Floride.

![Disney’s Animal Kingdom](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-8.png "Disney’s Animal Kingdom")

### Recherche d’une photo récente de Willow dans son habitat actuel

Pour trouver une photo à jour, j'ai effectué une recherche Google pour `Willow giraffe Disney’s Animal Kingdom`, en filtrant les résultats par images. Après quelques recherches, j'ai trouvé un article de MickeyBlog daté du 11 mai 2019.

![Google Search](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-9.png "Google Search")

L'article [https://mickeyblog.com/2019/05/11/celebrating-mothers-day-with-masai-giraffe-moms-and-their-babies-at-disneys-animal-kingdom/], publié le jour de la fête des mères, met en lumière les mères girafes Masaï et leurs petits au Disney's Animal Kingdom, incluant une jolie photo de Willow avec sa fille, Violet, dans leur habitat actuel.

![Willow](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-10.png "Willow")

## Conclusion

Grâce aux techniques OSINT, nous avons réussi à identifier le zoo de Virginie comme lieu de naissance de Willow et à confirmer sa date de naissance comme étant le 21 octobre 2009 à 21h15. Nous avons suivi son transfert vers Disney’s Animal Kingdom le 12 octobre 2010 et avons retrouvé une photo de Willow dans son habitat actuel avec sa fille, Violet.

<em>
Outils utilisés :
- Google Lens : Recherche inversée d’images
- [The Wayback Machine](https://web.archive.org/) : Consultation d’archives web
</em>

---

Merci d’avoir lu ce write-up ! Restez à l’affût pour le prochain challenge.

Si vous souhaitez améliorer vos compétences en OSINT, rendez-vous vite sur le site de [Sofia Santos](https://gralhix.com/) !
