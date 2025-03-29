---
title: "Sofia Santos - OSINT Exercise #006 - Write-up"
description: "Discover how to verify viral images using OSINT techniques in this step-by-step analysis. Learn how to conduct a reverse image search, use archived sources, and debunk misinformation effectively."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Fact Checking, OSINT]
sidebar_label: "OSINT Exercise #006"
---

# Sofia Santos - OSINT Exercise #006 - Write-up

This write-up covers [OSINT Exercise #006 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-006/), a fact-checking challenge focused on verifying the true origin of a photo shared in a tweet. The challenge is rated easy, making it suitable for both beginners and experts.

This walkthrough provides a step-by-step guide to solving the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> On January 19, 2023, a journalist with almost 140k followers on Twitter shared an image of a destroyed vehicle amidst a large cloud of smoke and fire. The tweet said: “BREAKING: TTP carried out a suicide attack on a police post in Khyber city of Pakistan that killed three Pakistani police officers.“
>
> The photo is not of the event described by the journalist.
>
> a) Verify the statement above.
>
> ![OSINT Exercise #006](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-1.png "OSINT Exercise #006")

## Investigation

Before beginning our research, let's analyze the tweet and the shared picture. The tweet, posted on January 19, 2023, claims that the image shows the aftermath of a terrorist attack by Tehreek-e-Taliban Pakistan (TTP) in Khyber, Pakistan. The photo displays the remains of a burning vehicle that appears to have exploded on a street. Our goal is to verify whether this image truly corresponds to the described event.

### Reverse image search

To find the original source of the image, we perform a reverse image search using Google Lens.

![Google Lens Search](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-2.png "Google Lens Search")

The search results return multiple matching images, and I choose to investigate the Wikipedia source, which typically provides reliable details about an image's origin.

### Identifying the original source

The search leads us to a [Wikipedia page](https://en.m.wikipedia.org/wiki/File:WaziriyaAutobombeIrak.jpg) that provides key details about the image. According to this page, the photo was taken on August 27, 2006, by U.S. Navy photographer Eli J. Medellin. The image is described as follows:

> "A Vehicle Born Improvised Explosive Device (VBIED) after exploding on a street outside of the Al Sabah newspaper office in the Waziriya district of Baghdad, Iraq. The VBIED destroyed more than 20 cars, killing two people and wounding as many as 30."

![Wikipedia Source](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-3.png "Wikipedia Source")

### Confirming with archived sources

The original source of the image was also linked on the U.S. Navy website. However, the link is now inactive. To verify the claim, we use [The Wayback Machine](https://web.archive.org/web/20160304200237/http://www.navy.mil/view_image.asp?id=38460), which has archived the page. Although only one capture exists from March 2016, it confirms the authenticity and original context of the image.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-006/sofia-santos-006-4.png "Wayback Machine")

## Conclusion

Our investigation confirms that the image shared in the tweet is not from the alleged terrorist attack in Khyber, Pakistan, in 2023. Instead, it originates from a 2006 VBIED attack in Baghdad, Iraq. This demonstrates the importance of verifying viral images before sharing them, as misinformation can easily spread.

<em>
Used tools:
- Google Lens: Reversed image search
- [The Wayback Machine](https://web.archive.org/): Web archive consultation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
