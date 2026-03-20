"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { type Property } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default function PropertiesClient({ properties }: { properties: Property[] }) {
  const t = useTranslations("properties");
  const searchParams = useSearchParams();

  const [type, setType] = useState(searchParams.get("type") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [beds, setBeds] = useState(searchParams.get("beds") || "");

  const matchesFilters = (p: Property) => {
    if (type && p.type !== type) return false;
    if (maxPrice && p.price > Number(maxPrice)) return false;
    if (beds && (p.specs.bedrooms ?? 0) < Number(beds)) return false;
    return true;
  };

  const enVenta = properties.filter((p) => p.status === "venta" && matchesFilters(p));
  const vendidas = properties.filter((p) => p.status === "vendida" && matchesFilters(p));

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 32px 120px" }}>

      {/* Header */}
      <div style={{ marginBottom: "52px" }}>
        <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8964a", marginBottom: "12px" }}>
          {t("eyebrow")}
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 300,
          color: "#1a2332",
          marginBottom: "14px",
          lineHeight: 1.1,
        }}>
          {t("title")}
        </h1>
        <p style={{ fontSize: "15px", fontWeight: 300, color: "#5c5650", maxWidth: "520px", lineHeight: 1.7 }}>
          {t("subtitle")}
        </p>
      </div>

      {/* Filter bar */}
      <div style={{ display: "flex", gap: "24px", marginBottom: "48px", flexWrap: "wrap", alignItems: "center", paddingBottom: "24px", borderBottom: "1px solid #e8e4de" }}>
        <select value={type} onChange={(e) => setType(e.target.value)} style={selectStyle}>
          <option value="">Tipo</option>
          <option value="piso">Piso</option>
          <option value="chalet">Chalet / Finca</option>
          <option value="oficina">Oficina</option>
          <option value="local">Local</option>
        </select>
        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} style={selectStyle}>
          <option value="">Precio máx.</option>
          <option value="500000">500.000 €</option>
          <option value="1000000">1.000.000 €</option>
          <option value="2000000">2.000.000 €</option>
          <option value="5000000">5.000.000 €</option>
        </select>
        <select value={beds} onChange={(e) => setBeds(e.target.value)} style={selectStyle}>
          <option value="">Dormitorios</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        {(type || maxPrice || beds) && (
          <button onClick={() => { setType(""); setMaxPrice(""); setBeds(""); }} style={{ background: "none", border: "none", color: "#b8964a", fontSize: "12px", cursor: "pointer", textDecoration: "underline", fontFamily: "'Inter', sans-serif" }}>
            Limpiar filtros
          </button>
        )}
        <span style={{ marginLeft: "auto", fontSize: "12px", color: "#9b9590" }}>
          {enVenta.length} en venta
        </span>
      </div>

      {/* En venta */}
      {enVenta.length === 0 ? (
        <p style={{ color: "#9b9590", fontSize: "15px", padding: "40px 0" }}>{t("no_results")}</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "36px" }} className="props-grid">
          {enVenta.map((p) => <PropertyCard key={p.slug} property={p} />)}
        </div>
      )}

      {/* Vendidas */}
      {vendidas.length > 0 && (
        <div style={{ marginTop: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "36px" }}>
            <div style={{ height: "1px", flex: 1, backgroundColor: "#e8e4de" }} />
            <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9b9590", whiteSpace: "nowrap" }}>
              Operaciones cerradas
            </p>
            <div style={{ height: "1px", flex: 1, backgroundColor: "#e8e4de" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "36px", opacity: 0.6 }} className="props-grid">
            {vendidas.map((p) => <PropertyCard key={p.slug} property={p} />)}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) { .props-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .props-grid { grid-template-columns: 1fr !important; } }
        select:focus { outline: none; border-color: #b8964a !important; }
      `}</style>
    </div>
  );
}

const selectStyle: React.CSSProperties = {
  border: "1px solid #e8e4de",
  borderRadius: "2px",
  padding: "9px 14px",
  fontSize: "12px",
  color: "#5c5650",
  backgroundColor: "#fff",
  cursor: "pointer",
  fontFamily: "'Inter', sans-serif",
  transition: "border-color 0.2s",
};
