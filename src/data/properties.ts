export type Property = {
  slug: string;
  status: "venta" | "vendida";
  type: "piso" | "chalet" | "oficina" | "local" | "terreno" | "garaje";
  featured: boolean;
  price: number;
  priceUnit: "€" | "€/mes";
  location: {
    city: string;
    district: string;
    address: string;
  };
  images: string[]; // URLs de imágenes reales o placeholder
  specs: {
    sqm?: number;
    bedrooms?: number;
    bathrooms?: number;
    floor?: string;
    garage?: boolean;
    terrace?: boolean;
    pool?: boolean;
    elevator?: boolean;
    orientation?: string;
    yearBuilt?: number;
    energyRating?: string;
  };
  translations: {
    es: { title: string; description: string };
    en: { title: string; description: string };
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// PROPIEDADES EN MALLORCA
// ─────────────────────────────────────────────────────────────────────────────
export const properties: Property[] = [
  {
    slug: "pollensa-finca-golf",
    status: "venta",
    type: "chalet",
    featured: true,
    price: 950_000,
    priceUnit: "€",
    location: {
      city: "Pollensa",
      district: "Pollensa",
      address: "Zona campo de golf, Pollensa",
    },
    images: Array.from({ length: 21 }, (_, i) => `/properties/pollensa-finca-golf/${i + 1}.jpg`),
    specs: {
      sqm: 142,
      bedrooms: 3,
      bathrooms: 1,
      floor: "Planta baja",
      terrace: true,
      pool: true,
      garage: false,
    },
    translations: {
      es: {
        title: "Encantadora finca rústica en Pollença junto al campo de golf",
        description:
          "Preciosa finca ubicada en una zona muy tranquila de Pollença, a escasos metros del campo de golf. La propiedad cuenta con una parcela de 4.382 m², ideal para quienes buscan un entorno natural con total privacidad.\n\nLa vivienda principal se distribuye en 3 dormitorios, 1 baño completo, cocina independiente y salón con salida a la terraza. En el exterior, una amplia terraza con zona chill-out y comedor, piscina privada rodeada de naturaleza, árboles frutales y una amplia explanada para aparcar varios vehículos.\n\nAdemás, la finca dispone de un almacén independiente con posibilidad de convertir en vivienda adicional.\n\nUna oportunidad perfecta tanto para residencia habitual como para uso vacacional, con gran potencial de revalorización en una de las zonas más codiciadas del norte de Mallorca.",
      },
      en: {
        title: "Charming rustic finca in Pollença next to the golf course",
        description:
          "Beautiful finca set in a very peaceful area of Pollença, just a short distance from the golf course. The property sits on a 4,382 m² plot, ideal for those seeking a natural setting with complete privacy.\n\nThe main house features 3 bedrooms, 1 full bathroom, an independent kitchen and a living room opening onto the terrace. Outside, a spacious terrace with a chill-out area and dining space, a private pool surrounded by nature, fruit trees and a large parking area.\n\nThe property also includes an independent storage room with the potential to convert into additional living accommodation.\n\nA perfect opportunity both as a primary residence and as a holiday home, with strong revaluation potential in one of the most sought-after areas in the north of Mallorca.",
      },
    },
  },
  {
    slug: "pollensa-planta-baja",
    status: "vendida",
    type: "piso",
    featured: true,
    price: 315_000,
    priceUnit: "€",
    location: {
      city: "Pollensa",
      district: "Pollensa",
      address: "Casco urbano de Pollensa",
    },
    images: Array.from({ length: 21 }, (_, i) => `/properties/pollensa-planta-baja/${i + 1}.jpg`),
    specs: {
      sqm: 150,
      bedrooms: 1,
      bathrooms: 1,
      floor: "Planta baja",
      terrace: true,
      garage: false,
      pool: false,
      elevator: false,
    },
    translations: {
      es: {
        title: "Planta baja con patio para reformar en el corazón de Pollensa",
        description:
          "Esta encantadora planta baja representa una excelente oportunidad para quienes desean crear su hogar ideal en una de las zonas más solicitadas de Pollensa. Ubicada a pocos pasos del instituto y muy cerca de todos los servicios, esta propiedad destaca por su situación estratégica dentro del pueblo, combinando tranquilidad y accesibilidad.\n\nLa vivienda, con una distribución actual que incluye un amplio salón, comedor independiente, alacena, una habitación, un baño, lavadero y dos agradables patios, ofrece un sinfín de posibilidades para reformar y personalizar. El primer patio, íntimo y recogido, es ideal como zona de relax, mientras que el segundo, más amplio y con cocina exterior, se presta perfectamente para crear una acogedora zona de barbacoa o espacio social al aire libre.\n\nGracias a su distribución y superficie, existe la posibilidad de transformar esta casa en una vivienda de hasta 3 habitaciones y 2 baños, adaptándose a las necesidades de una familia o de quienes buscan más amplitud y funcionalidad.\n\nPollensa es un municipio con una identidad única, famoso por su arquitectura tradicional, su vibrante vida cultural y su privilegiada ubicación entre montaña y mar. A solo unos minutos de las playas más bonitas del norte de Mallorca, esta propiedad es ideal tanto como residencia habitual como inversión para segunda vivienda.",
      },
      en: {
        title: "Ground floor with patio for renovation in the heart of Pollensa",
        description:
          "This charming ground-floor property represents an excellent opportunity for those wishing to create their ideal home in one of the most sought-after areas of Pollensa. Located just a short walk from local amenities and services, the property stands out for its strategic position within the village, combining tranquillity with accessibility.\n\nThe current layout includes a spacious living room, separate dining room, pantry, one bedroom, one bathroom, laundry room and two delightful patios. The first patio is intimate and sheltered — ideal as a relaxation area — while the second, larger patio features an outdoor kitchen and is perfectly suited for a barbecue area or outdoor social space.\n\nThanks to its layout and surface area, there is potential to convert this property into a home with up to 3 bedrooms and 2 bathrooms, adapting to the needs of a family or those seeking greater space and functionality.\n\nPollensa is a municipality with a unique identity, renowned for its traditional architecture, vibrant cultural life and privileged location between the mountains and the sea. Just minutes from some of the most beautiful beaches in northern Mallorca, this property is ideal both as a primary residence and as an investment for a second home.",
      },
    },
  },
  {
    slug: "inca-piso-luque",
    status: "vendida",
    type: "piso",
    featured: true,
    price: 315_000,
    priceUnit: "€",
    location: {
      city: "Inca",
      district: "Av. General Luque",
      address: "Avenida General Luque, Inca",
    },
    images: Array.from({ length: 21 }, (_, i) => `/properties/inca-piso-luque/${i + 1}.jpg`),
    specs: {
      sqm: 133,
      bedrooms: 3,
      bathrooms: 2,
      floor: "Entre plantas",
      garage: true,
      terrace: false,
      pool: false,
      elevator: true,
    },
    translations: {
      es: {
        title: "Amplio piso luminoso en Inca, Av. General Luque",
        description:
          "Bonito piso de 133 m² construidos ubicado en una de las zonas más demandadas de Inca, en la Avenida General Luque. La vivienda se encuentra en una finca con ascensor y se distribuye en 3 dormitorios (uno de ellos con baño en suite), 2 baños completos, cocina independiente y amplio salón comedor.\n\nIncluye trastero de gran tamaño y plaza de garaje en el mismo edificio. Equipado con aire acondicionado con bomba de calor, ideal para disfrutar de una temperatura agradable todo el año.\n\nUna excelente opción tanto para vivir como para invertir en una zona con todos los servicios a pocos pasos: colegios, supermercados, transporte público y fácil acceso a la autopista.",
      },
      en: {
        title: "Bright spacious apartment in Inca, Av. General Luque",
        description:
          "Beautiful 133 m² apartment located in one of the most sought-after areas of Inca, on Avenida General Luque. The property is situated in a building with a lift and comprises 3 bedrooms (one with en-suite bathroom), 2 full bathrooms, an independent kitchen and a large bright living-dining room.\n\nIncludes a large storage room and a garage space in the same building. Equipped with air conditioning and heat pump, ideal for year-round comfort.\n\nAn excellent option both to live in and to invest, with all amenities within walking distance: schools, supermarkets, public transport and easy motorway access.",
      },
    },
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}

export function formatPrice(price: number, unit: string, locale: string): string {
  const formatted = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
  return unit === "€/mes" ? `${formatted}${locale === "es" ? "/mes" : "/mo"}` : formatted;
}
