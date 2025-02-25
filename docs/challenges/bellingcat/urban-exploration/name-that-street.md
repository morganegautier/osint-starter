---
title: "Bellingcat - Urban Exploration - Name that street! - Write-up"
description: "Discover how to solve Bellingcat’s “Name That Street!” OSINT challenge with step-by-step geolocation techniques, image analysis, and Google Maps investigation."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Name that street!"
---

# Bellingcat - Urban Exploration - Name that street! - Write-up

This write-up covers the Urban Exploration - Name that street! puzzle by [Bellingcat](https://challenge.bellingcat.com/), a geolocation challenge requiring participants to determine the coordinates of a location depicted in a picture. The puzzle was created by [Kolina Koltai, Bellingcat](https://www.bellingcat.com/author/kolinakoltai/).

This guide provides a step-by-step solution to the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> Time to explore the city!
>
> There are plenty of areas to walk in cities around the world, and this street is one of them.
>
> But where is it?
>
> What is the name of this street?
>
> ![Name that street!](/img/challenges/bellingcat/urban-exploration/name-that-street-1.png "Name that street!")

## Investigation

### Image analysis

Let's begin by examining the provided image. The image captures a European urban street, likely in Germany, based on architectural styles, signage, and vehicle license plates displaying a "D" country code. The buildings exhibit a mix of modern and historic designs, with a mansard-roofed structure on the right and contemporary glass-and-concrete facades on the left. A row of parked cars lines the street, including premium German brands like BMW and Mercedes.

Key visual elements include a "P" parking sign, a wooden fence with graffiti on the right, and a bar or restaurant with a beer sign. These details suggest a commercial area with ongoing construction or renovation.

### Vehicle registration plates analysis

German vehicle registration plates begin with a one-to-three-letter code indicating the city or district where the vehicle was registered (e.g., "F" for Frankfurt, "B" for Berlin, "M" for Munich). This is followed by a sticker for technical inspection (TÜV) and a unique combination of letters and numbers. Identifying the area code on a plate can help determine the vehicle's origin and potentially provide clues about the location of the image.

On the provided image, five registration plates are perfectly readable. Let's list their area codes and see if we can deduce a more precise location from this. For this, I refer to the [list of German area codes on Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Germany#List_of_area_codes).

| Area code | City / rural district                       | State |
|-----------|---------------------------------------------|-------|
| OF        | Offenbach District / Offenbach am Main City | Hesse |
| WI (x2)   | Wiesbaden City                              | Hesse |
| HG        | Hochtaunus District                         | Hesse |
| GG        | Groß-Gerau District                         | Hesse |

This analysis of the area codes tells us a lot; we now have good reasons to believe that the street we are looking for is in the Hesse region, and more particularly in the south, certainly around Frankfurt.

![Google Maps area](/img/challenges/bellingcat/urban-exploration/name-that-street-2.png "Google Maps area")

### Google Maps geolocation

Now all we have to do is find the street in question by relying on the names of the signs visible in the photo and targeting the search on the Frankfurt region. JP STOFFE, which is perfectly readable, is a fabric brand present in three German cities, including Frankfurt.

![Google Maps area](/img/challenges/bellingcat/urban-exploration/name-that-street-3.png "Google Maps area")

The aerial view of the street appears to match the description given, including the construction zone, the building with the small dome, and the parking space perpendicular to the street. Let's confirm our intuition with Google Street View.

![Google Street View](/img/challenges/bellingcat/urban-exploration/name-that-street-4.png "Google Street View")

The identified street is **Stiftstraße** 26 in Frankfurt am Main, Germany. This conclusion is supported by multiple matching elements, including the architecture, street layout, and key visual indicators like the double-lamp streetlight and blue "P" parking sign. The construction fence with graffiti and the presence of high-end German vehicles further validate the findings. Together, these details confirm that both images depict the same location from slightly different perspectives at different points in time.

## Conclusion

Using OSINT techniques, we have successfully identified the street as **Stiftstraße** in Frankfurt am Main, Germany.

<em>
Used tools:
- Wikipedia: For German vehicle registration area codes
- Google Maps: Geolocation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
