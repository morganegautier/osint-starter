---
title: "Bellingcat - Urban Exploration - What a Dump! - Write-up"
description: "A detailed OSINT geolocation analysis of Bellingcat’s 'What a Dump!' challenge, using image clues, reverse search, and mapping tools to pinpoint the exact location"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Geolocation, OSINT]
sidebar_label: "What a Dump!"
position: 2
---

# Bellingcat - Urban Exploration - What a Dump! - Write-up

This write-up presents a detailed solution to the geolocation challenge "What a Dump!" from the [Bellingcat](https://challenge.bellingcat.com/) Urban Exploration series. Created by [Jake Godin](https://www.bellingcat.com/author/jakegodin/), the challenge involves pinpointing the location depicted in a provided image.

This guide provides a step-by-step solution to the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> Looking for treasure?
>
> Sometimes the most interesting things are found in the most unexpected places...
>
> ... but sometimes those places are full of trash.
>
> This dumpster is in an alley somewhere, but where?
>
> Where was the photographer standing when they took this photo? Use latitude and longitude in decimal format with three decimals (12.345, -67.890).
>
> ![What a Dump!](/img/challenges/bellingcat/urban-exploration/what-a-dump-1.jpg "What a Dump!")

## Investigation

### Image analysis

The image presents an urban alleyway where a large green dumpster, covered in graffiti, sits prominently in the foreground. The surrounding buildings have an industrial aesthetic, constructed of brick and metal siding, with roll-up garage doors lining the alley. The pavement is cracked and worn, indicative of an older urban area. The abundance of graffiti suggests a location known for its street art culture, often associated with large metropolitan cities.

One of the key identifiers in the image is the "Waste Management" logo on the dumpster. Additionally, visible text includes "Howard U," which may reference [Howard University in Washington, D.C](https://en.wikipedia.org/wiki/Howard_University). Another notable phrase, "Guilt Parade," corresponds to a [music band from Washington, D.C.](https://guiltparade.bandcamp.com/music). The presence of these references strengthens the hypothesis that the alley is located in Washington, D.C.

### Reversed image search

Given the presence of graffiti, my initial approach involved researching known street art locations in Washington, D.C., and attempting to identify the graffiti artist "GOOF.T...". However, this search yielded no relevant results. To refine the process, I conducted a reverse image search using Google Lens, specifying "Washington, D.C." as a search parameter. The search returned two particularly relevant results.

![Google Lens](/img/challenges/bellingcat/urban-exploration/what-a-dump-2.png "Google Lens")

Two results particularly caught my eye: a photo posted on my social network Instagram, and another on Facebook.

The first result was an Instagram post from September 22, 2023, by Keith McNally, a New York restaurateur. The image he shared depicted an alleyway with cracked pavement, graffiti-covered brick walls, and green dumpsters that closely resembled those in the challenge photo. In his caption, McNally identified the location as the future site of the Minetta Tavern in Washington, D.C., set to open in February 2024.

![Instagram](/img/challenges/bellingcat/urban-exploration/what-a-dump-3.png "Instagram")

The second relevant result was a Facebook post from August 27, 2021, by Christopher Rabadi. This image showcased a similar alleyway with distinctive elements, including graffiti-covered brick walls, roll-up garage doors, and cracked pavement. The post was tagged in the Union Market District of Washington, D.C., providing a strong indication of the alley’s general location.

![Facebook](/img/challenges/bellingcat/urban-exploration/what-a-dump-4.png "Facebook")

### Geolocation with Google Maps

Cross-referencing the locations from the Instagram and Facebook posts confirms they are in the same neighborhood: Union Market District, Northeast Washington, D.C.

![Google Maps](/img/challenges/bellingcat/urban-exploration/what-a-dump-5.png "Google Maps")

To validate the exact alley, I explored the vicinity of the Minetta Tavern’s planned location. The alley along Morse St Aly seemed to match, but with some architectural differences. To account for possible changes over time, I checked Google Street View (2018) and successfully matched the scene with the challenge image.

![Google Maps Street View"](/img/challenges/bellingcat/urban-exploration/what-a-dump-5.png "Google Maps Street View")

## Conclusion

The precise coordinates where the photographer stood when capturing the image are: **[38.910,-76.998]**

<em>
Used tools:
- Google Maps: Geolocation and Street View analysis
- Google Lens: Reverse image search
- Instagram & Facebook: Social media image matching
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
