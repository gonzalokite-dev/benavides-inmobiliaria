import { Shield, Calculator, BarChart2 } from "lucide-react";

export default function ValueProposition() {
  const cards = [
    {
      Icon: Shield,
      title: "Seguridad jurídica",
      desc: "Supervisamos toda la operación para evitar riesgos legales, desde la revisión documental hasta la firma ante notario.",
    },
    {
      Icon: Calculator,
      title: "Optimización fiscal",
      desc: "Analizamos tu situación fiscal —residente o no residente— para reducir la carga impositiva y maximizar el resultado neto de la operación.",
    },
    {
      Icon: BarChart2,
      title: "Estrategia basada en datos",
      desc: "Definimos el mejor momento y precio de venta con análisis de mercado real y conocimiento local de Mallorca.",
    },
  ];

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
            Benavides Real Estate
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 300,
            color: "#1a2332",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            Mucho más que una inmobiliaria tradicional
          </h2>
          <p style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#5c5650",
          }}>
            A diferencia de las agencias inmobiliarias convencionales, integramos asesoría fiscal, jurídica y estrategia inmobiliaria en un único servicio, para residentes y no residentes que compran, venden o invierten en Mallorca.
          </p>
        </div>

        {/* Cards */}
        <div className="vp-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
        }}>
          {cards.map(({ Icon, title, desc }) => (
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
          ))}
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
