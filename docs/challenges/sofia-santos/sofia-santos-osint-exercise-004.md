---
title: "Sofia Santos - OSINT Exercise #004 - Write-up"
description: "Step-by-step OSINT geolocation guide solving Exercise #004 by Sofia Santos. Learn image analysis, reverse search, and mapping techniques to pinpoint locations."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Geolocation, OSINT]
sidebar_label: "OSINT Exercise #004"
---

# Sofia Santos - OSINT Exercise #004 - Write-up

This write-up covers [OSINT Exercise #004 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-004/), a geolocation challenge that requires determining the exact coordinates of a location depicted in an image. The challenge is rated as easy-to-medium for beginners and easy for experts.

This walkthrough provides a step-by-step guide to solving the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> This is a photo of a resort located on an island.
>
> a) What is the name of the resort?
>
> b) What are the coordinates of the island?
>
> c) In which cardinal direction was the camera facing when the photo was taken?
>
> ![OSINT Exercise #004](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-1.png "OSINT Exercise #004")

## Investigation

### Images analysis

Let's begin by analyzing the provided image. It features a picturesque tropical island surrounded by clear turquoise waters and coral reefs. The island is densely covered with lush green palm trees and has a small sandy beach area. The surrounding ocean displays deep blue and lighter shades, indicating varying depths and underwater coral formations.

In the background, other islands are visible, suggesting that this island might be part of an archipelago. The sky is mostly clear with a few scattered clouds, and the calm waters enhance the tranquil, untouched appearance of the location. It looks like an ideal remote getaway or a prime spot for snorkeling and marine exploration.

### Identifying the island

Nothing looks more like a tropical island than another tropical island, so to simplify the identification process, let's perform a reverse image search using Google Lens.

![Google Lens Search](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-2.png "Google Lens Search")

Google Lens identified the location as **Oan Resort**, a beach in Wonip, Micronesia. To confirm this information, I searched for Oan Resort on Google Maps, where I found the exact same image as in the challenge.

![Google Maps](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-3.png "Google Lens Maps")

### Locating the island

Since we successfully located the island, we retrieved its precise coordinates from Google Maps: **7.362441826458632, 151.75671412680836**.

![Google Maps](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-4.png "Google Maps")

To identify the cardinal direction in which the camera was facing when the photo was taken, I used Google Earth. By utilizing the 3D view, I matched the islands in the background with those in the original image. Based on this analysis, the camera was facing **Northwest**.

![Google Earth](/img/challenges/sofia-santos/osint-exercise-004/sofia-santos-004-5.png "Google Earth")

## Conclusion

Through a combination of reverse image search, geolocation techniques, and spatial analysis, we successfully identified the island, its coordinates, and the camera’s direction. This challenge demonstrates the power of OSINT methods in verifying and locating geographic information. Practicing these techniques can enhance one's investigative skills and improve proficiency in OSINT analysis.

<em>
Used tools:
- Google Lens: Reversed image search
- Google Maps : Geolocation
- Google Earth : 3D spatial analysis
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
