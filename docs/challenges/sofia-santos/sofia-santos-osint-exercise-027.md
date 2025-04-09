---
title: "Sofia Santos - OSINT Exercise #027 - Write-up"
description: "Step-by-step OSINT investigation of Exercise #027 by Sofia Santos, covering web searching, image analysis, and digital research techniques."
image: img/challenges/sofia-santos/maps.jpg
keywords: [Sofia Santos, Web Searching, OSINT]
sidebar_label: "OSINT Exercise #027"
---

# Sofia Santos - OSINT Exercise #027 - Write-up

This write-up covers [OSINT Exercise #027 by Sofia Santos](https://gralhix.com/list-of-osint-exercises/osint-exercise-027/), which focuses on observation and web searching to uncover hidden information through digital investigation techniques. The challenge is rated as easy, making it suitable for both beginners and experts.

This walkthrough provides a step-by-step guide to solving the challenge, outlining insights and techniques useful for OSINT investigations. It’s recommended to attempt solving the challenge on your own first and then refer to this solution if you get stuck or want to verify your findings. Keep in mind that OSINT challenges often have multiple valid approaches, what matters most is your confidence and proficiency with the methods you choose.

## Task briefing

> The image below shows a group of people sitting in front of a large screen that reads “Lectura en Movimiento en Lima”. A speaker can be seen standing on the left-hand side in front of three large flags.
>
> Your task is to:
>
> a) Name the speaker.
>
> b) Identify what he was wearing on his lapel.
>
> c) Find footage of his speech.
>
> ![OSINT Exercise #027](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-1.png "OSINT Exercise #027")

## Investigation

### Image analysis

The provided image appears to depict a conference or public event. The screen displays the title "Lectura en Movimiento en Lima," which translates to "Reading in Motion in Lima.". Above the text, logos of various partner institutions involved in the event are visible. Behind the speaker, three flags are displayed, one of which is red and white—likely the flag of Peru. To the right, a camera setup suggests the event was recorded, increasing the likelihood of finding relevant footage online.

### Identifying the speaker

A Google search for "Lectura en Movimiento en Lima" yields a result from the Organización de Estados Iberoamericanos (OEI), the first logo visible on the event's presentation screen, suggesting the organization played a significant role in the event. The article, published on July 18, 2023, is titled [“Lectura en Movimiento en Lima”: Una iniciativa que une a 14 entidades para promover la lectura en el país](https://oei.int/oficinas/peru/noticias/lectura-en-movimiento-en-lima-una-iniciativa-que-une-a-14-entidades-para-promover-la-lectura-en-el-pais/).

Lectura en Movimiento en Lima is a campaign, held within the framework of the Lima International Book Fair, which promotes reading in public spaces to encourage reading habits and accessibility to literature. The article includes images of the event, one of which closely matches the original challenge photo. The individual in the picture, wearing a dark suit, a sky-blue tie, and a white badge—appears to be the same speaker.

![OEI Speaker](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-2.png "OEI Speaker")

The article identifies him as **Juan Carlos Ruiz**, the director of OEI Peru. A further image search confirms this information with multiple supporting photos.

![OEI Speaker](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-3.png "OEI Speaker")

### Identifying the speaker’s lapel badge

As previously observed, Juan Carlos Ruiz is wearing a white badge on the lapel of his suit. A simple Google Images search provides close-up photos from the event. One image published in an article on [MarketData](https://marketdata.com.py/noticias/internacionales/peru-y-la-oei-promocionan-la-lectura-en-las-calles-y-el-transporte-publico-de-lima-112311/) confirms that the white badge bears the inscription "OEI", representing the Organización de Estados Iberoamericanos.

![OEI Speaker badge](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-4.png "OEI Speaker badge")

Additionally, Juan Carlos Ruiz is wearing another badge, resembling a cockade. A reverse image search using Google Lens initially provides inconclusive results. However, adding the keyword "Peru" refines the search, revealing a similar badge in an eBay listing titled "ESCARAPELA PIN PERUVIAN MARCA PERU color Metallic Peru Souvenir Keychain".

![OEI Speaker badge](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-5.png "OEI Speaker badge")

According to Wikipedia, this cockade is called the **Escarapela del Perú** (Cockade of Peru). It is an unofficial national symbol often worn during the country's national festivities in July.

### Finding footage of the speech

The [OEI article](https://oei.int/oficinas/peru/noticias/lectura-en-movimiento-en-lima-una-iniciativa-que-une-a-14-entidades-para-promover-la-lectura-en-el-pais/) states:

> The event was opened by the director of OEI Peru, Juan Carlos Ruiz, who commented and detailed the activities that will be developed during the execution of this project. He also thanked all the institutions that joined and supported the goal of continuing to promote reading in the country.

To locate footage, a Google search for "Lectura en Movimiento en Lima" was performed, filtering results by Videos.

![OEI Footage](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-6.png "OEI Footage")

The search results included a YouTube video titled [Lectura en Movimiento en Lima](https://youtu.be/WVU-ei4Dunk?si=s7ydsIdflOC95jAy&t=573), containing the recording of the event. **The speech by Juan Carlos Ruiz starts at 9:33 and ends at 18:12.**

![OEI Footage](/img/challenges/sofia-santos/osint-exercise-027/sofia-santos-027-7.png "OEI Footage")

## Conclusion

Through OSINT techniques, we identified Juan Carlos Ruiz as the speaker, confirmed that he was wearing an OEI badge and a Peruvian cockade (Escarapela del Perú) on his lapel and found a YouTube video featuring his speech from 9:33 to 18:12.

<em>
Used tools:
- Google Lens: Reversed image search
</em>

---

Thanks for reading this write-up! Stay tuned for the next challenge.

If you’re looking to improve your OSINT skills, be sure to check out [Sofia Santos' website](https://gralhix.com/)!
