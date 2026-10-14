import { Residence, Amenity, GalleryPanel, MaterialItem } from "./types";

export const RESIDENCES_DATA: Residence[] = [
  {
    id: "garden-residence",
    name: "GARDEN RESIDENCE",
    category: "Ground Floor Living",
    bedrooms: "2 Bedrooms",
    area: "110 — 135 m²",
    features: [
      "Private landscaped garden",
      "Direct pool & terrace access",
      "Seamless indoor-outdoor flow",
      "Double vanity en-suite bathrooms",
    ],
    description:
      "A tranquil sanctuary immersed in indigenous coastal flora, where sliding glass partitions dissolve the threshold between sun-dappled interior salons and your secluded garden courtyard.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
    floorplanTag: "Typology 01 — Garden Level",
    priceStarting: "From $1.45M USD",
  },
  {
    id: "sky-residence",
    name: "SKY RESIDENCE",
    category: "Elevated Oceanfront",
    bedrooms: "3 Bedrooms",
    area: "145 — 180 m²",
    features: [
      "Panoramic 270° East Sea views",
      "Expansive 42 m² wrap-around terrace",
      "Custom Italian travertine island",
      "Dedicated wine cellar & butler pantry",
    ],
    description:
      "Hovering above the coastline, the Sky Residences curate dramatic horizon vistas. Natural ventilation channels maritime breezes through soaring three-meter ceilings lined with natural oak.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    floorplanTag: "Typology 02 — High Floor",
    priceStarting: "From $2.20M USD",
  },
  {
    id: "penthouse",
    name: "PENTHOUSE",
    category: "The Crowning Collection",
    bedrooms: "3 — 4 Bedrooms",
    area: "210 — 280 m²",
    features: [
      "Private rooftop infinity plunge pool",
      "Outdoor chef pavilion & fire pit",
      "Master retreat with ocean-facing soaking tub",
      "Direct private keycard elevator access",
    ],
    description:
      "The zenith of coastal luxury living in Da Nang. A masterwork of proportion and stillness, featuring a private cantilevered rooftop pool where the azure of the pool fuses seamlessly into the sea.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1800&q=85",
    floorplanTag: "Typology 03 — Rooftop Crown",
    priceStarting: "From $3.85M USD",
  },
];

export const GALLERY_PANELS: GalleryPanel[] = [
  {
    id: "exterior",
    number: "01",
    tag: "ARCHITECTURE",
    title: "EXTERIOR",
    caption: "Sculptural limestone ribbons engineered to filter morning sunlight and coastal breezes.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    id: "living",
    number: "02",
    tag: "INTERIORS",
    title: "LIVING ROOM",
    caption: "Double-height volume bathed in soft, diffused daylight with custom low-profile furnishings.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[4/3]",
  },
  {
    id: "bedroom",
    number: "03",
    tag: "SUITE",
    title: "BEDROOM",
    caption: "A restful haven designed for stillness, greeting the dawn over the quiet horizon.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    id: "terrace",
    number: "04",
    tag: "OUTDOOR",
    title: "TERRACE",
    caption: "Sheltered outdoor living deck crafted from aged teak, framing infinite ocean vistas.",
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[4/3]",
  },
  {
    id: "pool",
    number: "05",
    tag: "WELLNESS",
    title: "INFINITY POOL",
    caption: "A 50-meter shoreline pool creating an optical continuum with the waters of Da Nang.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    id: "lobby",
    number: "06",
    tag: "ARRIVAL",
    title: "LOBBY",
    caption: "Monumental stone entry portal accented with water gardens and curated sculptural pieces.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[4/3]",
  },
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "infinity-pool",
    number: "01",
    title: "INFINITY POOL",
    subtitle: "Coastal Horizon",
    description: "Olympic-length saltwater pool extending into the Pacific horizon with floating cabanas.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "wellness-spa",
    number: "02",
    title: "WELLNESS SPA",
    subtitle: "Hydrotherapy & Thermal Suites",
    description: "Bespoke sound baths, Finnish sauna, cold plunge, and private treatment pavilions.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "residents-lounge",
    number: "03",
    title: "RESIDENTS LOUNGE",
    subtitle: "Curated Social Sanctuary",
    description: "Sommelier wine library, intimate reading salons, and private dining salon for hosts.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "fitness-studio",
    number: "04",
    title: "FITNESS STUDIO",
    subtitle: "Biophilic Movement",
    description: "Technogym biomechanical equipment, oceanfront yoga deck, and Pilates reformer studio.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "tropical-gardens",
    number: "05",
    title: "TROPICAL GARDENS",
    subtitle: "Botanical Pathways",
    description: "Three hectares of preserved coastal dunes, sensory herbal gardens, and koi lagoons.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "concierge",
    number: "06",
    title: "CONCIERGE",
    subtitle: "24/7 Bespoke Living",
    description: "Private aviation coordination, yacht charters, in-residence chefs, and estate care.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
];

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "travertine",
    name: "Navona Travertine",
    origin: "Tivoli, Italy",
    description: "Cross-cut unpolished travertine with open pores, echoing coastal geological strata.",
    finish: "Honed, porous, matte seal",
    image:
      "https://images.unsplash.com/photo-1598880940371-c756e015faf1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "timber",
    name: "Reclaimed Teak",
    origin: "Central Highlands, Vietnam",
    description: "Sustainably reclaimed tropical timber aged by maritime elements for natural silvery resilience.",
    finish: "Brushed grain, natural oil",
    image:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "natural-stone",
    name: "Quang Nam Limestone",
    origin: "Central Coast, Vietnam",
    description: "Hand-chiseled monolithic blocks that age with noble dignity under sea mist and sun.",
    finish: "Split-face & fluted reliefs",
    image:
      "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "linen",
    name: "Raw Organic Linen",
    origin: "Normandy & Hue Looms",
    description: "Heavyweight tactile weave softening architectural geometries and filtering sunlight.",
    finish: "Pre-washed, unbleached",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "brushed-metal",
    name: "Muted Bronze",
    origin: "Handcrafted Metallics",
    description: "Low-sheen patinated bronze accents resistant to salinity, developing a bespoke patina over decades.",
    finish: "Hand-rubbed antique bronze",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
  },
];

export const LOCATION_DISTANCES = [
  { value: 5, unit: "MIN", label: "MY KHE BEACH", desc: "Direct private dune boardwalk" },
  { value: 10, unit: "MIN", label: "CITY CENTER", desc: "Han River promenade & galleries" },
  { value: 15, unit: "MIN", label: "INT'L AIRPORT", desc: "Private VIP terminal transfers" },
  { value: 20, unit: "MIN", label: "CHAMPIONSHIP GOLF", desc: "BRG Da Nang & Montgomerie Links" },
];
