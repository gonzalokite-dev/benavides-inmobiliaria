import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

export default async function PropertiesPreview({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "properties" });
  const featured = properties.filter((p) => p.featured && p.status === "venta").slice(0, 3);
  const vendidas = properties.filter((p) => p.status === "vendida");


  return (
    <section id="propiedades" style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "52px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8964a", marginBottom: "10px" }}>
              {t("eyebrow")}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, color: "#1a2332", lineHeight: 1.1 }}>
              {t("title")}
            </h2>
          </div>
          <Link href={`/${locale}/propiedades`} className="prop-preview-link">
            {t("all")} <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Grid — venta first, then vendidas */}
        {[...featured, ...vendidas].length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "36px" }} className="prop-preview-grid">
            {[...featured, ...vendidas].map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "15px", color: "#9b9590", fontWeight: 300, padding: "40px 0" }}>
            {locale === "en" ? "No properties currently available." : "No hay propiedades disponibles en este momento."}
          </p>
        )}
      </div>

      <style>{`
        @media (max-width: 960px) { .prop-preview-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .prop-preview-grid { grid-template-columns: 1fr !important; } }
        .prop-preview-link {
          display: inline-flex; align-items: center; gap: 8px;
          color: #1a2332; text-decoration: none; font-size: 12px;
          font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          border-bottom: 1px solid #1a2332; padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .prop-preview-link:hover { color: #b8964a; border-color: #b8964a; }
      `}</style>
    </section>
  );
}
