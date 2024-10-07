---
title: ""
description: ""
image: /img/challenges/sourcing-games/sourcing-games.png
keywords: [Sourcing Games, Sourcing Techniques, Online Research Skills, OSINT]
sidebar_label: "Sourcing Game 7"
---

# Sourcing Game 7 - Sourcing game focus on IT field

Here you can find the method and solutions to successfully pass [Sourcing game 7](https://sourcing.games/game-7/) which will guide you through the basics of sourcing at an advanced level. Remember, there isn't just one solution; there are multiple ways to approach the games. The key is to be comfortable with the method you choose.

## Game 01 - Find a GitHub ID

### Instructions

What is the GitHub ID for this GitHub profile?

### Objective

The goal of Game 01 is to find the GitHub ID associated with a particular GitHub profile.

### Solution

On GitHub, the simplest way to find a user's ID is to go to their profile page and click on their avatar (profile picture). Once clicked, the URL will reveal the GitHub user's ID. Alternatively, you can inspect the page source to find the ID if needed.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 01</summary>

![Solution to game 01](/img/challenges/sourcing-games/game-7/sourcing-games-7-01.png "Solution to game 01")

The password to reach the next level is "**2300056**".

</details>

## Game 02 - Finding a valid URL

### Instructions

Sourcing requires time when searching for an answer, and there are many ways to get the answer you are looking for.

One is the hard way (you will see what I mean by that), and the other is the clever way.

I am not using word “the easy way” because, in sourcing, there is no easy way. You only have luck. Choose your way or try your luck!

### Objective

The objective of Game 02 is to find one valid URL out of a list of three hundred.

### Solution

Instead of manually checking each URL one by one until you accidentally come across the right one, let's take the smart approach and automate the task using Google Sheets and Google Apps Script.

**1. Create a new Google Sheet**: Open a new Google Sheets file and paste your list of URLs in the first column.

**2. Write a script**: Create a script that will check each URL's status. The most common HTTP status codes are:

- **200** for success
- **301** for a permanent redirect
- **404** for page not found

To create this script, choose Apps Script in the Extensions menu of your Google Sheets. Here is the adapted script based on a tutorial from the [No Fluff Digital site](https://nofluffdigital.com/blog/seo/google-app-scripts-url-checker/):

```
function CheckURL(url){

  var options = {
    
    'muteHttpExceptions': true,

    'followRedirects': true

  };

  var response = UrlFetchApp.fetch(url, options);

  return response.getResponseCode();

}
```

**3. Deploy the script**: Save your script and deploy it by choosing New deployment and selecting your library.

**4. Check URL status**: Go back to your Google Sheets and create a second column to store the URL status codes, calling your custom CheckURL() function.

![CheckURL()](/img/challenges/sourcing-games/game-7/sourcing-games-7-02-1.png "CheckURL()")

**5. Analyze results**: After running the script, you will see 299 URLs return a 404 status, and one URL will return a 200 status, indicating success. Now all you have to do is to check this URL in your browser to confirm.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 02</summary>

![Valid URL](/img/challenges/sourcing-games/game-7/sourcing-games-7-02-2.png "Valid URL")

The valid URL found is: `url.inovace.eu/vkeb6uz6.html`

![Solution to game 02](/img/challenges/sourcing-games/game-7/sourcing-games-7-02-3.png "Solution to game 02")

The password to reach the next level is "**solution47**".

</details>

## Game 03 - Cracking an MD5 hash

### Instructions

9cfa7aefcc61936b70aaec6729329eda

This was originally designed for use as a secure cryptographic hash algorithm for authenticating digital signatures.

Do not kill the hash yet! Find the password and use it for the next level.

### Objective

The goal of Game 03 is to decrypt the MD5 hash provided and find the password.

### Solution

The string "9cfa7aefcc61936b70aaec6729329eda" is an MD5 hash, which is a 32-character hexadecimal number generated to authenticate digital signatures. MD5, although widely used for data integrity checks, can be reversed easily with modern techniques because it’s not secure for encryption purposes.

There are many websites offering MD5 reverse lookup using large databases. A tool like [Hashes](https://hashes.com/en/decrypt/hash) can help us crack this hash.

By submitting the given hash into the tool, we can retrieve the original string that was hashed.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 03</summary>

The MD5 hash "9cfa7aefcc61936b70aaec6729329eda" is decrypted to the word "games".

![Solution to game 03](/img/challenges/sourcing-games/game-7/sourcing-games-7-03.png "Solution to game 03")

The password to reach the next level is "**games**".

</details>

## Game 04 - Finding the most common LinkedIn passwords

### Instructions

LinkedIn is growing every year, and it has had many bright moments in its history.

However, 2012 was not the best time for LinkedIn. If you do not know why, just Google it.

The password for your next level is the eighth most common LinkedIn password.

### Objective

The objective of Game 04 is to find the eighth most common LinkedIn password from the 2012 data breach.

### Solution

First, let's Google `LinkedIn 2012` to understand what happened. According to Wikipedia, the 2012 LinkedIn hack resulted in passwords for around 6.5 million user accounts being stolen. To find the eighth most common password from this data breach, we search `2012 LinkedIn hack most common passwords`.

The Statista page titled "Most common passwords unscrambled from the 2012 LinkedIn dataset" provides a list of the most frequent LinkedIn passwords leaked in 2012. By checking this list, we can identify the eighth most common password.

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 04</summary>

The eighth most common password from the 2012 LinkedIn breach is "sunshine".

![Solution to game 04](/img/challenges/sourcing-games/game-7/sourcing-games-7-04.png "Solution to game 04")

The password to reach the next level is "**sunshine**".

</details>

## Game 05 - Finding a freelancer

### Instructions

One of my favorite global crowdsourcing marketplaces is the place where I need to find a freelancer who works as a network engineer, but he should have also experience with servers.

With his fifteen-plus years of experience, he is the right person for my next project. He should live in Norwich, and he became a member in February 2017.

His account name is the password for the next level.

### Objective

The goal of Game 05 is to find the account name of a freelancer matching the description.

### Solution

While it exists plenty of freelance marketplaces, let's use Goolge dork to find our freelancer. After a bit of fumbling around, I came across this query that leads us straight to a profile that might fit the requirements: 

`freelance AND (network engineer OR server) AND Norwich United Kingdom AND February 2017`

![Solution to game 05](/img/challenges/sourcing-games/game-7/sourcing-games-7-05-1.png "Solution to game 05")

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 05</summary>

Lawrence G.'s account name is lawrence37.

![Solution to game 05](/img/challenges/sourcing-games/game-7/sourcing-games-7-05-2.png "Solution to game 05")

The password to reach the next level is "**lawrence37**".

</details>

## Game 06 - Finding an Airbnb host

### Instructions

Last year I booked a room in San Francisco. I know that my host joined Airbnb in April 2012 and he/she is an outdoor enthusiast from Austin.

What is their first name?

### Objective

The objective of Game 06 is to find the first name of the Airbnb host.

### Solution

Using Google dorking, I entered the following search query and add `site:airbnb.com` to limit the search results to Airbnb only:

`site:airbnb.com San Francisco "enthusiast from Austin"`

This led to a result that fit the description.

![Solution to game 06](/img/challenges/sourcing-games/game-7/sourcing-games-7-06-1.png "Solution to game 06")

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 06</summary>

This Airbnb is hosted by Adam.

![Solution to game 06](/img/challenges/sourcing-games/game-7/sourcing-games-7-06-2.png "Solution to game 06")

The password to reach the next level is "**adam**".

</details>

## Game 07 - Finding a profil on Stack Overflow

### Instructions

I am looking for a developer from France. He/She joined stack overflow some time ago, and he is doing “…. image processing.”

I cannot remember what type of image processing, but he/she sent me the image below.

The seven numbers from his/hers URL of the StackOverflow profile is the key.

### Objective

The objective of Game 07 is to find the seven-digit user number from the Stack Overflow profile of a developer.

### Solution

Using Google dorking, I entered the following search query and add `site:stackoverflow.com` to limit the search results to Stack Overflow only:

`site:stackoverflow.com developer "image processing" France`

First result seems to fit the description.

![Solution to game 07](/img/challenges/sourcing-games/game-7/sourcing-games-7-07-1.png "Solution to game 07")

By expanding the solution section below, you will see the password:

<details>
<summary>Solution to game 07</summary>

he developer's username is Gwen, and her user number is "6093326".s

![Solution to game 07](/img/challenges/sourcing-games/game-7/sourcing-games-7-07-2.png "Solution to game 07")

The password to reach the next level is "**6093326**".

</details>

## Congratulations

You just finished your seventh Sourcing Game! Hope to see you soon on Sourcing Game 8!
