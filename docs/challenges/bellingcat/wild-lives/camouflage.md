---
title: "Bellingcat - Wild Lives - Camouflage - Write-up"
description: "Learn how to solve Bellingcat's Wild Lives OSINT challenge by identifying a Sumatran tiger using image analysis, reverse search, and open-source investigation techniques"
image: img/challenges/sofia-santos/maps.jpg
keywords: [Bellingcat, Web Searching, OSINT]
sidebar_label: "Camouflage"
position: 2
---

# Bellingcat - Wild Lives - Camouflage - Write-up

This write-up covers the Wild Lives - Camouflage puzzle by [Bellingcat](https://challenge.bellingcat.com/), a web searching challenge designed to test and sharpen OSINT skills. The puzzle was created by [Foeke Postma, Bellingcat](https://www.bellingcat.com/author/foekepostma/).

This guide provides a step-by-step solution to the challenge, offering insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches; what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> A tiger never changes it's stripes!
>
> India is home to over half the world's population of tigers, but these ones living in a zoo could be anywhere in the world.
>
> What is the name of the Tiger in the photo?
>
> ![Camouflage](/img/challenges/bellingcat/wild-lives/camouflage-1.jpg "Camouflage")
>
> *Image credit: Bonnie Britain/Cover Images via Reuters Connect.*

## Investigation

### Image analysis

The tiger in the image has a compact, muscular frame, with relatively short limbs and a deep, orange coat marked by bold, closely spaced black stripes. Its face features intricate striping, particularly around the eyes and forehead, forming a dense and distinctive pattern. The fur appears moderately long and coarse, hinting at an adaptation to a humid, forested habitat rather than a colder, open environment.

These observations suggest that this is not a large, pale subspecies like the Siberian tiger, but rather one adapted to tropical forests. This leads us to the next step: determining the subspecies.

### Determining the subspecies

To establish a starting point for further research, I used Google Lens to perform a reverse image search.

![Google Lens](/img/challenges/bellingcat/wild-lives/camouflage-2.png "Google Lens")

Search results point to the tiger being a Sumatran tiger (Panthera tigris sumatrae). From there, I focused the rest of the investigation on this subspecies.

According to [Wikipedia](https://en.wikipedia.org/wiki/Tiger#Subspecies):

> The type specimen from Sumatra had dark fur. The Sumatran tiger has particularly long hair around the face, thick body stripes and a broader and smaller nasal bone than other island tigers.

These characteristics are consistent with the tiger in the image. Sumatran tigers are the smallest of the surviving subspecies and are adapted to the dense rainforests of Sumatra. Their coats are darker, and their stripes are thicker, more numerous, and often clustered, especially on the face and legs. Slightly longer fur, particularly around the neck, gives them a subtly shaggy appearance.

By contrast, Bengal and Indochinese tigers typically have lighter, less dense striping, and the Siberian tiger is significantly larger and paler.

From this evidence, it’s reasonable to conclude that the tiger in the challenge image is a **Sumatran tiger**.

### Locating the zoo

With the subspecies identified, the next step was to determine where this particular tiger lives. I began by searching "Sumatran tigers zoo list" on Google. The top result led to the German site [Zootierliste](https://www.zootierliste.de/en/?klasse=1&ordnung=115&familie=11508&art=1120923&subhaltungen=1), which maintains records of animal holdings in zoos worldwide.

![Zootierliste](/img/challenges/bellingcat/wild-lives/camouflage-3.png "Zootierliste")

Zootierliste revealed that 117 zoos around the world house Sumatran tigers, too many to check individually. To narrow things down, I looked into the photographer, Bonnie Britain, who is credited with the original image.

Her [website](https://www.bonniebritain.com/about/) and social media accounts, including Instagram, indicate that she is based in **London, UK**. She also mentions that she has a disability that may limit her mobility, suggesting she likely works locally.

![Bonnie Britain](/img/challenges/bellingcat/wild-lives/camouflage-4.png "Bonnie Britain")

![Instagram](/img/challenges/bellingcat/wild-lives/camouflage-5.png "Instagram")

This information helped refine the search: of the zoos on Zootierliste, London Zoo is among those that house Sumatran tigers.

![Zootierliste](/img/challenges/bellingcat/wild-lives/camouflage-6.png "Zootierliste")

According to the [London zoo website](https://www.londonzoo.org/plan-your-visit/events/international-tiger-day), the zoo is home to a family of four Sumatran tigers: mother Gaysha, father Asim, and cubs Zac and Crispin.

### Confirming the identity

Digging deeper on the London Zoo website, I found specific photos of the tigers. One image, labeled Crispin, shows a young tiger with facial markings remarkably similar to those in the challenge image.

![Sumatran tiger](/img/challenges/bellingcat/wild-lives/camouflage-7.png "Sumatran tiger")

The tiger in the challenge image and the young Crispin from London Zoo share the same distinct facial stripe pattern, particularly the dense, mask-like markings around the eyes and forehead. These stripe patterns are unique to each tiger and remain consistent as they grow. The physical structure, small, stocky, with a dense, dark coat, also matches.

This strongly supports the conclusion that the tiger in the challenge image is **Crispin**, photographed at a later stage of development.

## Conclusion

By combining visual analysis, reverse image search, open-source databases, and social media investigation, we identified the tiger as **Crispin**, a Sumatran tiger living at London Zoo.

This challenge highlights the value of multi-source verification and creative cross-referencing in OSINT investigations, from photographic patterns to personal mobility clues.

<em>
Used tools:
- Google Lens: Reverse image search
- Instagram & Facebook: Social media location matching
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Bellingcat's website](https://www.bellingcat.com/)!
