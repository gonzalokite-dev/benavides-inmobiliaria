"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { type Property, formatPrice } from "@/data/properties";
import { BedDouble, Bath, Maximize2 } from "lucide-react";
import { useState } from "react";

export default function PropertyCard({ property }: { property: Property }) {
  const t = useTranslations("properties");
  const locale = useLocale() as "es" | "en";
  const info = property.translations[locale];
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/${locale}/propiedades/${property.slug}`} style={{ textDecoration: "none", display: "flex", height: "100%" }}>
      <article
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ cursor: "pointer", display: "flex", flexDirection: "column", width: "100%" }}
      >
        {/* Image container with crossfade */}
        <div style={{ position: "relative", height: "260px", overflow: "hidden", borderRadius: "3px", marginBottom: "16px" }}>
          {/* Primary image */}
          <Image
            src={property.images[0]}
            alt={info.title}
            fill
            style={{
              objectFit: "cover",
              transition: "opacity 0.5s ease, transform 0.6s ease",
              opacity: hovered && property.images[1] ? 0 : 1,
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Secondary image (hover) */}
          {property.images[1] && (
            <Image
              src={property.images[1]}
              alt={info.title}
              fill
              style={{
                objectFit: "cover",
                transition: "opacity 0.5s ease, transform 0.6s ease",
                opacity: hovered ? 1 : 0,
                transform: hovered ? "scale(1.04)" : "scale(1)",
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {/* Badges */}
          <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px" }}>
            <span style={{
              backgroundColor: property.status === "vendida" ? "#5c5650" : "#1a2332",
              color: "#fff",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "5px 10px",
              borderRadius: "2px",
            }}>
              {property.status === "vendida"
                ? (locale === "en" ? "Sold" : "Vendida")
                : t("for_sale")}
            </span>
          </div>

          {/* Gradient bottom */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "80px",
            background: "linear-gradient(to top, rgba(15,22,35,0.5), transparent)",
            transition: "opacity 0.3s",
            opacity: hovered ? 1 : 0,
          }} />
        </div>

        {/* Info */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Location */}
          <p style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9b9590",
            marginBottom: "6px",
          }}>
            {property.location.district}, {property.location.city}
          </p>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "19px",
            fontWeight: 400,
            color: "#1a2332",
            lineHeight: 1.3,
            marginBottom: "10px",
          }}>
            {info.title}
          </h3>

          {/* Specs + Price row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
            <div style={{ display: "flex", gap: "14px", color: "#9b9590", fontSize: "12px" }}>
              {property.specs.sqm !== undefined && (
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Maximize2 size={12} strokeWidth={1.5} /> {property.specs.sqm}m²
                </span>
              )}
              {property.specs.bedrooms !== undefined && (
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <BedDouble size={12} strokeWidth={1.5} /> {property.specs.bedrooms}
                </span>
              )}
              {property.specs.bathrooms !== undefined && (
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Bath size={12} strokeWidth={1.5} /> {property.specs.bathrooms}
                </span>
              )}
            </div>

            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              fontWeight: 500,
              color: "#1a2332",
            }}>
              {formatPrice(property.price, property.priceUnit, locale)}
            </p>
          </div>

          {/* Bottom line */}
          <div style={{
            height: "1px",
            backgroundColor: "#e8e4de",
            marginTop: "16px",
            transition: "background-color 0.3s",
          }} />
        </div>
      </article>
    </Link>
  );
}
