---
title: "Bellingcat - Natural Wonders - Hot Stuff - Write-up"
description: "Step-by-step OSINT investigation of Bellingcat's “Hot Stuff” challenge, identifying a firefighting helicopter using image clues, aviation databases, and open source research"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Web Searching, OSINT]
sidebar_label: "Hot Stuff"
position: 2
---

# Bellingcat - Natural Wonders - Hot Stuff - Write-up

This write-up covers the Natural Wonders - Hot Stuff puzzle by [Bellingcat](https://challenge.bellingcat.com/), a web searching challenge that tests participants' OSINT skills. The puzzle was created by [Thomas Bordeaux, Bellingcat Volunteer Community](https://www.bellingcat.com/author/thomasbordeaux/).

This guide provides a step-by-step solution to the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> Who's fighting this wildfire?
>
> Names change! In open source research it's often useful to find up to date information about the names or designations of people, places and things.
>
> The large number identifying this helicopter has been changed since this photo was taken. Can you find its new number?
>
> As of July 2024, what is the tail number and large number of this helicopter? (Use the format TAILNUMBER-LARGENUMBER, i.e AB-CDE-99)
>
> ![Hot Stuff](/img/challenges/bellingcat/natural-wonders/hot-stuff-1.jpg "Hot Stuff")
>
> *Helicopter 21 drops water on a wildfire. Photo by Thomas Bordeaux.*

## Investigation

### Image analysis

The provided photo shows an aerial firefighting helicopter actively dropping water on a wildfire. The scene is intense, with smoke and flames rising from a forested area, suggesting a large-scale fire emergency. The helicopter is clearly marked in bright yellow and red, colors typically used for emergency or rescue aviation services. Two details stand out visually: the word “bombers” (Catalan for “firefighters”) written on the fuselage, and the number 21 inside a white circle, prominently displayed.

### Identifying the organization

A quick Google search for “bombers helicopter” leads to images of similar helicopters in the same red and yellow color scheme. Among the top results, we find references to the **Bombers de la Generalitat de Catalunya**, which is Catalonia’s regional firefighting service.

![Google Search](/img/challenges/bellingcat/natural-wonders/hot-stuff-2.png "Google Search")

On [JetPhotos](https://www.jetphotos.com/photo/10191638), a site specializing in photographs of airplanes and helicopters, we find a match for the helicopter type and paint scheme. This confirms the helicopter is part of Catalonia’s firefighting fleet.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-3.png "JetPhotos")

### Tracking the fleet

On the [official Generalitat de Catalunya website](https://interior.gencat.cat/en/incendis-forestals/actuem/mitjans-campanya-forestal/), we find a breakdown of the fire service’s aerial resources. As of September 2024, the Bombers operate 10 helicopters for firefighting missions.

A [Catalan Wikipedia article](https://ca.wikipedia.org/wiki/Bombers_de_la_Generalitat_de_Catalunya) provides even more detailed information, listing base locations and types of aircraft used by the service.

![Wikipedia](/img/challenges/bellingcat/natural-wonders/hot-stuff-4.png "Wikipedia")

However, neither the government nor Wikipedia page links a specific aircraft to the number “21.” To go further, we return to JetPhotos.

### Finding the specific helicopter

The original JetPhotos image that helped us identify the organization was uploaded by a user named Trànsit aeri de Catalunya. Browsing through their photo collection, we discover a crucial image: a photo of helicopter 21, taken in June 2021.

This image reveals its tail number: EC-MQR, and its manufacturer serial number (MSN): 4914. The serial number is critical because it remains constant throughout the helicopter’s lifespan, even if tail or visual identifiers change.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-6.png "JetPhotos")

Searching for serial number 4914 on JetPhotos yields the helicopter's history. It was once marked as helicopter 51, later became 21, and most recently, as of July 2024, it carries the number 11.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-7.png "JetPhotos")

In the most recent image, the helicopter is still registered as EC-MQR, and now bears the large identifier 11.

![JetPhotos](/img/challenges/bellingcat/natural-wonders/hot-stuff-8.png "JetPhotos")

As of July 2024, the helicopter previously identified as “21” has the following updated designation: **EC-MQR-11**.

## Conclusion

This challenge is a strong example of how persistent image analysis, combined with public aviation databases and web search techniques, can lead to precise identification in OSINT investigations. By following visual clues, verifying official sources, and leveraging aircraft serial numbers, we traced the history and current identity of the helicopter.

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
