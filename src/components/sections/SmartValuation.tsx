"use client";

import { useState } from "react";

type Step = 1 | 2 | 3 | "result";

const zonas = [
  { value: "son-vida", label: "Son Vida (Palma)", base: 8500 },
  { value: "puerto-portals", label: "Puerto Portals", base: 7500 },
  { value: "bendinat", label: "Bendinat / Portals Nous", base: 7000 },
  { value: "santa-catalina", label: "Santa Catalina, Palma", base: 5200 },
  { value: "palma-centro", label: "Centro histórico, Palma", base: 4500 },
  { value: "palma-otros", label: "Otras zonas de Palma", base: 3800 },
  { value: "pollensa", label: "Pollensa / Puerto Pollensa", base: 4800 },
  { value: "soller", label: "Sóller / Puerto Sóller", base: 5500 },
  { value: "alcudia", label: "Alcudia / Can Picafort", base: 3800 },
  { value: "otros", label: "Otra zona de Mallorca", base: 3200 },
];

const tipos = [
  { value: "villa", label: "Villa / Chalet", mult: 1.05 },
  { value: "finca", label: "Finca rústica", mult: 1.10 },
  { value: "atico", label: "Ático", mult: 1.15 },
  { value: "piso", label: "Piso / Apartamento", mult: 0.90 },
  { value: "local", label: "Local / Oficina", mult: 0.82 },
];

const estados = [
  { value: "excelente", label: "Excelente · Llave en mano", mult: 1.10 },
  { value: "bueno", label: "Bueno · Bien conservado", mult: 1.00 },
  { value: "normal", label: "Normal · Necesita actualización", mult: 0.88 },
  { value: "reformar", label: "A reformar", mult: 0.74 },
];

