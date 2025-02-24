---
title: "Bellingcat - Natural Wonders - Up The Creek - Write-up"
description: "A step-by-step OSINT investigation solving Bellingcat's Up The Creek challenge, using image analysis, reverse search, and Google Maps to geolocate an oxbow-lake river."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Up The Creek"
---

# Bellingcat - Natural Wonders - Up The Creek - Write-up

This write-up covers the Natural Wonders - Up The Creek puzzle by [Bellingcat](https://challenge.bellingcat.com/), a geolocation challenge requiring participants to determine the coordinates of a location depicted in an aerial image. The puzzle was created by [Kolina Koltai, Bellingcat](https://www.bellingcat.com/author/kolinakoltai/).

This guide provides a step-by-step solution to the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> That's a meandering river!
>
> Gazing out of an airplane window gives you a unique perspective on the world. In this case, it's a view of a meandering river!
>
> Different aircraft fly at different altitudes, but this small plane was high enough to capture the river's winding path.
>
> What is the name of the river in the photograph? (don't include "River" in your answer)
>
> ![Up the creek](/img/challenges/bellingcat/natural-wonders/up-the-creek-1.png "Up the creek")

## Investigation

### Images analysis

Let's begin by examining the provided image. It showcases an aerial view of a rural landscape dominated by a winding river. The river forms multiple sharp bends, creating oxbow-like curves indicative of a slow-moving waterway. The surrounding landscape consists of cultivated farmland, green fields, scattered farm buildings, and small settlements connected by narrow roads.

A distinct white bridge spans the river at one of its bends, serving as a key landmark. To the right, a dense forest contrasts with the open fields, while in the distance, a suburban area and a mountain range are visible, partially obscured by haze. These geographical elements can aid in pinpointing the location.

### Reverse image search

Identifying the geographical area from the map alone is challenging, so to simplify the identification process, let's perform a reverse image search using Google Lens.

![Google Lens](/img/challenges/bellingcat/natural-wonders/up-the-creek-2.png "Google Lens")

Among the results, one image in particular caught my attention: the one illustrating an article entitled "[Advocacy Update: Fish, Farm, Flood 2.0](https://www.snovalleytilth.org/advocacy-update-fish-farm-flood-2-0/)" published on the site snovalleytilth.org. The article explains the Fish, Farm, Flood (FFF) process, a King County initiative aimed at balancing fish habitat restoration, agricultural land stewardship, and flood management. It outlines the roles of the Implementation Committee and three Task Forces working on regulatory reform, agricultural buffer strategies, and long-term agricultural planning in the Snoqualmie Valley.

![Snoqualmie Valley](/img/challenges/bellingcat/natural-wonders/up-the-creek-3.png "Snoqualmie Valley")

This image closely corresponds to the challenge one as both seem to depict the same rural landscape featuring a winding river, agricultural fields, and a white bridge. The key similarities include the distinctive S-shaped curves of the river, the neatly divided farmland plots, and the surrounding forests and open fields. The white bridge in the second image is a crucial landmark, which is also visible in the first image, reinforcing that they showcase the same location. According to the article, the photo corresponds to the Snoqualmie Valley and represents the Snoqualmie River.

### Google Maps verification

Let's confirm this assumption by checking the location on Google Maps. The Snoqualmie River is a 45-mile (72 km) long river in King County and Snohomish County in the U.S. state of Washington. The search for the particular oxbow lake shape takes me near the town of Novelty. I choose to use Globe mode to have a 3D view and get closer to the shooting conditions.

![Snoqualmie River](/img/challenges/bellingcat/natural-wonders/up-the-creek-4.png "Snoqualmie River")

This satellite image from Google Maps corresponds to the first aerial image based on several key geographical features. The most distinct similarity is the meandering river, which follows the same sinuous path with multiple oxbow-like curves. The agricultural plots in the lower right of the satellite image match the structured farmland visible in the first image. Additionally, the white bridge seen in the first image is also present in this map, spanning the river at one of its bends near NE 124th St in the area labeled "Novelty." The surrounding mix of forested areas, open fields, and rural settlements further confirms that both images depict the same section of the Snoqualmie River Valley in Washington, USA.

## Conclusion

The river depicted in this challenge is the **Snoqualmie River**, in the state of Washington, United States, and the coordinates of the picture are approximately 47°42'55.1"N 121°59'48.0"W.

<em>
Used tools:
- Google Lens: Reverse image search
- Google Maps: Geolocation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
