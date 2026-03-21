"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const serviciosMenu = {
  es: [
    { slug: "asesor-inmobiliario-mallorca",           label: "Asesoramiento Inmobiliario" },
    { slug: "vender-piso-mallorca",                   label: "Compraventa de Inmuebles" },
    { slug: "asesoria-fiscal-inmobiliaria-mallorca",  label: "Fiscalidad e Impuestos" },
    { slug: "gestion-alquiler-mallorca",              label: "Gestión y Alquiler" },
    { slug: "planificacion-patrimonial-inmobiliaria", label: "Planificación Patrimonial" },
    { slug: "comprar-propiedad-mallorca-extranjeros", label: "Clientes Internacionales" },
    { slug: "inversion-inmobiliaria-mallorca",        label: "Inversión Inmobiliaria" },
  ],
  en: [
    { slug: "asesor-inmobiliario-mallorca",           label: "Real Estate Advisory" },
    { slug: "vender-piso-mallorca",                   label: "Property Transactions" },
    { slug: "asesoria-fiscal-inmobiliaria-mallorca",  label: "Tax & Legal" },
    { slug: "gestion-alquiler-mallorca",              label: "Rental Management" },
    { slug: "planificacion-patrimonial-inmobiliaria", label: "Wealth Planning" },
    { slug: "comprar-propiedad-mallorca-extranjeros", label: "International Clients" },
    { slug: "inversion-inmobiliaria-mallorca",        label: "Investment Advisory" },
  ],
};

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);       // desktop dropdown
  const [mSvcOpen, setMSvcOpen] = useState(false);     // mobile accordion
  const [atTop, setAtTop] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.scrollY < 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroPage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const transparent = isHeroPage && atTop;

  const otherLocale = locale === "es" ? "en" : "es";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const items = serviciosMenu[locale as "es" | "en"] ?? serviciosMenu.es;

  const textColor = transparent ? "rgba(255,255,255,0.92)" : "#1a2332";
  const hoverColor = transparent ? "#fff" : "#b8964a";

  const navLinks = [
    { href: `/${locale}/propiedades`, label: t("properties") },
    { href: `#proceso`, label: "Proceso" },
    { href: `#nosotros`, label: t("about") },
    { href: `/${locale}/blog`, label: "Blog" },
    { href: `#contacto`, label: t("contact") },
  ];

  return (
    <>
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: transparent ? "transparent" : "rgba(255,255,255,0.97)",
        backdropFilter: transparent ? "none" : "blur(12px)",
        borderBottom: transparent ? "none" : "1px solid #e8e4de",
        boxShadow: transparent ? "none" : "0 1px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "0 32px",
        height: "76px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <Link href={`/${locale}`} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src={transparent ? "/logo-white.png" : "/logo-navy.png"}
            alt="Benavides Real Estate"
            width={148} height={38}
            style={{ objectFit: "contain", objectPosition: "left", transition: "opacity 0.4s" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="desk-nav">

          {/* Propiedades */}
          <a
            href={`/${locale}/propiedades`}
            style={{ color: textColor, textDecoration: "none", fontSize: "13px", fontWeight: 400, letterSpacing: "0.06em", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = hoverColor)}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textColor)}
          >
            {t("properties")}
          </a>

          {/* Servicios dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setSvcOpen(true)}
            onMouseLeave={() => setSvcOpen(false)}
          >
            <button
              style={{
                display: "flex", alignItems: "center", gap: "4px",
                color: svcOpen ? hoverColor : textColor,
                background: "none", border: "none", cursor: "pointer",
                fontSize: "13px", fontWeight: 400, letterSpacing: "0.06em",
                padding: 0, transition: "color 0.2s",
              }}
            >
              {t("services")}
              <ChevronDown
                size={13}
                style={{
                  transition: "transform 0.2s",
                  transform: svcOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {/* Dropdown panel */}
            {svcOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 16px)", left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                border: "1px solid #e8e4de",
                boxShadow: "0 8px 32px rgba(26,35,50,0.12)",
                minWidth: "260px",
                zIndex: 100,
              }}>
                {/* Gold top bar */}
                <div style={{ height: "2px", backgroundColor: "#b8964a" }} />
                <div style={{ padding: "8px 0" }}>
                  {items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${locale}/servicios/${item.slug}`}
                      style={{
                        display: "block",
                        padding: "10px 20px",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#1a2332",
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                        transition: "background-color 0.15s, color 0.15s",
                      }}
                      className="svc-dropdown-item"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div style={{ height: "1px", backgroundColor: "#e8e4de", margin: "8px 20px" }} />
                  <a
                    href={`/${locale}#servicios`}
                    style={{
                      display: "block", padding: "10px 20px",
                      fontSize: "11px", fontWeight: 500,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "#b8964a", textDecoration: "none",
                    }}
                  >
                    {locale === "es" ? "Ver todos los servicios" : "All services"} →
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: textColor, textDecoration: "none", fontSize: "13px", fontWeight: 400, letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = hoverColor)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textColor)}
            >
              {link.label}
            </a>
          ))}

          {/* Lang switcher */}
          <Link
            href={localePath}
            style={{ color: textColor, textDecoration: "none", fontSize: "12px", fontWeight: 400, letterSpacing: "0.1em", opacity: 0.55, transition: "opacity 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
          >
            {otherLocale.toUpperCase()}
          </Link>

          {/* CTA */}
          <a
            href="https://cal.com/benavides-asociados/consulta-asesor-fiscal"
            target="_blank" rel="noopener noreferrer"
            style={{
              backgroundColor: "#b8964a", color: "#fff", textDecoration: "none",
              fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "11px 24px", borderRadius: "2px",
              transition: "background-color 0.2s", fontFamily: "'Inter', sans-serif",
              display: "inline-block",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", color: textColor, cursor: "pointer" }}
          className="mob-toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "#fff", borderTop: "1px solid #e8e4de",
          padding: "24px 32px 32px", display: "flex", flexDirection: "column", gap: "4px",
        }}>
          {/* Propiedades */}
          <a
            href={`/${locale}/propiedades`}
            onClick={() => setMenuOpen(false)}
            style={{ color: "#1a2332", textDecoration: "none", fontSize: "15px", fontFamily: "'Playfair Display', serif", fontWeight: 400, padding: "10px 0" }}
          >
            {t("properties")}
          </a>

          {/* Servicios accordion */}
          <div>
            <button
              onClick={() => setMSvcOpen(!mSvcOpen)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", background: "none", border: "none", cursor: "pointer",
                color: "#1a2332", fontSize: "15px", fontFamily: "'Playfair Display', serif",
                fontWeight: 400, padding: "10px 0", textAlign: "left",
              }}
            >
              {t("services")}
              <ChevronDown size={16} style={{ transition: "transform 0.2s", transform: mSvcOpen ? "rotate(180deg)" : "rotate(0deg)", color: "#b8964a" }} />
            </button>
            {mSvcOpen && (
              <div style={{ paddingLeft: "16px", paddingBottom: "8px", display: "flex", flexDirection: "column", gap: "2px", borderLeft: "2px solid #e8e4de" }}>
                {items.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${locale}/servicios/${item.slug}`}
                    onClick={() => setMenuOpen(false)}
                    style={{ color: "#5c5650", textDecoration: "none", fontSize: "14px", fontWeight: 300, padding: "7px 0" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: "#1a2332", textDecoration: "none", fontSize: "15px", fontFamily: "'Playfair Display', serif", fontWeight: 400, padding: "10px 0" }}
            >
              {link.label}
            </a>
          ))}

          <div style={{ display: "flex", gap: "16px", paddingTop: "16px", borderTop: "1px solid #e8e4de", marginTop: "8px" }}>
            <Link href={localePath} style={{ color: "#9b9590", fontSize: "12px", textDecoration: "none" }}>
              {otherLocale.toUpperCase()}
            </Link>
            <a
              href="https://cal.com/benavides-asociados/consulta-asesor-fiscal"
              target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: "#b8964a", color: "#fff", textDecoration: "none", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "10px 20px", borderRadius: "2px", fontFamily: "'Inter', sans-serif", display: "inline-block" }}
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .mob-toggle { display: block !important; }
        }
        .svc-dropdown-item:hover {
          background-color: #faf8f5 !important;
          color: #b8964a !important;
        }
      `}</style>
    </nav>
    <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
