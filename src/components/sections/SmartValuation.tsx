"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

type Step = 1 | 2 | 3 | "result";

const zonas = [
  { value: "son-vida", labelEs: "Son Vida (Palma)", labelEn: "Son Vida (Palma)", base: 8500 },
  { value: "puerto-portals", labelEs: "Puerto Portals", labelEn: "Puerto Portals", base: 7500 },
  { value: "bendinat", labelEs: "Bendinat / Portals Nous", labelEn: "Bendinat / Portals Nous", base: 7000 },
  { value: "santa-catalina", labelEs: "Santa Catalina, Palma", labelEn: "Santa Catalina, Palma", base: 5200 },
  { value: "palma-centro", labelEs: "Centro histórico, Palma", labelEn: "Palma Old Town", base: 4500 },
  { value: "palma-otros", labelEs: "Otras zonas de Palma", labelEn: "Other areas of Palma", base: 3800 },
  { value: "pollensa", labelEs: "Pollensa / Puerto Pollensa", labelEn: "Pollensa / Puerto Pollensa", base: 4800 },
  { value: "soller", labelEs: "Sóller / Puerto Sóller", labelEn: "Sóller / Puerto Sóller", base: 5500 },
  { value: "alcudia", labelEs: "Alcudia / Can Picafort", labelEn: "Alcudia / Can Picafort", base: 3800 },
  { value: "otros", labelEs: "Otra zona de Mallorca", labelEn: "Other area of Mallorca", base: 3200 },
];

const tipos = [
  { value: "villa", labelEs: "Villa / Chalet", labelEn: "Villa / Chalet", mult: 1.05 },
  { value: "finca", labelEs: "Finca rústica", labelEn: "Rustic finca", mult: 1.10 },
  { value: "atico", labelEs: "Ático", labelEn: "Penthouse", mult: 1.15 },
  { value: "piso", labelEs: "Piso / Apartamento", labelEn: "Apartment / Flat", mult: 0.90 },
  { value: "local", labelEs: "Local / Oficina", labelEn: "Commercial / Office", mult: 0.82 },
];

const estados = [
  { value: "excelente", labelEs: "Excelente · Llave en mano", labelEn: "Excellent · Move-in ready", mult: 1.10 },
  { value: "bueno", labelEs: "Bueno · Bien conservado", labelEn: "Good · Well maintained", mult: 1.00 },
  { value: "normal", labelEs: "Normal · Necesita actualización", labelEn: "Average · Needs updating", mult: 0.88 },
  { value: "reformar", labelEs: "A reformar", labelEn: "For renovation", mult: 0.74 },
];

