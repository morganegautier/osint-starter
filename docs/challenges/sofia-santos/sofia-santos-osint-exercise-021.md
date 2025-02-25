---
title: "Sofia Santos - OSINT Exercise #021 - Write-up"
description: "A detailed guide to solving OSINT Exercise #021 by Sofia Santos, focusing on geolocation techniques."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Geolocation, OSINT]
sidebar_label: "OSINT Exercise #021"
---

# Sofia Santos - OSINT Exercise #021 - Write-up

This write-up covers [OSINT Exercise #021 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-021/), a geolocation challenge aimed at determining the exact coordinates of a location depicted on a map. The challenge is rated easy, making it suitable for both beginners and experts.

This walkthrough provides a step-by-step guide to solving the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> Maps can appear in the most unusual places. The figure below contains a chocolate bar featuring a map. Next to it you will find the satellite view of the same location.
>
> Your task is to:
>
> a) Find the coordinates of the location seen in both images.
>
> ![OSINT Exercise #021](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-1.png "OSINT Exercise #021")

## Investigation

### Image analysis

Let's begin by analyzing the two provided images. The first image shows a chocolate bar with a map printed on it, along with a logo that reads "Do it right." The second image is a satellite view of the same location depicted on the chocolate bar. The area appears rural, with a small cluster of buildings surrounded by fields and wooded areas. A meandering stream and a road are also visible.

### Reverse image search

Identifying the geographical area from the map alone is challenging, but the logo on the chocolate bar offers a clue. A reverse image search using Google Lens provides relevant information.

![Google Lens Search](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-2.png "Google Lens Search")

The search results indicate that the chocolate bar is from Puchero, a brand specializing in specialty coffee and craft chocolate sourced from small-scale producers worldwide.

### Website analysis

Navigating to the [Puchero website](https://somospuchero.com/en/category-product/chocolate-en/bars/), we find that the same map appears on multiple chocolate bars. This suggests that the map might represent or Puchero's factory or headquarters.

![Website analysis](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-3.png "Website analysis")

Upon further investigation, the "Contact" section of the website lists Puchero’s headquarters as:

`Carretera N-601 Km-155, 47238 Hornillos de Eresma, Valladolid, Spain`

A search for this address on Google Maps reveals a location matching the satellite view from the challenge but from a 180° angle.

The area consists of fields and wooded regions, with the same winding stream and intersecting road.

![Google Maps](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-4.png "Google Maps")

![OSINT Exercise #021](/img/challenges/sofia-santos/osint-exercise-021/sofia-santos-021-5.png "OSINT Exercise #021")

Another confirming clue is that some of Puchero's chocolate bars are made with products from the Tierra de Pinares region in Castilla y León, Spain, which is uncommon for chocolate production.

## Conclusion

The map featured on the chocolate bar represents a part of Tierra de Pinares, a natural region near Valladolid in the autonomous community of Castilla y León, Spain. The coordinates of the location seen in both images are approximately **41°21'09.9"N 4°41'24.1"W**, or in decimal writing **41.352757, -4.690017**.

<em>
Used tools:
- Google Lens: Reversed image search
- Google Maps: Geolocation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
