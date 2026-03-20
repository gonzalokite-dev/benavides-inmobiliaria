import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertiesClient from "./PropertiesClient";
import { properties } from "@/data/properties";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "properties" });
  return {
    title: `${t("title")} · Benavides Inmobiliaria`,
  };
}

export default function PropertiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "76px", minHeight: "100vh", backgroundColor: "#fff" }}>
        <PropertiesClient properties={properties} />
      </main>
      <Footer />
    </>
  );
}
