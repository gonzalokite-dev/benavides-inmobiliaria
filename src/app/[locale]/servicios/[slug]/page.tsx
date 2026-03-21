import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicioFAQ from "@/components/ServicioFAQ";
import { servicios, getServicio } from "@/data/servicios";

// ─── Config ───────────────────────────────────────────────────────────────────

const BASE_URL = "https://www.benavidesrealestate.es";
const locales = ["es", "en"] as const;

// ─── Static params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    servicios.map((s) => ({ locale, slug: s.slug }))
  );
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const s = getServicio(slug);
  if (!s) return {};

  const canonical = `${BASE_URL}/${locale}/servicios/${slug}`;

  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: {
      canonical,
      languages: {
        es: `${BASE_URL}/es/servicios/${slug}`,
        en: `${BASE_URL}/en/servicios/${slug}`,
        "x-default": `${BASE_URL}/es/servicios/${slug}`,
      },
    },
    openGraph: {
      title: s.metaTitle,
      description: s.metaDescription,
      url: canonical,
      siteName: "Benavides Real Estate",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_GB",
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicioPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const s = getServicio(slug);
  if (!s) notFound();

  const related = s.relatedSlugs
    .map((rs) => getServicio(rs))
    .filter(Boolean) as typeof s[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const isEs = locale === "es";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main style={{ backgroundColor: "#faf8f5", paddingTop: "76px" }}>

        {/* ── Breadcrumb ── */}
        <div style={{ backgroundColor: "#fff", borderBottom: "1px solid #e8e4de", padding: "13px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <Link href={`/${locale}`} style={{ fontSize: "12px", color: "#9b9590", textDecoration: "none" }}>
              {isEs ? "Inicio" : "Home"}
            </Link>
            <span style={{ color: "#b8964a", fontSize: "11px" }}>›</span>
            <Link href={`/${locale}#servicios`} style={{ fontSize: "12px", color: "#9b9590", textDecoration: "none" }}>
              {isEs ? "Servicios" : "Services"}
            </Link>
            <span style={{ color: "#b8964a", fontSize: "11px" }}>›</span>
            <span style={{ fontSize: "12px", color: "#1a2332", fontWeight: 400 }}>{s.keyword}</span>
          </div>
        </div>

        {/* ── Hero ── */}
        <header style={{ backgroundColor: "#1a2332", padding: "72px 24px 64px", position: "relative", overflow: "hidden" }}>
          {/* Grid decoration */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(184,150,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,74,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: "860px", margin: "0 auto", position: "relative" }}>
            {/* Category badge */}
            <span style={{
              display: "inline-block", fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#b8964a", border: "1px solid rgba(184,150,74,0.4)",
              padding: "4px 12px", borderRadius: "2px", marginBottom: "28px",
            }}>
              {isEs ? "Nuestros Servicios" : "Our Services"}
            </span>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(26px, 3.8vw, 46px)",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}>
              {s.h1}
            </h1>

            <p style={{
              fontSize: "17px", fontWeight: 300, lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              marginBottom: "40px", maxWidth: "660px",
            }}>
              {s.subtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link
                href={`/${locale}#contacto`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  backgroundColor: "#b8964a", color: "#fff",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em",
                  textTransform: "uppercase", textDecoration: "none",
                  padding: "13px 28px", transition: "background-color 0.2s",
                }}
              >
                {isEs ? "Consulta gratuita" : "Free consultation"} →
              </Link>
              <Link
                href={`/${locale}#contacto`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.8)",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em",
                  textTransform: "uppercase", textDecoration: "none",
                  padding: "13px 28px", transition: "border-color 0.2s",
                }}
              >
                {isEs ? "Hablar con un asesor" : "Speak to an advisor"}
              </Link>
            </div>
          </div>
        </header>

        {/* Gold bar */}
        <div style={{ height: "3px", backgroundColor: "#b8964a" }} />

        {/* ── Intro ── */}
        <section style={{ maxWidth: "780px", margin: "0 auto", padding: "64px 24px" }}>
          {s.intro.split("\n\n").map((para, i) => (
            <p key={i} style={{
              fontSize: "17px", fontWeight: 300, lineHeight: 2,
              color: "#4a4540", marginBottom: "24px",
            }}>
              {para}
            </p>
          ))}
        </section>

        {/* ── What's included ── */}
        <section style={{ backgroundColor: "#fff", borderTop: "1px solid #e8e4de", borderBottom: "1px solid #e8e4de", padding: "72px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ maxWidth: "640px", marginBottom: "56px" }}>
              <p style={{
                fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b8964a", marginBottom: "8px",
              }}>
                {isEs ? "Alcance del servicio" : "Service scope"}
              </p>
              <div style={{ width: "28px", height: "1px", backgroundColor: "#b8964a", marginBottom: "24px" }} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(24px, 2.8vw, 36px)",
                fontWeight: 300, color: "#1a2332", lineHeight: 1.2,
              }}>
                {isEs ? "Qué incluye el servicio" : "What the service includes"}
              </h2>
              <p style={{ fontSize: "15px", fontWeight: 300, color: "#5c5650", marginTop: "16px", lineHeight: 1.7 }}>
                {isEs
                  ? "Cada elemento forma parte de un proceso coordinado, no son servicios sueltos."
                  : "Each element is part of a coordinated process, not isolated services."}
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", backgroundColor: "#e8e4de" }} className="svc-includes-grid">
              {s.includes.map((item, i) => (
                <div key={i} style={{
                  backgroundColor: "#faf8f5", padding: "36px 32px",
                  transition: "background-color 0.2s",
                }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#faf8f5")}
                >
                  <div style={{
                    fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em",
                    color: "#b8964a", marginBottom: "16px",
                  }}>
                    0{i + 1}
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px", fontWeight: 500, color: "#1a2332",
                    marginBottom: "12px", lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", fontWeight: 300, lineHeight: 1.85, color: "#5c5650" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Differentiator + Who for ── */}
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="diff-grid">

            {/* Differentiator */}
            <div>
              <p style={{
                fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b8964a", marginBottom: "8px",
              }}>
                {isEs ? "Por qué Benavides" : "Why Benavides"}
              </p>
              <div style={{ width: "28px", height: "1px", backgroundColor: "#b8964a", marginBottom: "24px" }} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                fontWeight: 300, color: "#1a2332", lineHeight: 1.25, marginBottom: "24px",
              }}>
                {isEs ? "Lo que nos diferencia" : "What sets us apart"}
              </h2>
              <p style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.9, color: "#5c5650" }}>
                {s.differentiator}
              </p>
            </div>

            {/* Who for */}
            <div>
              <p style={{
                fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b8964a", marginBottom: "8px",
              }}>
                {isEs ? "Para quién" : "Who it's for"}
              </p>
              <div style={{ width: "28px", height: "1px", backgroundColor: "#b8964a", marginBottom: "24px" }} />
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                fontWeight: 300, color: "#1a2332", lineHeight: 1.25, marginBottom: "28px",
              }}>
                {isEs ? "Este servicio es para usted si…" : "This service is for you if…"}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {s.whoFor.map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{
                      flexShrink: 0, width: "20px", height: "20px",
                      border: "1px solid #b8964a", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#b8964a", fontSize: "10px", marginTop: "2px",
                    }}>✓</span>
                    <span style={{ fontSize: "15px", fontWeight: 300, lineHeight: 1.7, color: "#5c5650" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section style={{ backgroundColor: "#1a2332", padding: "56px 24px", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(184,150,74,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(184,150,74,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px", pointerEvents: "none",
          }} />
          <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px", position: "relative" }} className="cta-band">
            <div>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                fontWeight: 300, color: "#fff", marginBottom: "10px", lineHeight: 1.3,
              }}>
                {isEs ? "¿Tiene dudas sobre su operación?" : "Questions about your transaction?"}
              </p>
              <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>
                {isEs
                  ? "Primera consulta sin coste. Le respondemos en menos de 24 horas."
                  : "Free first consultation. We respond within 24 hours."}
              </p>
            </div>
            <Link
              href={`/${locale}#contacto`}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "#b8964a", color: "#fff",
                fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em",
                textTransform: "uppercase", textDecoration: "none",
                padding: "13px 28px",
              }}
            >
              {isEs ? "Contactar ahora" : "Contact us now"} →
            </Link>
          </div>
        </section>

        {/* Gold bar */}
        <div style={{ height: "3px", backgroundColor: "#b8964a" }} />

        {/* ── FAQ ── */}
        <section style={{ backgroundColor: "#fff", padding: "72px 24px", borderBottom: "1px solid #e8e4de" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <p style={{
              fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#b8964a", marginBottom: "8px",
            }}>
              {isEs ? "Preguntas frecuentes" : "FAQ"}
            </p>
            <div style={{ width: "28px", height: "1px", backgroundColor: "#b8964a", marginBottom: "24px" }} />
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 2.8vw, 36px)",
              fontWeight: 300, color: "#1a2332", lineHeight: 1.2, marginBottom: "12px",
            }}>
              {isEs ? "Respuestas directas a las dudas más habituales" : "Direct answers to the most common questions"}
            </h2>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "#5c5650", marginBottom: "48px", lineHeight: 1.7 }}>
              {isEs
                ? "Si tiene más preguntas, no dude en contactarnos directamente."
                : "If you have further questions, feel free to contact us directly."}
            </p>
            <ServicioFAQ faqs={s.faqs} />
          </div>
        </section>

        {/* ── Related services ── */}
        {related.length > 0 && (
          <section style={{ backgroundColor: "#faf8f5", padding: "72px 24px" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <p style={{
                fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#b8964a", marginBottom: "8px",
              }}>
                {isEs ? "Servicios relacionados" : "Related services"}
              </p>
              <div style={{ width: "28px", height: "1px", backgroundColor: "#b8964a", marginBottom: "48px" }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", backgroundColor: "#e8e4de" }} className="related-svc-grid">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/servicios/${rel.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{
                      backgroundColor: "#faf8f5", padding: "40px 32px",
                      display: "flex", flexDirection: "column", height: "100%",
                      transition: "background-color 0.2s",
                    }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#fff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = "#faf8f5")}
                    >
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "20px", fontWeight: 500, color: "#1a2332",
                        marginBottom: "12px", lineHeight: 1.3,
                      }}>
                        {rel.keyword}
                      </h3>
                      <p style={{
                        fontSize: "13px", fontWeight: 300, lineHeight: 1.85,
                        color: "#5c5650", flex: 1,
                      }}>
                        {rel.metaDescription}
                      </p>
                      <span style={{
                        marginTop: "20px", fontSize: "11px", fontWeight: 500,
                        letterSpacing: "0.1em", textTransform: "uppercase", color: "#b8964a",
                      }}>
                        {isEs ? "Ver servicio" : "View service"} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Final CTA ── */}
        <section style={{ backgroundColor: "#fff", borderTop: "1px solid #e8e4de", padding: "80px 24px" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#b8964a", marginBottom: "8px",
            }}>
              {isEs ? "Siguiente paso" : "Next step"}
            </p>
            <div style={{ width: "28px", height: "1px", backgroundColor: "#b8964a", margin: "0 auto 28px" }} />
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 300, color: "#1a2332", lineHeight: 1.2, marginBottom: "20px",
            }}>
              {isEs ? "Empiece con una consulta gratuita" : "Start with a free consultation"}
            </h2>
            <p style={{ fontSize: "15px", fontWeight: 300, color: "#5c5650", lineHeight: 1.8, marginBottom: "40px" }}>
              {isEs
                ? "Sin compromiso. Le respondemos en menos de 24 horas con una valoración inicial de su caso."
                : "No commitment. We will respond within 24 hours with a preliminary assessment of your case."}
            </p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href={`/${locale}#contacto`}
                style={{
                  display: "inline-flex", alignItems: "center",
                  backgroundColor: "#1a2332", color: "#fff",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em",
                  textTransform: "uppercase", textDecoration: "none",
                  padding: "14px 32px", transition: "background-color 0.2s",
                }}
              >
                {isEs ? "Enviar consulta" : "Send enquiry"} →
              </Link>
              <Link
                href={`/${locale}#contacto`}
                style={{
                  display: "inline-flex", alignItems: "center",
                  border: "1px solid #e8e4de", color: "#1a2332",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em",
                  textTransform: "uppercase", textDecoration: "none",
                  padding: "14px 32px", transition: "border-color 0.2s",
                }}
              >
                {isEs ? "Hablar con un asesor" : "Speak to an advisor"}
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />

      <style>{`
        @media (max-width: 960px) {
          .svc-includes-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .related-svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .diff-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          .svc-includes-grid { grid-template-columns: 1fr !important; }
          .related-svc-grid { grid-template-columns: 1fr !important; }
          .cta-band { align-items: stretch !important; }
        }
      `}</style>
    </>
  );
}
