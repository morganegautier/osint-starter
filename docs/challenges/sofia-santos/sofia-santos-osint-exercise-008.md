---
title: "Sofia Santos - OSINT Exercise #008 - Write-up"
description: "Discover how to solve OSINT Exercise #008 by Sofia Santos using web investigation techniques, image searches, and translation tools to uncover hidden details about a Shen Yun event"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercise #008"
---

# Sofia Santos - OSINT Exercise #008 - Write-up

This write-up covers [OSINT Exercise #008 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-008/), which focuses on observation and web searching to uncover hidden information through digital investigation techniques. The challenge is rated as easy-to-medium for beginners and easy for experts.

This walkthrough provides a step-by-step guide to solving the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> The large photo below was taken from a page of the Epoch Times, a Chinese newspaper.
> 
> Please answer the following questions:
> 
> a) What was the audience applauding?
>
> b) When was the photo taken?
>
> c) What is the name of the venue?
>
> ![OSINT Exercise #008](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-1.png "OSINT Exercise #008")

## Investigation

At first, we know that the image was extracted from The Epoch Times, a Chinese newspaper. To understand the title and subtitle, we submit the picture to Google Translate.

![Google Translate](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-2.png "Google Translate")

The main title in the image reads: "「神韻造福全世界」", which translates to "Shen Yun brings blessings to the whole world" in English. The subtitle, "美歐7城同演全爆滿", translates to "Performances in 7 cities across the United States and Europe were all sold out". This headline highlights the global reach and success of Shen Yun Performing Arts, a company that produces performances incorporating dance and symphonic music. Given this context, we can reasonably infer that the audience is applauding a **Shen Yun** performance.

*[As an aside, [Wikipedia](https://en.wikipedia.org/wiki/Shen_Yun) states that Shen Yun is based in New York and affiliated with the Falun Gong movement, a spiritual organization sometimes described as a cult, which partly funds its activities through revenue from these performances. The Epoch Times, which promotes Shen Yun, is a far-right media outlet also linked to Falun Gong. These claims are supported by:*

<em>
- *[Trump, QAnon and an impending judgment day: Behind the Facebook-fueled rise of The Epoch Times](https://www.nbcnews.com/tech/tech-news/trump-qanon-impending-judgment-day-behind-facebook-fueled-rise-epoch-n1044121), an article published on August 20, 2019 on  NBC News;*
- *[Epoch Times, one of Trump's favorite 'news' sources, is linked to Shen Yun](https://www.sfgate.com/politics/article/what-is-Epoch-Times-Falun-Gong-15839640.php), an article published on January 3, 2021 on the media SFGate.]*
</em>

Next, we determine when and where the photo was taken. The newspaper is dated January 12, 2023, suggesting that the performance occurred around that time. To pinpoint the exact date and venue, we consult Shen Yun's official website, which lists upcoming performance dates. Since we need past information, we use [the Wayback Machine](https://web.archive.org/web/20221127233137/https://www.shenyun.com/tickets) to view the ticketing page from late 2022.

![Calendar](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-3.png "Calendar")

Several dates match our timeframe, so we search for images of the associated venues. One theater stands out: Chrysler Hall in Norfolk, Virginia, USA. This venue features the same distinctive geometric ceiling, curved balconies, red seating, and wooden paneling as seen in the newspaper image. According to ticket sale records, performances at this venue took place on January 7 and 8, 2023.

![Google Image](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-4.png "Google Image")

To confirm this, we perform a reverse image search using Google Lens on the newspaper photo. This search leads us to minghui.org, another Falun Gong-affiliated news site, where the image appears with a caption verifying that the Shen Yun performance occurred on **January 7, 2023**, at **Chrysler Hall in Norfolk, Virginia**.

![Newspaper](/img/challenges/sofia-santos/osint-exercise-008/sofia-santos-008-5.png "Newspaper")

## Conclusion

We have determined that the audience in the image was applauding a Shen Yun performance. The event took place on January 7, 2023, at Chrysler Hall in Norfolk, Virginia. By leveraging translation tools, web archives, image searches, and contextual research, we effectively verified the location and timing of the event.

<em>
Used tools:
- Google Translate: Translation of text on image
- [The Wayback Machine](https://web.archive.org/): Web archive consultation
- Google Lens: Reversed image search
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
