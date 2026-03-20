"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const propertyTypes = ["Villa / Chalet", "Piso / Apartamento", "Finca", "Otro"];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" style={{ backgroundColor: "#faf8f5", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "80px",
          alignItems: "start",
        }} className="leadform-grid">

          {/* Left column */}
          <div>
            <p style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b8964a",
              marginBottom: "14px",
            }}>
              Contacto
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 300,
              color: "#1a2332",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              Solicita tu valoración gratuita
            </h2>
            <p style={{
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "#5c5650",
              marginBottom: "48px",
            }}>
              Cuéntanos tu propiedad y tu situación. Te contactaremos en menos de 24 horas con una valoración inicial sin compromiso.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { Icon: Mail, label: "Email", value: "inmobiliaria@benavidesasociados.com" },
                { Icon: Phone, label: "Teléfono", value: "+34 971 000 000" },
                { Icon: MapPin, label: "Dirección", value: "Palma de Mallorca, España" },
              ].map(({ Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <Icon size={15} strokeWidth={1.5} style={{ color: "#b8964a", marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9b9590", marginBottom: "3px" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "13px", color: "#1a2332", fontWeight: 300 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: form */}
          {submitted ? (
            <div style={{
              backgroundColor: "#fff",
              border: "1px solid #e8e4de",
              borderRadius: "3px",
              padding: "60px 40px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "36px", color: "#b8964a", marginBottom: "16px" }}>✓</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "26px",
                color: "#1a2332",
                marginBottom: "10px",
                fontWeight: 300,
              }}>
                Consulta recibida
              </h3>
              <p style={{ color: "#5c5650", fontSize: "14px", fontWeight: 300 }}>
                Te contactaremos en menos de 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              backgroundColor: "#fff",
              border: "1px solid #e8e4de",
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }} className="leadform-inner">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="lf-row">
                <label style={labelWrap}>
                  <span style={labelStyle}>Nombre completo *</span>
                  <input required style={inputStyle} type="text" placeholder="Tu nombre" />
                </label>
                <label style={labelWrap}>
                  <span style={labelStyle}>Email *</span>
                  <input required style={inputStyle} type="email" placeholder="tu@email.com" />
                </label>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="lf-row">
                <label style={labelWrap}>
                  <span style={labelStyle}>Teléfono</span>
                  <input style={inputStyle} type="tel" placeholder="+34 ..." />
                </label>
                <label style={labelWrap}>
                  <span style={labelStyle}>Tipo de propiedad</span>
                  <select style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Seleccionar tipo</option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label style={labelWrap}>
                <span style={labelStyle}>Ubicación en Mallorca</span>
                <input style={inputStyle} type="text" placeholder="Ej: Puerto Andratx, Palma, Pollensa..." />
              </label>
              <label style={labelWrap}>
                <span style={labelStyle}>Mensaje</span>
                <textarea
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  placeholder="Cuéntanos sobre tu propiedad y tu situación como no residente..."
                />
              </label>
              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#b8964a",
                  color: "#fff",
                  border: "none",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "15px 36px",
                  borderRadius: "2px",
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
              >
                Solicitar valoración
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .leadform-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .lf-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .leadform-inner { padding: 32px 24px !important; }
        }
        .leadform-inner input:focus,
        .leadform-inner textarea:focus,
        .leadform-inner select:focus {
          outline: none;
          border-color: rgba(184,150,74,0.6) !important;
        }
      `}</style>
    </section>
  );
}

const labelWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "7px" };

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#9b9590",
  fontWeight: 400,
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "#faf8f5",
  border: "1px solid #e8e4de",
  borderRadius: "2px",
  padding: "12px 16px",
  color: "#1a2332",
  fontSize: "14px",
  fontWeight: 300,
  width: "100%",
  transition: "border-color 0.2s",
  fontFamily: "'Inter', sans-serif",
};
