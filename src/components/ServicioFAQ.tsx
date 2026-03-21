"use client";

import { useState } from "react";

type FAQ = { q: string; a: string };

export default function ServicioFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2px", backgroundColor: "#e8e4de" }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ backgroundColor: open === i ? "#fff" : "#faf8f5", transition: "background-color 0.2s" }}>
          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              padding: "24px 32px",
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "#1a2332",
              lineHeight: 1.4,
            }}>
              {faq.q}
            </span>
            <span style={{
              flexShrink: 0,
              width: "24px",
              height: "24px",
              border: "1px solid #e8e4de",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#b8964a",
              fontSize: "16px",
              transition: "transform 0.2s",
              transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
            }}>
              +
            </span>
          </button>
          {open === i && (
            <div style={{
              padding: "0 32px 28px",
              borderTop: "1px solid #e8e4de",
              marginTop: "-1px",
            }}>
              <p style={{
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.9,
                color: "#5c5650",
                paddingTop: "20px",
              }}>
                {faq.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
