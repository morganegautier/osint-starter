---
title: "Sofia Santos - OSINT Exercise #023 - Write-up"
description: "Step-by-step OSINT guide to solving Exercise #023 by Sofia Santos. Learn search techniques, image analysis, and digital investigation methods. Ideal for OSINT beginners."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercise #023"
---

# Sofia Santos - OSINT Exercise #023 - Write-up

This write-up covers [OSINT Exercise #023 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-023/), a observation and web searching aimed at finding hidden information through digital investigation techniques. The challenge is rated easy, making it accessible for both beginners and experienced OSINT practitioners.

This walkthrough provides a step-by-step guide to solving the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches—what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> Sometimes online footage contains more information than meets the eye. In October 2023, I uploaded a video to my YouTube channel where, for a split second between minute 3 and 4, my desktop wallpaper is partially visible.
>
> Your task is to:
>
> a) Find the title of the illustration, as given by the artist.
> 
> b) Find how much it would cost for the artist to create a similar piece, in size and detail.

## Investigation

### Identifying the video

The first step is to locate the relevant video on [Sofia Santos' Youtube channel](https://www.youtube.com/@gralhix/videos). Manually searching for the video could be laborious, so we will use YouTube search operators to find videos published in October 2023. We will combine the `before:` and `after:` operators to narrow down the search to videos published within a specific date range:

`after:2023-10-01 before:2023-10-31`

Luckily, only one video was published on Sofia Santos' channel in October 2023, which simplifies our task.

![Youtube video](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-1.png "Youtube video")

The video to analyze is titled: `Filetype: The Best Advanced Search Operator for OSINT Investigations?`, how convenient.

### Extracting the illustration

Identifying the partially visible desktop wallpaper requires careful observation. By reducing the YouTube playback speed to 0.25 and examining frames between minutes 3 and 4, we can spot the illustration at minute 3:38.

![Illustration](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-2.png "Illustration")

A screenshot of the illustration allows us to perform a reverse image search using Google Lens.

![Google Lens](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-3.png "Google Lens")

The search results confirm that the illustration was created by Adam Scythe and is titled **Involuntary Rat Queen**.

![Devian Art](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-4.png "Devian Art")

### Determining the cost of a similar illustration

To find the cost of a similar illustration, we continue exploring DeviantArt, a platform where artists showcase and sell their work. On Adam Scythe’s profile, we locate a post titled "[New Commission Info](https://www.deviantart.com/adamscythe/journal/New-Commission-Info-1121665072)", detailing pricing for custom artwork. The type of illustration we are looking for falls under "Complete Illustration A" (character plus background), which starts at $190, depending on complexity. The Involuntary Rat Queen illustration is listed as an example within this price range.

![Devian Art](/img/challenges/sofia-santos/osint-exercise-023/sofia-santos-023-5.png "Devian Art")

## Conclusion

The wallpaper illustration is titled **Involuntary Rat Queen** by Adam Scythe, and a similar piece would cost around **$190**.

<em>
Used tools:
- Youtube search operators
- Google Lens: Reversed image search
</em>

---

Thanks for reading this write-up! Stay tuned for the next one.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
