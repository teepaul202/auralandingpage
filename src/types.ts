export interface ColorVariant {
  id: string;
  name: string;
  hex: string;
  image: string;
  caseImage: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductSpecification {
  category: string;
  details: {
    label: string;
    value: string;
  }[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  sku: string;
  heroVideo: string;
  variants: ColorVariant[];
  features: ProductFeature[];
  specifications: ProductSpecification[];
  reviews: Review[];
}
