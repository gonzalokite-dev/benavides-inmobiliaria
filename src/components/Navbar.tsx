"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BookingModal from "@/components/BookingModal";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroPage = pathname === `/${locale}` || pathname === `/${locale}/`;
  const transparent = isHeroPage && atTop;

  const otherLocale = locale === "es" ? "en" : "es";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  const navLinks = [
    { href: `/${locale}/propiedades`, label: t("properties") },
    { href: `#servicios`, label: t("services") },
    { href: `#proceso`, label: "Proceso" },
    { href: `#nosotros`, label: t("about") },
    { href: `/${locale}/blog`, label: "Blog" },
    { href: `#contacto`, label: t("contact") },
  ];

  const textColor = transparent ? "rgba(255,255,255,0.92)" : "#1a2332";
  const hoverColor = transparent ? "#fff" : "#b8964a";

  return (
    <>
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: transparent ? "transparent" : "rgba(255,255,255,0.97)",
        backdropFilter: transparent ? "none" : "blur(12px)",
        borderBottom: transparent ? "none" : "1px solid #e8e4de",
        boxShadow: transparent ? "none" : "0 1px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 32px",
        height: "76px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href={`/${locale}`} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image
            src={transparent ? "/logo-white.png" : "/logo-navy.png"}
            alt="Benavides Real Estate"
            width={148}
            height={38}
            style={{
              objectFit: "contain",
              objectPosition: "left",
              transition: "opacity 0.4s",
            }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }} className="desk-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: textColor,
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.06em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = hoverColor)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textColor)}
            >
              {link.label}
            </a>
          ))}

          {/* Lang switcher */}
          <Link
            href={localePath}
            style={{
              color: textColor,
              textDecoration: "none",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              opacity: 0.55,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.55")}
          >
            {otherLocale.toUpperCase()}
          </Link>

          {/* CTA — opens booking modal */}
          <button
            onClick={() => setModalOpen(true)}
            style={{
              backgroundColor: "#b8964a",
              color: "#fff",
              border: "none",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "11px 24px",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "background-color 0.2s",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
          >
            {t("cta")}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: textColor,
            cursor: "pointer",
          }}
          className="mob-toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "#fff",
          borderTop: "1px solid #e8e4de",
          padding: "24px 32px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#1a2332",
                textDecoration: "none",
                fontSize: "15px",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "16px", paddingTop: "8px", borderTop: "1px solid #e8e4de" }}>
            <Link href={localePath} style={{ color: "#9b9590", fontSize: "12px", textDecoration: "none" }}>
              {otherLocale.toUpperCase()}
            </Link>
            <button
              onClick={() => { setMenuOpen(false); setModalOpen(true); }}
              style={{ backgroundColor: "#b8964a", color: "#fff", border: "none", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", padding: "10px 20px", borderRadius: "2px", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
            >
              {t("cta")}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desk-nav { display: none !important; }
          .mob-toggle { display: block !important; }
        }
      `}</style>
    </nav>
    <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
