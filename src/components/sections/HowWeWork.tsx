export default function HowWeWork() {
  const steps = [
    {
      number: "01",
      title: "Análisis",
      desc: "Estudiamos tu propiedad, tu situación fiscal y definimos el potencial de la operación.",
    },
    {
      number: "02",
      title: "Estrategia",
      desc: "Definimos el precio óptimo, el timing de venta y la estructura fiscal más eficiente para tu caso.",
    },
    {
      number: "03",
      title: "Comercialización",
      desc: "Promocionamos tu propiedad en los canales adecuados y gestionamos el contacto con potenciales compradores.",
    },
    {
      number: "04",
      title: "Cierre",
      desc: "Coordinamos toda la operación, optimizamos la fiscalidad y cerramos maximizando tu resultado neto.",
    },
  ];

  return (
    <section id="proceso" style={{ backgroundColor: "#faf8f5", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8964a",
            marginBottom: "14px",
          }}>
            Cómo trabajamos
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 300,
            color: "#1a2332",
            lineHeight: 1.15,
          }}>
            Tu venta, paso a paso
          </h2>
        </div>

        {/* Steps */}
        <div className="steps-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          position: "relative",
        }}>
          {/* Connecting line */}
          <div className="steps-line" style={{
            position: "absolute",
            top: "32px",
            left: "12.5%",
            right: "12.5%",
            height: "1px",
            backgroundColor: "#e8e4de",
            zIndex: 0,
          }} />

          {steps.map(({ number, title, desc }) => (
            <div key={number} style={{
              padding: "0 28px",
              position: "relative",
              zIndex: 1,
            }} className="step-item">
              {/* Number circle */}
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "#faf8f5",
                border: "1px solid #e8e4de",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px",
              }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 300,
                  color: "#b8964a",
                }}>
                  {number}
                </span>
              </div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#1a2332",
                marginBottom: "12px",
              }}>
                {number} · {title}
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
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
          .steps-line { display: none !important; }
          .step-item { padding: 0 16px !important; }
          #proceso { padding: 64px 24px !important; }
        }
        @media (max-width: 560px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          #proceso { padding: 48px 16px !important; }
          .step-item { padding: 0 !important; }
        }
      `}</style>
    </section>
  );
}
