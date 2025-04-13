---
title: "Sofia Santos - OSINT Exercise #031 - Write-up"
description: "Step-by-step OSINT guide to solving Exercise #031 by Sofia Santos. Learn image analysis, web searching, and digital investigation to track an endangered giraffe's history and location."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercise #031"
---

# Sofia Santos - OSINT Exercise #031 - Write-up

This write-up covers [OSINT Exercise #031 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-031/), which focuses on observation and web searching to uncover hidden information using digital investigation techniques. The challenge is rated easy, making it accessible for both beginners and experienced OSINT practitioners.

This walkthrough provides a step-by-step guide to solving the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> The newborn giraffe seen in the photo below belongs to an endangered species. Individuals such as this one, born in captivity, often participate in conservation programs. This may include transfers to accredited facilities for carefully planned breeding efforts aimed at ensuring the survival of their species.
>
> Your task is to find the following information regarding the individual seen below:
>
> a) Location and date of birth.
> 
> b) Current residence and date of arrival.
>
> c) A photo in its current habitat.
>
> ![OSINT Exercise #031](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-1.png "OSINT Exercise #031")

## Investigation

### Identifying the giraffe’s birthplace and date of birth

To determine the giraffe's identity, let's perform a reverse image search using Google Lens.

![Giraffe](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-2.png "Giraffe")

The best matching result comes from a website called ZooBorns, leading to an article titled "[Virginia Zoo Welcomes Leggy Girl](https://www.zooborns.com/zooborns/2009/10/baby-giraffe-calf-at-the-virginia-zoo.html)". The article, dated October 27, 2009, features the same giraffe and appears to be its birth announcement.

![Giraffe](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-3.png "Giraffe")

According to the article, the giraffe was born at the **Virginia Zoo**, located at 3500 Granby St, Norfolk, VA 23504, United States. However, the birthdate is inconsistently listed as both October 21 and October 23, 2009. To find a more reliable source, let's check the Virginia Zoo’s website archives using the [Wayback Machine](https://web.archive.org/web/20250000000000*/https://virginiazoo.org/). Since the giraffe was born in late October, I selected a snapshot from November 2, 2009.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-4.png "Wayback Machine")

On the homepage, a birth announcement is stating that the giraffe was born on October 22, 2009.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-5.png "Wayback Machine")

A deeper search within the [Virginia Zoo website](https://web.archive.org/web/20091031015448/http://www.virginiazoo.org/about-the-zoo/new-arrivals.asp) confirms the official birthdate as **Wednesday, October 21, 2009, at 9:15 PM**.

![Wayback Machine](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-6.png "Wayback Machine")

### Identifying the giraffe’s current residence and arrival date

At this point, the giraffe’s name is still unknown. However, the ZooBorns article provides the names of her parents: Imara and Billy.

A Google search for `Virginia Zoo giraffe 2009 Imara Billy` leads to a [ZooChat forum discussion](https://www.zoochat.com/community/threads/north-american-masai-giraffe-population.482787/) documenting the Masai giraffe population in North America. The purpose of this thread started late 2021 is to document the births, deaths, and transfers of Masai giraffe in North America. The thread confirms that a giraffe born on October 21, 2009, at Virginia Zoo to parents Imara and Billy was named **Willow**. As of late 2021, she was living at **Disney’s Animal Kingdom**.

![Giraffe population](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-7.png "Giraffe population")

A search for `Willow giraffe Disney’s Animal Kingdom` leads to several articles discussing her arrival. A [Windsor Palms](https://www.windsor-palms-florida.net/latest-news/disneys-animal-kingdom-gets-a-new-baby-giraffe) article from October 13, 2010, states that Willow arrived at Disney’s Animal Kingdom on **October 12, 2010**. She resides in the Kilimanjaro Safari Ride area at Disney’s Animal Kingdom, a zoological theme park within the Walt Disney World Resort in Bay Lake, Florida.

![Disney’s Animal Kingdom](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-8.png "Disney’s Animal Kingdom")

### Finding a photo of Willow in her current habitat

To locate an updated photo, I performed a Google search for `Willow giraffe Disney’s Animal Kingdom`, filtering results by images. After some digging, I found a MickeyBlog article dated May 11, 2019.

![Google Search](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-9.png "Google Search")

The [article](https://mickeyblog.com/2019/05/11/celebrating-mothers-day-with-masai-giraffe-moms-and-their-babies-at-disneys-animal-kingdom/), published on Mother’s Day, highlights Masai giraffe mothers and their calves at Disney’s Animal Kingdom. It includes a cute photo of Willow and her daughter, Violet, in their current habitat.

![Willow](/img/challenges/sofia-santos/osint-exercise-031/sofia-santos-031-10.png "Willow")

## Conclusion

Through OSINT techniques, we successfully identified Virginia Zoo as Willow’s birthplace and confirmed her birthdate as October 21, 2009, at 9:15 PM, tracked her transfer to Disney’s Animal Kingdom on October 12, 2010 and found a recent photo of Willow in her current habitat with her calf, Violet.

<em>
Used tools:
- Google Lens: Reversed image search
- [The Wayback Machine](https://web.archive.org/): Web archive consultation
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
