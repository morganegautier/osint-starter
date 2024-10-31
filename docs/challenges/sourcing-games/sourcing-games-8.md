---
title: "Sourcing Game 8 - Methods and solutions"
description: ""
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, Sourcing Techniques, Online Research Skills, OSINT]
sidebar_label: "Sourcing Game 8"
---

# Sourcing Game 8 - SourceCon Grandmaster Competition 2017

Here you can find the method and solutions to successfully pass [Sourcing game 8](https://sourcing.games/sourcing-challenge-2017/) which will guide you through the basics of sourcing at an advanced level. This game includes questions from the annual SourceCon Grandmaster Competition 2017. Remember, there isn't just one solution; there are multiple ways to approach the games. The key is to be comfortable with the method you choose.

## Game 01 - Find the name of a GitHub user

### Instructions

I have a GitHub user that I need to track down: https://github.com/waterlee23. What is their real name?

### Objective

The goal of Game 01 is to find the real name of the user associated with the GitHub profile "waterlee23".

### Solution

The link provided for the GitHub user "waterlee23" leads to a 405 page, meaning the profile no longer exists. This could indicate the user deleted their account or changed their username. A Google search for `waterlee23` reveals an old GitHub issue from April 2016, which was opened by [lwtwl23](https://github.com/lwtwl23). It seems `lwtwl23` is the updated username of `waterlee23`.

![Solution to game 01](/img/challenges/sourcing-games/game-8/sourcing-games-8-01-1.png "Solution to game 01")

Visiting `lwtwl23`'s profile reveals the user's real name.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 01</summary>

The real name of "waterlee23" is Wentao Li.

![Solution to game 01](/img/challenges/sourcing-games/game-8/sourcing-games-8-01-2.png "Solution to game 01")

The password to reach the next level is "**wentaoli**".

</details>

## Game 02 - Finding the most requested domains for right to be forgotten

### Instructions

The right to forgotten movement for Google in EU is ongoing. Which domain is the third most requested? 

### Objective

The aim of Game 02 is to identify the 2017 third most requested domain in the EU for delisting under the right to be forgotten.

### Solution

In May 2014, the Court of Justice of the European Union ruled that individuals can request search engines to delist specific results. Google's Transparency Report provides data on the number of requests, the domains frequently requested for delisting, and the volume of URLs associated with these requests.

From the top ten domains section on the [Google Transparency Report](https://transparencyreport.google.com/eu-privacy/overview), we can identify the most commonly requested sites and test which corresponds to the third most requested.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 02</summary>

In 2017, the third most requested domain has been youtube.com for the EU's right to be forgotten requests.

![Solution to game 02](/img/challenges/sourcing-games/game-8/sourcing-games-8-02.png "Solution to game 02")

The password to reach the next level is "**youtube**".

</details>

## Game 03 - Finding the title of the final SourceCon 2007 session

### Instructions

Find the website for the first SourceCon. 
Hint, use the domain thesourcingconference.com. Find the 2007 agenda. What was the title of the final session?

### Objective

The goal of Game 03 is to retrieve the title of the last session on the SourceCon 2007 agenda.

### Solution

The former website for SourceCon, thesourcingconference.com, is no longer active. Using the [Wayback Machine](https://web.archive.org/), we can access an archived snapshot from early 2008, which includes a link to the SourceCon 2007 agenda. Upon viewing the agenda, the title of the final session is listed.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 03</summary>

The title of the final session of the 2007 SourceCon was "Sourcing: Phone vs. Internet".

![Solution to game 03](/img/challenges/sourcing-games/game-8/sourcing-games-8-03.png "Solution to game 03")

The password to reach the next level is "**internet**".

</details>

## Game 05 - Finding a Airbnb reviewer's name

### Instructions

My friend Mikhail recommended me a two-bedroom flat in central London. Sam was an amazing host. Mikhail also recommended this flat to somebody else who stayed there in November 2022, and she was excited.

What was her name? 

### Objective

The aim of Game 05 is to identify the name of the reviewer who stayed in Sam's London flat in November 2022.

### Solution

The description suggests that the listing might be found on Airbnb with reviews visible. Using Google dorking, I entered a search query along with `site:airbnb.com` to limit the results to Airbnb pages, as follows:

`site:airbnb.com two-bedroom flat central London hosted by Sam`

![Solution to game 05](/img/challenges/sourcing-games/game-8/sourcing-games-8-05-1.png "Solution to game 05")

The "A 2-bedroom flat perfect for you in central London" listing is one of the flats hosted by Sam. In the reviews section, we can see that Mikhail posted a review around October 2022. The name of the reviewer from November 2022 should be nearby, providing the answer.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 05</summary>

The reviewer who stayed in Sam’s flat in November 2022 is Rhonda.

![Solution to game 05](/img/challenges/sourcing-games/game-8/sourcing-games-8-05-2.png "Solution to game 05")

![Solution to game 05](/img/challenges/sourcing-games/game-8/sourcing-games-8-05-3.png "Solution to game 05")

The password to reach the next level is "**rhonda**".

</details>

## Game 06 - Discover the job title of the original owner of an old popular blog

### Instructions

The first editor of SourceCon had a blog. XRay the domain of that blog in Google to find the Sweet Sixteen. Click on the list. The top ranking blog in that list was sold a few years ago. Find the original owner’s LinkedIn Profile.

What job title does he have listed under that blog’s name on his LinkedIn page?

### Objective

The aim of Game 06 is to find the job title of the person who originally owned a blog on the "Sweet Sixteen" list of recruiting blogs. The blog has since been sold, and we need to find the LinkedIn profile of its original owner.

### Solution

**Step 1: Identify SourceCon’s first editor**

To locate SourceCon’s first editor, let’s explore SourceCon’s historical content. Since older content can sometimes be hard to access, the [Wayback Machine](https://web.archive.org/) is an excellent resource for viewing archived web pages. In the 2010 SourceCon archives, under the “About” section, there’s a contributor list. Here, it is revealed that Amybeth Hale was the first editor of SourceCon.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-1.png "Solution to game 06")

**Step 2: Locate Amybeth Hale’s blog**

A quick search on Amybeth Hale's LinkedIn profile shows that her blog was called "Research Goddess" and was hosted on the domain `researchgoddess.com`.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-2.png "Solution to game 06")

**Step 3: Find the “Sweet Sixteen” list on Research Goddess**

Since `researchgoddess.com` is no longer live, we’ll again use the Wayback Machine to access snapshots of the blog. In an archived snapshot, there’s a section called "Blogroll - Recruiting", which lists a collection of top recruiting blogs. This section could very well be the “Sweet Sixteen” list that we’re looking for.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-3.png "Solution to game 06")

**Step 4: Identify the top-ranking blog**

Going through the blogs on this list, one stands out: "The Recruiters Lounge", which was widely recognized in the recruitment community. With some additional research, we learn that this blog was founded by Jim Stroud and was later sold to a company in the HR space in 2014.

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-4.png "Solution to game 06")

**Step 5: Locate Jim Stroud’s LinkedIn profile and confirm the job title**

Now that we know Jim Stroud is the original creator of The Recruiters Lounge, we can find his LinkedIn profile. Under his profile, he lists his title associated with The Recruiters Lounge.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 06</summary>

Jim Stroud’s LinkedIn title associated with The Recruiters Lounge is "entrepreneur".

![Solution to game 06](/img/challenges/sourcing-games/game-8/sourcing-games-8-06-5.png "Solution to game 06")

The password to reach the next level is "**entrepreneur**".

</details>

## Congratulations

You just finished your eighth Sourcing Game! Hope to see you soon on Sourcing Game 9!