function fmt(n: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function SmartValuation() {
  const locale = useLocale();
  const isEn = locale === "en";

  const [step, setStep] = useState<Step>(1);
  const [zona, setZona] = useState("");
  const [tipo, setTipo] = useState("");
  const [metros, setMetros] = useState("");
  const [estado, setEstado] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const labels = {
    es: {
      eyebrow: "Valoración inteligente",
      title: "¿Cuánto vale tu propiedad en Mallorca?",
      subtitle: "Obtén una estimación de mercado en menos de 2 minutos. Sin compromiso y sin necesidad de registrarse.",
      stepLabels: ["Zona y tipo", "Detalles", "Contacto"],
      step1Title: "Ubicación y tipo de propiedad",
      zonaLabel: "Zona de Mallorca",
      zonaPlaceholder: "Selecciona la zona",
      tipoLabel: "Tipo de propiedad",
      tipoPlaceholder: "Selecciona el tipo",
      step2Title: "Características del inmueble",
      metrosLabel: "Metros cuadrados construidos",
      metrosPlaceholder: "Ej: 180",
      estadoLabel: "Estado de la propiedad",
      estadoPlaceholder: "Selecciona el estado",
      urgenciaLabel: "Urgencia de venta",
      urgenciaPlaceholder: "Selecciona la urgencia",
      urgencias: [
        { value: "alta", label: "Alta — menos de 3 meses" },
        { value: "media", label: "Media — 3 a 6 meses" },
        { value: "baja", label: "Sin urgencia — más de 6 meses" },
      ],
      backBtn: "← Volver",
      continueBtn: "Continuar →",
      step3Title: "¿A quién enviamos la valoración?",
      step3Sub: "Te enviaremos el detalle completo por email.",
      nombreLabel: "Nombre *",
      nombrePlaceholder: "Tu nombre",
      emailLabel: "Email *",
      telefonoLabel: "Teléfono (opcional)",
      telefonoPlaceholder: "+34 600 000 000",
      seeValuationBtn: "Ver mi valoración →",
      resultEyebrow: "Valoración estimada · Mallorca 2025",
      midPriceLabel: (mid: string) => `Precio medio estimado: ${mid}`,
      resultGreetingPre: "basándonos en los datos introducidos, tu",
      resultGreetingMid: "en",
      resultGreetingPost: "tiene un valor orientativo de mercado en el rango indicado. Para una valoración precisa con visita al inmueble y análisis fiscal incluido, nuestro equipo te contactará en menos de 24 horas.",
      resultCta: "Solicitar valoración detallada gratuita",
      resetBtn: "Hacer otra valoración",
    },
    en: {
      eyebrow: "Smart valuation",
      title: "How much is your property worth in Mallorca?",
      subtitle: "Get a market estimate in under 2 minutes. No commitment, no registration required.",
      stepLabels: ["Location & type", "Details", "Contact"],
      step1Title: "Location and property type",
      zonaLabel: "Area of Mallorca",
      zonaPlaceholder: "Select area",
      tipoLabel: "Property type",
      tipoPlaceholder: "Select type",
      step2Title: "Property details",
      metrosLabel: "Built square metres",
      metrosPlaceholder: "E.g.: 180",
      estadoLabel: "Property condition",
      estadoPlaceholder: "Select condition",
      urgenciaLabel: "Sale urgency",
      urgenciaPlaceholder: "Select urgency",
      urgencias: [
        { value: "alta", label: "High — under 3 months" },
        { value: "media", label: "Medium — 3 to 6 months" },
        { value: "baja", label: "No urgency — over 6 months" },
      ],
      backBtn: "← Back",
      continueBtn: "Continue →",
      step3Title: "Where shall we send the valuation?",
      step3Sub: "We will send you the full details by email.",
      nombreLabel: "Name *",
      nombrePlaceholder: "Your name",
      emailLabel: "Email *",
      telefonoLabel: "Phone (optional)",
      telefonoPlaceholder: "+34 600 000 000",
      seeValuationBtn: "See my valuation →",
      resultEyebrow: "Estimated valuation · Mallorca 2025",
      midPriceLabel: (mid: string) => `Estimated mid price: ${mid}`,
      resultGreetingPre: "based on the data you entered, your",
      resultGreetingMid: "in",
      resultGreetingPost: "has an indicative market value in the range shown. For a precise valuation with a property visit and tax analysis included, our team will contact you within 24 hours.",
      resultCta: "Request free detailed valuation",
      resetBtn: "Do another valuation",
    },
  };
  const l = labels[locale as "es" | "en"] ?? labels.es;

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
  const stepLabel = l.stepLabels;

  const getZonaLabel = (v: string) => {
    const z = zonas.find((x) => x.value === v);
    return z ? (isEn ? z.labelEn : z.labelEs) : v;
  };
  const getTipoLabel = (v: string) => {
    const t = tipos.find((x) => x.value === v);
    return t ? (isEn ? t.labelEn : t.labelEs) : v;
  };

  return (
    <section id="valoracion" style={{ backgroundColor: "#faf8f5", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 40px" }}>
          <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8964a", marginBottom: "14px" }}>
            {l.eyebrow}
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 4vw, 46px)", fontWeight: 300, color: "#1a2332", lineHeight: 1.1, marginBottom: "16px" }}>
            {l.title}
          </h2>
          <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.8, color: "#5c5650" }}>
            {l.subtitle}
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
                  {l.step1Title}
                </h3>
                <div>
                  <label style={labelStyle}>{l.zonaLabel}</label>
                  <select value={zona} onChange={(e) => setZona(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">{l.zonaPlaceholder}</option>
                    {zonas.map((z) => <option key={z.value} value={z.value}>{isEn ? z.labelEn : z.labelEs}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{l.tipoLabel}</label>
                  <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">{l.tipoPlaceholder}</option>
                    {tipos.map((t) => <option key={t.value} value={t.value}>{isEn ? t.labelEn : t.labelEs}</option>)}
                  </select>
                </div>
                <button onClick={() => { if (zona && tipo) setStep(2); }} disabled={!zona || !tipo} style={btnPrimary(!!(zona && tipo))}>
                  {l.continueBtn}
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332" }}>
                  {l.step2Title}
                </h3>
                <div>
                  <label style={labelStyle}>{l.metrosLabel}</label>
                  <input type="number" placeholder={l.metrosPlaceholder} value={metros} onChange={(e) => setMetros(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{l.estadoLabel}</label>
                  <select value={estado} onChange={(e) => setEstado(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">{l.estadoPlaceholder}</option>
                    {estados.map((e) => <option key={e.value} value={e.value}>{isEn ? e.labelEn : e.labelEs}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>{l.urgenciaLabel}</label>
                  <select value={urgencia} onChange={(e) => setUrgencia(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">{l.urgenciaPlaceholder}</option>
                    {l.urgencias.map((u) => <option key={u.value} value={u.value}>{u.label}</option>)}
                  </select>
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setStep(1)} style={btnBack}>{l.backBtn}</button>
                  <button onClick={() => { if (metros && estado) setStep(3); }} disabled={!metros || !estado} style={{ ...btnPrimary(!!(metros && estado)), flex: 2, width: "auto" }}>
                    {l.continueBtn}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332", marginBottom: "6px" }}>
                    {l.step3Title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#9b9590", fontWeight: 300 }}>
                    {l.step3Sub}
                  </p>
                </div>
                <div>
                  <label style={labelStyle}>{l.nombreLabel}</label>
                  <input type="text" placeholder={l.nombrePlaceholder} value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{l.emailLabel}</label>
                  <input type="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>{l.telefonoLabel}</label>
                  <input type="tel" placeholder={l.telefonoPlaceholder} value={telefono} onChange={(e) => setTelefono(e.target.value)} style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div style={{ display: "flex", gap: "12px" }}>
                  <button onClick={() => setStep(2)} style={btnBack}>{l.backBtn}</button>
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
                    {l.seeValuationBtn}
                  </button>
                </div>
              </div>
            )}

            {/* Result */}
            {step === "result" && result && (
              <div>
                <div style={{ textAlign: "center", marginBottom: "32px" }}>
                  <p style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#b8964a", marginBottom: "16px" }}>
                    {l.resultEyebrow}
                  </p>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 300, color: "#1a2332", lineHeight: 1 }}>
                    {fmt(result.min)} — {fmt(result.max)}
                  </div>
                  <p style={{ fontSize: "12px", color: "#9b9590", marginTop: "10px" }}>
                    {l.midPriceLabel(fmt(result.mid))}
                  </p>
                </div>

                <div style={{ backgroundColor: "#faf8f5", borderRadius: "3px", padding: "24px", marginBottom: "28px" }}>
                  <p style={{ fontSize: "14px", color: "#5c5650", lineHeight: 1.85, fontWeight: 300 }}>
                    <strong style={{ color: "#1a2332", fontWeight: 500 }}>{nombre},</strong>{" "}
                    {l.resultGreetingPre}{" "}
                    <strong style={{ color: "#1a2332" }}>{getTipoLabel(tipo).toLowerCase()}</strong>{" "}
                    {l.resultGreetingMid}{" "}
                    <strong style={{ color: "#1a2332" }}>{getZonaLabel(zona)}</strong>{" "}
                    {l.resultGreetingPost}
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
                  {l.resultCta}
                </a>
                <button
                  onClick={() => { setStep(1); setZona(""); setTipo(""); setMetros(""); setEstado(""); setUrgencia(""); setNombre(""); setEmail(""); setTelefono(""); }}
                  style={{ width: "100%", background: "none", border: "none", fontSize: "12px", color: "#9b9590", cursor: "pointer", padding: "8px", fontFamily: "'Inter', sans-serif" }}
                >
                  {l.resetBtn}
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
