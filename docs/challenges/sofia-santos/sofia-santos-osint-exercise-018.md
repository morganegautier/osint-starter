---
title: "Sofia Santos - OSINT Exercise #018 - Write-up"
description: "Step-by-step OSINT investigation of Queen Elizabeth II’s 1953 coronation route, using web research and mapping tools to verify distance, speed, and historical details"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercise #018"
---

# Sofia Santos - OSINT Exercise #018 - Write-up

This write-up covers [OSINT Exercise #018 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-018/), wa challenge centered on web searching and observational skills to uncover historical details through digital investigation. The challenge is rated as easy-to-medium for beginners and easy for experts.

This walkthrough provides a step-by-step guide to solving the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> In May 2023, the world witnessed the coronation of King Charles III at Westminster Abbey in London. Following the ceremony, and similarly to the previous regent, the monarch travelled through the city in a lavish carriage. The route of the 2023 royal procession differed from that of 1953.
> 
> Your task is to:
> 
> a) Identify from which exact door Queen Elizabeth II left Westminster Abbey after her coronation.
>
> b) Measure the distance travelled by the Queen’s carriage, following the 1953 coronation.
>
> c) Estimate the average speed at which the Queen’s carriage travelled.

## Investigation

### Exit door used by Queen Elizabeth II

I began by researching the coronation of Queen Elizabeth II using a simple query: "Queen Elizabeth II coronation Westminster Abbey exit door". One of the first sources consulted was the [Wikipedia page on her coronation](https://en.wikipedia.org/wiki/Coronation_of_Elizabeth_II), which states:

> Now wearing the Imperial State Crown and holding the Sceptre with the Cross and the Orb, and as the gathered guests sang "God Save the Queen", Elizabeth left Westminster Abbey through the nave and apse, out the Great West Door.

![Wikipedia](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-1.png "Wikipedia")

To cross-reference this information, I consulted [The Gazette](https://www.thegazette.co.uk/awards-and-accreditation/content/103597), an official UK publication:

> Elizabeth II, wearing the Imperial Crown and holding the Sceptre with the Cross and the Orb, left Westminster Abbey “through the Choir and the Nave to the West Door of the Church […] whilst all assembled sang the National Anthem.”

![The Gazette](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-2.png "The Gazette")

Finally, I reviewed [BBC archival footage](https://youtu.be/52NTjasbmgw?si=-jQE5VdrWOLwNsjU&t=10414) of the 1953 coronation, available on the Youtube channel of the Archive of Recorded Church Music. At 2:53:34, Queen Elizabeth II is seen leaving via the nave, exiting the Great West Door at 2:53:54.

We can now confirm that after her coronation, Queen Elizabeth II exited Westminster Abbey via the **Great West Door**, the same door of her arrival.

### Distance travelled by the carriage

The [official Royal Family website](https://www.royal.uk/queen-elizabeth-iis-accession-and-coronation) provides the following details:

> A Coronation procession took place through London after the service, designed so that The Queen and her procession could be seen by as many people as possible. The 7.2 kilometre route took the 16,000 participants two hours to complete.

![Map](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-3.jpg "Map")

To verify this distance, I used the [ArcGIS Map Viewer](https://www.arcgis.com/apps/mapviewer/index.html) to measure the route based on the official 1953 procession map (Catalogue Ref: PC 22/11) from the [UK National Archives](https://www.nationalarchives.gov.uk/).

![Arcgis Map](/img/challenges/sofia-santos/osint-exercise-018/sofia-santos-018-4.png "Arcgis Map")

Our measured distance is approximately **8.21 km**, slightly longer than the officially stated 7.2 km.

### Estimating the average speed of the procession

Although exact timestamps of departure and arrival are not readily available, the official programme suggests the royal carriage left Westminster Abbey at 2:50 PM and arrived at Buckingham Palace at 4:30 PM, a journey of 100 minutes.

Using the measured distance of 8.21 km, we calculate the average speed:

Convert time to hours:
```
100 minutes = 1.67 hours
```

Use the formula: `Speed = Distance ÷ Time`

```
Speed = 8.21 km ÷ 1.67 h ≈ 4.93 km/h
```

The estimated average speed of the carriage is approximately **4.93 km/h**.

## Conclusion

This investigation highlights the value of combining open-source research with historical records and digital mapping tools. By verifying multiple sources and cross-referencing data, we confirmed Queen Elizabeth II exited through the Great West Door, measured the 1953 coronation procession route at approximately 8.21 km, and estimated the average carriage speed at around 4.93 km/h. The exercise demonstrates the effectiveness of OSINT techniques in solving historically rooted challenges.

<em>
Used tools:
- [Arcgis](https://www.arcgis.com/apps/mapviewer/index.html): distance measurement tool on a map
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
