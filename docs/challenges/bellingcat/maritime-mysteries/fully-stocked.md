---
title: "Bellingcat - Maritime Mysteries - Fully Stocked - Write-up"
description: "Discover how to solve Bellingcat's Maritime Mysteries: Fully Stocked OSINT challenge with a step-by-step geolocation guide using Google Lens and Maps. Enhance your skills with this walkthrough."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "Fully Stocked"
position: 1
---

# Bellingcat - Maritime Mysteries - Fully Stocked - Write-up

This write-up covers the Maritime Mysteries - Fully Stocked puzzle by [Bellingcat](https://challenge.bellingcat.com/), a geolocation challenge where participants determine the location shown in a given image. The puzzle was created by [Galen Reich, Bellingcat](https://www.bellingcat.com/author/galenreich/).

This guide provides a step-by-step solution to the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> Ship shape and ready to get underway.
>
> Container vessels are a common sight in ports around the world, but this one is particularly well-stocked.
>
> They're a vital part of the global supply chain, but where is this one moored?
>
> In which city would you find this port?
>
> ![Fully Stocked](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-1.png "Fully Stocked")

## Investigation

### Image analysis

The image shows a large shipping port with numerous cranes handling cargo containers. A significant detail is the presence of the large container ship with "UASC" written on its hull, indicating it belongs to the United Arab Shipping Company, a major global shipping operator. One other notable clue in the image is the partially readable word "RDKAI" visible on some of the cranes. Additionally, in the background, a cable-stayed bridge can be seen. The presence of massive container-handling facilities, large ships and significant infrastructure elements may lead us to believe that we are in a large and busy port.

### Reverse image search

While we could investigate the port using the container ship or crane markings, the cable-stayed bridge in the background is a particularly distinctive feature that could simplify our search. Let's perform a reverse image search on this brige using Google Lens.

![Google Lens](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-2.png "Google Lens")

The search reveals that it is the Köhlbrand Bridge (Köhlbrandbrücke), located in Hamburg, Germany. This bridge spans the Köhlbrand, a part of the Unterelbe and the larger Elbe River.

### Google Maps geolocation

Now that we’ve identified Hamburg as the city, we need to pinpoint the exact port location. We use Google Maps to cross-reference the image details with satellite imagery.

![Google Maps area](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-3.png "Google Maps area")

A closer inspection of the Port of Hamburg reveals a match with the challenge image. The Burchardkai Terminal, identified in satellite imagery, features the same red and blue cranes seen in the challenge photo, where we were able to read "RDKAI" for Burchardkai. The Waltershofer Hafen, a crucial section of the port, accommodates large vessels similar to the one depicted. Additionally, the Köhlbrand Bridge appears in the background, further confirming our location.

![Google Maps Satellite View](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-4.png "Google Maps Satellite View")

To validate our findings, we also locate a similar image taken by photographer Sönke Knöfel, which depicts the same industrial shipping port with towering cranes, massive container ships, and a waterfront setting similar to our challenge image.

![Google Street View](/img/challenges/bellingcat/maritime-mysteries/fully-stocked-5.png "Google Street View")

## Conclusion

Using OSINT techniques, we have successfully determined that the port shown in the challenge image is located in **Hamburg**, Germany.

<em>
Used tools:
- Google Lens: Reverse image search
- Google Maps: Geolocation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
