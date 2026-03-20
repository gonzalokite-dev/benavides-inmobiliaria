"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

type Answers = Record<number, string>;

type DiagResult = {
  badge: string;
  title: string;
  desc: string;
  alert: string;
  color: string;
  urgency: "alta" | "media" | "baja";
};

const urgencyColors: Record<string, string> = {
  alta: "#e88585",
  media: "#b8964a",
  baja: "#7dd4a0",
};

export default function TaxDiagnostic() {
  const locale = useLocale();
  const isEn = locale === "en";
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4 | 5 | 6>(0);
  const [answers, setAnswers] = useState<Answers>({});

  const content = {
    es: {
      leftEyebrow: "Diagnóstico fiscal gratuito",
      leftTitle: "¿Cuánto pagarás a Hacienda cuando vendas?",
      leftBody: "Responde 5 preguntas rápidas y recibe un diagnóstico orientativo sobre tu situación fiscal como vendedor. Sin registrarse ni comprometerte.",
      leftItems: [
        "Detecta si tienes exenciones aplicables",
        "Entiende qué impuestos pagarás",
        "Identifica oportunidades de ahorro fiscal",
      ],
      introTitle: "Diagnóstico fiscal en 5 preguntas",
      introSub: "Tiempo estimado: 2 minutos. Resultado inmediato y orientativo.",
      startBtn: "Iniciar diagnóstico →",
      progressLabel: (step: number, total: number) => `Pregunta ${step} de ${total}`,
      advisorBtn: "Hablar con un asesor fiscal",
      restartBtn: "Reiniciar diagnóstico",
      questions: [
        {
          id: 1,
          question: "¿Cuál es tu situación de residencia fiscal?",
          options: [
            { value: "residente-es", label: "Residente fiscal en España" },
            { value: "residente-ue", label: "Residente en la UE o EEE (no España)" },
            { value: "no-residente", label: "Residente fuera de la UE" },
          ],
        },
        {
          id: 2,
          question: "¿Ha sido esta propiedad tu vivienda habitual en España?",
          options: [
            { value: "si", label: "Sí, ha sido mi residencia habitual" },
            { value: "no", label: "No — segunda residencia o inversión" },
          ],
        },
        {
          id: 3,
          question: "¿Cuántos años llevas siendo propietario del inmueble?",
          options: [
            { value: "menos2", label: "Menos de 2 años" },
            { value: "2a5", label: "Entre 2 y 5 años" },
            { value: "5a10", label: "Entre 5 y 10 años" },
            { value: "mas10", label: "Más de 10 años" },
          ],
        },
        {
          id: 4,
          question: "¿Tienes más de 65 años?",
          options: [
            { value: "si", label: "Sí" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: 5,
          question: "¿Planeas reinvertir el dinero de la venta en otra vivienda habitual?",
          options: [
            { value: "si", label: "Sí, en los próximos 2 años" },
            { value: "no", label: "No tengo pensado reinvertir" },
            { value: "ns", label: "Todavía no lo sé" },
          ],
        },
      ],
      getResult: (answers: Answers): DiagResult => {
        const res = answers[1];
        const habitual = answers[2] === "si";
        const years = answers[3];
        const over65 = answers[4] === "si";
        const reinvierte = answers[5] === "si";

        if (res === "no-residente") {
          return {
            badge: "Atención",
            title: "No residente fuera de la UE — tributación al 24%",
            desc: "Como no residente fuera de la Unión Europea, la ganancia patrimonial tributa al 24% en el IRNR. El comprador está obligado a retener el 3% del precio de venta como pago a cuenta. La planificación anticipada puede marcar diferencias significativas en el resultado final.",
            alert: "Verifica si existe un Convenio de Doble Imposición entre España y tu país de residencia. En muchos casos puede reducirse la carga fiscal de forma considerable.",
            color: "#e88585",
            urgency: "alta",
          };
        }
        if (res === "residente-ue") {
          return {
            badge: "Revisar",
            title: "Residente en la UE — tipo reducido del 19%",
            desc: "Como residente en otro país de la UE o EEE, tributarás al 19% sobre la ganancia patrimonial (IRNR). El comprador retendrá el 3% del precio como pago a cuenta. Puedes solicitar la devolución del exceso retenido una vez presentada la declaración.",
            alert: "Aunque el tipo es favorable, la declaración y la recuperación de la retención requieren gestión activa. Te recomendamos apoyo profesional para optimizar la operación.",
            color: "#b8964a",
            urgency: "media",
          };
        }
        if (habitual && over65) {
          return {
            badge: "Muy favorable",
            title: "Posible exención total — mayor de 65 años con vivienda habitual",
            desc: "Como residente mayor de 65 años que vende su vivienda habitual, podrías estar completamente exento del IRPF sobre la ganancia patrimonial. Esta es una de las situaciones fiscalmente más ventajosas.",
            alert: "Es imprescindible verificar que la propiedad cumple los requisitos de vivienda habitual exigidos por Hacienda (residencia efectiva al menos 3 años). Te ayudamos a confirmar tu situación.",
            color: "#7dd4a0",
            urgency: "baja",
          };
        }
        if (habitual && reinvierte) {
          return {
            badge: "Favorable",
            title: "Posible exención por reinversión en vivienda habitual",
            desc: "Si reinviertes el importe obtenido en otra vivienda habitual en un plazo de 2 años (antes o después de la venta), puedes acogerte a la exención por reinversión y no pagar IRPF por la ganancia.",
            alert: "La exención requiere que reinviertes el total del importe de transmisión, no solo la ganancia. Una planificación adecuada evita errores que supondrían perder esta ventaja fiscal.",
            color: "#7dd4a0",
            urgency: "media",
          };
        }
        if (!habitual && years === "mas10") {
          return {
            badge: "Planificable",
            title: "Segunda residencia de más de 10 años — tributación IRPF",
            desc: "Al tratarse de una segunda residencia, tributarás por la ganancia en el IRPF (escala del 19 al 26%). Sin embargo, con más de 10 años de propiedad, los gastos documentados de adquisición y mejora pueden reducir significativamente la base imponible.",
            alert: "Documenta todos los gastos de compra original, reformas y mejoras. Cada euro justificado reduce la ganancia imponible y, por tanto, los impuestos a pagar.",
            color: "#b8964a",
            urgency: "media",
          };
        }
        return {
          badge: "Análisis recomendado",
          title: "Tu situación requiere un análisis personalizado",
          desc: "Basándonos en tus respuestas, tu caso tiene particularidades fiscales que merecen ser revisadas en detalle. Existen posibles estrategias de optimización que solo se pueden identificar con un análisis completo de tu situación.",
          alert: "Una consulta de 30 minutos con nuestro equipo fiscal puede ahorrarte miles de euros en impuestos. Primera consulta sin coste.",
          color: "#b8964a",
          urgency: "media",
        };
      },
    },
    en: {
      leftEyebrow: "Free tax diagnostic",
      leftTitle: "How much will you pay in taxes when you sell?",
      leftBody: "Answer 5 quick questions and receive an indicative diagnosis of your tax situation as a seller. No registration or commitment required.",
      leftItems: [
        "Find out if you qualify for any exemptions",
        "Understand what taxes you will pay",
        "Identify tax saving opportunities",
      ],
      introTitle: "Tax diagnosis in 5 questions",
      introSub: "Estimated time: 2 minutes. Immediate and indicative result.",
      startBtn: "Start diagnosis →",
      progressLabel: (step: number, total: number) => `Question ${step} of ${total}`,
      advisorBtn: "Speak with a tax advisor",
      restartBtn: "Restart diagnosis",
      questions: [
        {
          id: 1,
          question: "What is your tax residence situation?",
          options: [
            { value: "residente-es", label: "Tax resident in Spain" },
            { value: "residente-ue", label: "Resident in the EU or EEA (not Spain)" },
            { value: "no-residente", label: "Resident outside the EU" },
          ],
        },
        {
          id: 2,
          question: "Has this property been your primary residence in Spain?",
          options: [
            { value: "si", label: "Yes, it has been my primary residence" },
            { value: "no", label: "No — second home or investment" },
          ],
        },
        {
          id: 3,
          question: "How many years have you owned the property?",
          options: [
            { value: "menos2", label: "Less than 2 years" },
            { value: "2a5", label: "Between 2 and 5 years" },
            { value: "5a10", label: "Between 5 and 10 years" },
            { value: "mas10", label: "More than 10 years" },
          ],
        },
        {
          id: 4,
          question: "Are you over 65 years old?",
          options: [
            { value: "si", label: "Yes" },
            { value: "no", label: "No" },
          ],
        },
        {
          id: 5,
          question: "Do you plan to reinvest the proceeds in another primary residence?",
          options: [
            { value: "si", label: "Yes, within the next 2 years" },
            { value: "no", label: "No, I do not plan to reinvest" },
            { value: "ns", label: "I am not sure yet" },
          ],
        },
      ],
      getResult: (answers: Answers): DiagResult => {
        const res = answers[1];
        const habitual = answers[2] === "si";
        const years = answers[3];
        const over65 = answers[4] === "si";
        const reinvierte = answers[5] === "si";

        if (res === "no-residente") {
          return {
            badge: "Attention",
            title: "Non-resident outside the EU — taxed at 24%",
            desc: "As a non-resident outside the European Union, your capital gain is taxed at 24% under IRNR. The buyer is required to withhold 3% of the sale price as a payment on account. Early planning can make a significant difference to your final result.",
            alert: "Check whether a Double Taxation Treaty exists between Spain and your country of residence. In many cases, this can considerably reduce your tax burden.",
            color: "#e88585",
            urgency: "alta",
          };
        }
        if (res === "residente-ue") {
          return {
            badge: "Review",
            title: "EU resident — reduced rate of 19%",
            desc: "As a resident of another EU or EEA country, your capital gain is taxed at 19% under IRNR. The buyer will withhold 3% of the price as a payment on account. You can apply for a refund of any excess withheld once the tax return has been filed.",
            alert: "Although the rate is favourable, filing the tax return and recovering the withholding require active management. We recommend professional support to optimise the transaction.",
            color: "#b8964a",
            urgency: "media",
          };
        }
        if (habitual && over65) {
          return {
            badge: "Very favourable",
            title: "Possible full exemption — over 65 with primary residence",
            desc: "As a resident over 65 selling your primary residence, you may be fully exempt from IRPF on the capital gain. This is one of the most tax-advantageous situations.",
            alert: "It is essential to verify that the property meets the primary residence requirements set by the Spanish Tax Agency (effective residence for at least 3 years). We can help you confirm your situation.",
            color: "#7dd4a0",
            urgency: "baja",
          };
        }
        if (habitual && reinvierte) {
          return {
            badge: "Favourable",
            title: "Possible exemption by reinvestment in primary residence",
            desc: "If you reinvest the proceeds in another primary residence within 2 years (before or after the sale), you can benefit from the reinvestment exemption and pay no IRPF on the gain.",
            alert: "The exemption requires you to reinvest the full sale proceeds, not just the gain. Proper planning avoids mistakes that would result in losing this tax advantage.",
            color: "#7dd4a0",
            urgency: "media",
          };
        }
        if (!habitual && years === "mas10") {
          return {
            badge: "Plannable",
            title: "Second home held over 10 years — IRPF taxation",
            desc: "As this is a second home, you will pay IRPF on the gain (scale from 19% to 26%). However, with over 10 years of ownership, documented acquisition and improvement costs can significantly reduce the taxable base.",
            alert: "Document all original purchase costs, refurbishments and improvements. Every justified euro reduces the taxable gain and therefore the taxes payable.",
            color: "#b8964a",
            urgency: "media",
          };
        }
        return {
          badge: "Analysis recommended",
          title: "Your situation requires a personalised analysis",
          desc: "Based on your answers, your case has tax specificities that deserve a detailed review. There are potential optimisation strategies that can only be identified with a full analysis of your situation.",
          alert: "A 30-minute consultation with our tax team could save you thousands of euros in taxes. First consultation at no cost.",
          color: "#b8964a",
          urgency: "media",
        };
      },
    },
  };

  const l = content[locale as "es" | "en"] ?? content.es;
  const isIntro = step === 0;
  const isResult = step === 6;
  const currentQ = l.questions[step - 1];
  const progress = step === 0 ? 0 : (step / l.questions.length) * 100;
  const result = isResult ? l.getResult(answers) : null;

  function handleAnswer(value: string) {
    const newAnswers = { ...answers, [step]: value };
    setAnswers(newAnswers);
    if (step < l.questions.length) {
      setStep((step + 1) as typeof step);
    } else {
      setStep(6);
    }
  }

  return (
    <section id="diagnostico" style={{ backgroundColor: "#fff", padding: "60px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }} className="diag-grid">

          {/* Left column */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "#b8964a", marginBottom: "14px" }}>
              {l.leftEyebrow}
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 300, color: "#1a2332", lineHeight: 1.15, marginBottom: "20px" }}>
              {l.leftTitle}
            </h2>
            <div style={{ width: "32px", height: "1px", backgroundColor: "#b8964a", marginBottom: "24px" }} />
            <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#5c5650", marginBottom: "32px" }}>
              {l.leftBody}
            </p>
            {l.leftItems.map((item) => (
              <div key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "14px" }}>
                <div style={{ width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "rgba(184,150,74,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <span style={{ color: "#b8964a", fontSize: "10px", fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontSize: "14px", color: "#5c5650", fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right: quiz card */}
          <div style={{ backgroundColor: "#faf8f5", border: "1px solid #e8e4de", borderRadius: "4px", overflow: "hidden" }}>

            {/* Progress bar */}
            {!isIntro && !isResult && (
              <div style={{ height: "3px", backgroundColor: "#e8e4de" }}>
                <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "#b8964a", transition: "width 0.35s ease" }} />
              </div>
            )}

            <div style={{ padding: "40px" }}>

              {/* Intro */}
              {isIntro && (
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: "68px", height: "68px", borderRadius: "50%", backgroundColor: "rgba(184,150,74,0.1)", border: "1px solid rgba(184,150,74,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", fontSize: "28px" }}>
                    🔍
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 400, color: "#1a2332", marginBottom: "12px" }}>
                    {l.introTitle}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#9b9590", fontWeight: 300, lineHeight: 1.75, marginBottom: "28px" }}>
                    {l.introSub}
                  </p>
                  <button
                    onClick={() => setStep(1)}
                    style={{ width: "100%", backgroundColor: "#1a2332", color: "#fff", border: "none", padding: "16px", borderRadius: "2px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.startBtn}
                  </button>
                </div>
              )}

              {/* Questions */}
              {!isIntro && !isResult && currentQ && (
                <div>
                  <p style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9b9590", marginBottom: "20px" }}>
                    {l.progressLabel(step, l.questions.length)}
                  </p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332", lineHeight: 1.3, marginBottom: "28px" }}>
                    {currentQ.question}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {currentQ.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(opt.value)}
                        style={{ padding: "16px 20px", border: "1px solid #e8e4de", borderRadius: "3px", backgroundColor: "#fff", textAlign: "left", fontSize: "14px", color: "#1a2332", cursor: "pointer", transition: "all 0.15s", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "#b8964a";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(184,150,74,0.04)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "#e8e4de";
                          (e.currentTarget as HTMLElement).style.backgroundColor = "#fff";
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Result */}
              {isResult && result && (
                <div>
                  <div style={{ display: "inline-block", backgroundColor: `${urgencyColors[result.urgency]}18`, border: `1px solid ${urgencyColors[result.urgency]}40`, borderRadius: "20px", padding: "4px 14px", marginBottom: "20px" }}>
                    <span style={{ fontSize: "11px", color: urgencyColors[result.urgency], fontWeight: 500, letterSpacing: "0.06em" }}>{result.badge}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 400, color: "#1a2332", marginBottom: "16px", lineHeight: 1.3 }}>
                    {result.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#5c5650", lineHeight: 1.85, fontWeight: 300, marginBottom: "18px" }}>
                    {result.desc}
                  </p>
                  <div style={{ backgroundColor: `${urgencyColors[result.urgency]}0e`, border: `1px solid ${urgencyColors[result.urgency]}28`, borderRadius: "3px", padding: "16px", marginBottom: "24px" }}>
                    <p style={{ fontSize: "13px", color: "#5c5650", lineHeight: 1.75, fontWeight: 300 }}>
                      💡 {result.alert}
                    </p>
                  </div>
                  <a
                    href="https://cal.com/benavides-asociados/consulta-asesor-fiscal"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", backgroundColor: "#b8964a", color: "#fff", textDecoration: "none", padding: "14px", borderRadius: "2px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center", marginBottom: "10px", transition: "background-color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#d4af6e")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#b8964a")}
                  >
                    {l.advisorBtn}
                  </a>
                  <button
                    onClick={() => { setStep(0); setAnswers({}); }}
                    style={{ width: "100%", background: "none", border: "none", fontSize: "12px", color: "#9b9590", cursor: "pointer", padding: "8px", fontFamily: "'Inter', sans-serif" }}
                  >
                    {l.restartBtn}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .diag-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          #diagnostico { padding: 48px 24px !important; }
        }
        @media (max-width: 480px) {
          #diagnostico { padding: 40px 16px !important; }
          .diag-grid > div:last-child > div { padding: 24px 20px !important; }
        }
      `}</style>
    </section>
  );
}
