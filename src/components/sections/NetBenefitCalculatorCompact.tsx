"use client";

import { useState, useMemo } from "react";

function calcTax(gain: number, resident: boolean): number {
  if (gain <= 0) return 0;
  if (!resident) return gain * 0.19;
  let tax = 0;
  const brackets = [
    { limit: 6000,    rate: 0.19 },
    { limit: 44000,   rate: 0.21 },
    { limit: 150000,  rate: 0.23 },
    { limit: Infinity, rate: 0.26 },
  ];
  let remaining = gain;
  for (const { limit, rate } of brackets) {
    const taxable = Math.min(remaining, limit);
    tax += taxable * rate;
    remaining -= taxable;
    if (remaining <= 0) break;
  }
  return tax;
}

function fmt(n: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function NetBenefitCalculatorCompact() {
  const [precioCompra, setPrecioCompra] = useState("");
  const [precioVenta, setPrecioVenta]   = useState("");
  const [tipoCliente, setTipoCliente]   = useState<"residente" | "no-residente">("residente");

  const result = useMemo(() => {
    const compra = parseFloat(precioCompra) || 0;
    const venta  = parseFloat(precioVenta)  || 0;
    if (compra <= 0 || venta <= 0) return null;

    const gastosVenta          = venta * 0.02;
    const plusvalia             = venta * 0.005;
    const gastosCompraOriginales = compra * 0.03;
    const ganancia              = Math.max(0, venta - gastosVenta - compra - gastosCompraOriginales);
    const impuesto              = calcTax(ganancia, tipoCliente === "residente");
    const resultadoNeto         = venta - gastosVenta - plusvalia - compra - gastosCompraOriginales - impuesto;
    const tasaEfectiva          = venta > 0 ? (impuesto / venta) * 100 : 0;

    return { precioVenta: venta, gastosVenta, plusvalia, costoBase: compra + gastosCompraOriginales, ganancia, impuesto, resultadoNeto, tasaEfectiva };
  }, [precioCompra, precioVenta, tipoCliente]);

  const inputBase: React.CSSProperties = {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "3px",
    padding: "13px 16px",
    color: "#fff",
    fontSize: "15px",
    fontWeight: 300,
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "rgba(255,255,255,0.38)",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <section style={{ backgroundColor: "#0f1623", padding: "56px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="cbc-outer" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "60px", alignItems: "center" }}>

          {/* ── Left: header + inputs ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Title */}
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8964a", marginBottom: "12px", fontWeight: 400 }}>
                Herramienta gratuita
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 2.8vw, 32px)", fontWeight: 300, color: "#fff", lineHeight: 1.15, marginBottom: "10px" }}>
                Simula tu resultado neto estimado
              </h3>
              <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.75, color: "rgba(255,255,255,0.42)" }}>
                Introduce el precio de compra y el precio estimado de venta para obtener una estimación del resultado neto tras impuestos.
              </p>
            </div>

            {/* Toggle */}
            <div>
              <span style={labelStyle}>Tipo de cliente</span>
              <div style={{ display: "flex", gap: "8px" }}>
                {([["residente", "Residente fiscal en España"], ["no-residente", "No residente (UE/EEE)"]] as const).map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setTipoCliente(val)}
                    style={{
                      flex: 1,
                      padding: "12px 10px",
                      border: `1px solid ${tipoCliente === val ? "#b8964a" : "rgba(255,255,255,0.1)"}`,
                      backgroundColor: tipoCliente === val ? "rgba(184,150,74,0.15)" : "transparent",
                      color: tipoCliente === val ? "#b8964a" : "rgba(255,255,255,0.45)",
                      fontSize: "12px",
                      cursor: "pointer",
                      borderRadius: "3px",
                      transition: "all 0.2s",
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1.4,
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div>
              <label style={labelStyle}>Precio de compra (€)</label>
              <input
                type="number"
                placeholder="Ej: 350000"
                value={precioCompra}
                onChange={(e) => setPrecioCompra(e.target.value)}
                style={inputBase}
                onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.55)")}
                onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div>
              <label style={labelStyle}>Precio estimado de venta (€)</label>
              <input
                type="number"
                placeholder="Ej: 550000"
                value={precioVenta}
                onChange={(e) => setPrecioVenta(e.target.value)}
                style={inputBase}
                onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(184,150,74,0.55)")}
                onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.2)", lineHeight: 1.7 }}>
              * Estimación orientativa. Incluye gastos de venta (~2%), plusvalía municipal (~0,5%) y gastos de adquisición originales (~3%). No constituye asesoramiento fiscal.
            </p>
          </div>

          {/* ── Right: result panel ── */}
          <div style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "4px",
            padding: "36px",
            display: "flex",
            flexDirection: "column",
            minHeight: "320px",
          }}>
            {!result ? (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "16px" }}>
                <div style={{
                  width: "60px", height: "60px",
                  border: "1px solid rgba(184,150,74,0.22)",
                  borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ color: "#b8964a", fontSize: "24px", fontFamily: "'Playfair Display', serif" }}>€</span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "14px", fontWeight: 300, lineHeight: 1.6 }}>
                  Introduce los datos para<br />ver el resultado estimado
                </p>
              </div>
            ) : (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "24px" }}>
                  Desglose estimado
                </p>

                {[
                  { label: "Precio de venta",                                      value: result.precioVenta,  color: "#fff",                    prefix: "" },
                  { label: "Gastos de venta (~2%)",                                value: result.gastosVenta,  color: "rgba(255,255,255,0.45)",   prefix: "−" },
                  { label: "Plusvalía municipal (aprox.)",                         value: result.plusvalia,    color: "rgba(255,255,255,0.45)",   prefix: "−" },
                  { label: "Precio compra + gastos orig. (~3%)",                   value: result.costoBase,    color: "rgba(255,255,255,0.45)",   prefix: "−" },
                ].map(({ label, value, color, prefix }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "11px", marginBottom: "11px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>{label}</span>
                    <span style={{ fontSize: "14px", color, fontWeight: 400 }}>{prefix} {fmt(value)}</span>
                  </div>
                ))}

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "11px", marginBottom: "11px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.38)", fontWeight: 300 }}>
                    {tipoCliente === "residente" ? "IRPF sobre ganancia patrimonial" : "IRNR 19% (residentes UE)"}
                  </span>
                  <span style={{ fontSize: "14px", color: "#e88585", fontWeight: 400 }}>− {fmt(result.impuesto)}</span>
                </div>

                {/* Total */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: "14px", marginTop: "auto" }}>
                  <div>
                    <span style={{ fontSize: "13px", color: "#fff", fontWeight: 500 }}>Resultado neto estimado</span>
                    {result.ganancia > 0 && (
                      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.22)", marginTop: "4px" }}>
                        Ganancia: {fmt(result.ganancia)} · Tipo efectivo: {result.tasaEfectiva.toFixed(1)}%
                      </p>
                    )}
                  </div>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 300,
                    color: result.resultadoNeto > 0 ? "#7dd4a0" : "#e88585",
                    lineHeight: 1,
                  }}>
                    {fmt(result.resultadoNeto)}
                  </span>
                </div>

                <a
                  href="#contacto"
                  style={{
                    display: "block",
                    marginTop: "24px",
                    backgroundColor: "#b8964a",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "14px",
                    borderRadius: "2px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
                >
                  Solicitar análisis personalizado
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cbc-outer { grid-template-columns: 1fr !important; gap: 32px !important; }
          #simulador { padding: 40px 24px !important; }
        }
        @media (max-width: 480px) {
          #simulador { padding: 32px 16px !important; }
          .cbc-outer > div:last-child { padding: 24px 20px !important; }
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
        input[type=number] { -moz-appearance: textfield; }
      `}</style>
    </section>
  );
}
