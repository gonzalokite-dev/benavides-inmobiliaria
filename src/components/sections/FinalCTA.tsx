"use client";

import { useLocale } from "next-intl";

export default function FinalCTA() {
  const locale = useLocale();
  const labels = {
    es: {
      title: "Opera en el mercado inmobiliario de Mallorca con total seguridad",
      body: "Ya seas residente o no residente, te ayudamos a comprar, vender o invertir en Mallorca maximizando el resultado neto y con plena seguridad jurídica y fiscal. Primera consulta sin coste.",
      ctaPrimary: "Solicitar valoración gratuita",
      ctaSecondary: "Contactar ahora",
      badges: ["Sin compromiso", "Respuesta en 24h", "Residentes y no residentes"],
    },
    en: {
      title: "Operate in the Mallorca property market with complete confidence",
      body: "Whether you are a resident or non-resident, we help you buy, sell or invest in Mallorca maximising your net result with full legal and tax security. First consultation at no cost.",
      ctaPrimary: "Request free valuation",
      ctaSecondary: "Contact us now",
      badges: ["No commitment", "Response within 24h", "Residents and non-residents"],
    },
  };
  const l = labels[locale as "es" | "en"] ?? labels.es;

  return (
    <section
      id="contacto-final"
      style={{
        background: "linear-gradient(135deg, #1a2332 0%, #243044 100%)",
        padding: "120px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(30px, 4.5vw, 56px)",
          fontWeight: 300,
          color: "#fff",
          lineHeight: 1.12,
          marginBottom: "20px",
        }}>
          {l.title}
        </h2>
        <p style={{
          fontSize: "15px",
          fontWeight: 300,
          lineHeight: 1.8,
          color: "rgba(255,255,255,0.6)",
          marginBottom: "44px",
        }}>
          {l.body}
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}>
          <a
            href="#contacto"
            className="fcta-primary"
            style={{
              backgroundColor: "#b8964a",
              color: "#fff",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "16px 36px",
              borderRadius: "2px",
              display: "inline-block",
              transition: "background-color 0.2s",
            }}
          >
            {l.ctaPrimary}
          </a>
          <a
            href="#contacto"
            className="fcta-secondary"
            style={{
              backgroundColor: "transparent",
              color: "#fff",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "15px 36px",
              borderRadius: "2px",
              border: "1px solid rgba(255,255,255,0.4)",
              display: "inline-block",
              transition: "border-color 0.2s",
            }}
          >
            {l.ctaSecondary}
          </a>
        </div>

        {/* Trust micro-badges */}
        <div style={{
          display: "flex",
          gap: "28px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {l.badges.map((badge) => (
            <span key={badge} style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
            }}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .fcta-primary:hover { background-color: #d4af6e !important; }
        .fcta-secondary:hover { border-color: rgba(255,255,255,0.8) !important; }
        @media (max-width: 768px) {
          #contacto-final { padding: 72px 24px !important; }
        }
        @media (max-width: 480px) {
          #contacto-final { padding: 48px 16px !important; }
          .fcta-primary, .fcta-secondary { width: 100%; text-align: center; box-sizing: border-box; }
        }
      `}</style>
    </section>
  );
}
