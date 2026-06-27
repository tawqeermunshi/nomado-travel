export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] };

export interface Post {
  slug: string;
  region: "Kashmir" | "Ladakh";
  title: string;
  excerpt: string;
  image: string;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "the-floating-market",
    region: "Kashmir",
    title: "The Floating Market: Srinagar's Morning Ritual on Water",
    excerpt:
      "Long before the city stirs, shikaras laden with lotus stems and fresh greens glide through the mist to Dal Lake's centuries-old floating vegetable market.",
    image: "/images/shikara.jpg",
    body: [
      { type: "p", text: "Long before the rest of Srinagar stirs, Dal Lake is already wide awake. While the city sleeps under a blanket of mist, shikaras loaded with cauliflowers, lotus stems, and bundles of fresh greens begin gliding silently across the water, converging at a quiet bend near Gagribal. This is the floating vegetable market — one of the last living examples of a centuries-old trade that has fed Srinagar since the time of the Mughals." },
      { type: "h", text: "A Market With No Stalls" },
      { type: "p", text: "There are no counters here, no fixed prices chalked on boards — just boat after boat, each one a floating shopfront. Farmers from the lake's interior villages, many of whom have tended these waters for generations, paddle in before sunrise to sell what they grew that very night on floating gardens called raadh. Cauliflower, kohlrabi, lotus root (nadru), and water spinach pass from boat to boat in transactions as old as the lake itself — a nod, a price, a handful of notes, and the produce changes hands without either party stepping onto dry land." },
      { type: "h", text: "Why Sunrise Matters" },
      { type: "p", text: "Arrive any later than 5:30 AM and you'll miss the real show. The market exists in a narrow window — by the time the sun clears the Zabarwan hills, most boats have already dispersed toward the city's markets. The hush is part of the experience: oars dipping softly, the occasional bartering murmur, and the lake exhaling mist as the first light touches the water. Photographers chase this hour for good reason; the colors of the vegetables against the silver-grey lake at dawn are unlike anything else in Kashmir." },
      { type: "h", text: "Getting There" },
      { type: "p", text: "Hire a shikara the evening before and arrange an early start — most boatmen near Ghat 16 or Nehru Park know the market's rhythm well and will time the ride perfectly. Dress warmly, even in summer; the lake holds onto its chill until well after sunrise." },
      { type: "h", text: "Beyond the Vegetables" },
      { type: "p", text: "The market isn't just commerce — it's a living archive of how Dal Lake's communities have sustained themselves without ever needing the shore. Floating gardens, floating homes, and now a floating market: an entire ecosystem built on water, quietly persisting against the tide of modern Srinagar. Spend an hour here, and you'll understand why locals still call the lake the city's other backbone." },
    ],
  },
  {
    slug: "weavers-of-pashmina",
    region: "Kashmir",
    title: "Weavers of Pashmina: The Thread That Took a Lifetime to Learn",
    excerpt:
      "Behind unmarked doors in downtown Srinagar sits a craft so demanding that a single shawl can take a year — spun, woven, and embroidered entirely by hand.",
    image: "/images/weaving.jpg",
    body: [
      { type: "p", text: "In the narrow lanes of downtown Srinagar, behind unmarked doors and modest shopfronts, sits a craft so demanding that a single shawl can take months — sometimes over a year — to complete. This is the world of pashmina, Kashmir's most famous export and one of its most fragile living traditions." },
      { type: "h", text: "From Mountain Goat to Loom" },
      { type: "p", text: "Pashmina begins far from any workshop, high in the Changthang plateau of Ladakh, where Changthangi goats grow an undercoat of impossibly fine wool to survive winters that dip below -30°C. Herders comb out this soft fibre — never shorn — each spring, and what they collect is a fraction of what a sheep yields in ordinary wool. It's this scarcity, combined with a fibre diameter thinner than human hair, that makes pashmina what it is." },
      { type: "h", text: "The Hands That Make It Real" },
      { type: "p", text: "Once the raw wool reaches Kashmir, it passes through a relay of specialists, each trained in a single, exacting skill:" },
      { type: "list", items: [
        "Spinners, almost always women, draw the wool into yarn on a yinder — a simple spinning wheel — by hand, since machine spinning breaks the delicate fibre.",
        "Weavers work traditional looms for weeks to produce a single plain shawl, longer still if a pattern is involved.",
        "Sozni embroiderers add the fine needlework Kashmir is renowned for, sometimes spending six months to a year on one piece, working from memory rather than printed patterns.",
      ] },
      { type: "p", text: "No single artisan sees a shawl from start to finish. It passes through dozens of hands before it's ready, each one trusting the last." },
      { type: "h", text: "A Craft Under Pressure" },
      { type: "p", text: "Genuine handwoven, hand-spun pashmina has become rare, squeezed by machine-made imitations and the sheer time investment the real craft demands. Many weaving families have practiced this work for generations, yet fewer young Kashmiris are choosing to continue it, drawn instead toward steadier, faster livelihoods. What survives today does so largely because of buyers who understand — and pay for — the difference between authentic pashmina and the synthetic blends that flood souvenir markets." },
      { type: "h", text: "Seeing It For Yourself" },
      { type: "p", text: "A handful of cooperatives and family workshops in Srinagar still welcome visitors to watch the process first-hand — the rhythmic clack of the loom, the spinner's wheel turning by candlelight in winter, the embroiderer hunched over a half-finished motif. Watching a sozni artisan work even a single flower petal makes the price tag on a finished shawl suddenly make sense. This isn't just a textile. It's hundreds of hours of inherited skill, woven into something you can fold into your palm." },
    ],
  },
  {
    slug: "the-royal-feast-wazwan",
    region: "Kashmir",
    title: "The Royal Feast: Inside Kashmir's Legendary Wazwan",
    excerpt:
      "A single copper trami, shared between four, piled with rice and slow-cooked meat. Inside the multi-course ceremony that commands every Kashmiri wedding.",
    image: "/images/wazwan.jpg",
    body: [
      { type: "p", text: "There's a moment at every Kashmiri wedding when the trami arrives — a single large copper plate, shared between four guests, piled high with rice and meticulously arranged meat dishes. Conversation pauses. This is the Wazwan, and once it begins, it commands the room." },
      { type: "h", text: "A Feast Built on Ceremony" },
      { type: "p", text: "Wazwan isn't a meal so much as a performance, traditionally prepared by a waza — a hereditary master chef — and his team of assistants, who can spend an entire night cooking for hundreds of guests. The full ceremonial Wazwan consists of dishes served in careful sequence, though the number prepared varies by occasion; weddings call for the most elaborate spread, sometimes stretching past a dozen courses." },
      { type: "h", text: "What's on the Plate" },
      { type: "p", text: "Each dish in a Wazwan has its own technique, and a good waza is judged on how well he executes the most demanding ones:" },
      { type: "list", items: [
        "Rista — meatballs simmered in a fiery red gravy, made by hand-pounding meat for hours until it reaches the right texture.",
        "Rogan Josh — tender lamb in a deep red, aromatic curry, colored not by chili alone but by Kashmiri ratanjot.",
        "Gushtaba — considered the finale of the feast, delicate meatballs in a creamy, mild yogurt-based curry, traditionally the last dish served.",
        "Tabak Maaz — ribs simmered until soft, then fried to a deep golden crisp.",
        "Yakhni — meat cooked in a yogurt gravy fragrant with whole spices, prized for its gentleness against the meal's richer dishes.",
      ] },
      { type: "p", text: "The meal is eaten communally, by hand or spoon, off the shared trami — a structure that's as much about hospitality and togetherness as it is about food." },
      { type: "h", text: "A Cuisine of Quiet Influence" },
      { type: "p", text: "Wazwan's roots trace back to Central Asian and Persian culinary traditions, brought to the valley centuries ago and adapted with Kashmiri ingredients — saffron, dried Kashmiri chilies, fennel, and yogurt — into something distinct. It's a cuisine that rewards patience: meats marinated and slow-cooked, gravies built over hours, never rushed." },
      { type: "h", text: "Where to Experience It" },
      { type: "p", text: "While Wazwan is traditionally reserved for weddings and major celebrations, several restaurants in Srinagar now offer curated versions for visitors, often as a multi-course set menu. Ask for it a few hours in advance where possible — much of what makes Wazwan remarkable simply can't be hurried. Sit on the floor if you're offered the choice, share the trami if you can, and save room: gushtaba arrives last for a reason." },
    ],
  },
  {
    slug: "star-gazing-at-hanle",
    region: "Ladakh",
    title: "Star Gazing at Hanle: Where India's Sky Is at Its Darkest",
    excerpt:
      "Past the last patch of cell signal, at 4,500 metres, lies India's first Dark Sky Reserve — where the Milky Way stretches from one horizon to the other.",
    image: "/images/stargazing.jpg",
    body: [
      { type: "p", text: "Somewhere past the last patch of cell signal, beyond Pangong and Nubra and every other name on a typical Ladakh itinerary, the road climbs into the Changthang plateau and arrives at Hanle — a windswept village at roughly 4,500 metres where the sky, quite literally, has nowhere else to compete for attention." },
      { type: "h", text: "India's First Dark Sky Reserve" },
      { type: "p", text: "In late 2022, an area spanning over a thousand square kilometres around Hanle was officially notified as the Hanle Dark Sky Reserve — India's first. The reserve sits within the Changthang Wildlife Sanctuary and covers six villages, all brought under a light management plan that limits outdoor lighting, mandates shielded fixtures, and asks drivers to dim headlights near observation zones. The payoff: skies rated Bortle-1, the darkest classification on the scale astronomers use, found in only a handful of places on Earth." },
      { type: "h", text: "Why Hanle, Specifically" },
      { type: "p", text: "The same conditions that make Hanle harsh for daily life make it extraordinary for astronomy — high altitude, bone-dry air, and roughly 270 cloud-free nights a year. It's no accident that the Indian Institute of Astrophysics chose this spot for the Indian Astronomical Observatory, one of the highest-altitude optical observatories in the world, along with the MACE gamma-ray telescope. On a clear, moonless night, the Milky Way doesn't just appear overhead — it stretches from one horizon to the other, dense enough to cast a faint glow on the ground." },
      { type: "h", text: "Stargazing With the Locals" },
      { type: "p", text: "What makes Hanle unusual isn't only the sky — it's who's showing it to you. As part of the reserve's community program, two dozen local villagers have been trained as Astronomy Ambassadors, equipped with their own telescopes to guide visitors through the night sky. It's a rare astrotourism model: the same families who herd yaks and grow barley by day spend clear nights pointing out Saturn's rings and the Andromeda galaxy to travelers who've made the long journey out. The reserve also hosts an annual star party drawing amateur astronomers and astrophotographers from across India." },
      { type: "h", text: "Before You Go" },
      { type: "p", text: "A few things worth knowing ahead of the trip:" },
      { type: "list", items: [
        "Acclimatize first. Hanle sits at extreme altitude, roughly 275 km from Leh. Spend at least 48 hours adjusting in Leh before heading out, and avoid combining it with other high-altitude stops too quickly.",
        "Best season: May to September for road access and reliably clear skies; aim for nights around the new moon for the darkest views.",
        "Stay local: Accommodation is mostly homestay-style — book ahead, and consider it part of the experience rather than a compromise.",
        "Light discipline matters. Avoid bright torches, camera flashes, or drones near the observation areas — the reserve's entire purpose depends on visitors respecting the dark.",
        "Permits and fees: Confirm current entry requirements, as Hanle lies close to a sensitive border region.",
      ] },
      { type: "h", text: "A Sky Worth the Distance" },
      { type: "p", text: "Hanle isn't a place you stumble into. It takes a deliberate detour, a long drive, and a willingness to sit in the cold for hours waiting for your eyes to adjust. What you get in return is a sky most people only see in photographs — and the rare, disorienting feeling of realizing just how much we normally miss." },
    ],
  },
  {
    slug: "downtown-safari",
    region: "Kashmir",
    title: "Downtown Safari: Getting Lost in Srinagar's Old City",
    excerpt:
      "Cross the Jhelum into the old city — seven wooden bridges, centuries-old shrines, and craft lanes where Srinagar still actually lives.",
    image: "/images/downtown.jpg",
    body: [
      { type: "p", text: "Most visitors see Srinagar from a shikara on Dal Lake or a houseboat balcony — and miss the city's actual heart entirely. Cross the Jhelum into downtown Srinagar, and you step into a different city altogether: narrower, older, and far more interesting. Locals simply call it “Downtown” — a tangle of wooden bridges, centuries-old shrines, and lanes that have barely changed their footprint since the Mughals passed through." },
      { type: "h", text: "Crossing the Bridges" },
      { type: "p", text: "Downtown is stitched together by seven historic bridges, or kadals, each one a neighborhood in itself. Start at Zaina Kadal, named after the 15th-century Sultan Zain-ul-Abidin, and walk the riverbank rather than crossing straight away. The Jhelum here looks nothing like its postcard version near the lake — it's working water, lined with weathered wooden houses, their upper floors leaning slightly over the river as if listening in on it." },
      { type: "h", text: "Architecture You Won't Find Elsewhere" },
      { type: "p", text: "Downtown's skyline belongs to two unmistakable structures:" },
      { type: "list", items: [
        "Jamia Masjid — Srinagar's grand mosque, built around a courtyard the size of a small park, held up by 370 wooden pillars, each reportedly cut from a single deodar tree. The scale of it is almost startling after the tight lanes leading up to it.",
        "Khanqah-e-Moula (Shah-e-Hamdan) — a riverside shrine wrapped almost entirely in carved wood and papier-mâché ceiling work, dedicated to the Persian saint credited with bringing many of Kashmir's signature crafts to the valley in the 14th century.",
      ] },
      { type: "p", text: "Both buildings reflect a distinctly Kashmiri style — pagoda-like tiered roofs, latticed windows, and wood construction adapted for heavy snow, found almost nowhere else in India." },
      { type: "h", text: "The Craft Lanes" },
      { type: "p", text: "Downtown isn't just architecture — it's where much of Kashmir's handicraft economy still quietly operates. Wander the lanes around Zaina Kadal and Nowhatta and you'll pass workshops for copperware, papier-mâché, and walnut wood carving, often running out of the same buildings for generations. Unlike the curated handicraft emporiums elsewhere in the city, these are working spaces — expect noise, sawdust, and craftsmen who are usually happy to talk if you're not rushing them." },
      { type: "h", text: "How to Actually Do It" },
      { type: "p", text: "Downtown rewards walking, not driving — the lanes are narrow, and a car will only frustrate you. Go in the morning, when the markets are setting up and the light hits the river well, and budget at least three unhurried hours. A local guide is worth it here; many of the smaller shrines and craft workshops have stories that don't make it onto any signage, and a familiar face opens doors that a stranger walking in alone simply won't get." },
      { type: "h", text: "Why It's Worth the Detour" },
      { type: "p", text: "Srinagar's lake and gardens get the photographs, but downtown is where the city actually lives — five centuries of history compressed into a few square kilometers, still functioning as a neighborhood rather than a museum piece. Spend a morning here, and the rest of Srinagar starts to make a lot more sense." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
