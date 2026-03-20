export default function InternationalClients() {
  const countries = [
    { flag: "🇩🇪", name: "Alemania" },
    { flag: "🇬🇧", name: "Reino Unido" },
    { flag: "🇸🇪", name: "Suecia" },
    { flag: "🇺🇸", name: "Estados Unidos" },
    { flag: "🇨🇭", name: "Suiza" },
    { flag: "🇫🇷", name: "Francia" },
  ];

  const pillars = [
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
  ];

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
            Especialistas en clientes internacionales
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 3.5vw, 46px)",
            fontWeight: 300,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            Trabajamos con propietarios no residentes de todo el mundo
          </h2>
          <p style={{
            fontSize: "15px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.5)",
            maxWidth: "620px",
            margin: "0 auto",
          }}>
            Tanto si resides en Europa, América o cualquier otra parte del mundo, nuestra experiencia con clientes internacionales nos permite gestionar tu venta de forma remota, segura y fiscalmente eficiente.
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
          {countries.map(({ flag, name }) => (
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
          {pillars.map(({ title, body }) => (
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
        }
      `}</style>
    </section>
  );
}
