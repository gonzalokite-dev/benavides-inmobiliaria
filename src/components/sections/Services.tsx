"use client";

import { useTranslations } from "next-intl";
import { FileSearch, Layers, Scale, Home, Building2, Globe, TrendingUp } from "lucide-react";

const icons = [FileSearch, Layers, Scale, Home, Building2, Globe, TrendingUp];

export default function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as Array<{ title: string; description: string }>;

  return (
    <section id="servicios" style={{ backgroundColor: "#faf8f5", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ maxWidth: "640px", marginBottom: "72px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8964a",
            marginBottom: "14px",
          }}>
            {t("eyebrow")}
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(30px, 4vw, 46px)",
            fontWeight: 300,
            color: "#1a2332",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            {t("title")}
          </h2>
          <p style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5c5650",
          }}>
            {t("subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2px",
          backgroundColor: "#e8e4de",
        }} className="svc-grid">
          {items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                style={{
                  backgroundColor: "#faf8f5",
                  padding: "44px 36px",
                  transition: "background-color 0.25s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#faf8f5")}
              >
                <div style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#b8964a",
                  marginBottom: "20px",
                  borderBottom: "1px solid #e8e4de",
                  paddingBottom: "20px",
                }}>
                  <Icon size={20} strokeWidth={1} />
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#1a2332",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: "13px",
                  fontWeight: 300,
                  lineHeight: 1.85,
                  color: "#5c5650",
                }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) { .svc-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
