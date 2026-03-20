import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPropertyBySlug, properties } from "@/data/properties";
import PropertyDetail from "./PropertyDetail";

export async function generateStaticParams() {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    properties.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  const info = property.translations[locale as "es" | "en"];
  return {
    title: `${info.title} · Benavides Inmobiliaria`,
    description: info.description.slice(0, 150),
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "72px", minHeight: "100vh", backgroundColor: "#0d1b2a" }}>
        <PropertyDetail property={property} />
      </main>
      <Footer />
    </>
  );
}
