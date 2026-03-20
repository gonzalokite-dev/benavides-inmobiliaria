import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: "Inmobiliaria para no residentes en Mallorca | Benavides Real Estate",
  description:
    "Vendemos tu propiedad en Mallorca con seguridad jurídica y optimización fiscal. Especialistas en no residentes. Asesoramiento integral inmobiliario, legal y fiscal.",
  metadataBase: new URL("https://www.benavidesrealestate.com"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ backgroundColor: "#fff", color: "#1a2332" }}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
