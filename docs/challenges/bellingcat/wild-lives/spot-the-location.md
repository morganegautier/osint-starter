---
title: "Bellingcat - Wild Lives - Spot the Location - Write-up"
description: "Step-by-step OSINT solution for Bellingcat’s Wild Lives - Spot the Location challenge, identifying giraffes' species and their country of origin through image analysis"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Web Searching, OSINT]
sidebar_label: "Spot the Location"
position: 1
---

# Bellingcat - Wild Lives - Spot the Location - Write-up

This write-up covers the Wild Lives - Spot the Location puzzle by [Bellingcat](https://challenge.bellingcat.com/), aa web searching challenge that tests participants' OSINT skills. The puzzle was created by [Foeke Postma, Bellingcat](https://www.bellingcat.com/author/foekepostma/).

This guide provides a step-by-step solution to the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> It's a tall order!
>
> Did you know the spots on a Giraffe are used to regulate their body heat?
>
> Giraffes can be found all throughout sub-Saharan Africa, but what about this species...
>
> At first ei-ffel for the edit, it drove me in-Seine
>
> In which country were the giraffes in this image most likely photographed?
>
> ![Spot the Location](/img/challenges/bellingcat/wild-lives/spot-the-location-1.jpg "Spot the Location")

## Investigation

### Image analysis

In the image, two giraffes are standing prominently in the foreground. Behind them, the Eiffel Tower is clearly visible, suggesting the image was edited or composed digitally. For this challenge, however, the background can be ignored, and our attention should focus on the giraffes themselves, particularly their coat patterns, which are distinctive and could help identify the species.

The giraffes' coat coloration is relatively light, featuring sharply defined, irregular brown patches separated by creamy white lines. This specific coat pattern will be an important clue for narrowing down their species.

### Keyword search

To identify the giraffe species, I conducted a Google search using the keywords "giraffe species". The search results revealed that there are several different species and subspecies of giraffes.

![Google Search](/img/challenges/bellingcat/wild-lives/spot-the-location-2.png "Google Search")

An article from Conservation Mag titled "[The Different Giraffe in Africa](https://conservationmag.org/en/wildlife/the-different-giraffe-in-africa)" caught my attention. The article provides detailed information about the different giraffe species and their coat patterns. It includes an image comparing the patterns across species.

Based on the description we observed earlier — sharply defined, irregular brown patches with creamy white separation — the giraffes in our image most closely match Thornicroft’s giraffe.

![Giraffes coat pattern](/img/challenges/bellingcat/wild-lives/spot-the-location-3.png "Giraffes coat pattern")

Accordind to its [Wikipedia page](https://en.wikipedia.org/wiki/Thornicroft%27s_giraffe):

> Thornicroft's giraffe (Giraffa camelopardalis thornicrofti), also known as the Rhodesian giraffe or Luangwa giraffe, is a subspecies of giraffe. It is sometimes considered a species in its own right (as Giraffa thornicrofti) or a subspecies of the Masai giraffe (as Giraffa tippelskirchi thornicrofti).It is geographically isolated, occurring only in Zambia’s South Luangwa Valley. An estimated 550 live in the wild, with no captive populations.

![Wikipedia](/img/challenges/bellingcat/wild-lives/spot-the-location-4.png "Wikipedia")

Thus, Thornicroft’s giraffes are an endemic species found exclusively in **Zambia**.

## Conclusion

Even though the Eiffel Tower suggests Paris, France, the species of giraffe pictured, based on their coat patterns, leads us to Zambia. The giraffes shown in the image are most likely Thornicroft’s giraffes, which are native only to Zambia’s South Luangwa Valley.

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
