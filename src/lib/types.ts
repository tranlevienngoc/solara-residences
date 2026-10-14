export interface Residence {
  id: string;
  name: string;
  category: string;
  bedrooms: string;
  area: string;
  features: string[];
  description: string;
  image: string;
  secondaryImage: string;
  floorplanTag: string;
  priceStarting: string;
}

export interface Amenity {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface GalleryPanel {
  id: string;
  number: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
  aspect: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  origin: string;
  description: string;
  finish: string;
  image: string;
}
