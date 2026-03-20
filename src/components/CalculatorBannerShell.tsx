"use client";

import { useState, type ReactNode } from "react";

interface Props {
  label: string;
  title: string;
  desc: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function CalculatorBannerShell({ label, title, desc, icon, children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Banner strip */}
      <div style={{
        backgroundColor: "#f0ede8",
        borderTop: "1px solid #e0dbd2",
        borderBottom: open ? "none" : "1px solid #e0dbd2",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <button
            onClick={() => setOpen(!open)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0",
              background: "none",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              gap: "24px",
            }}
          >
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center", gap: "18px", minWidth: 0 }}>
              <div style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "rgba(184,150,74,0.12)",
                border: "1px solid rgba(184,150,74,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "#b8964a",
              }}>
                {icon}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "20px", flexWrap: "wrap" }}>
                <div>
                  <span style={{
                    fontSize: "9px",
                    color: "#b8964a",
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    display: "block",
                    marginBottom: "3px",
                    fontWeight: 400,
                  }}>
                    {label}
                  </span>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    color: "#1a2332",
                    fontWeight: 300,
                    lineHeight: 1.2,
                  }}>
                    {title}
                  </span>
                </div>
                <span style={{
                  fontSize: "13px",
                  color: "#9b9590",
                  fontWeight: 300,
                  display: "none",
                }}
                  className="banner-desc"
                >
                  {desc}
                </span>
              </div>
            </div>

            {/* Right CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <span style={{
                fontSize: "11px",
                color: "#b8964a",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}>
                {open ? "Cerrar" : "Abrir herramienta"}
              </span>
              <span style={{
                color: "#b8964a",
                fontSize: "16px",
                display: "block",
                transition: "transform 0.25s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                lineHeight: 1,
              }}>
                ↓
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Expandable content */}
      <div style={{
        maxHeight: open ? "3000px" : "0",
        overflow: "hidden",
        transition: "max-height 0.5s ease",
      }}>
        {children}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .banner-desc { display: block !important; }
        }
      `}</style>
    </div>
  );
}
