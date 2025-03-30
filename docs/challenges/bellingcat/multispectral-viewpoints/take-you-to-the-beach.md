---
title: "Bellingcat - Multispectral Viewpoints - Take You to the Beach - Write-up"
description: "Discover how to solve Bellingcat's 'Take You to the Beach' OSINT challenge using satellite imagery, reverse image search, and geolocation techniques to identify an aerial image"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Take You to the Beach"
position: 1
---

# Bellingcat - Multispectral Viewpoints - Take You to the Beach - Write-up

This write-up covers the Multispectral Viewpoints - Take You to the Beach puzzle by [Bellingcat](https://challenge.bellingcat.com/), a geolocation challenge requiring participants to determine the name of a location depicted in an aerial image. The puzzle was created by [Galen Reich, Bellingcat](https://www.bellingcat.com/author/galenreich/).

This guide provides a step-by-step solution to the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> What a lot of water!
>
> This image was captured by Landsat 8, a satellite that orbits the Earth every 99 minutes.
>
> It captures images in multiple bands of the electromagnetic spectrum. Here, you just see the visible light bands, which are the ones that are most similar to what the human eye sees.
>
> But where was Landsat-8 looking when it captured this image?
>
> What is the name of the archipelago in this image?
>
> ![Take You to the Beach](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-1.jpg "Take You to the Beach")

## Investigation

### Image analysis

The provided image is a satellite view showing an island encircled by a coral barrier reef. The landmass features green vegetation, lighter patches indicating urban or barren areas, and small islets forming a lagoon. The combination of tropical vegetation, a coral reef system, and a lagoon suggests that the island may belong to an atoll or volcanic island group located in the Pacific or Indian Ocean.

### Keyword search

Based on the image analysis, a targeted Google search is the next step. Instead of starting with a reverse image search, which will be used later for confirmation, I begin by searching for "*archipelago with lagoon*". Among the results, I find a relevant article about Mayotte’s lagoon on the [Nasa Earth Observatory](https://earthobservatory.nasa.gov/images/151046/mayottes-lagoon). The satellite image in the article closely resembles the image in the challenge.

![Nasa](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-2.png "Nasa")

### Reverse image search

To verify the identification, I conduct a reverse image search using Google Lens. The results confirm a strong visual similarity between the challenge image and known satellite images of Mayotte.

![Google Lens](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-3.png "Google Lens")

### Google Maps verification

Cross-referencing with Google Maps, the satellite view of Mayotte closely matches the challenge image. The curved barrier reef along the southern edge, the shape of the landmass, and the topography all align perfectly. This confirms that the archipelago in question is **Mayotte**, an overseas department and region of France. It is located in the northern Mozambique Channel in the western Indian Ocean, positioned between Madagascar and northeastern Mozambique.

![Google Maps](/img/challenges/bellingcat/multispectral-viewpoints/take-you-to-the-beach-4.png "Google Maps")

## Conclusion

Through a structured OSINT approach, analyzing the image, conducting keyword searches, using reverse image search, and confirming results via Google Maps, the challenge image was successfully identified as Mayotte. This exercise highlights the effectiveness of combining different OSINT techniques for geolocation tasks. Of course, I could have immediately performed a reverse image search with Google Lens and found the answer in a few seconds, but I think that wasn't really the point of this challenge.

<em>
Used tools:
- Google Lens: Reverse image search
- Google Maps: Geolocation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