function fmt(n: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SmartValuation() {
  const [step, setStep] = useState<Step>(1);
  const [zona, setZona] = useState("");
  const [tipo, setTipo] = useState("");
  const [metros, setMetros] = useState("");
  const [estado, setEstado] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  function calcResult() {
    const zonaData = zonas.find((z) => z.value === zona);
    const tipoData = tipos.find((t) => t.value === tipo);
    const estadoData = estados.find((e) => e.value === estado);
    if (!zonaData || !tipoData || !estadoData || !metros) return null;
    const m = parseFloat(metros);
    const base = zonaData.base * tipoData.mult * estadoData.mult * m;
    return { min: Math.round(base * 0.87), max: Math.round(base * 1.13), mid: Math.round(base) };
  }

  const result = step === "result" ? calcResult() : null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #e8e4de",
    borderRadius: "3px",
    padding: "13px 16px",
    fontSize: "14px",
    fontWeight: 300,
    color: "#1a2332",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box" as const,
    backgroundColor: "#fff",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#9b9590",
    display: "block",
    marginBottom: "8px",
  };

  const btnPrimary = (enabled: boolean): React.CSSProperties => ({
    width: "100%",
    backgroundColor: enabled ? "#1a2332" : "#e8e4de",
    color: enabled ? "#fff" : "#9b9590",
    border: "none",
    padding: "15px",
    borderRadius: "2px",
    fontSize: "13px",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    cursor: enabled ? "pointer" : "default",
    transition: "background-color 0.2s",
    fontFamily: "'Inter', sans-serif",
  });

  const btnBack: React.CSSProperties = {
    flex: 1,
    border: "1px solid #e8e4de",
    backgroundColor: "transparent",
    padding: "14px",
    borderRadius: "2px",
    fontSize: "13px",
    cursor: "pointer",
    color: "#5c5650",
    fontFamily: "'Inter', sans-serif",
  };

  const stepNum = step === "result" ? 4 : step;

  const stepLabel = ["Zona y tipo", "Detalles", "Contacto"];

  return (
    <section id="valoracion" style={{ backgroundColor: "#faf8f5", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8964a", marginBottom: "14px" }}>
            Valoración inteligente
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 300, color: "#1a2332", lineHeight: 1.1, marginBottom: "16px" }}>
            ¿Cuánto vale tu propiedad en Mallorca?
          </h2>
          <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.8, color: "#5c5650" }}>
            Obtén una estimación de mercado en menos de 2 minutos. Sin compromiso y sin necesidad de registrarse.
          </p>
        </div>

        {/* Card */}
        <div style={{ maxWidth: "720px", margin: "0 auto", backgroundColor: "#fff", border: "1px solid #e8e4de", borderRadius: "4px", overflow: "hidden", boxShadow: "0 4px 32px rgba(0,0,0,0.06)" }}>

          {/* Progress steps */}
          <div style={{ padding: "24px 40px", borderBottom: "1px solid #e8e4de", display: "flex", alignItems: "center", gap: "0" }}>
            {stepLabel.map((label, i) => {
              const n = i + 1;
              const isDone = stepNum > n;
              const isActive = stepNum === n;
              return (
                <div key={label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                      backgroundColor: isDone ? "#b8964a" : isActive ? "#1a2332" : "#e8e4de",
                      color: isDone || isActive ? "#fff" : "#9b9590",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "11px", fontWeight: 600, transition: "all 0.3s",
                    }}>
                      {isDone ? "✓" : n}
                    </div>
                    <span style={{ fontSize: "12px", color: isActive ? "#1a2332" : isDone ? "#b8964a" : "#9b9590", fontWeight: isActive ? 500 : 300, whiteSpace: "nowrap" }}>
                      {label}
                    </span>
                  </div>
                  {i < 2 && <div style={{ flex: 1, height: "1px", backgroundColor: isDone ? "#b8964a" : "#e8e4de", margin: "0 12px", transition: "background-color 0.3s" }} />}
                </div>
              );
            })}
          </div>

          <div style={{ padding: "40px" }}>

            {/* Step 1 */}
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332" }}>
                  Ubicación y tipo de propiedad
                </h3>
                <div>
                  <label style={labelStyle}>Zona de Mallorca</label>
                  <select value={zona} onChange={(e) => setZona(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Selecciona la zona</option>
                    {zonas.map((z) => <option key={z.value} value={z.value}>{z.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Tipo de propiedad</label>
                  <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Selecciona el tipo</option>
                    {tipos.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <button onClick={() => { if (zona && tipo) setStep(2); }} disabled={!zona || !tipo} style={btnPrimary(!!(zona && tipo))}>
                  Continuar →
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332" }}>
                  Características del inmueble
                </h3>
                <div>
                  <label style={labelStyle}>Metros cuadrados construidos</label>
                  <input type="number" placeholder="Ej: 180" value={metros} onChange={(e) => setMetros(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Estado de la propiedad</label>
                  <select value={estado} onChange={(e) => setEstado(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Selecciona el estado</option>
                    {estados.map((e) => <option key={e.value} value={e.value}>{e.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Urgencia de venta</label>
                  <select value={urgencia} onChange={(e) => setUrgencia(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Selecciona la urgencia</option>
                    <option value="alta">Alta — menos de 3 meses</option>
                    <option value="media">Media — 3 a 6 meses</option>
                    <option value="baja">Sin urgencia — más de 6 meses</option>
                  </select>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setStep(1)} style={btnBack}>← Volver</button>
                  <button onClick={() => { if (metros && estado) setStep(3); }} disabled={!metros || !estado} style={{ ...btnPrimary(!!(metros && estado)), flex: 2, width: "auto" }}>
                    Continuar →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332", marginBottom: "6px" }}>
                    ¿A quién enviamos la valoración?
                  </h3>
                  <p style={{ fontSize: "13px", color: "#9b9590", fontWeight: 300 }}>
                    Te enviaremos el detalle completo por email.
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>Nombre *</label>
                  <input type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono (opcional)</label>
                  <input type="tel" placeholder="+34 600 000 000" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setStep(2)} style={btnBack}>← Volver</button>
                  <button
                    onClick={() => { if (nombre && email) setStep("result"); }}
                    disabled={!nombre || !email}
                    style={{
                      flex: 2,
                      backgroundColor: nombre && email ? "#b8964a" : "#e8e4de",
                      color: nombre && email ? "#fff" : "#9b9590",
                      border: "none",
                      padding: "15px",
                      borderRadius: "2px",
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      cursor: nombre && email ? "pointer" : "default",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Ver mi valoración →
                  </button>
                </div>
              </div>
            )}

            {/* Result */}
            {step === "result" && result && (
              <div>
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#b8964a", marginBottom: "16px" }}>
                    Valoración estimada · Mallorca 2025
                  </p>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 300, color: "#1a2332", lineHeight: 1 }}>
                    {fmt(result.min)} — {fmt(result.max)}
                  </div>
                  <p style={{ fontSize: "12px", color: "#9b9590", marginTop: "10px" }}>
                    Precio medio estimado: {fmt(result.mid)}
                  </p>
                </div>

                <div style={{ backgroundColor: "#faf8f5", borderRadius: "3px", padding: "24px", marginBottom: "28px" }}>
                  <p style={{ fontSize: "14px", color: "#5c5650", lineHeight: 1.85, fontWeight: 300 }}>
                    <strong style={{ color: "#1a2332", fontWeight: 500 }}>Hola {nombre},</strong> basándonos en los datos introducidos,
                    tu {tipos.find((t) => t.value === tipo)?.label.toLowerCase()} en{" "}
                    <strong style={{ color: "#1a2332" }}>{zonas.find((z) => z.value === zona)?.label}</strong>{" "}
                    tiene un valor orientativo de mercado en el rango indicado. Para una valoración precisa con visita al inmueble y análisis fiscal incluido, nuestro equipo te contactará en menos de 24 horas.
                  </p>
                </div>

                <a
                  href="#contacto"
                  style={{
                    display: "block",
                    backgroundColor: "#b8964a",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "16px",
                    borderRadius: "2px",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textAlign: "center",
                    marginBottom: "12px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
                >
                  Solicitar valoración detallada gratuita
                </a>
                <button
                  onClick={() => { setStep(1); setZona(""); setTipo(""); setMetros(""); setEstado(""); setUrgencia(""); setNombre(""); setEmail(""); setTelefono(""); }}
                  style={{ width: "100%", background: "none", border: "none", fontSize: "12px", color: "#9b9590", cursor: "pointer", padding: "8px", fontFamily: "'Inter', sans-serif" }}
                >
                  Hacer otra valoración
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        input:focus, select:focus { outline: none; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
        input[type=number] { -moz-appearance: textfield; }
        @media (max-width: 480px) {
          #valoracion { padding: 40px 16px !important; }
          #valoracion > div > div:last-child > div { padding: 28px 20px !important; }
          #valoracion > div > div:last-child > div > div:first-child { padding: 16px 20px !important; }
        }
      `}</style>
    </section>
  );
}
