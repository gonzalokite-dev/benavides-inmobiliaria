"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const services =
    locale === "es"
      ? ["Real Estate Advisory", "Transaction Management", "Fiscal & Legal Inmobiliario", "Property Management", "Patrimonio Inmobiliario", "International Gateway", "Investment Advisory"]
      : ["Real Estate Advisory", "Transaction Management", "Fiscal & Legal Real Estate", "Property Management", "Patrimonial Real Estate", "International Gateway", "Investment Advisory"];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contacto" style={{ backgroundColor: "#1a2332", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "80px",
          alignItems: "start",
        }} className="contact-grid">

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
              {t("eyebrow")}
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              {t("title")}
            </h2>
            <p style={{
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              marginBottom: "48px",
            }}>
              {t("subtitle")}
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
                    <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "3px" }}>{label}</div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          {submitted ? (
            <div style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(184,150,74,0.2)",
              borderRadius: "3px",
              padding: "60px 40px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "36px", color: "#b8964a", marginBottom: "16px" }}>✓</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#fff", marginBottom: "10px" }}>
                {locale === "es" ? "Consulta recibida" : "Enquiry received"}
              </h3>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", fontWeight: 300 }}>
                {locale === "es" ? "Le contactaremos en menos de 24 horas." : "We will contact you within 24 hours."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="form-row">
                <label style={labelWrap}>
                  <span style={labelStyle}>{t("form.name")} *</span>
                  <input required style={inputStyle} type="text" />
                </label>
                <label style={labelWrap}>
                  <span style={labelStyle}>{t("form.email")} *</span>
                  <input required style={inputStyle} type="email" />
                </label>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }} className="form-row">
                <label style={labelWrap}>
                  <span style={labelStyle}>{t("form.phone")}</span>
                  <input style={inputStyle} type="tel" />
                </label>
                <label style={labelWrap}>
                  <span style={labelStyle}>{t("form.service")}</span>
                  <select style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">{t("form.placeholder_service")}</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </label>
              </div>
              <label style={labelWrap}>
                <span style={labelStyle}>{t("form.message")} *</span>
                <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} />
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
                {t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        input:focus, textarea:focus, select:focus { outline: none; border-color: rgba(184,150,74,0.6) !important; }
      `}</style>
    </section>
  );
}

const labelWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "7px" };

const labelStyle: React.CSSProperties = {
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.35)",
  fontWeight: 400,
};

const inputStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "2px",
  padding: "12px 16px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 300,
  width: "100%",
  transition: "border-color 0.2s",
};
