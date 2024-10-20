---
title: "AFP Digital Course : Techniques d'investigation numérique"
description: "Accédez aux cours en ligne gratuits d'enquêtes numériques de l'AFP. Apprenez à vérifier le contenu, utiliser la géolocalisation et détecter la désinformation."
keywords: [AFP Digital Courses, OSINT]
sidebar_label: "AFP Digital Courses"
---

# AFP Digital Course : Techniques d'investigation numérique

Le site [AFP dédié à la formation ](https://fr.digitalcourses.afp.com/) propose une formation en ligne gratuite, principalement destinée aux journalistes et aux étudiants en journalisme. Ces cours, créés par l'équipe d'investigation numérique de l'AFP (Agence France-Presse), se concentrent sur l'enseignement de compétences essentielles pour les enquêtes numériques, telles que la vérification de contenu en ligne, l'utilisation d'outils de géolocalisation, la détection de la désinformation et la maîtrise de la recherche d'images inversée. La plateforme offre des parcours d'apprentissage structurés (débutant, intermédiaire et avancé), permettant aux utilisateurs de développer progressivement leurs compétences et d’obtenir des certificats au fil de leur progression. La structure d’apprentissage étape par étape de la plateforme, soutenue par des quiz et des exemples concrets issus de l’équipe de fact-checking de l’AFP, aide les débutants à comprendre les subtilités des enquêtes numériques.

Pour toute personne intéressée par l’OSINT (Open Source Intelligence), ce site est une ressource précieuse. Il fournit une formation pratique sur des techniques indispensables, telles que les recherches en ligne efficaces, l’analyse des réseaux sociaux, la vérification d'images et la géolocalisation, qui sont des composantes essentielles de l'OSINT. De plus, les cours spécifiques à la lutte contre la désinformation, notamment autour des élections, sont particulièrement pertinents dans le contexte médiatique actuel. Ce programme de formation est soutenu par Google News Initiative.

## Niveau débutant

Le cours débutant comporte 5 modules qui vont apprendront les bases de la recherche avancée sur internet.

### Module 1 : Recherche sur internet

Dans ce premier module, vous apprendrez à affiner vos recherches sur un moteur de recherche, en éliminant les résultats inutiles. Pour cela, vous découvrirez comment utiliser les opérateurs de recherche et les combiner pour créer des requêtes plus complexes. Vous apprendrez également à utiliser les filtres de date pour obtenir des résultats limités à une période spécifique. Cela vous aidera à affiner vos recherches efficacement et à cibler les informations pertinentes selon vos besoins.

Les principaux opérateurs booléens de recherche sont : 

- **`AND`** : Cet opérateur permet de combiner plusieurs termes et d’obtenir des résultats contenant tous ces termes.

Exemple : `chien AND chat` affichera les résultats contenant à la fois le mot "chien" et le mot "chat".

- **`OR`** : Cet opérateur permet d'obtenir des résultats contenant l’un ou l’autre des termes, ou les deux.

Exemple : `chien OR chat` affichera les résultats contenant soit "chien", soit "chat", soit les deux.

- **`""`** : Les guillemets permettent de rechercher une expression exacte. Ils sont très utiles pour éviter les variations dans les résultats.

Exemple : `"chien noir"` affichera uniquement les résultats contenant exactement l’expression "chien noir", dans cet ordre précis.

- **`-`** : Cet opérateur permet d’exclure un mot ou une expression des résultats.

Exemple : `chien -chat` affichera les résultats contenant "chien" mais exclura tous ceux qui mentionnent "chat".

- **`*`** : L’astérisque est un joker qui permet de remplacer un ou plusieurs mots inconnus ou variables dans une recherche.

Exemple : `meilleur * de 2024` affichera des résultats avec différentes suggestions telles que "meilleur film de 2024", "meilleur livre de 2024", etc.

Les principaux opérateurs de recherche avancée : 

- **`site`** : Cet opérateur permet de limiter les résultats à un site Web spécifique.

Exemple : `site:wikipedia.org chiens` affichera uniquement les résultats de Wikipédia sur les chiens.

- **`inurl`** : Cet opérateur permet de chercher les résultats contenant un mot spécifique dans l’URL.

Exemple : `inurl:blog chien` affichera des résultats dont l'URL contient "blog" et qui concernent les chiens.

- **`filetype`** : Cet opérateur permet de filtrer les résultats selon un type de fichier spécifique.

Exemple : `filetype:pdf chat` affichera uniquement les fichiers PDF correspondant à la recherche "chat".

### Module 2 : Réseaux sociaux

Dans ce second module, vous apprendrez les bases de la recherche sur les réseaux sociaux.

Sur **X**, vous découvrirez l'utilisation de la recherche avancée, qui vous permettra de filtrer vos recherches de manière précise grâce à différents critères (compte, date, langue, nombre de republications, etc.). Vous apprendrez également à créer des listes, publiques ou privées, et comprendrez leur utilité.

Sur **Bluesky**, vous explorerez les principaux opérateurs de recherche, très similaires à ceux de X, ainsi que l'outil de veille **[deck.blue](https://deck.blue/)**, qui offre une vue multi-colonnes pour suivre simultanément votre fil d’actualité, vos notifications, vos listes, et plus encore. Cet outil intègre également des fonctions de gestion multi-comptes et l'ajout de colonnes basées sur des hashtags.

Sur **Facebook**, un réseau plus restrictif en matière de recherche avancée comparé à X, vous apprendrez à rechercher des informations principalement au sein des groupes et des pages. Vous serez initié à l'outil non public **[Who posted what?](https://whopostedwhat.com/)**, qui permet d'effectuer des recherches par mots-clés sur des publications spécifiques, avec des filtres par date, lieu et utilisateur pour trouver du contenu pertinent.

Sur **Instagram**, où les options de recherche sont plus limitées, vous verrez comment rechercher efficacement à travers des hashtags ou la géolocalisation.

Enfin pour **Snapchat**, vous apprendrez à utiliser la carte pour accéder aux vidéos publiques publiées par les utilisateurs.

### Module 3 : Retrouver une archive

Dans ce troisième module, vous explorerez des outils d'archivage qui vous permettront à la fois de remonter dans le passé sur internet en retrouvant d'anciennes versions de pages web, et de sauvegarder des ressources pour le futur en archivant des sites web.

Vous apprendrez à utiliser le moteur **[Wayback Machine](https://web.archive.org/)**, un outil en ligne qui permet de consulter les archives de sites web à différentes dates. Il vous offre ainsi l'accès à des versions antérieures d'une page, même si celle-ci a été modifiée ou supprimée, et vous permet également d'archiver vous-même des pages web.

Vous découvrirez également comment accéder aux **pages en cache**, qui sont des copies temporaires de sites web stockées par des moteurs de recherche ou des services d'archivage. Ces pages en cache permettent de consulter une version antérieure d'un site, même si celui-ci a été modifié ou est temporairement inaccessible en ligne.

### Module 4 : Recherche d'images inversée

Dans ce quatrième module, vous apprendrez à utiliser des outils de recherche avancée pour retrouver l'origine des photos et vidéos partagées sur internet, ainsi que leur première publication et l'identité de l'auteur.

Vous découvrirez comment effectuer une recherche d'image inversée à l'aide de différents moteurs de recherche (Google Images, Google Lens, Microsoft Bing, Yandex, TinEye, ou encore Baidu).

En plus de ces outils, vous serez initié à l'extension [InVID-WeVerify](https://chromewebstore.google.com/detail/fake-news-debunker-by-inv/mhccpoafgdgbhnjfhkcmgknndkeenfhe?hl=en), qui permet d'effectuer des recherches inversées de photos et vidéos sur plusieurs plateformes simultanément.
