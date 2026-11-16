"use client";
import { usePathname } from "next/navigation";

export default function JsonLd() {
  const pathname = usePathname();

  let data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Total Blessing Fitness and Travel Tours",
    image: "https://totalblessingfitnessandtraveltours.co.za/images/logo3.png",
    url: "https://totalblessingfitnessandtraveltours.co.za",
    telephone: "+27787589451",
    address: {
      "@type": "PostalAddress",
      streetAddress: "277 Main Rd",
      addressLocality: "Cape Town",
      addressRegion: "Western Cape",
      postalCode: "8060",
      addressCountry: "ZA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.9112,
      longitude: 18.3941,
    },
    priceRange: "R200 - R5000",
    areaServed: "Cape Town, Western Cape, South Africa",
    openingHours: "Mo-Fr 07:30-19:30; Sa 07:00-14:00",
  };

  if (pathname?.includes("/adventures")) {
    data = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Total Blessing Cape Town Adventure Tours",
      url: "https://totalblessingfitnessandtraveltours.co.za/adventures",
      description: "Guided hiking, sandboarding, shark cage diving and wine-tasting tours in Cape Town.",
      image: "https://totalblessingfitnessandtraveltours.co.za/images/logo3.png",
      amenityFeature: [
        "Table Mountain trails",
        "Kirstenbosch Botanical Gardens",
        "Atlantis sand dunes",
      ],
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}