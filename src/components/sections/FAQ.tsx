"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Qué impuestos hay que pagar al vender una propiedad en Mallorca?",
    a: "La fiscalidad de la venta depende principalmente de tu situación de residencia. Un residente fiscal en España tributa la ganancia patrimonial en su IRPF (entre el 19% y el 28% según el importe). Un no residente paga el Impuesto sobre la Renta de No Residentes (IRNR) al 19% si es residente de la UE/EEE, o al 24% si es de otro país, además de la Plusvalía Municipal en ambos casos. Nuestro equipo analiza tu situación concreta para optimizar la tributación dentro del marco legal vigente.",
  },
  {
    q: "¿Cómo se calcula la ganancia patrimonial en la venta de un inmueble?",
    a: "La ganancia patrimonial se calcula como la diferencia entre el valor de transmisión (precio de venta menos gastos de la operación) y el valor de adquisición (precio de compra más gastos e impuestos pagados en su día). Es fundamental documentar correctamente todos los gastos de adquisición, mejoras realizadas y gastos de venta para reducir la base imponible. En Benavides Real Estate te ayudamos a hacer esta simulación antes de la venta para que conozcas el resultado neto real.",
  },
  {
    q: "¿Puedo gestionar la venta sin desplazarme a Mallorca?",
    a: "Sí. Si vives fuera de Mallorca —ya sea en otra ciudad española o en el extranjero— puedes gestionar toda la operación de forma remota otorgando un poder notarial a un representante que actúe en tu nombre. Nosotros coordinamos todos los trámites: negociación con compradores, firma de contratos, notaría, gestión de impuestos y tramitación registral. Todo con total seguridad jurídica.",
  },
  {
    q: "¿Qué documentación necesito para vender mi propiedad en Mallorca?",
    a: "La documentación básica incluye: escritura de propiedad original, DNI o pasaporte en vigor, NIE (si eres extranjero), certificado de deuda cero de la comunidad de propietarios, recibo del IBI del último año, certificado energético del inmueble y, si hay hipoteca, certificado de saldo pendiente. Nuestro equipo te guía en la preparación de toda la documentación y gestiona cualquier trámite pendiente.",
  },
  {
    q: "¿Cuánto tiempo puede tardar el proceso de venta?",
    a: "El tiempo medio de una operación de compraventa en Mallorca puede variar entre 3 y 9 meses, dependiendo del precio, la demanda del mercado y la complejidad fiscal y jurídica de la operación. Con una estrategia de precio y comercialización adecuada, y la documentación preparada desde el inicio, es posible reducir significativamente los plazos. Desde Benavides Real Estate trabajamos para que el proceso sea lo más ágil y seguro posible.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section id="faq" style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8964a",
            marginBottom: "14px",
          }}>
            Preguntas frecuentes
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(24px, 3vw, 38px)",
            fontWeight: 300,
            color: "#1a2332",
            lineHeight: 1.2,
          }}>
            Preguntas frecuentes sobre comprar y vender una propiedad en Mallorca
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{
                borderBottom: "1px solid #e8e4de",
              }}>
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "28px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1a2332",
                    lineHeight: 1.4,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    border: "1px solid #b8964a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#b8964a",
                    fontSize: "18px",
                    fontWeight: 300,
                    lineHeight: 1,
                    transition: "background-color 0.2s",
                    backgroundColor: isOpen ? "#b8964a" : "transparent",
                  }}>
                    <span style={{
                      color: isOpen ? "#fff" : "#b8964a",
                      fontWeight: 300,
                      fontSize: "20px",
                      lineHeight: "1",
                      display: "block",
                      marginTop: "-1px",
                    }}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>
                <div style={{
                  maxHeight: isOpen ? "600px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}>
                  <p style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.9,
                    color: "#5c5650",
                    paddingBottom: "28px",
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
