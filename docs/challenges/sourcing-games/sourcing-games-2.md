---
title: "Unlocking Sourcing Games 2: step-by-step guide to winning"
description: Unlock the secrets to passing Sourcing Games 2. Learn URL encoding, use Wayback Machine, explore GitHub commits, find LinkedIn profiles, and uncover document metadata.
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, Sourcing Techniques, Online Research Skills, OSINT]
sidebar_label: "Sourcing Games 2"
---

# Sourcing Games 2 - Not all URLs are dead

Here you can find the method and solutions to successfully pass [Sourcing games 2](https://sourcing.games/game-2/) which will guide you through the basics of sourcing at an intermediate level. Remember, there isn't just one solution; there are multiple ways to approach the games. The key is to be comfortable with the method you choose.

## Game 01 - URL encoding

### Instructions

Get the password from the URL below.

`www.sourcing.%20games/games/02s/`

### Objective

The aim of Game 01 is to find a password that unlocks the next level. To do this, click on the "OPEN URL" button, which will redirect you to a new page.

The page opens with an error indicating that the site cannot be reached:

![Error page](/img/challenges/sourcing-games/game-2/sourcing-games-2-01-1.png "Error page")

### Solution

Here, you need to check the URL of the page: `www.sourcing.%20games/games/02s/`. In this URL, you can notice a "%20", which is an encoding that normally replaces a space in a URL. Just remove this encoding to find the correct URL.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 01</summary>

The correct URL to find the password is: `https://www.sourcing.games/games/02s/`.

![Solution to game 01](/img/challenges/sourcing-games/game-2/sourcing-games-2-01-2.png "Solution to game 01")

The password to reach the next level is "**4vc7sa**".

</details>

## Game 02 - Find an information on a webpage that has been indexed

### Instructions

I can’t travel back in time, but in October 26, 1996 on microsoft.com, I saw the name of the guy who became a certified trainer. His name stuck in my mind, and that’s why this surname is the password for the next URL.

### Objective

The goal of Game 02 is to find information on a page from a given URL that has been indexed. The website in question is "microsoft.com", and the information you're searching for existed on the webpage on October 26, 1996.

### Solution

To find the information you're searching for, you can use the [Wayback Machine](https://web.archive.org/), and enter the URL of the website (here "microsoft.com") in the search bar. A calendar will appear, showing you all the snapshots available for this website. Choose the October 26, 1996 date, which will open a snapshot of the webpage as of that date. Now, just find the information you were searching for.

![Wayback Machine](/img/challenges/sourcing-games/game-2/sourcing-games-2-02-1.png "Wayback Machine")

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 02</summary>

![Solution to game 02](/img/challenges/sourcing-games/game-2/sourcing-games-2-02-2.png "Solution to game 02")

The password to reach the next level is "**mcintosh**".

</details>

## Game 04 - Robots.txt file

### Instructions

LinkedIn disallows all robots to index some things, and these robots already know that your "keyword for next level" is a part of the e-mail address before @linkedin.com.

### Objective

The aim of Game 04 is to find the email address to contact LinkedIn in order to apply for permission to crawl their website. To do so, you need to check the `robots.txt` file. The robots.txt file is a standard used by websites to communicate with web crawlers and other web robots. It is placed at the root of a website and contains directives that specify which parts of the site should not be crawled or indexed by search engines and other automated agents.

### Solution

To find the email address, check the robots.txt file of the LinkedIn website. The robots.txt file is located at the root of the website, so you can access it by visiting `https://www.linkedin.com/robots.txt`. Look for the email address to apply for permission to crawl LinkedIn, and you will find the keyword you're searching for.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 04</summary>

![Solution to game 04](/img/challenges/sourcing-games/game-2/sourcing-games-2-04.png "Solution to game 04")

The password to reach the next level is "**whitelist-crawl**".

</details>

## Game 05 - Find an e-mail address from a GitHub account

### Instructions

The first part of the e-mail address of this GitHub user is the password that will open the file below. (Use only the part before @). The password that is in that file will open the next level.

### Objective

The goal of Game 05 is to find the email address hidden behind a GitHub account. The first instinct might be to visit the user's GitHub profile, but in this case, their email address is not displayed. Another idea is to browse the various public repositories, commits, pull requests, and issues related to this user. However, their email address seems to have been hidden.

### Solution

A way to find the email address behind a GitHub account is by using the git log command. Let's choose a repository, for example, "example-01-helloworld" and clone it:

`git clone https://github.com/angularjs-gdit/example-01-helloworld.git`

Then go to this cloned repository: `cd example-01-helloworld`

And finally use the `git log` command to access to the commit history.

There you will find the email address linked to the commit:

![Git commands](/img/challenges/sourcing-games/game-2/sourcing-games-2-05-1.png "Git commands")

Another, certainly simpler way to find information related to the history of a commit on GitHub is by going to a commit page and just adding .patch to its URL:

![URL.patch](/img/challenges/sourcing-games/game-2/sourcing-games-2-05-2.png "URL.patch")

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 05</summary>

The correct email address and file password is "**pt103368**".

The password to reach the next level is "**s00rcing**".

</details>

## Game 06 - Find a LinkedIn profile

### Instructions

THINK LOCALLY, ACT LOCALLY! In 2016, I met a great guy, who worked as a Developer in Poland, not sure if he was from Warsaw, Wroclaw or Crakow. But what I remember was that he is a developer (intermediate level), working with Angular, Java, JUnit and Python. When he told me his name I thought that he was a foreigner, but he doesn’t speak a word in English, only Polish. I also found his LinkedIn profile, I hope he will learn English and I wish I was fluent in Polish.

### Objective

The goal of Game 06 is to find the name of a person, given some information. Here we have 5 useful pieces of information about the person:
 - Occupation: Developer
 - Skills: Angular, Java, JUnit, and Python
 - Location: Warsaw, Wroclaw, or Crakow
 - Language: Polish
 - Social media used: LinkedIn

### Solution

To find the developer’s LinkedIn profile, use Google dorking. In your search query, enter your keywords and add `site:linkedin.com` to limit the search results to LinkedIn only:

`angular java junit python developer warsaw wroclaw krakow polish site:linkedin.com`

Here is the search result:

![Google Dork](/img/challenges/sourcing-games/game-2/sourcing-games-2-06-1.png "Google Dork")

We get a list of LinkedIn profiles to test, hoping to quickly find the right one.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 06</summary>

Let's see the first profile on the list:

![Solution to game 06](/img/challenges/sourcing-games/game-2/sourcing-games-2-06-2.png "Solution to game 06")

Luckily, this first profile seems to be the one you are looking for! If this is not the case, you will have to continue searching.

The password to reach the next level is "**petr-davis**".

</details>

## Game 07 - Exploring a document's metadata

### Instructions

THIS IS NOT THE END. ONE MORE URL AND YOU WILL FINISH THE GAME! If you are Mac user, maybe it’s time to call your friends with Windows. They have more experience with Word.

### Objective

The goal of Game 07 is to find a password in a Word document called "one-more-url.docx". Opening the file, you will only see an emoji smiling at you, with no more hints.

### Solution

If there are no clues in the document, perhaps we can find some in its properties. Open the properties of the document and choose the details tab. Here you will find what you are searching for.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 07</summary>

![Solution to game 07](/img/challenges/sourcing-games/game-2/sourcing-games-2-07.png "Solution to game 07")

The password to reach the next level is "**42sourcer**".

</details>

## Congratulations

You just finished your second Sourcing Game! Hope to see you soon on Sourcing Game 3!
