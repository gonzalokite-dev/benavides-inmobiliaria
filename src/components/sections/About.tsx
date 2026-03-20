const stats = [
  { value: "40+", label: "Años de experiencia" },
  { value: "198", label: "Operaciones asesoradas" },
  { value: "7", label: "Líneas de servicio" },
  { value: "15", label: "Nacionalidades de clientes" },
];

export default function About() {
  return (
    <section id="nosotros" style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }} className="about-grid">

          {/* Left */}
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b8964a",
              marginBottom: "14px",
            }}>
              Quiénes somos
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "#1a2332",
              lineHeight: 1.18,
              marginBottom: "28px",
            }}>
              La diferencia entre cerrar una operación y hacerla bien.
            </h2>
            <div style={{ width: "32px", height: "1px", backgroundColor: "#b8964a", marginBottom: "28px" }} />
            <p style={{
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.9,
              color: "#5c5650",
            }}>
              Benavides Real Estate es la división inmobiliaria de un despacho multidisciplinar con más de cuarenta años de trayectoria en derecho patrimonial, fiscal y societario. Cuando nos contrata, tiene a su lado a abogados y asesores fiscales especializados desde el primer día — no a un agente con incentivos para cerrar. Cubrimos cada aspecto de la operación: jurídico, fiscal, registral y de mercado, sin que usted tenga que coordinar a varios profesionales distintos.
            </p>
          </div>

          {/* Right: stats */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            backgroundColor: "#e8e4de",
          }}>
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat" style={{
                backgroundColor: "#faf8f5",
                padding: "48px 36px",
                textAlign: "center",
                transition: "background-color 0.2s",
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "52px",
                  fontWeight: 300,
                  color: "#1a2332",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#9b9590",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-stat:hover { background-color: #f0ede8 !important; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #nosotros { padding: 64px 24px !important; }
        }
        @media (max-width: 480px) {
          #nosotros { padding: 48px 16px !important; }
          .about-stat { padding: 32px 20px !important; }
        }
      `}</style>
    </section>
  );
}
