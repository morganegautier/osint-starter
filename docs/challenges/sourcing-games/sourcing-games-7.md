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

## Congratulations

You just finished your seventh Sourcing Game! Hope to see you soon on Sourcing Game 8!
