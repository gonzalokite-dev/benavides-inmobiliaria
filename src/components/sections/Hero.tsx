"use client";

import { useLocale } from "next-intl";

export default function Hero() {
  const locale = useLocale();

  const labels = {
    es: {
      eyebrow: "Benavides Real Estate · Mallorca",
      title: "Inmobiliaria en Mallorca con asesoramiento legal y fiscal",
      subtitle: "Compra, vende e invierte en Mallorca con plena seguridad jurídica y fiscal",
      body: "Gestionamos operaciones inmobiliarias de forma integral para residentes y no residentes: asesoramiento legal, planificación fiscal y coordinación completa de principio a fin.",
      ctaPrimary: "Solicitar valoración gratuita",
      ctaSecondary: "Hablar con un asesor",
      trust1: "✓ Seguridad jurídica en cada operación",
      trust2: "✓ Fiscalidad adaptada a tu perfil",
      trust3: "✓ Jurídico, fiscal e inmobiliario en un solo equipo",
    },
    en: {
      eyebrow: "Benavides Real Estate · Mallorca",
      title: "Real estate in Mallorca with legal and tax advisory",
      subtitle: "Buy, sell and invest in Mallorca with full legal and tax certainty",
      body: "We manage real estate transactions end-to-end for both residents and non-residents: legal advice, tax planning and complete coordination from start to finish.",
      ctaPrimary: "Request free valuation",
      ctaSecondary: "Speak with an advisor",
      trust1: "✓ Legal security on every transaction",
      trust2: "✓ Tax advice tailored to your profile",
      trust3: "✓ Legal, tax and real estate in one team",
    },
  };
  const l = labels[locale as "es" | "en"] ?? labels.es;

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: "720px", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }} />
      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(15,22,35,0.85) 0%, rgba(15,22,35,0.6) 60%, rgba(15,22,35,0.2) 100%)",
      }} />
      {/* Bottom fade */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "200px",
        background: "linear-gradient(to bottom, transparent, rgba(15,22,35,0.5))",
      }} />

      {/* Content */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          padding: "0 48px",
          boxSizing: "border-box",
        }} className="hero-inner">
          <div style={{ maxWidth: "680px" }}>

            {/* Eyebrow */}
            <p style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#d4af6e",
              marginBottom: "24px",
            }}>
              {l.eyebrow}
            </p>

            {/* H1 */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: "20px",
            }}>
              {l.title}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.80)",
              marginBottom: "16px",
            }}>
              {l.subtitle}
            </p>

            {/* Body */}
            <p style={{
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.52)",
              marginBottom: "40px",
            }}>
              {l.body}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
              <a
                href="#contacto"
                style={{
                  backgroundColor: "#b8964a",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "15px 32px",
                  borderRadius: "2px",
                  transition: "background-color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
              >
                {l.ctaPrimary}
              </a>
              <a
                href="https://cal.com/benavides-asociados/consulta-asesor-fiscal"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "14px 32px",
                  borderRadius: "2px",
                  border: "1px solid rgba(255,255,255,0.45)",
                  transition: "border-color 0.2s, color 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#d4af6e";
                  (e.currentTarget as HTMLElement).style.color = "#d4af6e";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
              >
                {l.ctaSecondary}
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0", rowGap: "8px" }}>
              {[l.trust1, l.trust2, l.trust3].map((badge, i) => (
                <span key={badge} style={{ display: "flex", alignItems: "center" }}>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.06em",
                    color: "rgba(255,255,255,0.45)",
                    whiteSpace: "nowrap",
                  }}>
                    {badge}
                  </span>
                  {i < 2 && (
                    <span style={{
                      display: "inline-block",
                      width: "1px",
                      height: "10px",
                      backgroundColor: "rgba(255,255,255,0.18)",
                      margin: "0 16px",
                    }} />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        opacity: 0.35,
      }}>
        <div style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, transparent, #fff)" }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-inner { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
