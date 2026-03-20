"use client";

import { useLocale } from "next-intl";

export default function InternationalClients() {
  const locale = useLocale();
  const labels = {
    es: {
      eyebrow: "Especialistas en clientes internacionales",
      title: "Trabajamos con propietarios no residentes de todo el mundo",
      body: "Tanto si resides en Europa, América o cualquier otra parte del mundo, nuestra experiencia con clientes internacionales nos permite gestionar tu venta de forma remota, segura y fiscalmente eficiente.",
      countries: [
        { flag: "🇩🇪", name: "Alemania" },
        { flag: "🇬🇧", name: "Reino Unido" },
        { flag: "🇸🇪", name: "Suecia" },
        { flag: "🇺🇸", name: "Estados Unidos" },
        { flag: "🇨🇭", name: "Suiza" },
        { flag: "🇫🇷", name: "Francia" },
      ],
      pillars: [
        {
          title: "Gestión completamente remota",
          body: "Gestionamos toda la operación sin que tenga que desplazarse a España. Notaría, registro, fiscalidad y entrega de llaves, coordinados desde el primer al último día.",
        },
        {
          title: "Fiscalidad del no residente resuelta",
          body: "IRNR, plusvalías, retención del 3%, certificado de no residencia fiscal. Conocemos cada obligación y la gestionamos antes de que sea un problema.",
        },
        {
          title: "Atención en su idioma",
          body: "Trabajamos en español, inglés y alemán. Cada documento, cada conversación y cada decisión, en el idioma con el que usted se siente seguro.",
        },
      ],
    },
    en: {
      eyebrow: "Specialists in international clients",
      title: "We work with non-resident owners from around the world",
      body: "Whether you live in Europe, the Americas or anywhere else in the world, our experience with international clients allows us to manage your sale remotely, securely and in a tax-efficient manner.",
      countries: [
        { flag: "🇩🇪", name: "Germany" },
        { flag: "🇬🇧", name: "United Kingdom" },
        { flag: "🇸🇪", name: "Sweden" },
        { flag: "🇺🇸", name: "United States" },
        { flag: "🇨🇭", name: "Switzerland" },
        { flag: "🇫🇷", name: "France" },
      ],
      pillars: [
        {
          title: "Fully remote management",
          body: "We handle the entire transaction without you needing to travel to Spain. Notary, registry, tax and key handover — coordinated from start to finish.",
        },
        {
          title: "Non-resident taxation handled",
          body: "IRNR, capital gains, 3% retention, non-resident tax certificate. We know every obligation and manage it before it becomes a problem.",
        },
        {
          title: "Service in your language",
          body: "We work in Spanish, English and German. Every document, every conversation and every decision, in the language you feel comfortable with.",
        },
      ],
    },
  };
  const l = labels[locale as "es" | "en"] ?? labels.es;

  return (
    <section id="clientes-internacionales" style={{ backgroundColor: "#1a2332", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8964a",
            marginBottom: "14px",
          }}>
            {l.eyebrow}
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            {l.title}
          </h2>
          <p style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.5)",
            maxWidth: "620px",
            margin: "0 auto",
          }}>
            {l.body}
          </p>
        </div>

        {/* Country pills */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "72px",
        }}>
          {l.countries.map(({ flag, name }) => (
            <span key={name} style={{
              backgroundColor: "#fff",
              color: "#1a2332",
              fontSize: "13px",
              fontWeight: 400,
              padding: "10px 20px",
              borderRadius: "2px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              letterSpacing: "0.04em",
            }}>
              {flag} {name}
            </span>
          ))}
        </div>

        {/* Pillars */}
        <div className="intl-stats" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          backgroundColor: "rgba(255,255,255,0.08)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}>
          {l.pillars.map(({ title, body }) => (
            <div key={title} style={{
              padding: "48px 36px",
              backgroundColor: "#1a2332",
            }}>
              <div style={{
                width: "24px",
                height: "1px",
                backgroundColor: "#b8964a",
                marginBottom: "24px",
              }} />
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#fff",
                lineHeight: 1.3,
                marginBottom: "14px",
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: "13px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.45)",
              }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .intl-stats { grid-template-columns: 1fr !important; }
          #clientes-internacionales { padding: 64px 24px !important; }
        }
        @media (max-width: 480px) {
          #clientes-internacionales { padding: 48px 16px !important; }
          .intl-stats > div { padding: 32px 20px !important; }
        }
      `}</style>
    </section>
  );
}
