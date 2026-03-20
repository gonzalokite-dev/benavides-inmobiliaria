import { Check } from "lucide-react";

export default function WhyUs() {
  const benefits = [
    {
      title: "Para residentes y no residentes",
      desc: "Tanto si vives en España como en el extranjero, adaptamos el asesoramiento jurídico y fiscal a tu situación concreta.",
    },
    {
      title: "Servicio 360°",
      desc: "Inmobiliario, fiscal y legal en un único equipo. Sin necesidad de contratar diferentes profesionales.",
    },
    {
      title: "Reducción de riesgos",
      desc: "Revisamos cada operación para eliminar riesgos jurídicos y fiscales antes de que se conviertan en problemas.",
    },
    {
      title: "Optimización fiscal real",
      desc: "Analizamos tu perfil fiscal —residente o no residente— y estructuramos la operación para minimizar el impacto impositivo.",
    },
    {
      title: "Gestión integral sin complicaciones",
      desc: "Coordinamos todos los trámites: notaría, registro, fiscalidad y gestión post-operación. Tú solo decides.",
    },
    {
      title: "Experiencia en el mercado de Mallorca",
      desc: "Conocemos el mercado local, los compradores y los mejores momentos para operar.",
    },
  ];

  return (
    <section id="por-que-elegirnos" style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8964a",
            marginBottom: "14px",
          }}>
            Nuestro valor diferencial
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 300,
            color: "#1a2332",
            lineHeight: 1.15,
          }}>
            ¿Por qué elegirnos?
          </h2>
        </div>

        {/* Grid */}
        <div className="why-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
        }}>
          {benefits.map(({ title, desc }) => (
            <div key={title} className="why-card" style={{
              display: "flex",
              gap: "20px",
              alignItems: "flex-start",
              padding: "32px 28px",
              borderLeft: "3px solid #b8964a",
              backgroundColor: "#faf8f5",
              transition: "background-color 0.2s",
            }}>
              <div style={{
                flexShrink: 0,
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "rgba(184,150,74,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "2px",
              }}>
                <Check size={15} strokeWidth={2} style={{ color: "#b8964a" }} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "19px",
                  fontWeight: 400,
                  color: "#1a2332",
                  marginBottom: "8px",
                  lineHeight: 1.2,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  lineHeight: 1.75,
                  color: "#5c5650",
                }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-card:hover {
          background-color: #f0ede8;
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
