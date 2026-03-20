"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SLOTS = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00"];

function getNextWorkDays(): { label: string; short: string }[] {
  const days = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const result = [];
  const today = new Date();
  let offset = 1;
  while (result.length < 5) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      result.push({
        label: `${days[dow]} ${d.getDate()} ${months[d.getMonth()]}`,
        short: `${days[dow]} ${d.getDate()}`,
      });
    }
    offset++;
  }
  return result;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2 | "done">(1);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const workDays = getNextWorkDays();

  function handleClose() {
    setStep(1);
    setSelectedDay(""); setSelectedSlot(""); setName(""); setEmail(""); setPhone("");
    onClose();
  }

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #e8e4de",
    borderRadius: "3px",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: 300,
    color: "#1a2332",
    outline: "none",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
    backgroundColor: "#fff",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#9b9590",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, backgroundColor: "rgba(10,16,26,0.65)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div style={{ backgroundColor: "#fff", borderRadius: "6px", width: "100%", maxWidth: "540px", maxHeight: "90vh", overflowY: "auto", position: "relative", boxShadow: "0 24px 80px rgba(0,0,0,0.3)" }}>

        {/* Header */}
        <div style={{ padding: "32px 40px 24px", borderBottom: "1px solid #e8e4de", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#b8964a", marginBottom: "6px" }}>
              Benavides Real Estate
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 400, color: "#1a2332" }}>
              Reservar llamada con un asesor
            </h3>
          </div>
          <button onClick={handleClose} style={{ background: "none", border: "none", cursor: "pointer", color: "#9b9590", padding: "4px", marginLeft: "16px", lineHeight: 1 }}>
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: "32px 40px 40px" }}>

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <p style={{ fontSize: "13px", color: "#9b9590", fontWeight: 300, lineHeight: 1.7, marginBottom: "28px" }}>
                Elige el día y la hora. La llamada tiene una duración aproximada de 30 minutos.
              </p>

              <p style={labelStyle}>Elige un día</p>
              <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
                {workDays.map((d) => (
                  <button
                    key={d.label}
                    onClick={() => { setSelectedDay(d.label); setSelectedSlot(""); }}
                    style={{
                      padding: "10px 14px",
                      border: `1px solid ${selectedDay === d.label ? "#1a2332" : "#e8e4de"}`,
                      backgroundColor: selectedDay === d.label ? "#1a2332" : "#fff",
                      color: selectedDay === d.label ? "#fff" : "#1a2332",
                      borderRadius: "3px",
                      fontSize: "13px",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {d.short}
                  </button>
                ))}
              </div>

              {selectedDay && (
                <>
                  <p style={{ ...labelStyle, marginTop: "4px" }}>Elige una hora</p>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
                    {SLOTS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSlot(s)}
                        style={{
                          padding: "10px 14px",
                          border: `1px solid ${selectedSlot === s ? "#b8964a" : "#e8e4de"}`,
                          backgroundColor: selectedSlot === s ? "#b8964a" : "#fff",
                          color: selectedSlot === s ? "#fff" : "#1a2332",
                          borderRadius: "3px",
                          fontSize: "13px",
                          cursor: "pointer",
                          transition: "all 0.15s",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <button
                onClick={() => { if (selectedDay && selectedSlot) setStep(2); }}
                disabled={!selectedDay || !selectedSlot}
                style={{
                  width: "100%",
                  backgroundColor: selectedDay && selectedSlot ? "#1a2332" : "#e8e4de",
                  color: selectedDay && selectedSlot ? "#fff" : "#9b9590",
                  border: "none",
                  padding: "15px",
                  borderRadius: "2px",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: selectedDay && selectedSlot ? "pointer" : "default",
                  fontFamily: "'Inter', sans-serif",
                  transition: "background-color 0.2s",
                }}
              >
                Continuar →
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <div style={{ backgroundColor: "#faf8f5", borderRadius: "3px", padding: "14px 18px", marginBottom: "28px", border: "1px solid #e8e4de" }}>
                <p style={{ fontSize: "13px", color: "#5c5650", fontWeight: 300 }}>
                  📅 {selectedDay} a las {selectedSlot}h · 30 minutos
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "24px" }}>
                <div>
                  <label style={labelStyle}>Nombre completo *</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@email.com" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Teléfono (opcional)</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+34 600 000 000" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.6)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e8e4de")}
                  />
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, border: "1px solid #e8e4de", backgroundColor: "#fff", padding: "14px", borderRadius: "2px", fontSize: "13px", cursor: "pointer", color: "#5c5650", fontFamily: "'Inter', sans-serif" }}>
                  ← Volver
                </button>
                <button
                  onClick={() => { if (name && email) setStep("done"); }}
                  disabled={!name || !email}
                  style={{
                    flex: 2,
                    backgroundColor: name && email ? "#b8964a" : "#e8e4de",
                    color: name && email ? "#fff" : "#9b9590",
                    border: "none",
                    padding: "15px",
                    borderRadius: "2px",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: name && email ? "pointer" : "default",
                    fontFamily: "'Inter', sans-serif",
                    transition: "background-color 0.2s",
                  }}
                >
                  Confirmar llamada
                </button>
              </div>
            </div>
          )}

          {/* Done */}
          {step === "done" && (
            <div style={{ textAlign: "center", padding: "16px 0" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "rgba(125,212,160,0.1)", border: "1px solid rgba(125,212,160,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "28px" }}>
                ✓
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 400, color: "#1a2332", marginBottom: "12px" }}>
                Llamada confirmada
              </h3>
              <p style={{ fontSize: "14px", color: "#5c5650", fontWeight: 300, lineHeight: 1.75, marginBottom: "8px" }}>
                Tu asesor te llamará el <strong style={{ color: "#1a2332" }}>{selectedDay} a las {selectedSlot}h</strong>.
              </p>
              <p style={{ fontSize: "13px", color: "#9b9590", fontWeight: 300, lineHeight: 1.7, marginBottom: "32px" }}>
                Recibirás la confirmación en <strong style={{ color: "#1a2332" }}>{email}</strong>.
              </p>
              <button
                onClick={handleClose}
                style={{ backgroundColor: "#1a2332", color: "#fff", border: "none", padding: "14px 36px", borderRadius: "2px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
