"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import {
  ArrowLeft, BedDouble, Bath, Maximize2, Car, Waves, Sun,
  ArrowUp, Zap, Calendar, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import { type Property, formatPrice } from "@/data/properties";

export default function PropertyDetail({ property }: { property: Property }) {
  const t = useTranslations("properties");
  const locale = useLocale() as "es" | "en";
  const info = property.translations[locale];
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prevImg = () => setActiveImg((i) => (i === 0 ? property.images.length - 1 : i - 1));
  const nextImg = () => setActiveImg((i) => (i === property.images.length - 1 ? 0 : i + 1));

  const specs = [
    { icon: <Maximize2 size={14} strokeWidth={1.5} />, label: t("sqm"), value: `${property.specs.sqm} m²` },
    ...(property.specs.bedrooms !== undefined ? [{ icon: <BedDouble size={14} strokeWidth={1.5} />, label: t("bedrooms"), value: String(property.specs.bedrooms) }] : []),
    ...(property.specs.bathrooms !== undefined ? [{ icon: <Bath size={14} strokeWidth={1.5} />, label: t("bathrooms"), value: String(property.specs.bathrooms) }] : []),
    ...(property.specs.floor ? [{ icon: <ArrowUp size={14} strokeWidth={1.5} />, label: t("floor"), value: property.specs.floor }] : []),
    { icon: <Car size={14} strokeWidth={1.5} />, label: t("garage"), value: property.specs.garage ? t("yes") : t("no") },
    { icon: <Sun size={14} strokeWidth={1.5} />, label: t("terrace"), value: property.specs.terrace ? t("yes") : t("no") },
    ...(property.specs.pool !== undefined ? [{ icon: <Waves size={14} strokeWidth={1.5} />, label: t("pool"), value: property.specs.pool ? t("yes") : t("no") }] : []),
    ...(property.specs.orientation ? [{ icon: <Sun size={14} strokeWidth={1.5} />, label: t("orientation"), value: property.specs.orientation }] : []),
    ...(property.specs.yearBuilt ? [{ icon: <Calendar size={14} strokeWidth={1.5} />, label: t("year"), value: String(property.specs.yearBuilt) }] : []),
    ...(property.specs.energyRating ? [{ icon: <Zap size={14} strokeWidth={1.5} />, label: t("energy"), value: property.specs.energyRating }] : []),
  ];

  return (
    <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* Hero image full width */}
      <div style={{ position: "relative", height: "60vh", minHeight: "400px", cursor: "zoom-in" }} onClick={() => setLightbox(activeImg)}>
        <Image
          src={property.images[activeImg]}
          alt={info.title}
          fill
          style={{ objectFit: "cover", transition: "opacity 0.3s" }}
          sizes="100vw"
          priority
        />
        {/* Dark overlay bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "160px", background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />

        {/* Nav arrows */}
        {property.images.length > 1 && (
          <>
            <button onClick={(e) => { e.stopPropagation(); prevImg(); }} style={arrowBtn("left")}><ChevronLeft size={18} /></button>
            <button onClick={(e) => { e.stopPropagation(); nextImg(); }} style={arrowBtn("right")}><ChevronRight size={18} /></button>
          </>
        )}

        {/* Counter */}
        <div style={{ position: "absolute", bottom: "20px", right: "24px", backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)", color: "rgba(255,255,255,0.85)", fontSize: "11px", padding: "4px 12px", borderRadius: "2px" }}>
          {activeImg + 1} / {property.images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {property.images.length > 1 && (
        <div style={{ backgroundColor: "#faf8f5", borderBottom: "1px solid #e8e4de", padding: "12px 32px", display: "flex", gap: "8px", overflowX: "auto" }}>
          {property.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              style={{
                position: "relative", width: "72px", height: "52px", flexShrink: 0,
                border: i === activeImg ? "2px solid #b8964a" : "2px solid transparent",
                borderRadius: "2px", overflow: "hidden", padding: 0, cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              <Image src={img} alt={`Foto ${i + 1}`} fill style={{ objectFit: "cover" }} sizes="72px" />
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px 100px" }}>

        {/* Back */}
        <Link
          href={`/${locale}/propiedades`}
          style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#9b9590", textDecoration: "none", fontSize: "12px", letterSpacing: "0.06em", marginBottom: "40px", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#b8964a")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9b9590")}
        >
          <ArrowLeft size={13} strokeWidth={1.5} /> {t("back")}
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "60px", alignItems: "start" }} className="detail-grid">

          {/* Left */}
          <div>
            {/* Badge + Location */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{
                backgroundColor: property.status === "venta" ? "#1a2332" : "#b8964a",
                color: "#fff", fontSize: "9px", fontWeight: 500, letterSpacing: "0.14em",
                textTransform: "uppercase", padding: "4px 10px", borderRadius: "2px",
              }}>
                {property.status === "venta" ? t("for_sale") : t("for_rent")}
              </span>
              <span style={{ fontSize: "12px", color: "#9b9590", letterSpacing: "0.08em" }}>
                {property.location.district} · {property.location.city}
              </span>
            </div>

            {/* Title */}
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 300, color: "#1a2332", lineHeight: 1.18, marginBottom: "32px" }}>
              {info.title}
            </h1>

            {/* Quick specs bar */}
            <div style={{ display: "flex", gap: "28px", padding: "20px 0", borderTop: "1px solid #e8e4de", borderBottom: "1px solid #e8e4de", marginBottom: "36px" }}>
              {[
                { icon: <Maximize2 size={14} strokeWidth={1.5} />, val: `${property.specs.sqm} m²` },
                ...(property.specs.bedrooms !== undefined ? [{ icon: <BedDouble size={14} strokeWidth={1.5} />, val: `${property.specs.bedrooms} dorm.` }] : []),
                ...(property.specs.bathrooms !== undefined ? [{ icon: <Bath size={14} strokeWidth={1.5} />, val: `${property.specs.bathrooms} baños` }] : []),
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#5c5650", fontSize: "13px" }}>
                  <span style={{ color: "#b8964a" }}>{s.icon}</span> {s.val}
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332", marginBottom: "16px" }}>
              {locale === "es" ? "Descripción" : "Description"}
            </h2>
            <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#5c5650" }}>
              {info.description}
            </p>
          </div>

          {/* Right: sticky card */}
          <div style={{ position: "sticky", top: "96px" }}>

            {/* Price card */}
            <div style={{ border: "1px solid #e8e4de", borderRadius: "3px", padding: "32px", marginBottom: "16px", backgroundColor: "#fff" }}>
              <p style={{ fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9b9590", marginBottom: "8px" }}>
                {property.location.address}
              </p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "34px", fontWeight: 400, color: "#1a2332", marginBottom: "24px" }}>
                {formatPrice(property.price, property.priceUnit, locale)}
              </p>
              <a
                href={`/${locale}#contacto`}
                style={{
                  display: "block", textAlign: "center", backgroundColor: "#b8964a", color: "#fff",
                  textDecoration: "none", fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
                  textTransform: "uppercase", padding: "15px", borderRadius: "2px", transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
              >
                {t("request")}
              </a>
            </div>

            {/* Specs card */}
            <div style={{ border: "1px solid #e8e4de", borderRadius: "3px", padding: "28px", backgroundColor: "#faf8f5" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 400, color: "#1a2332", marginBottom: "20px" }}>
                {t("specs_title")}
              </h3>
              {specs.map((s, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontSize: "13px", padding: "11px 0",
                  borderBottom: i < specs.length - 1 ? "1px solid #e8e4de" : "none",
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "#9b9590" }}>
                    <span style={{ color: "#b8964a" }}>{s.icon}</span> {s.label}
                  </span>
                  <span style={{ color: "#1a2332", fontWeight: 400 }}>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.93)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out" }}
        >
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "#fff", cursor: "pointer", opacity: 0.6 }}>
            <X size={26} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === 0 ? property.images.length - 1 : (l ?? 0) - 1)); }} style={{ ...arrowBtn("left"), position: "fixed" }}>
            <ChevronLeft size={22} />
          </button>
          <div style={{ position: "relative", width: "90vw", height: "82vh" }} onClick={(e) => e.stopPropagation()}>
            <Image src={property.images[lightbox]} alt={info.title} fill style={{ objectFit: "contain" }} sizes="90vw" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l === property.images.length - 1 ? 0 : (l ?? 0) + 1)); }} style={{ ...arrowBtn("right"), position: "fixed" }}>
            <ChevronRight size={22} />
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .detail-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}

function arrowBtn(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute", [side]: "16px", top: "50%", transform: "translateY(-50%)",
    backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(6px)",
    border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
    width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center",
    color: "#fff", cursor: "pointer", zIndex: 2, transition: "background-color 0.2s",
  };
}
