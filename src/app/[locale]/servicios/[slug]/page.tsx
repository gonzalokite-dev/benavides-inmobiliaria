import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone, Mail } from "lucide-react";
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
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const isEs = locale === "es";

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="bg-stone-900 text-white pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-stone-400 mb-6 flex items-center gap-2">
              <Link href={`/${locale}`} className="hover:text-white transition-colors">
                {isEs ? "Inicio" : "Home"}
              </Link>
              <span>/</span>
              <Link href={`/${locale}#servicios`} className="hover:text-white transition-colors">
                {isEs ? "Servicios" : "Services"}
              </Link>
              <span>/</span>
              <span className="text-stone-300">{s.keyword}</span>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {s.h1}
            </h1>
            <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
              {s.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+34971000000"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                {isEs ? "Hablar con un asesor" : "Speak to an advisor"}
              </a>
              <a
                href={`/${locale}#contacto`}
                className="inline-flex items-center gap-2 border border-stone-500 hover:border-white text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                {isEs ? "Consulta gratuita" : "Free consultation"}
              </a>
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            {s.intro.split("\n\n").map((para, i) => (
              <p key={i} className="text-stone-700 text-lg leading-relaxed mb-6 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ── What's included ── */}
        <section className="py-16 px-6 bg-stone-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">
              {isEs ? "Qué incluye el servicio" : "What the service includes"}
            </h2>
            <p className="text-stone-500 mb-10">
              {isEs
                ? "Cada elemento forma parte de un proceso coordinado, no de servicios sueltos."
                : "Each element is part of a coordinated process, not isolated services."}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {s.includes.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <span className="text-amber-700 font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Differentiator + Who for ── */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Differentiator */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-5">
                {isEs ? "Por qué Benavides" : "Why Benavides"}
              </h2>
              <p className="text-stone-700 leading-relaxed">{s.differentiator}</p>
            </div>

            {/* Who for */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-5">
                {isEs ? "Para quién es este servicio" : "Who this service is for"}
              </h2>
              <ul className="space-y-3">
                {s.whoFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-stone-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA band ── */}
        <section className="bg-amber-500 py-12 px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-bold text-stone-900 text-xl md:text-2xl">
                {isEs
                  ? "¿Tiene dudas sobre su operación?"
                  : "Questions about your transaction?"}
              </p>
              <p className="text-stone-800 mt-1">
                {isEs
                  ? "Primera consulta gratuita. Respuesta en menos de 24 horas."
                  : "Free first consultation. We respond within 24 hours."}
              </p>
            </div>
            <a
              href={`/${locale}#contacto`}
              className="shrink-0 inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {isEs ? "Contactar ahora" : "Contact us now"}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-6 bg-white" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-3">
              {isEs ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
            <p className="text-stone-500 mb-10">
              {isEs
                ? "Respuestas directas a las dudas más habituales sobre este servicio."
                : "Direct answers to the most common questions about this service."}
            </p>
            <ServicioFAQ faqs={s.faqs} />
          </div>
        </section>

        {/* ── Related services ── */}
        {related.length > 0 && (
          <section className="py-16 px-6 bg-stone-50">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-stone-900 mb-8">
                {isEs ? "Servicios relacionados" : "Related services"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${locale}/servicios/${rel.slug}`}
                    className="group bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md hover:border-amber-300 transition-all"
                  >
                    <h3 className="font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                      {rel.keyword}
                    </h3>
                    <p className="text-stone-500 text-sm line-clamp-2">{rel.metaDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-amber-600 text-sm font-medium">
                      {isEs ? "Ver servicio" : "View service"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Final CTA ── */}
        <section className="py-20 px-6 bg-stone-900 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {isEs
                ? "Empiece con una consulta gratuita"
                : "Start with a free consultation"}
            </h2>
            <p className="text-stone-300 mb-8">
              {isEs
                ? "Sin compromiso. Le respondemos en menos de 24 horas con una valoración inicial de su caso."
                : "No commitment. We will respond within 24 hours with a preliminary assessment of your case."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${locale}#contacto`}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {isEs ? "Enviar consulta" : "Send enquiry"}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+34971000000"
                className="inline-flex items-center justify-center gap-2 border border-stone-500 hover:border-white text-white px-8 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                {isEs ? "Llamar ahora" : "Call now"}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
