"use client";

import { useLocale } from "next-intl";
import { Shield, Calculator, BarChart2 } from "lucide-react";

export default function ValueProposition() {
  const locale = useLocale();
  const labels = {
    es: {
      eyebrow: "Benavides Real Estate",
      title: "Mucho más que una inmobiliaria tradicional",
      body: "A diferencia de las agencias inmobiliarias convencionales, integramos asesoría fiscal, jurídica y estrategia inmobiliaria en un único servicio, para residentes y no residentes que compran, venden o invierten en Mallorca.",
      cards: [
        { title: "Seguridad jurídica", desc: "Supervisamos toda la operación para evitar riesgos legales, desde la revisión documental hasta la firma ante notario." },
        { title: "Optimización fiscal", desc: "Analizamos tu situación fiscal —residente o no residente— para reducir la carga impositiva y maximizar el resultado neto de la operación." },
        { title: "Estrategia basada en datos", desc: "Definimos el mejor momento y precio de venta con análisis de mercado real y conocimiento local de Mallorca." },
      ],
    },
    en: {
      eyebrow: "Benavides Real Estate",
      title: "Much more than a traditional estate agency",
      body: "Unlike conventional estate agencies, we integrate tax advisory, legal expertise and real estate strategy into a single service — for residents and non-residents buying, selling or investing in Mallorca.",
      cards: [
        { title: "Legal security", desc: "We supervise the entire transaction to prevent legal risks, from document review to signing before a notary." },
        { title: "Tax optimisation", desc: "We analyse your tax situation — resident or non-resident — to reduce the tax burden and maximise the net result of the transaction." },
        { title: "Data-driven strategy", desc: "We identify the best time and price to sell using real market analysis and local knowledge of Mallorca." },
      ],
    },
  };
  const l = labels[locale as "es" | "en"] ?? labels.es;
  const icons = [Shield, Calculator, BarChart2];

  return (
    <section id="propuesta-valor" style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "680px", margin: "0 auto 64px" }}>
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
            color: "#1a2332",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            {l.title}
          </h2>
          <p style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5c5650",
          }}>
            {l.body}
          </p>
        </div>

        {/* Cards */}
        <div className="vp-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
        }}>
          {l.cards.map(({ title, desc }, i) => {
            const Icon = icons[i];
            return (
              <div key={title} className="vp-card" style={{
                border: "1px solid #e8e4de",
                padding: "44px 36px",
                transition: "background-color 0.25s",
              }}>
                <div style={{ marginBottom: "24px" }}>
                  <Icon size={28} strokeWidth={1.5} style={{ color: "#b8964a" }} />
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#1a2332",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#5c5650",
                }}>
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .vp-card:hover { background-color: #faf8f5; }
        @media (max-width: 960px) and (min-width: 601px) {
          .vp-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .vp-grid { grid-template-columns: 1fr !important; }
          #propuesta-valor { padding: 48px 16px !important; }
          .vp-card { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
