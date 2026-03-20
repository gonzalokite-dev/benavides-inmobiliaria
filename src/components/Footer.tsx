"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const cols = {
    es: [
      { title: "Propiedades", links: [{ label: "En venta", href: `/${locale}/propiedades?status=venta` }, { label: "Ver todo", href: `/${locale}/propiedades` }] },
      { title: "Servicios", links: [{ label: "Real Estate Advisory", href: `/${locale}#servicios` }, { label: "Transaction Management", href: `/${locale}#servicios` }, { label: "Property Management", href: `/${locale}#servicios` }, { label: "Investment Advisory", href: `/${locale}#servicios` }] },
      { title: "Despacho", links: [{ label: "Quiénes somos", href: `/${locale}#nosotros` }, { label: "Contacto", href: `/${locale}#contacto` }, { label: "Benavides Asociados", href: "https://www.benavidesasociados.com" }] },
    ],
    en: [
      { title: "Properties", links: [{ label: "For sale", href: `/${locale}/propiedades?status=venta` }, { label: "View all", href: `/${locale}/propiedades` }] },
      { title: "Services", links: [{ label: "Real Estate Advisory", href: `/${locale}#servicios` }, { label: "Transaction Management", href: `/${locale}#servicios` }, { label: "Property Management", href: `/${locale}#servicios` }, { label: "Investment Advisory", href: `/${locale}#servicios` }] },
      { title: "Firm", links: [{ label: "About us", href: `/${locale}#nosotros` }, { label: "Contact", href: `/${locale}#contacto` }, { label: "Benavides Asociados", href: "https://www.benavidesasociados.com" }] },
    ],
  };

  const currentCols = cols[locale as "es" | "en"] ?? cols.es;

  return (
    <footer style={{ backgroundColor: "#111b28", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Main */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 32px 48px", display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: "48px" }} className="footer-grid">

        {/* Brand */}
        <div>
          <Image
            src="/logo.png"
            alt="Benavides"
            width={140}
            height={36}
            style={{ objectFit: "contain", objectPosition: "left", filter: "brightness(0) invert(1)", marginBottom: "16px", opacity: 0.85 }}
          />
          <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", maxWidth: "240px" }}>
            {t("tagline")}
          </p>
        </div>

        {/* Columns */}
        {currentCols.map((col) => (
          <div key={col.title}>
            <p style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px", fontWeight: 500 }}>
              {col.title}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#b8964a")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "20px 32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", fontWeight: 300 }}>
          © {new Date().getFullYear()} Benavides Asociados. {t("rights")}
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {[{ key: "legal", label: t("legal") }, { key: "privacy", label: t("privacy") }, { key: "cookies", label: t("cookies") }].map(({ key, label }) => (
            <Link
              key={key}
              href={`/${locale}/${key}`}
              style={{ color: "rgba(255,255,255,0.25)", textDecoration: "none", fontSize: "12px", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#b8964a")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 500px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
