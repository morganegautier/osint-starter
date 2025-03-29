---
title: "Bellingcat - Bellingcat Globetrotters - A Sticky Situation - Write-up"
description: "A detailed OSINT geolocation write-up solving Bellingcat’s “A Sticky Situation” challenge using image analysis, Overpass Turbo, and Google Earth to pinpoint a Tyrolean mountain summit"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "A Sticky Situation"
position: 1
---

# Bellingcat - Bellingcat Globetrotters - A Sticky Situation - Write-up

This write-up details the geolocation challenge "A Sticky Situation" from the [Bellingcat](https://challenge.bellingcat.com/) Globetrotters series. The puzzle, created by [Foeke Postma, Bellingcat](https://www.bellingcat.com/author/foekepostma/), requires identifying the location captured in an image.

This guide provides a step-by-step solution to the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> The mountains look great from up here!
>
> In August of 2022, Bellingcat's Foeke Postma found himself looking over this beautiful view, complete with a Bellingcat sticker!
>
> But where was this enviable mountaineering adventure taking place?
>
> What is the name of the mountain on which Foeke was standing?
>
> ![A Sticky Situation](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-1.png "A Sticky Situation")

## Investigation

### Image analysis

The provided image showcases a mountainous landscape with rolling green hills, towering peaks, and a valley containing visible settlements and farmland. A lake can also be seen in the background.

A key object in the foreground is a wooden pole secured by cables, supporting a metal box adorned with stickers. Some of these stickers reference outdoor activities and locations, including "Ready4HikeMountain" and "mysprheadshop.at," suggesting a connection to Austria. Additionally, mentions of "Tyrol" reinforce the hypothesis that the location is within the Tyrolean mountain region.

![Google Maps area](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-2.png "Google Maps area")

The photo’s perspective suggests it was taken from a high-altitude vantage point, likely near a mountain summit. The presence of a sticker-covered metal box implies this could be a popular hiking destination where visitors leave their marks. To determine the exact mountain, we need to identify more clues, such as the valley, peaks in the background, and the wooden pole.

### Identifying the wooden pole

Upon researching famous Austrian peaks, I noticed that the wooden pole is likely a summit cross, a Christian cross placed atop mountains in the Alps. These crosses often include a summit register (Gipfelbuch) stored in a metal container, which matches the metal box in the image.

*Source : [Wikipedia - Summit cross](https://en.wikipedia.org/wiki/Summit_cross)*

![Wikipedia - Summit cross](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-3.png "Wikipedia - Summit cross")

Now, our goal is to find a high wooden summit cross, supported by cables, with a metal box covered in stickers, located in Tyrol.

Initially, I attempted a Google Image search with keywords like "*summit cross Tyrol database*", verifying results using Google Earth. However, this approach was too broad, akin to searching for a needle in a haystack.

### Refining the search using Overpass Turbo

Given that there are hundreds of summit crosses in Austrian Tyrol, a manual search is inefficient. Instead, I used [Overpass Turbo](https://overpass-turbo.eu/), a powerful web-based data mining tool for OpenStreetMap that allows custom queries.

Observing the image, I noticed a town in the valley and a lake between the mountains in the background. Based on these observations, I constructed a query to search for peaks with both a summit cross and a summit register within 10 km of a town and 15 km of a lake in Austrian Tyrol.

```
[out:json][timeout:60];

// Define the bounding box for the Austrian Tyrol
area["name"="Tirol"]["boundary"="administrative"]->.tyrol;

// Find all towns and lakes in the region
node(area.tyrol)["place"="town"]->.towns;
rel["natural"="water"]["water"="lake"](area.tyrol)->.lakes;

// Find all peaks with a summit cross and a summit register within 10km of any town and 15km of any lake
(
  node(area.tyrol)["natural"="peak"]["summit:cross"="yes"]["summit:register"="yes"](around.towns:10000)(around.lakes:15000);
)->.summit_crosses;

// Output results
out body;
>;
out skel qt;
```

![Overpass Turbo](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-4.png "Overpass Turbo")

This query narrowed the results to 52 peaks instead of over 500. Next, I explored these locations using Google Earth. One peak stood out: **Wiedersberger Horn**.

![Overpass Turbo](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-5.png "Overpass Turbo")

### Confirming the location

At this location, we find a weathered wooden summit cross supported by cables, a summit register, a valley with a town below and a lake at the end of a Z-shaped valley. The town in the valley is Schlitters, and the lake is Achensee.

Here is the [3D Google Earth](https://earth.google.com/web/search/Wiedersberger+Horn/@47.37045347,11.91031298,1776.35807782a,2174.22032146d,35y,-39.71210858h,76.24989622t,0r/data=CoEBGlMSTQolMHg0Nzc3ZDE5NjY0MzcwNTQ5OjB4MWQwMDk3NTgyMzBhM2MxMBkghDbv7q5HQCEbqnNWVdUnQCoSV2llZGVyc2JlcmdlciBIb3JuGAEgASImCiQJi0YIqszFR0ARM0FFvniFR0AZJ1anFXvHKUAhskP3HG1UJkBCAggBOgMKATBCAggASg0I____________ARAA) of the valley from Wiedersberger Horn:

![Google Earth](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-6.png "Google Earth")

Here is the [Google Earth Street View](https://earth.google.com/web/search/Wiedersberger+Horn/@47.35887846,11.92356802,2030.16046683a,0d,60y,307.81655557h,85t,0r/data=CiwiJgokCZr-_duPBkdAETk099mVDEZAGZAJGpCwQC5AIaVNjH0SvihAQgIIASIwCixBRjFRaXBQd29PbGlGYnVMRjhrTzZkYVpiYjhMR1N3TGo5aGFmUkstbXNXXxAFMikKJwolCiExdlAzamw1NFBnWDdYdnd0UE9jWnhqbTZrRzRTUzNRNTYgAToDCgEwQgIIAEoICPfj8JQHEAE) confirming the summit cross:

![Street View](/img/challenges/bellingcat/bellingcat-globetrotters/a-sticky-situation-7.png "Street View")

Regarding the stickers, it seems they are regularly removed from the summit register!

## Conclusion

This challenge demonstrated the power of OSINT techniques in geolocation. By combining image analysis to identify environmental details, search engine research to gather context, Overpass Turbo for targeted queries and Google Earth for terrain verification, we successfully pinpointed the mountain's exact location.

<em>
Used tools:
- [Overpass Turbo](https://overpass-turbo.eu/): Internet data mining tool for OpenStreetMap
- Google Lens: Reverse image search
- Google Earth: Geolocation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
